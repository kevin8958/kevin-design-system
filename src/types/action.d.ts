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
  type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  type ModalState = 'default' | 'info' | 'success' | 'warning' | 'danger';
  type ModalPosition = 'top' | 'center' | 'bottom';

  interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm?: () => void;
    title?: string;
    children: React.ReactNode;
    maxWidth?: ModalSize;
    state?: ModalState;
    position?: ModalPosition;
    confirmText?: string;
    cancelText?: string;
    hideCancel?: boolean;
    hideBottom?: boolean;
    loading?: boolean;
  }

  type DrawerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

  interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm?: () => void;
    title?: string;
    children: React.ReactNode;
    size?: DrawerSize;
    confirmText?: string;
    cancelText?: string;
    hideBottom?: boolean;
    loading?: boolean;
    classes?: string;
  }
}
