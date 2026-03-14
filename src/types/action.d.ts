namespace Action {
  type ButtonType = 'button' | 'submit' | 'reset';
  type ButtonSize = 'lg' | 'md' | 'sm';
  type ButtonVariant = 'contain' | 'outline' | 'clear';
  type ButtonColor =
    | 'primary'
    | 'neutral'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';
  type ButtonIconPosition = 'left' | 'right';
  type ButtonShape = 'rect' | 'circle';

  type DropdownItem =
    | {
        type: 'item';
        id: string;
        label: string;
        icon?: React.ReactNode;
        onClick?: () => void;
        danger?: boolean;
      }
    | {
        type: 'group';
        id: string;
        label?: string;
        icon?: React.ReactNode;
        items: DropdownItem[];
      }
    | {
        type: 'submenu';
        id: string;
        label: string;
        icon?: React.ReactNode;
        items: DropdownItem[];
      };

  interface ButtonProps {
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

  interface DropdownProps {
    items: DropdownItem[];
    onChange?: (value: string) => void;
    dialogPosition?: 'left' | 'right';
    dialogWidth?: number;
    buttonVariant?: ButtonVariant;
    size?: ButtonSize;
    label?: string | React.ReactNode;
    buttonClasses?: string;
  }
}
