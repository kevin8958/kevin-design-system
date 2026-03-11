import { cn } from '@/libs/utils';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  classes?: string;
}

const Divider = ({ orientation = 'vertical', classes }: DividerProps) => {
  return (
    <div
      role="separator"
      className={cn(
        // Base Colors from your tokens
        'border-neutral-990/10! dark:border-neutral-800!',

        // Conditional sizing based on orientation
        orientation === 'horizontal'
          ? 'w-full border-t my-2'
          : 'h-full border-l min-h-4',

        classes,
      )}
    />
  );
};

export default Divider;
