import { cva } from 'class-variance-authority';
import { cn } from '@/libs/utils';

const gridVariants = cva('grid', {
  variants: {
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
    },
    gap: {
      0: 'gap-0',
      1: 'gap-1',
      2: 'gap-2',
      3: 'gap-3',
      4: 'gap-4',
      5: 'gap-5',
      6: 'gap-6',
      8: 'gap-8',
      10: 'gap-10',
      12: 'gap-12',
      16: 'gap-16',
    },
  },
  defaultVariants: {
    cols: 3,
    gap: 4,
  },
});

const Grid = ({ cols, gap, classes, children, ...props }: Layout.GridProps) => {
  return (
    <div className={cn(gridVariants({ cols, gap }), classes)} {...props}>
      {children}
    </div>
  );
};

export default Grid;
