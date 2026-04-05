import classNames from 'classnames';
import { cva } from 'class-variance-authority';

const tagVariants = cva(
  'inline-flex items-center justify-center rounded-lg border font-medium transition-all duration-200 ease-in-out',
  {
    variants: {
      size: {
        sm: 'px-2 py-1 text-[10px]',
        md: 'px-2.5 py-1.5 text-xs',
        lg: 'px-3 py-2 text-sm',
      },
      variant: {
        neutral:
          'border-neutral-200 bg-white text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200',
        primary:
          'border-secondary-200 bg-secondary-50 text-secondary-700 dark:border-primary-500/40 dark:bg-primary-500/10 dark:text-primary-300',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'neutral',
    },
  },
);

const Tag = ({
  label,
  size = 'md',
  variant = 'neutral',
  classes,
}: Data.TagProps) => {
  return (
    <span className={classNames(tagVariants({ size, variant }), classes)}>
      {label}
    </span>
  );
};

export default Tag;
