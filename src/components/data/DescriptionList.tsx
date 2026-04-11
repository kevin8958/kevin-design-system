import classNames from 'classnames';
import { cva } from 'class-variance-authority';

const descriptionListRootVariants = cva('grid w-full gap-4', {
  variants: {
    columns: {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
    },
  },
  defaultVariants: {
    columns: 1,
  },
});

const itemVariants = cva(
  'rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900',
  {
    variants: {
      size: {
        sm: 'p-4',
        md: 'p-5',
        lg: 'p-6',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const labelVariants = cva(
  'font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400',
  {
    variants: {
      size: {
        sm: 'text-[11px]',
        md: 'text-xs',
        lg: 'text-xs',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const valueVariants = cva(
  'font-semibold tracking-tight text-neutral-900 dark:text-neutral-50',
  {
    variants: {
      size: {
        sm: 'mt-2 text-sm',
        md: 'mt-2.5 text-base',
        lg: 'mt-3 text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const hintVariants = cva('text-neutral-500 dark:text-neutral-400', {
  variants: {
    size: {
      sm: 'mt-1 text-xs',
      md: 'mt-1.5 text-xs',
      lg: 'mt-2 text-sm',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const DescriptionList = ({
  items,
  size = 'md',
  columns = 1,
  classes,
}: Data.DescriptionListProps) => {
  return (
    <dl
      data-testid="description-list"
      className={classNames(descriptionListRootVariants({ columns }), classes)}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className={itemVariants({ size })}
          data-testid="description-list-item"
        >
          <dt className={labelVariants({ size })}>{item.label}</dt>
          <dd className={valueVariants({ size })}>{item.value}</dd>
          {item.hint && <div className={hintVariants({ size })}>{item.hint}</div>}
        </div>
      ))}
    </dl>
  );
};

export default DescriptionList;
