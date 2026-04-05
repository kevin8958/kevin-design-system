import { forwardRef, useId, useRef, useState } from 'react';
import { cva } from 'class-variance-authority';
import classNames from 'classnames';
import { LuFiles, LuUpload, LuX } from 'react-icons/lu';
import Button from '@/components/action/Button';

const dropzoneVariants = cva(
  'relative flex w-full flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed bg-white px-5 py-6 text-center transition-all duration-200 ease-in-out dark:bg-neutral-900 min-h-[208px]',
  {
    variants: {
      state: {
        default:
          'border-neutral-300 hover:border-secondary-400 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:border-primary-400 dark:hover:bg-neutral-800/60',
        drag:
          'border-secondary-500 bg-secondary-50 dark:border-primary-400 dark:bg-neutral-800',
        invalid:
          'border-danger bg-danger/5 hover:border-danger dark:border-danger',
        disabled:
          'cursor-not-allowed border-neutral-200 bg-neutral-50 text-neutral-400 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-500',
      },
    },
    defaultVariants: {
      state: 'default',
    },
  },
);

const iconContainerVariants = cva(
  'flex items-center justify-center rounded-full border',
  {
    variants: {
      state: {
        default:
          'border-neutral-200 bg-neutral-100 text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300',
        drag:
          'border-secondary-200 bg-secondary-100 text-secondary-700 dark:border-primary-500/40 dark:bg-primary-500/15 dark:text-primary-300',
        invalid:
          'border-danger/20 bg-danger/10 text-danger',
        disabled:
          'border-neutral-200 bg-neutral-100 text-neutral-400 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-500',
      },
    },
    defaultVariants: {
      state: 'default',
    },
  },
);

const formatFileSize = (size: number) => {
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
};

const UploadDropzone = forwardRef<HTMLInputElement, Input.UploadDropzoneProps>(
  (props, ref) => {
    const {
      label,
      description,
      helperText,
      classes,
      accept,
      multiple = true,
      disabled = false,
      invalid = false,
      errorMsg,
      files = [],
      maxFiles,
      onChange,
    } = props;

    const inputId = useId();
    const internalRef = useRef<HTMLInputElement | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const setInputRef = (node: HTMLInputElement | null) => {
      internalRef.current = node;

      if (!ref) return;

      if (typeof ref === 'function') {
        ref(node);
        return;
      }

      ref.current = node;
    };

    const normalizeFiles = (nextFiles: File[]) => {
      const limitedFiles = multiple ? nextFiles : nextFiles.slice(0, 1);
      return maxFiles ? limitedFiles.slice(0, maxFiles) : limitedFiles;
    };

    const handleFiles = (nextFiles: File[]) => {
      onChange?.(normalizeFiles(nextFiles));
    };

    const openFileDialog = () => {
      if (disabled) return;
      internalRef.current?.click();
    };

    const currentState = disabled
      ? 'disabled'
      : invalid
        ? 'invalid'
        : isDragging
          ? 'drag'
          : 'default';

    return (
      <div className={classNames('w-full', classes)}>
        {(label || description) && (
          <div className="mb-3 flex flex-col gap-1">
            {label && (
              <label
                htmlFor={inputId}
                className="text-sm font-semibold text-neutral-700 dark:text-neutral-100"
              >
                {label}
              </label>
            )}
            {description && (
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {description}
              </p>
            )}
          </div>
        )}

        <input
          ref={setInputRef}
          id={inputId}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          className="sr-only"
          onChange={(event) => {
            const nextFiles = Array.from(event.target.files ?? []);
            handleFiles(nextFiles);
            event.target.value = '';
          }}
        />

        <div
          role="button"
          tabIndex={disabled ? -1 : 0}
          aria-disabled={disabled}
          aria-label={label || 'Upload files'}
          onClick={openFileDialog}
          onKeyDown={(event) => {
            if (disabled) return;
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              openFileDialog();
            }
          }}
          onDragEnter={(event) => {
            event.preventDefault();
            if (!disabled) setIsDragging(true);
          }}
          onDragOver={(event) => {
            event.preventDefault();
            if (!disabled) setIsDragging(true);
          }}
          onDragLeave={(event) => {
            event.preventDefault();
            if (event.currentTarget.contains(event.relatedTarget as Node | null))
              return;
            setIsDragging(false);
          }}
          onDrop={(event) => {
            event.preventDefault();
            if (disabled) return;
            setIsDragging(false);
            handleFiles(Array.from(event.dataTransfer.files ?? []));
          }}
          className={dropzoneVariants({ state: currentState })}
        >
          <div
            className={classNames(
              'size-12 text-xl',
              iconContainerVariants({ state: currentState }),
            )}
          >
            {files.length > 0 ? <LuFiles /> : <LuUpload />}
          </div>

          <div className="flex flex-col gap-1">
            <p
              className={classNames(
                'text-base font-semibold text-neutral-800 dark:text-neutral-100',
                disabled && 'text-neutral-400 dark:text-neutral-500',
              )}
            >
              {files.length > 0
                ? `${files.length} file${files.length > 1 ? 's' : ''} selected`
                : multiple
                  ? 'Drag files here or browse'
                  : 'Drag file here or browse'}
            </p>
            <p
              className={classNames(
                'text-sm text-neutral-500 dark:text-neutral-400',
                disabled && 'text-neutral-400 dark:text-neutral-500',
              )}
            >
              {helperText ||
                (multiple
                  ? 'Drop one or more files, or click to choose from your device.'
                  : 'Drop a file, or click to choose from your device.')}
            </p>
            {accept && (
              <p className="text-xs text-neutral-400 dark:text-neutral-500">
                Accepted: {accept}
              </p>
            )}
          </div>

          <Button
            type="button"
            variant="outline"
            color="neutral"
            size="sm"
            disabled={disabled}
            onClick={(event) => {
              event.stopPropagation();
              openFileDialog();
            }}
          >
            Browse Files
          </Button>
        </div>

        {files.length > 0 && (
          <div className="mt-3 flex flex-col gap-2">
            {files.map((file, index) => (
              <div
                key={`${file.name}-${index}`}
                className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-neutral-700 dark:text-neutral-100">
                    {file.name}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {formatFileSize(file.size)}
                  </p>
                </div>
                <Button
                  type="button"
                  variant="clear"
                  color="neutral"
                  size="sm"
                  aria-label={`Remove ${file.name}`}
                  disabled={disabled}
                  classes="!p-2"
                  onClick={() => {
                    handleFiles(files.filter((_, fileIndex) => fileIndex !== index));
                  }}
                >
                  <LuX size={16} />
                </Button>
              </div>
            ))}
          </div>
        )}

        {invalid && errorMsg && (
          <p className="mt-2 text-xs font-medium text-danger">{errorMsg}</p>
        )}
      </div>
    );
  },
);

UploadDropzone.displayName = 'UploadDropzone';

export default UploadDropzone;
