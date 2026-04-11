import { Fragment } from 'react';
import classNames from 'classnames';
import { cva } from 'class-variance-authority';

const stepperRootVariants = cva('w-full', {
  variants: {
    orientation: {
      horizontal: 'grid items-start',
      vertical: 'flex flex-col gap-6',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

const stepButtonVariants = cva(
  'group flex min-w-0 items-center outline-none transition-all duration-200 ease-in-out focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2',
  {
    variants: {
      orientation: {
        horizontal: 'w-full flex-col items-center text-center',
        vertical: 'w-full flex-row items-start gap-8 text-left',
      },
      interactive: {
        true: 'cursor-pointer',
        false: 'cursor-default',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
      interactive: false,
    },
  },
);

const indicatorVariants = cva(
  'flex shrink-0 items-center justify-center rounded-full border font-semibold transition-all duration-200 ease-in-out',
  {
    variants: {
      size: {
        sm: 'size-7 text-xs',
        md: 'size-9 text-sm',
        lg: 'size-11 text-base',
      },
      state: {
        complete:
          'border-secondary-500 bg-secondary-500 text-white dark:border-primary-400 dark:bg-primary-400 dark:text-neutral-900',
        current:
          'border-secondary-500 bg-secondary-500/10 text-secondary-600 dark:border-primary-400 dark:bg-primary-400/15 dark:text-primary-300',
        upcoming:
          'border-neutral-300 bg-white text-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400',
        disabled:
          'border-neutral-200 bg-neutral-100 text-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-600',
      },
    },
    defaultVariants: {
      size: 'md',
      state: 'upcoming',
    },
  },
);

const contentVariants = cva('flex min-w-0 flex-col', {
  variants: {
    orientation: {
      horizontal: 'items-center pt-3 text-center',
      vertical: 'pt-0',
    },
    size: {
      sm: 'gap-0.5',
      md: 'gap-1',
      lg: 'gap-1.5',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    size: 'md',
  },
});

const trackColumnVariants = cva(
  'relative flex shrink-0 items-start justify-center',
  {
    variants: {
      size: {
        sm: 'w-7',
        md: 'w-9',
        lg: 'w-11',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const labelVariants = cva(
  'font-semibold transition-colors duration-200 ease-in-out',
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: 'text-sm',
        lg: 'text-base',
      },
      state: {
        complete:
          'text-neutral-900 dark:text-neutral-50 group-hover:text-secondary-600 dark:group-hover:text-primary-300',
        current: 'text-neutral-900 dark:text-neutral-50',
        upcoming:
          'text-neutral-500 group-hover:text-neutral-800 dark:text-neutral-400 dark:group-hover:text-neutral-200',
        disabled: 'text-neutral-300 dark:text-neutral-600',
      },
    },
    defaultVariants: {
      size: 'md',
      state: 'upcoming',
    },
  },
);

const descriptionVariants = cva(
  'leading-relaxed transition-colors duration-200 ease-in-out',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-xs',
        lg: 'text-sm',
      },
      state: {
        complete:
          'text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300',
        current: 'text-neutral-600 dark:text-neutral-300',
        upcoming:
          'text-neutral-400 group-hover:text-neutral-600 dark:text-neutral-500 dark:group-hover:text-neutral-300',
        disabled: 'text-neutral-300 dark:text-neutral-700',
      },
    },
    defaultVariants: {
      size: 'md',
      state: 'upcoming',
    },
  },
);

const connectorVariants = cva('bg-neutral-200 dark:bg-neutral-800', {
  variants: {
    orientation: {
      horizontal: 'h-px w-full',
      vertical: 'w-px',
    },
    state: {
      complete: 'bg-secondary-500 dark:bg-primary-400',
      default: 'bg-neutral-200 dark:bg-neutral-800',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    state: 'default',
  },
});

const horizontalConnectorOffsetVariants = cva('self-start', {
  variants: {
    size: {
      sm: 'mt-[14px]',
      md: 'mt-[18px]',
      lg: 'mt-[22px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const verticalConnectorPositionVariants = cva('pointer-events-none absolute', {
  variants: {
    size: {
      sm: 'left-[13px] top-[28px] bottom-[-24px]',
      md: 'left-[17px] top-[36px] bottom-[-24px]',
      lg: 'left-[21px] top-[44px] bottom-[-24px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const resolveStepState = (
  item: Navigation.StepperItem,
  itemIndex: number,
  currentIndex: number,
) => {
  if (item.disabled) return 'disabled' as const;
  if (itemIndex < currentIndex) return 'complete' as const;
  if (itemIndex === currentIndex) return 'current' as const;
  return 'upcoming' as const;
};

const Stepper = ({
  items,
  value,
  onChange,
  size = 'md',
  orientation = 'horizontal',
  allowStepClick = true,
  classes,
}: Navigation.StepperProps) => {
  const currentIndex = Math.max(
    items.findIndex((item) => item.id === value),
    0,
  );

  const horizontalTemplateColumns =
    orientation === 'horizontal'
      ? items
          .flatMap((_, index) =>
            index < items.length - 1
              ? ['minmax(0,1fr)', 'minmax(40px,1fr)']
              : ['minmax(0,1fr)'],
          )
          .join(' ')
      : undefined;

  return (
    <ol
      data-testid="stepper"
      className={classNames(stepperRootVariants({ orientation }), classes)}
      style={
        orientation === 'horizontal'
          ? { gridTemplateColumns: horizontalTemplateColumns }
          : undefined
      }
    >
      {items.map((item, index) => {
        const state = resolveStepState(item, index, currentIndex);
        const isClickable = allowStepClick && !item.disabled && !!onChange;
        const isCurrent = index === currentIndex;
        const connectorState =
          !item.disabled && index < currentIndex ? 'complete' : 'default';

        const stepNode =
          orientation === 'horizontal' ? (
            <li key={item.id} className="min-w-0">
              <button
                type="button"
                className={stepButtonVariants({
                  orientation,
                  interactive: isClickable,
                })}
                onClick={() => {
                  if (isClickable) onChange?.(item.id);
                }}
                disabled={!isClickable}
                aria-current={isCurrent ? 'step' : undefined}
                data-testid={`stepper-step-${item.id}`}
              >
                <div className={indicatorVariants({ size, state })}>
                  <span>{index + 1}</span>
                </div>
                <div className={contentVariants({ orientation, size })}>
                  <span className={labelVariants({ size, state })}>
                    {item.label}
                  </span>
                  {item.description && (
                    <span className={descriptionVariants({ size, state })}>
                      {item.description}
                    </span>
                  )}
                </div>
              </button>
            </li>
          ) : (
            <li key={item.id} className="relative min-w-0 w-full">
              {index < items.length - 1 && (
                <div
                  className={classNames(
                    verticalConnectorPositionVariants({ size }),
                    connectorVariants({
                      orientation: 'vertical',
                      state: connectorState,
                    }),
                  )}
                />
              )}
              <button
                type="button"
                className={stepButtonVariants({
                  orientation,
                  interactive: isClickable,
                })}
                onClick={() => {
                  if (isClickable) onChange?.(item.id);
                }}
                disabled={!isClickable}
                aria-current={isCurrent ? 'step' : undefined}
                data-testid={`stepper-step-${item.id}`}
              >
                <div className={trackColumnVariants({ size })}>
                  <div className={indicatorVariants({ size, state })}>
                    <span>{index + 1}</span>
                  </div>
                </div>
                <div className={contentVariants({ orientation, size })}>
                  <span className={labelVariants({ size, state })}>
                    {item.label}
                  </span>
                  {item.description && (
                    <span className={descriptionVariants({ size, state })}>
                      {item.description}
                    </span>
                  )}
                </div>
              </button>
            </li>
          );

        if (orientation !== 'horizontal') {
          return stepNode;
        }

        return (
          <Fragment key={item.id}>
            {stepNode}
            {index < items.length - 1 && (
              <li
                aria-hidden="true"
                className={classNames(
                  horizontalConnectorOffsetVariants({ size }),
                  connectorVariants({
                    orientation: 'horizontal',
                    state: connectorState,
                  }),
                )}
              />
            )}
          </Fragment>
        );
      })}
    </ol>
  );
};

export default Stepper;
