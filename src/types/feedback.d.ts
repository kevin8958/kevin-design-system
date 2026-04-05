namespace Feedback {
  type AlertVariant = 'info' | 'success' | 'warning' | 'danger';
  type ProgressSize = 'sm' | 'md' | 'lg';

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
}
