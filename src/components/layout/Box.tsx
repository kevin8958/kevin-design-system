import classNames from 'classnames';
import { cva, type VariantProps } from 'class-variance-authority';

const boxVariants = cva(
  'w-full overflow-hidden transition-all duration-200 ease-in-out',
  {
    variants: {
      type: {
        default:
          'rounded-xl border border-primary-500/30 bg-transparent text-primary-600',
        card: 'rounded-xl border border-primary-500/30 bg-white text-primary-600 shadow-custom-light dark:bg-neutral-800 dark:border-white/10 dark:text-neutral-100',
        guide:
          'rounded-2xl border border-neutral-500/30 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900',
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
        <div className="border-b border-neutral-500/10 px-6 py-4 dark:border-white/5">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
            {title}
          </h2>
        </div>
      )}
      <div className={classNames('p-6', classes)}>{children}</div>
    </div>
  );
};

export default Box;
