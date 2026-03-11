namespace Action {
  /** Button */
  type ButtonType = 'button' | 'submit';
  type ButtonSize = 'lg' | 'md' | 'sm';
  type ButtonVariant = 'contain' | 'outline' | 'clear';
  type ButtonColor = 'primary' | 'info' | 'success' | 'warning' | 'danger';
  type ButtonIconPosition = 'left' | 'right';
  type ButtonShape = 'rect' | 'circle';
  interface ButtonProps {
    classes?: string;
    type?: ButtonType;
    children?: React.ReactNode;
    size?: ButtonSize;
    variant?: ButtonVariant;
    color?: ButtonColor;
    /** state start */
    disabled?: boolean;
    loading?: boolean;
    prompted?: boolean;
    /** state end */
    shape?: ButtonShape;
    icon?: React.ReactNode;
    iconPosition?: ButtonIconPosition;
    onClick?: (e) => void;
  }
}
