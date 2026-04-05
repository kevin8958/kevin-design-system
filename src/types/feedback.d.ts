namespace Feedback {
  type AlertVariant = 'info' | 'success' | 'warning' | 'danger';

  interface AlertProps {
    title?: string;
    description?: string;
    variant?: AlertVariant;
    closable?: boolean;
    onClose?: () => void;
    classes?: string;
  }
}
