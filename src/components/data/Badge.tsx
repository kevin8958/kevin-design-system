import classNames from 'classnames';
import { cva } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 ease-in-out',
  {
    variants: {
      size: {
        sm: 'px-2 py-1 text-[10px]',
        md: 'px-2.5 py-1 text-xs',
        lg: 'px-3 py-1.5 text-sm',
      },
      variant: {
        neutral:
          'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200',
        primary:
          'bg-secondary-100 text-secondary-700 dark:bg-primary-500/15 dark:text-primary-300',
        success:
          'bg-success/15 text-success dark:bg-success/20 dark:text-success-light',
        warning:
          'bg-warning/15 text-warning dark:bg-warning/20 dark:text-warning-light',
        danger: 'bg-danger/15 text-danger dark:bg-danger/20 dark:text-danger',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'neutral',
    },
  },
);

const Badge = ({
  label,
  size = 'md',
  variant = 'neutral',
  classes,
}: Data.BadgeProps) => {
  return (
    <span className={classNames(badgeVariants({ size, variant }), classes)}>
      {label}
    </span>
  );
};

export default Badge;
