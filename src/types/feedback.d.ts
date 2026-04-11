namespace Feedback {
  type AlertVariant = 'info' | 'success' | 'warning' | 'danger';
  type ProgressSize = 'sm' | 'md' | 'lg';
  type SkeletonVariant = 'line' | 'rect' | 'circle';
  type ToastVariant = 'info' | 'success' | 'warning' | 'danger';
  type ToastPlacement =
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';

  interface ToastItem {
    id: string;
    title?: string;
    description?: string;
    variant?: ToastVariant;
    autoClose?: number;
    closable?: boolean;
  }

  interface ToastViewportProps {
    toasts: ToastItem[];
    placement?: ToastPlacement;
    classes?: string;
    onRemove?: (id: string) => void;
  }

  interface ToastProviderProps {
    children: React.ReactNode;
    placement?: ToastPlacement;
    maxVisible?: number;
    classes?: string;
  }

  interface ToastContextValue {
    toasts: ToastItem[];
    placement: ToastPlacement;
    push: (toast: Omit<ToastItem, 'id'> & { id?: string }) => string;
    dismiss: (id: string) => void;
    clear: () => void;
    info: (toast: Omit<ToastItem, 'id' | 'variant'> & { id?: string }) => string;
    success: (
      toast: Omit<ToastItem, 'id' | 'variant'> & { id?: string },
    ) => string;
    warning: (
      toast: Omit<ToastItem, 'id' | 'variant'> & { id?: string },
    ) => string;
    danger: (toast: Omit<ToastItem, 'id' | 'variant'> & { id?: string }) => string;
  }

  interface AlertProps {
    title?: string;
    description?: string;
    variant?: AlertVariant;
    closable?: boolean;
    onClose?: () => void;
    classes?: string;
  }

  interface ProgressProps {
    value: number;
    max?: number;
    size?: ProgressSize;
    showValue?: boolean;
    classes?: string;
  }

  interface SkeletonProps {
    width?: number | string;
    height?: number | string;
    variant?: SkeletonVariant;
    classes?: string;
  }

  interface ToastProps {
    title?: string;
    description?: string;
    variant?: ToastVariant;
    placement?: ToastPlacement;
    autoClose?: number;
    stackIndex?: number;
    closable?: boolean;
    onClose?: () => void;
    classes?: string;
  }
}
