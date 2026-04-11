import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import ToastViewport from '@/components/feedback/ToastViewport';

const ToastContext = createContext<Feedback.ToastContextValue | null>(null);

const createToastId = () =>
  `toast-${Math.random().toString(36).slice(2, 10)}-${Date.now().toString(36)}`;

const ToastProvider = ({
  children,
  placement = 'top-right',
  maxVisible = 4,
  classes,
}: Feedback.ToastProviderProps) => {
  const [toasts, setToasts] = useState<Feedback.ToastItem[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const clear = useCallback(() => {
    setToasts([]);
  }, []);

  const push = useCallback(
    (toast: Omit<Feedback.ToastItem, 'id'> & { id?: string }) => {
      const id = toast.id ?? createToastId();

      setToasts((current) => {
        const next = [
          ...current,
          {
            id,
            title: toast.title,
            description: toast.description,
            variant: toast.variant ?? 'info',
            autoClose: toast.autoClose,
            closable: toast.closable ?? true,
          },
        ];

        return next.slice(-maxVisible);
      });

      return id;
    },
    [maxVisible],
  );

  const createVariantPusher = useCallback(
    (variant: Feedback.ToastVariant) =>
      (toast: Omit<Feedback.ToastItem, 'id' | 'variant'> & { id?: string }) =>
        push({ ...toast, variant }),
    [push],
  );

  const value = useMemo<Feedback.ToastContextValue>(
    () => ({
      toasts,
      placement,
      push,
      dismiss,
      clear,
      info: createVariantPusher('info'),
      success: createVariantPusher('success'),
      warning: createVariantPusher('warning'),
      danger: createVariantPusher('danger'),
    }),
    [clear, createVariantPusher, dismiss, placement, push, toasts],
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastViewport
        toasts={toasts}
        placement={placement}
        classes={classes}
        onRemove={dismiss}
      />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider.');
  }

  return context;
};

export default ToastProvider;
