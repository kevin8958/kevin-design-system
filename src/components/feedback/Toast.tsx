import classNames from 'classnames';
import { cva } from 'class-variance-authority';
import { LuCircleAlert, LuCircleCheck, LuInfo, LuTriangleAlert, LuX } from 'react-icons/lu';
import Button from '@/components/action/Button';

const toastVariants = cva(
  'relative flex w-full max-w-md items-start gap-3 rounded-2xl border bg-white px-4 py-4 shadow-lg transition-all duration-200 ease-in-out dark:bg-neutral-900',
  {
    variants: {
      variant: {
        info:
          'border-info/20 text-info dark:border-info/30 dark:text-info-light',
        success:
          'border-success/20 text-success dark:border-success/30 dark:text-success-light',
        warning:
          'border-warning/20 text-warning dark:border-warning/30 dark:text-warning-light',
        danger:
          'border-danger/20 text-danger dark:border-danger/30 dark:text-danger',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  },
);

const iconMap = {
  info: LuInfo,
  success: LuCircleCheck,
  warning: LuTriangleAlert,
  danger: LuCircleAlert,
};

const Toast = ({
  title,
  description,
  variant = 'info',
  closable = false,
  onClose,
  classes,
}: Feedback.ToastProps) => {
  const Icon = iconMap[variant];

  return (
    <div className={classNames(toastVariants({ variant }), classes)} role="status">
      <span className="mt-0.5 shrink-0 text-lg">
        <Icon />
      </span>

      <div className="min-w-0 flex-1">
        {title && (
          <p className="font-semibold text-neutral-900 dark:text-neutral-50">
            {title}
          </p>
        )}
        {description && (
          <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-200">
            {description}
          </p>
        )}
      </div>

      {closable && (
        <Button
          type="button"
          variant="clear"
          color="neutral"
          size="sm"
          classes="!p-2 -mr-1 -mt-1"
          aria-label="Close toast"
          onClick={onClose}
        >
          <LuX size={16} />
        </Button>
      )}
    </div>
  );
};

export default Toast;
