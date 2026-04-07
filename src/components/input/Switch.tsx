import { forwardRef, useId } from 'react';
import { cva } from 'class-variance-authority';
import classNames from 'classnames';

const switchVariants = cva(
  'relative inline-flex shrink-0 cursor-pointer items-center rounded-full p-0.5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: {
        sm: 'h-5 w-9',
        md: 'h-6 w-11',
        lg: 'h-7 w-[52px]',
      },
      state: {
        default:
          'bg-neutral-200 dark:bg-neutral-700 border border-transparent dark:border-neutral-600',
        active: 'bg-neutral-900 dark:bg-neutral-300',
        disabled:
          'bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700',
        disabledChecked:
          'bg-neutral-300 dark:bg-neutral-500 border border-neutral-300 dark:border-neutral-500',
        invalid: 'bg-danger',
      },
    },
    defaultVariants: {
      size: 'md',
      state: 'default',
    },
  },
);

const thumbVariants = cva(
  // shadow를 강화하여 입체감 부여
  'pointer-events-none block rounded-full bg-white shadow-[0_1px_2px_rgba(15,23,42,0.18),0_2px_6px_rgba(15,23,42,0.12)] ring-0 transition-transform duration-200 dark:bg-white',
  {
    variants: {
      size: {
        sm: 'size-3.5',
        md: 'size-4.5',
        lg: 'size-5.5',
      },
      checked: {
        true: '',
        false: 'translate-x-0',
      },
    },
    compoundVariants: [
      { size: 'sm', checked: true, className: 'translate-x-4' },
      { size: 'md', checked: true, className: 'translate-x-5' },
      { size: 'lg', checked: true, className: 'translate-x-6' },
    ],
    defaultVariants: {
      size: 'md',
    },
  },
);

const Switch = forwardRef<HTMLInputElement, Input.SwitchProps>((props, ref) => {
  const {
    label,
    description,
    checked = false,
    onChange,
    disabled = false,
    invalid = false,
    errorMsg,
    size = 'md',
    className,
    ...rest
  } = props;

  const id = useId();
  const errorId = `${id}-error`;

  const handleToggle = () => {
    if (!disabled) {
      onChange?.(!checked);
    }
  };

  return (
    <div className={classNames('flex flex-col gap-1.5', className)}>
      <div className="flex items-center gap-3">
        <button
          type="button"
          role="switch"
          id={id}
          aria-checked={checked}
          aria-invalid={invalid}
          aria-describedby={invalid && errorMsg ? errorId : undefined}
          disabled={disabled}
          onClick={handleToggle}
          className={switchVariants({
            size,
            state: disabled
              ? checked
                ? 'disabledChecked'
                : 'disabled'
              : invalid
                ? 'invalid'
                : checked
                  ? 'active'
                  : 'default',
          })}
        >
          <input
            {...rest}
            ref={ref}
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange?.(e.target.checked)}
            disabled={disabled}
            className="sr-only"
            aria-hidden="true"
          />
          <span
            className={thumbVariants({
              size,
              checked,
            })}
          />
        </button>

        {(label || description) && (
          <div
            className="flex flex-col cursor-pointer select-none"
            onClick={handleToggle}
          >
            {label && (
              <span
                className={classNames(
                  'font-medium text-neutral-900 dark:text-white',
                  size === 'sm'
                    ? 'text-sm'
                    : size === 'lg'
                      ? 'text-lg'
                      : 'text-base',
                )}
              >
                {label}
              </span>
            )}
            {description && (
              <span
                className={classNames(
                  'text-neutral-500 dark:text-neutral-400',
                  size === 'sm' ? 'text-xs' : 'text-sm',
                )}
              >
                {description}
              </span>
            )}
          </div>
        )}
      </div>

      {invalid && errorMsg && (
        <p
          id={errorId}
          className="text-xs font-medium text-danger animate-in fade-in slide-in-from-top-1"
        >
          {errorMsg}
        </p>
      )}
    </div>
  );
});

Switch.displayName = 'Switch';

export default Switch;
