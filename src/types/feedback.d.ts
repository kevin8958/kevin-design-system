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
