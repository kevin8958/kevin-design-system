import { forwardRef, useId } from 'react';
import { cva } from 'class-variance-authority';
import classNames from 'classnames';

const textareaVariants = cva(
  [
    'form-control box-border w-full rounded-lg border border-neutral-300 bg-white text-neutral-700 shadow-sm outline-0 transition-all duration-200 ease-in-out placeholder:text-neutral-800/30 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:placeholder:text-neutral-100/30',
    'hover:bg-neutral-50 dark:hover:bg-neutral-800',
  ].join(' '),
  {
    variants: {
      size: {
        sm: 'min-h-[96px] px-3 py-2 text-sm',
        md: 'min-h-[120px] px-3.5 py-2.5 text-sm',
        lg: 'min-h-[148px] px-4 py-3 text-base',
      },
      error: {
        true: '!border-danger focus:ring-1 focus:ring-danger dark:focus:ring-danger',
        false: '',
      },
      focusColor: {
        primary: '',
        neutral: '',
        info: '',
        success: '',
        warning: '',
        danger: '',
      },
      disabled: {
        true: 'cursor-not-allowed bg-neutral-100/10 !text-[#8C9097]',
        false: '',
      },
      resize: {
        none: 'resize-none',
        vertical: 'resize-y',
        both: 'resize',
      },
    },
    compoundVariants: [
      {
        error: false,
        focusColor: 'primary',
        className:
          'focus:border-secondary-400/70 dark:focus:border-primary-100/70 focus:ring-1 focus:ring-secondary-700 dark:focus:ring-primary-100',
      },
      {
        error: false,
        focusColor: 'neutral',
        className:
          'focus:border-neutral-500/70 dark:focus:border-neutral-300/70 focus:ring-1 focus:ring-neutral-700 dark:focus:ring-neutral-300',
      },
      {
        error: false,
        focusColor: 'info',
        className: 'focus:border-info/70 focus:ring-1 focus:ring-info',
      },
      {
        error: false,
        focusColor: 'success',
        className: 'focus:border-success/70 focus:ring-1 focus:ring-success',
      },
      {
        error: false,
        focusColor: 'warning',
        className: 'focus:border-warning/70 focus:ring-1 focus:ring-warning',
      },
      {
        error: false,
        focusColor: 'danger',
        className:
          'focus:border-danger/70 focus:ring-1 focus:ring-danger dark:focus:ring-danger',
      },
    ],
    defaultVariants: {
      size: 'md',
      error: false,
      focusColor: 'primary',
      disabled: false,
      resize: 'none',
    },
  },
);

const Textarea = forwardRef<HTMLTextAreaElement, Input.TextareaProps>(
  (props, ref) => {
    const {
      label,
      placeholder,
      id: externalId,
      classes,
      value,
      size = 'md',
      rows = 4,
      maxLength,
      required = false,
      disabled = false,
      error = false,
      errorMsg,
      focusColor = 'primary',
      resize = 'none',
      autoFocus,
      textareaProps,
      onChange,
      onFocus,
      onBlur,
    } = props;

    const internalId = useId();
    const id = externalId || internalId;
    const errorId = `${id}-error`;

    return (
      <div className="relative w-full">
        {label && (
          <label
            htmlFor={id}
            onClick={(e) => e.preventDefault()}
            className={classNames(
              'relative mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-100',
              required &&
                "after:ml-1 after:text-[#FF3535] after:content-['*'] after:text-lg",
            )}
          >
            {label}
          </label>
        )}

        <textarea
          {...textareaProps}
          ref={ref}
          id={id}
          value={value}
          rows={rows}
          maxLength={maxLength}
          autoFocus={autoFocus}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className={classNames(
            textareaVariants({ size, error, focusColor, disabled, resize }),
            classes,
          )}
          aria-invalid={error}
          aria-describedby={error ? errorId : undefined}
        />

        {error && errorMsg && (
          <p id={errorId} className="mt-2 text-xs text-danger">
            {errorMsg}
          </p>
        )}
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';

export default Textarea;
