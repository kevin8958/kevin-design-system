import { cva } from 'class-variance-authority';
import { cn } from '@/libs/utils';

const skeletonVariants = cva(
  'animate-pulse bg-neutral-200 dark:bg-neutral-800',
  {
    variants: {
      variant: {
        line: 'rounded-md',
        rect: 'rounded-xl',
        circle: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'line',
    },
  },
);

const Skeleton = ({
  width,
  height,
  variant = 'line',
  classes,
}: Feedback.SkeletonProps) => {
  return (
    <div
      className={cn(skeletonVariants({ variant }), classes)}
      style={{
        width: width || (variant === 'circle' ? 48 : '100%'),
        height: height || (variant === 'line' ? 16 : 48),
      }}
      aria-hidden="true"
    />
  );
};

export default Skeleton;
