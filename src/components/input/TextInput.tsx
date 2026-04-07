import { forwardRef, useId } from 'react';
import { cva } from 'class-variance-authority';
import classNames from 'classnames';

const inputVariants = cva(
  [
    'form-control rounded-lg box-border w-full overflow-hidden border border-neutral-300 text-neutral-700 dark:border-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-900 p-2 !text-base text-ellipsis outline-0 transition-all duration-200 ease-in-out placeholder:text-neutral-800/30 dark:placeholder:text-neutral-100/30',
    'autofill:shadow-[0_0_0_1000px_white_inset] dark:autofill:shadow-[0_0_0_1000px_#121627_inset]',
    'autofill:text-neutral-700 dark:autofill:text-neutral-300',
    '[&:-webkit-autofill]:shadow-[0_0_0_1000px_white_inset] dark:[&:-webkit-autofill]:shadow-[0_0_0_1000px_#121627_inset]',
    '[&:-webkit-autofill]:[-webkit-text-fill-color:#404040] dark:[&:-webkit-autofill]:[-webkit-text-fill-color:#d4d4d4]',
    '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
  ].join(' '),
  {
    variants: {
      size: {
        sm: 'h-[36px] max-h-[36px]',
        md: 'h-[42px] max-h-[42px]',
        lg: 'h-[48px] max-h-[48px]',
      },
      error: {
        true: '!border-danger focus:ring-1 focus:ring-danger dark:focus:ring-danger',
        false:
          'hover:bg-neutral-50 dark:hover:bg-neutral-800 focus:border-secondary-400/70 dark:focus:border-primary-100/70 focus:ring-1 focus:ring-secondary-700 dark:focus:ring-primary-100',
      },
      disabled: {
        true: 'bg-neutral-100/10! !text-[#8C9097] cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      error: false,
      disabled: false,
    },
  },
);

const TextInput = forwardRef<HTMLInputElement, Input.TextInputProps>(
  (props, ref) => {
    const {
      label,
      placeholder,
      id: externalId,
      classes,
      type = 'text',
      value,
      max,
      size = 'md',
      required = false,
      disabled = false,
      error = false,
      errorMsg,
      inputProps,
      prefix,
      suffix,
      autoFocus,
      onChange,
      onFocus,
      onBlur,
      onKeyUp,
    } = props;

    const internalId = useId();
    const id = externalId || internalId;
    const errorId = `${id}-error`;

    return (
      <div className="relative w-full">
        <div className="relative flex flex-col items-start">
          <input className="hidden" aria-hidden="true" />

          {label && (
            <label
              htmlFor={id}
              className={classNames(
                'relative mb-2 !text-sm font-semibold text-neutral-700 dark:text-neutral-100',
                required &&
                  "after:ml-1 after:text-[#FF3535] after:content-['*'] after:text-lg",
              )}
            >
              {label}
            </label>
          )}

          <div className="relative w-full">
            {/* Prefix Rendering */}
            {prefix && (
              <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center z-10 text-neutral-400">
                {prefix}
              </div>
            )}

            <input
              {...inputProps}
              ref={ref}
              id={id}
              type={type}
              value={value}
              maxLength={max}
              autoFocus={autoFocus}
              placeholder={placeholder}
              disabled={disabled}
              tabIndex={0}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onKeyUp={onKeyUp}
              className={classNames(
                inputVariants({ size, error, disabled }),
                prefix && '!pl-10',
                suffix && '!pr-10',
                classes,
              )}
              aria-invalid={error}
              aria-describedby={error ? errorId : undefined}
            />

            {suffix && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center z-10 text-neutral-400">
                {suffix}
              </div>
            )}
          </div>

          {error && errorMsg && (
            <p
              id={errorId}
              className="text-danger absolute -bottom-5 left-0 text-xs"
            >
              {errorMsg}
            </p>
          )}
        </div>
      </div>
    );
  },
);

TextInput.displayName = 'TextInput';

export default TextInput;
