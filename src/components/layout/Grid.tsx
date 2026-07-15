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

// Written as static, fully-spelled-out class names (not template strings)
// so Tailwind's source scanner can actually find and generate them.
const responsiveColsClassMap: Record<
  keyof NonNullable<Layout.GridProps['responsiveCols']>,
  Record<Layout.GridColsValue, string>
> = {
  sm: {
    1: 'sm:grid-cols-1',
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-3',
    4: 'sm:grid-cols-4',
    5: 'sm:grid-cols-5',
    6: 'sm:grid-cols-6',
  },
  md: {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
    5: 'md:grid-cols-5',
    6: 'md:grid-cols-6',
  },
  lg: {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    5: 'lg:grid-cols-5',
    6: 'lg:grid-cols-6',
  },
  xl: {
    1: 'xl:grid-cols-1',
    2: 'xl:grid-cols-2',
    3: 'xl:grid-cols-3',
    4: 'xl:grid-cols-4',
    5: 'xl:grid-cols-5',
    6: 'xl:grid-cols-6',
  },
};

const Grid = ({
  cols,
  gap,
  responsiveCols,
  classes,
  children,
  ...props
}: Layout.GridProps) => {
  const responsiveClasses = responsiveCols
    ? (Object.keys(responsiveCols) as Array<keyof typeof responsiveCols>)
        .map((breakpoint) => {
          const value = responsiveCols[breakpoint];
          return value ? responsiveColsClassMap[breakpoint][value] : undefined;
        })
        .filter(Boolean)
    : [];

  return (
    <div
      className={cn(gridVariants({ cols, gap }), responsiveClasses, classes)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Grid;
