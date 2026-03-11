import classNames from 'classnames';
import { AnimatePresence, motion, type HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-center font-normal transition-all duration-200 ease-in-out disabled:cursor-not-allowed disabled:opacity-60 disabled:text-neutral-500 active:scale-[0.97] active:duration-75 select-none',
  {
    variants: {
      variant: {
        contain: 'shadow-md',
        outline: 'border bg-transparent',
        clear: 'bg-transparent shadow-sm hover:shadow-md',
      },
      size: {
        sm: 'h-[30px] px-2 text-xs w-max',
        md: 'h-[34px] px-3 text-sm',
        lg: 'h-[38px] px-4 text-lg',
      },
      color: {
        primary: '',
        neutral: '',
        info: '',
        success: '',
        warning: '',
        danger: '',
      },
      shape: {
        rect: '',
        circle: 'aspect-square !rounded-full p-0',
      },
    },
    compoundVariants: [
      {
        variant: 'contain',
        color: 'primary',
        className:
          'bg-secondary-200 text-secondary-800 hover:bg-secondary-300 dark:bg-primary-100 dark:text-primary-800 dark:hover:bg-primary-200',
      },
      {
        variant: 'contain',
        color: 'neutral',
        className:
          'bg-neutral-200 text-neutral-800 hover:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-600',
      },
      {
        variant: 'contain',
        color: 'info',
        className: 'bg-info text-white hover:opacity-90',
      },
      {
        variant: 'contain',
        color: 'success',
        className: 'bg-success text-white hover:opacity-90',
      },
      {
        variant: 'contain',
        color: 'warning',
        className: 'bg-warning text-white hover:opacity-90',
      },
      {
        variant: 'contain',
        color: 'danger',
        className: 'bg-danger text-white hover:opacity-90',
      },
      {
        variant: ['outline', 'clear'],
        className:
          'hover:bg-secondary-800/10 active:bg-secondary-800/20 dark:hover:bg-white/10 dark:active:bg-white/20',
      },
      {
        variant: 'outline',
        color: 'primary',
        className:
          'border-secondary-500/50 text-secondary-600 dark:border-primary-400/50 dark:text-primary-400',
      },
      {
        variant: 'clear',
        color: 'primary',
        className: 'text-secondary-600 dark:text-primary-400',
      },
      {
        variant: 'outline',
        color: 'neutral',
        className:
          'border-neutral-500 text-neutral-600 dark:border-neutral-400 dark:text-neutral-300',
      },
      {
        variant: 'clear',
        color: 'neutral',
        className: 'text-neutral-600 dark:text-neutral-400',
      },
      {
        variant: 'outline',
        color: 'info',
        className:
          'border-info/50 text-info dark:border-info/60 dark:text-info-light',
      },
      { variant: 'clear', color: 'info', className: 'text-info' },
    ],
    defaultVariants: {
      variant: 'contain',
      size: 'md',
      color: 'primary',
      shape: 'rect',
    },
  },
);

interface ButtonProps
  extends
    Omit<HTMLMotionProps<'button'>, 'color'>,
    VariantProps<typeof buttonVariants> {
  classes?: string;
  loading?: boolean;
  prompted?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    classes,
    type = 'button',
    children,
    size,
    variant,
    color,
    shape,
    disabled,
    loading,
    prompted,
    icon,
    iconPosition = 'left',
    ...rest
  } = props;

  return (
    <motion.button
      {...rest}
      ref={ref}
      type={type}
      disabled={disabled || loading}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={classNames(
        buttonVariants({ variant, size, color, shape }),
        prompted && 'animate-flash-fast',
        classes || className,
      )}
    >
      {loading ? (
        <AnimatePresence mode="wait">
          <motion.div
            key="loader"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            exit={{ opacity: 0 }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 1 }}
            className="size-4 rounded-full border-[3px] border-current border-t-transparent"
          />
        </AnimatePresence>
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <span
              className={classNames('flex', {
                'mr-1.5': children,
              })}
            >
              {icon}
            </span>
          )}
          {children}
          {icon && iconPosition === 'right' && (
            <span
              className={classNames('flex', {
                'ml-1.5': children,
              })}
            >
              {icon}
            </span>
          )}
        </>
      )}
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button;
