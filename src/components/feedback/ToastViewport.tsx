import classNames from 'classnames';
import Toast from '@/components/feedback/Toast';

const placementClassMap: Record<Feedback.ToastPlacement, string> = {
  'top-left': 'items-start justify-start',
  'top-center': 'items-center justify-start',
  'top-right': 'items-end justify-start',
  'bottom-left': 'items-start justify-end',
  'bottom-center': 'items-center justify-end',
  'bottom-right': 'items-end justify-end',
};

const stackClassMap: Record<Feedback.ToastPlacement, string> = {
  'top-left': 'flex-col',
  'top-center': 'flex-col',
  'top-right': 'flex-col',
  'bottom-left': 'flex-col-reverse',
  'bottom-center': 'flex-col-reverse',
  'bottom-right': 'flex-col-reverse',
};

const ToastViewport = ({
  toasts,
  placement = 'top-right',
  classes,
  onRemove,
}: Feedback.ToastViewportProps) => {
  return (
    <div
      data-testid="toast-viewport"
      className={classNames(
        'pointer-events-none fixed inset-0 z-[9999] flex p-4',
        placementClassMap[placement],
        classes,
      )}
    >
      <div
        className={classNames(
          'pointer-events-none flex w-full max-w-md gap-3',
          stackClassMap[placement],
        )}
      >
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            title={toast.title}
            description={toast.description}
            variant={toast.variant}
            autoClose={toast.autoClose}
            closable={toast.closable}
            classes="pointer-events-auto"
            onClose={() => onRemove?.(toast.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ToastViewport;
