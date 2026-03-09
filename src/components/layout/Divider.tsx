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
        'border-neutral-990/10! dark:border-neutral-800! min-h-4',

        // Conditional sizing based on orientation
        orientation === 'horizontal' ? 'w-full border-t' : 'h-full border-l',

        classes,
      )}
    />
  );
};

export default Divider;
