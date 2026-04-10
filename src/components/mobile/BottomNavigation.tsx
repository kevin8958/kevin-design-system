import classNames from 'classnames';
import { cva } from 'class-variance-authority';

const navigationVariants = cva(
  'flex w-full max-w-full items-stretch overflow-hidden rounded-t-[28px] border-t border-neutral-200 bg-white/95 px-2 pb-[calc(env(safe-area-inset-bottom,0px)+0.5rem)] pt-2 shadow-[0_-8px_32px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-950/95',
);

const itemVariants = cva(
  'relative flex min-w-0 flex-1 cursor-pointer flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-primary-400',
  {
    variants: {
      state: {
        default:
          'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-100',
        active:
          'bg-secondary-50 text-secondary-600 dark:bg-primary-400/12 dark:text-primary-300',
        disabled:
          'cursor-not-allowed text-neutral-300 dark:text-neutral-700',
      },
    },
    defaultVariants: {
      state: 'default',
    },
  },
);

const badgeVariants = cva(
  'absolute right-3 top-1.5 inline-flex min-w-[18px] items-center justify-center rounded-full px-1.5 py-0.5 text-[10px] font-semibold leading-none',
  {
    variants: {
      state: {
        default:
          'bg-secondary-500 text-white dark:bg-primary-400 dark:text-neutral-900',
        active:
          'bg-secondary-500 text-white dark:bg-primary-400 dark:text-neutral-900',
      },
    },
    defaultVariants: {
      state: 'default',
    },
  },
);

const BottomNavigation = ({
  items,
  value,
  onChange,
  classes,
}: Mobile.BottomNavigationProps) => {
  return (
    <nav className={classNames(navigationVariants(), classes)} aria-label="Bottom navigation">
      {items.map((item) => {
        const isActive = item.id === value;
        const isDisabled = !!item.disabled;
        const state = isDisabled ? 'disabled' : isActive ? 'active' : 'default';

        return (
          <button
            key={item.id}
            type="button"
            className={itemVariants({ state })}
            disabled={isDisabled}
            aria-current={isActive ? 'page' : undefined}
            aria-label={item.label}
            onClick={() => {
              if (!isDisabled) onChange?.(item.id);
            }}
          >
            {item.badge != null && (
              <span className={badgeVariants({ state: isActive ? 'active' : 'default' })}>
                {item.badge}
              </span>
            )}
            {item.icon && <span className="text-[1.15rem]">{item.icon}</span>}
            <span className="truncate text-[11px] font-medium">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNavigation;
