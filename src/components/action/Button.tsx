import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-center font-medium transition-all duration-200 ease-in-out disabled:cursor-not-allowed disabled:opacity-50 active:scale-[0.97] select-none outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary-500',
  {
    variants: {
      variant: {
        contain: 'shadow-sm',
        outline: 'border bg-transparent',
        clear: 'bg-transparent',
      },
      size: {
        sm: 'h-[30px] px-2.5 text-xs gap-1.5',
        md: 'h-[36px] px-4 text-sm gap-2',
        lg: 'h-[44px] px-6 text-base gap-2.5',
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
          'bg-secondary-500 text-neutral-100 hover:opacity-70 dark:bg-primary-400 dark:text-neutral-800',
      },
      {
        variant: 'contain',
        color: 'neutral',
        className:
          'bg-neutral-800 text-white hover:bg-neutral-900 dark:bg-neutral-200 dark:text-neutral-900 dark:hover:bg-white',
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
        variant: 'outline',
        color: 'primary',
        className:
          'border-secondary-500/50 text-secondary-600 dark:border-primary-400/50 dark:text-primary-400 hover:opacity-60',
      },
      {
        variant: 'outline',
        color: 'neutral',
        className:
          'border-neutral-300 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800',
      },
      {
        variant: 'outline',
        color: 'info',
        className:
          'border-info/50 text-info hover:bg-info/5 dark:text-info-light',
      },
      {
        variant: 'outline',
        color: 'success',
        className:
          'border-success/50 text-success hover:bg-success/5 dark:text-success-light',
      },
      {
        variant: 'outline',
        color: 'warning',
        className:
          'border-warning/50 text-warning hover:bg-warning/5 dark:text-warning-light',
      },
      {
        variant: 'outline',
        color: 'danger',
        className: 'border-danger/50 text-danger hover:bg-danger/5',
      },

      {
        variant: 'clear',
        color: 'primary',
        className: 'text-secondary-600 hover:opacity-60 dark:text-primary-400 ',
      },
      {
        variant: 'clear',
        color: 'neutral',
        className:
          'text-neutral-800 hover:bg-neutral-100/60 dark:text-neutral-300 dark:hover:bg-neutral-800/60',
      },
      {
        variant: 'clear',
        color: 'info',
        className: 'text-info hover:bg-info/5 dark:text-info-light',
      },
      {
        variant: 'clear',
        color: 'success',
        className: 'text-success hover:bg-success/5 dark:text-success-light',
      },
      {
        variant: 'clear',
        color: 'warning',
        className: 'text-warning hover:bg-warning/5 dark:text-warning-light',
      },
      {
        variant: 'clear',
        color: 'danger',
        className: 'text-danger hover:bg-danger/20',
      },
    ],
    defaultVariants: {
      variant: 'contain',
      size: 'md',
      color: 'primary',
      shape: 'rect',
    },
  },
);

const Button = forwardRef<HTMLButtonElement, Action.ButtonProps>(
  (props, ref) => {
    const {
      classes,
      className,
      type = 'button',
      children,
      size = 'md',
      variant = 'contain',
      color = 'primary',
      shape = 'rect',
      disabled,
      loading,
      prompted,
      icon,
      iconPosition = 'left',
      onClick,
      ...rest
    } = props;

    return (
      <motion.button
        {...rest}
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled || loading}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={classNames(
          buttonVariants({ variant, size, color, shape }),
          prompted && 'animate-flash-fast',
          icon && !children ? 'px-0!' : '',
          classes || className,
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          {loading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center justify-center"
            >
              <svg
                className="size-4 animate-spin text-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={
                'w-full flex items-center justify-center gap-[inherit]'
              }
            >
              {icon && iconPosition === 'left' && (
                <span className="flex shrink-0">{icon}</span>
              )}
              {children}
              {icon && iconPosition === 'right' && (
                <span className="flex shrink-0">{icon}</span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
