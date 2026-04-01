import { forwardRef, useId } from 'react';
import { cva } from 'class-variance-authority';
import classNames from 'classnames';

const radioVariants = cva(
  'group flex w-full items-start gap-3 rounded-xl border transition-all duration-200 focus:outline-none select-none',
  {
    variants: {
      size: { sm: 'p-3 gap-2.5', md: 'p-4 gap-3', lg: 'p-5 gap-4' },
      state: {
        default:
          'border-neutral-200 bg-white hover:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-500',
        selected: 'border-2 border-secondary-600 dark:border-primary-100',
        disabled:
          'border-neutral-200 bg-neutral-50 opacity-60 cursor-not-allowed dark:border-neutral-800 dark:bg-neutral-800/50',
        invalid: 'border-2 border-danger bg-white dark:bg-neutral-900',
      },
    },
    defaultVariants: { size: 'md', state: 'default' },
  },
);

const circleVariants = cva(
  'shrink-0 flex items-center justify-center rounded-full border-2 transition-all duration-200',
  {
    variants: {
      size: {
        sm: 'size-3.5 mt-[2px]',
        md: 'size-4 mt-[3px]',
        lg: 'size-5 mt-[4px]',
      },
      selected: {
        true: 'border-secondary-600 dark:border-primary-100',
        false: 'border-neutral-300 dark:border-neutral-500',
      },
      invalid: { true: 'border-danger!', false: '' },
    },
    defaultVariants: { size: 'md' },
  },
);

const innerCircleSize = {
  sm: 'size-2',
  md: 'size-2.5',
  lg: 'size-3',
};

const Radio = forwardRef<HTMLInputElement, Input.RadioProps>((props, ref) => {
  const {
    title,
    options,
    value,
    onChange,
    classes,
    disabled = false,
    invalid = false,
    errorMsg,
    name,
    size = 'md',
  } = props;

  const internalName = useId();
  const radioName = name || internalName;

  return (
    <div
      className={classNames(
        'relative flex w-full flex-col gap-2', // relative 추가
        invalid && errorMsg ? 'pb-5' : '', // 에러 메시지 공간 확보를 위한 패딩
        classes,
      )}
    >
      {title && (
        <p className="mb-1 text-sm font-semibold text-neutral-700 dark:text-neutral-100">
          {title}
        </p>
      )}

      <div className="flex flex-col gap-3">
        {options.map((option) => {
          const isSelected = value === option.id;
          const optionId = `${radioName}-${option.id}`;
          const isOptionDisabled = disabled || option.disabled;

          return (
            <label
              key={option.id}
              htmlFor={optionId}
              className={radioVariants({
                size,
                state: isOptionDisabled
                  ? 'disabled'
                  : invalid && isSelected
                    ? 'invalid'
                    : isSelected
                      ? 'selected'
                      : 'default',
              })}
            >
              <input
                ref={isSelected ? ref : null}
                type="radio"
                id={optionId}
                name={radioName}
                checked={isSelected}
                disabled={isOptionDisabled}
                onChange={() => !isOptionDisabled && onChange?.(option.id)}
                className="peer sr-only"
              />

              <span
                className={circleVariants({
                  size,
                  selected: isSelected,
                  invalid: invalid && isSelected,
                })}
              >
                {isSelected && (
                  <span
                    className={classNames(
                      invalid
                        ? 'bg-danger'
                        : 'bg-secondary-600 dark:bg-primary-100',
                      innerCircleSize[size],
                      'rounded-full',
                    )}
                  />
                )}
              </span>

              <div className="flex flex-col">
                <p
                  className={classNames(
                    'font-medium leading-tight',
                    size === 'sm'
                      ? 'text-sm'
                      : size === 'lg'
                        ? 'text-lg'
                        : 'text-base',
                    isSelected
                      ? 'text-neutral-900 dark:text-white'
                      : 'text-neutral-700 dark:text-neutral-300',
                  )}
                >
                  {option.label}
                </p>
                {option.desc && (
                  <p
                    className={classNames(
                      'mt-1 text-neutral-500 dark:text-neutral-400',
                      size === 'sm' ? 'text-xs' : 'text-sm',
                    )}
                  >
                    {option.desc}
                  </p>
                )}
              </div>
            </label>
          );
        })}
      </div>
      {invalid && errorMsg && (
        <p className="absolute -bottom-1 left-0 text-xs font-medium text-danger animate-in fade-in slide-in-from-top-1">
          {errorMsg}
        </p>
      )}
    </div>
  );
});

Radio.displayName = 'Radio';

export default Radio;
