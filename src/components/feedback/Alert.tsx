import classNames from 'classnames';
import { cva } from 'class-variance-authority';
import { LuCircleAlert, LuCircleCheck, LuInfo, LuTriangleAlert, LuX } from 'react-icons/lu';
import Button from '@/components/action/Button';

const alertVariants = cva(
  'relative flex w-full items-start gap-3 rounded-2xl border px-4 py-4 transition-all duration-200 ease-in-out',
  {
    variants: {
      variant: {
        info:
          'border-info/20 bg-info/10 text-info dark:border-info/30 dark:bg-info/10 dark:text-info-light',
        success:
          'border-success/20 bg-success/10 text-success dark:border-success/30 dark:bg-success/10 dark:text-success-light',
        warning:
          'border-warning/20 bg-warning/10 text-warning dark:border-warning/30 dark:bg-warning/10 dark:text-warning-light',
        danger:
          'border-danger/20 bg-danger/10 text-danger dark:border-danger/30 dark:bg-danger/10 dark:text-danger',
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

const Alert = ({
  title,
  description,
  variant = 'info',
  closable = false,
  onClose,
  classes,
}: Feedback.AlertProps) => {
  const Icon = iconMap[variant];

  return (
    <div className={classNames(alertVariants({ variant }), classes)} role="alert">
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
          aria-label="Close alert"
          onClick={onClose}
        >
          <LuX size={16} />
        </Button>
      )}
    </div>
  );
};

export default Alert;
