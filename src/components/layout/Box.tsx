import React from 'react';
import classNames from 'classnames';
import { cva, type VariantProps } from 'class-variance-authority';

const boxVariants = cva(
  'w-full overflow-hidden rounded-xl border transition-all duration-200 ease-in-out',
  {
    variants: {
      type: {
        default: 'border-primary-500/30 bg-transparent text-primary-600',
        card: 'border-primary-500/30 bg-white text-primary-600 shadow-custom-light dark:bg-neutral-800 dark:border-white/10 dark:text-neutral-100',
      },
      hasTitle: {
        true: 'flex flex-col',
        false: '',
      },
    },
    defaultVariants: {
      type: 'default',
    },
  },
);

interface BoxProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof boxVariants> {
  maxWidth?: number;
  title?: string;
  classes?: string;
}

const Box = ({
  id,
  type = 'default',
  title,
  maxWidth,
  children,
  className,
  classes,
  ...rest
}: BoxProps) => {
  return (
    <div
      {...rest}
      id={id}
      className={classNames(
        boxVariants({ type, hasTitle: !!title }),
        className,
      )}
      style={{
        maxWidth: maxWidth ? `${maxWidth}px` : undefined,
      }}
    >
      {title && (
        <div className="border-b border-primary-500/10 px-4 py-2 dark:border-white/5">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      )}
      <div className={classNames('p-4', classes)}>{children}</div>
    </div>
  );
};

export default Box;
