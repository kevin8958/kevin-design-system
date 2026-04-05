import { cn } from '@/libs/utils';

const Divider = ({ orientation = 'vertical', classes }: Layout.DividerProps) => {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        'border-neutral-990/10! dark:border-neutral-800!',
        orientation === 'horizontal'
          ? 'w-full border-t my-2'
          : 'h-full border-l min-h-4',
        classes,
      )}
    />
  );
};

export default Divider;
