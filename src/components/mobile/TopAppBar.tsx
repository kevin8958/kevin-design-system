import classNames from 'classnames';
import { cva } from 'class-variance-authority';

const appBarVariants = cva(
  'grid min-h-14 w-full items-center gap-2 border-b border-neutral-200 bg-white/92 px-3 shadow-sm backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-950/92',
  {
    variants: {
      align: {
        left: 'grid-cols-[40px_minmax(0,1fr)_auto]',
        center: 'grid-cols-[88px_minmax(0,1fr)_88px]',
      },
    },
    defaultVariants: {
      align: 'left',
    },
  },
);

const TopAppBar = ({
  title,
  subtitle,
  align = 'left',
  leading,
  actions,
  classes,
}: Mobile.TopAppBarProps) => {
  const hasLeading = !!leading;
  const hasActions = !!actions;

  return (
    <header className={classNames(appBarVariants({ align }), classes)}>
      <div className="flex min-w-0 items-center justify-start">
        {hasLeading ? leading : null}
      </div>

      <div
        className={classNames(
          'flex min-w-0 overflow-hidden flex-col',
          align === 'center'
            ? 'items-center px-2 text-center'
            : 'items-start px-1 text-left',
        )}
      >
        <span className="truncate text-sm font-semibold text-neutral-900 dark:text-neutral-50">
          {title}
        </span>
        {subtitle && (
          <span className="truncate text-xs text-neutral-500 dark:text-neutral-400">
            {subtitle}
          </span>
        )}
      </div>

      <div
        className={classNames(
          'flex min-w-0 items-center justify-end gap-1 overflow-hidden',
          !hasActions && 'opacity-0',
        )}
      >
        {hasActions ? actions : null}
      </div>
    </header>
  );
};

export default TopAppBar;
