import { forwardRef, useId } from 'react';
import { cva } from 'class-variance-authority';
import classNames from 'classnames';
import { BsCheck } from 'react-icons/bs';

const checkboxVariants = cva(
  'flex shrink-0 items-center justify-center border transition-all duration-200 ease-in-out',
  {
    variants: {
      size: {
        sm: 'size-5 rounded-md',
        md: 'size-6 rounded-md',
        lg: 'size-8 rounded-lg',
      },
      state: {
        default:
          'border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-900 text-transparent',
        checked:
          'border-neutral-900 bg-neutral-900 text-white dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900',
        disabled:
          'border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-800 text-transparent cursor-not-allowed',
        disabledChecked:
          'border-neutral-300 bg-neutral-200 text-neutral-500 dark:border-neutral-700 dark:bg-neutral-700 dark:text-neutral-400 cursor-not-allowed',
        invalid: 'border-danger bg-white dark:bg-neutral-900 text-transparent',
      },
    },
    defaultVariants: {
      size: 'sm',
      state: 'default',
    },
  },
);

const checkIconSize = {
  sm: 'text-xl',
  md: 'text-3xl',
  lg: 'text-4xl',
};

const Checkbox = forwardRef<HTMLInputElement, Input.CheckboxProps>(
  (props, ref) => {
    const {
      id: externalId,
      label,
      checked = false,
      disabled = false,
      invalid = false,
      errorMsg,
      size = 'sm',
      classes = '',
      onChange,
    } = props;

    const internalId = useId();
    const id = externalId || internalId;
    const errorId = `${id}-error`;

    const getState = () => {
      if (disabled && checked) return 'disabledChecked';
      if (disabled) return 'disabled';
      if (invalid) return 'invalid';
      if (checked) return 'checked';
      return 'default';
    };

    return (
      <div className={classNames('flex w-fit flex-col gap-1.5', classes)}>
        <label
          htmlFor={id}
          className={classNames(
            'flex items-center gap-2 select-none',
            disabled
              ? 'text-neutral-400 dark:text-neutral-600 cursor-not-allowed'
              : 'text-neutral-700 dark:text-neutral-100 cursor-pointer',
          )}
        >
          <input
            ref={ref}
            id={id}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            aria-invalid={invalid}
            aria-describedby={invalid && errorMsg ? errorId : undefined}
            onChange={(e) => {
              if (disabled) return;
              onChange?.({ id, checked: e.target.checked });
            }}
            className="peer sr-only"
          />

          <span className={checkboxVariants({ size, state: getState() })}>
            <BsCheck className={checkIconSize[size]} />
          </span>

          {label && (
            <span className="text-sm font-medium break-keep leading-none">
              {label}
            </span>
          )}
        </label>

        {invalid && errorMsg && (
          <p
            id={errorId}
            className="pl-7 text-xs text-danger md:pl-8"
          >
            {errorMsg}
          </p>
        )}
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
