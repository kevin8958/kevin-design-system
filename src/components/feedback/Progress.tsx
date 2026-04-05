import classNames from 'classnames';
import { cva } from 'class-variance-authority';

const trackVariants = cva(
  'w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800',
  {
    variants: {
      size: {
        sm: 'h-1.5',
        md: 'h-2.5',
        lg: 'h-3.5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const barVariants = cva(
  'h-full rounded-full bg-secondary-500 transition-[width] duration-300 ease-out dark:bg-primary-400',
);

const Progress = ({
  value,
  max = 100,
  size = 'md',
  showValue = false,
  classes,
}: Feedback.ProgressProps) => {
  const safeMax = Math.max(1, max);
  const safeValue = Math.min(Math.max(value, 0), safeMax);
  const percentage = Math.round((safeValue / safeMax) * 100);

  return (
    <div className={classNames('flex w-full flex-col gap-2', classes)}>
      {showValue && (
        <div className="flex items-center justify-between text-xs font-medium text-neutral-500 dark:text-neutral-400">
          <span>Progress</span>
          <span>{percentage}%</span>
        </div>
      )}
      <div
        className={trackVariants({ size })}
        role="progressbar"
        aria-valuenow={safeValue}
        aria-valuemin={0}
        aria-valuemax={safeMax}
      >
        <div className={barVariants()} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};

export default Progress;
