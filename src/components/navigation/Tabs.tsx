import classNames from 'classnames';
import { cva } from 'class-variance-authority';

const tabsListVariants = cva(
  'inline-flex w-full rounded-2xl border border-neutral-200 bg-neutral-50 p-1 dark:border-neutral-700 dark:bg-neutral-900',
);

const tabButtonVariants = cva(
  'inline-flex min-w-0 flex-1 cursor-pointer items-center justify-center rounded-xl font-medium transition-all duration-200 ease-in-out outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2',
  {
    variants: {
      size: {
        sm: 'px-3 py-2 text-xs',
        md: 'px-4 py-2.5 text-sm',
        lg: 'px-5 py-3 text-base',
      },
      state: {
        default:
          'text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100',
        active:
          'bg-white text-neutral-900 shadow-sm dark:bg-neutral-800 dark:text-white',
        disabled:
          'cursor-not-allowed text-neutral-300 dark:text-neutral-600',
      },
    },
    defaultVariants: {
      size: 'md',
      state: 'default',
    },
  },
);

const Tabs = ({
  items,
  value,
  onChange,
  disabled = false,
  size = 'md',
  classes,
}: Navigation.TabsProps) => {
  const selectedTab = items.find((item) => item.id === value) || items[0];

  return (
    <div className={classNames('flex w-full flex-col gap-4', classes)}>
      <div role="tablist" className={tabsListVariants()}>
        {items.map((item) => {
          const isSelected = item.id === selectedTab?.id;
          const isDisabled = disabled || item.disabled;

          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={`${item.id}-panel`}
              id={`${item.id}-tab`}
              disabled={isDisabled}
              onClick={() => {
                if (!isDisabled) onChange?.(item.id);
              }}
              className={tabButtonVariants({
                size,
                state: isDisabled
                  ? 'disabled'
                  : isSelected
                    ? 'active'
                    : 'default',
              })}
            >
              <span className="truncate">{item.label}</span>
            </button>
          );
        })}
      </div>

      {selectedTab?.content && (
        <div
          role="tabpanel"
          id={`${selectedTab.id}-panel`}
          aria-labelledby={`${selectedTab.id}-tab`}
          className={classNames(
            'rounded-2xl border border-neutral-200 bg-white text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200',
            size === 'sm'
              ? 'p-4 text-xs'
              : size === 'lg'
                ? 'p-6 text-base'
                : 'p-5 text-sm',
          )}
        >
          {selectedTab.content}
        </div>
      )}
    </div>
  );
};

export default Tabs;
