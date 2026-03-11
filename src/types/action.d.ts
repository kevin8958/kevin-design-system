namespace Action {
  export type ButtonType = 'button' | 'submit' | 'reset';
  export type ButtonSize = 'lg' | 'md' | 'sm';
  export type ButtonVariant = 'contain' | 'outline' | 'clear';
  export type ButtonColor =
    | 'primary'
    | 'neutral'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';
  export type ButtonIconPosition = 'left' | 'right';
  export type ButtonShape = 'rect' | 'circle';

  export interface ButtonProps {
    classes?: string;
    type?: ButtonType;
    children?: React.ReactNode;
    size?: ButtonSize;
    variant?: ButtonVariant;
    color?: ButtonColor;
    shape?: ButtonShape;
    disabled?: boolean;
    loading?: boolean;
    prompted?: boolean;
    icon?: React.ReactNode;
    iconPosition?: ButtonIconPosition;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
  }
}
