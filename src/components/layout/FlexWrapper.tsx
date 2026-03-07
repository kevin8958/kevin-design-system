import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/libs/utils';

const flexVariants = cva('flex', {
  variants: {
    direction: {
      row: 'flex-row',
      col: 'flex-col',
      'row-reverse': 'flex-row-reverse',
      'col-reverse': 'flex-col-reverse',
    },
    justify: {
      start: 'justify-start',
      end: 'justify-end',
      center: 'justify-center',
      between: 'justify-between',
      around: 'justify-around',
    },
    items: {
      start: 'items-start',
      end: 'items-end',
      center: 'items-center',
      baseline: 'items-baseline',
      stretch: 'items-stretch',
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
    direction: 'row',
    gap: 4,
  },
});

const FlexWrapper = ({
  direction,
  justify,
  items,
  gap,
  classes,
  children,
  ...props
}: Layout.FlexWrapperProps) => {
  return (
    <div
      className={cn(flexVariants({ direction, justify, items, gap }), classes)}
      {...props}
    >
      {children}
    </div>
  );
};

export default FlexWrapper;
