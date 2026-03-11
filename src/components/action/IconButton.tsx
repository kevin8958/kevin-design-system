import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/libs/utils';
import { forwardRef } from 'react';

const iconButtonVariants = cva(
  'flex items-center justify-center rounded-md transition-all duration-200 ease-in-out disabled:cursor-not-allowed disabled:opacity-30 active:scale-95 outline-none! focus:outline-none! ring-0! focus:ring-0!',
  {
    variants: {
      variant: {
        contain: '',
        outline: 'border bg-transparent',
        clear: 'bg-transparent',
      },
      size: {
        xs: 'h-7 w-7 text-xs',
        sm: 'h-8 w-8 text-sm',
        md: 'h-10 w-10 text-base',
        lg: 'h-12 w-12 text-lg',
      },
      color: {
        primary: '',
        info: '',
        success: '',
        warning: '',
        danger: '',
      },
    },
    compoundVariants: [
      /** Contain Variants */
      {
        variant: 'contain',
        color: 'primary',
        className:
          'bg-secondary-200 text-secondary-800 hover:bg-secondary-300 dark:bg-primary-100 dark:text-primary-800 dark:hover:bg-primary-200',
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

      /** Outline & Clear Variants (Hover/Active) */
      {
        variant: ['outline', 'clear'],
        className:
          'hover:bg-secondary-800/10 active:bg-secondary-800/20 dark:hover:bg-white/10 dark:active:bg-white/20',
      },
      {
        variant: 'outline',
        color: 'primary',
        className:
          'border-secondary-400 text-secondary-400 dark:border-primary-400 dark:text-primary-400',
      }, // Success
      {
        variant: 'outline',
        color: 'success',
        className:
          'border-success text-success dark:border-success-light dark:text-success-light',
      },
      {
        variant: 'clear',
        color: 'success',
        className: 'text-success dark:text-success-light',
      },

      // Warning
      {
        variant: 'outline',
        color: 'warning',
        className:
          'border-warning text-warning dark:border-warning-light dark:text-warning-light',
      },
      {
        variant: 'clear',
        color: 'warning',
        className: 'text-warning dark:text-warning-light',
      },

      // Danger
      {
        variant: 'outline',
        color: 'danger',
        className:
          'border-danger text-danger dark:border-danger-light dark:text-danger-light',
      },
      {
        variant: 'clear',
        color: 'danger',
        className: 'text-danger dark:text-danger-light',
      },
      {
        variant: 'clear',
        color: 'primary',
        className: 'text-secondary-400 dark:text-primary-400',
      },
      // info, success, warning, danger 패턴 동일하게 적용
      { variant: 'outline', color: 'info', className: 'border-info text-info' },
      { variant: 'clear', color: 'info', className: 'text-info' },
    ],
    defaultVariants: {
      variant: 'clear',
      size: 'sm',
      color: 'primary',
    },
  },
);

interface IconButtonProps
  extends
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof iconButtonVariants> {
  icon: React.ReactNode;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, variant, size, color, className, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={cn(
          iconButtonVariants({ variant, size, color }),
          'group',
          className,
        )}
      >
        <div className="group-hover:animate-[bounce-up_0.4s_ease-in-out] flex items-center justify-center">
          {icon}
        </div>
      </button>
    );
  },
);

IconButton.displayName = 'IconButton';

export default IconButton;
