import classNames from 'classnames';
import { cva } from 'class-variance-authority';
import { LuInbox } from 'react-icons/lu';

const emptyStateVariants = cva(
  'flex w-full flex-col items-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-50/60 text-center dark:border-neutral-700 dark:bg-neutral-900/70',
  {
    variants: {
      size: {
        sm: 'gap-3 px-5 py-8',
        md: 'gap-4 px-6 py-10',
        lg: 'gap-5 px-8 py-12',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const iconVariants = cva(
  'flex items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300',
  {
    variants: {
      size: {
        sm: 'size-12',
        md: 'size-14',
        lg: 'size-16',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const titleVariants = cva(
  'font-semibold text-neutral-900 dark:text-neutral-50',
  {
    variants: {
      size: {
        sm: 'text-base',
        md: 'text-lg',
        lg: 'text-xl',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const descriptionVariants = cva(
  'max-w-[32rem] text-neutral-600 dark:text-neutral-400',
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: 'text-sm',
        lg: 'text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const EmptyState = ({
  title,
  description,
  icon,
  primaryAction,
  secondaryAction,
  size = 'md',
  classes,
}: Data.EmptyStateProps) => {
  return (
    <div
      data-testid="empty-state"
      className={classNames(emptyStateVariants({ size }), classes)}
    >
      <div className={iconVariants({ size })}>
        {icon || <LuInbox size={size === 'lg' ? 28 : size === 'sm' ? 18 : 22} />}
      </div>
      <div className="flex max-w-[36rem] flex-col items-center gap-2">
        <p className={titleVariants({ size })}>{title}</p>
        {description && (
          <p className={descriptionVariants({ size })}>{description}</p>
        )}
      </div>
      {(primaryAction || secondaryAction) && (
        <div className="flex flex-wrap items-center justify-center gap-2">
          {primaryAction}
          {secondaryAction}
        </div>
      )}
    </div>
  );
};

export default EmptyState;
