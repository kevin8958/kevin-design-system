namespace App {
  type AppButtonVariant = 'contain' | 'outline' | 'clear';
  type AppButtonColor =
    | 'primary'
    | 'neutral'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';
  type AppButtonSize = 'sm' | 'md' | 'lg';
  type AppButtonIconPosition = 'left' | 'right';
  type AppButtonShape = 'rect' | 'circle';
  type AppButtonJustify = 'start' | 'center';
  type AppPopoverSide = 'top' | 'right' | 'bottom' | 'left';
  type AppPopoverAlign = 'start' | 'center' | 'end';
  type AppActionSheetTone = 'default' | 'danger';
  type AppActionSheetSize = 'sm' | 'md' | 'lg';
  type AppActionSheetItem = {
    id: string;
    label: React.ReactNode;
    description?: React.ReactNode;
    icon?: React.ReactNode;
    tone?: AppActionSheetTone;
    disabled?: boolean;
  };
  type AppModalSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  type AppModalState = 'default' | 'info' | 'success' | 'warning' | 'danger';
  type AppModalPosition = 'top' | 'center' | 'bottom';
  type AppDrawerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';
  type AppButtonGroupItem = {
    label: React.ReactNode;
    value: string;
    disabled?: boolean;
    testID?: string;
  };
  type DropdownItem =
    | {
        type: 'item';
        id: string;
        label: React.ReactNode;
        icon?: React.ReactNode;
        onPress?: () => void;
        danger?: boolean;
      }
    | {
        type: 'group';
        id: string;
        label?: React.ReactNode;
        items: DropdownItem[];
      }
    | {
        type: 'submenu';
        id: string;
        label: React.ReactNode;
        icon?: React.ReactNode;
        items: DropdownItem[];
      };
  type AppAccordionType = 'single' | 'multiple';
  type AppAccordionSize = 'sm' | 'md' | 'lg';
  type AppAccordionItem = {
    id: string;
    title: React.ReactNode;
    content: React.ReactNode;
    description?: React.ReactNode;
    icon?: React.ReactNode;
    badge?: React.ReactNode;
    disabled?: boolean;
  };

  interface ButtonProps {
    children?: React.ReactNode;
    label?: React.ReactNode;
    variant?: AppButtonVariant;
    color?: AppButtonColor;
    size?: AppButtonSize;
    justify?: AppButtonJustify;
    fullWidth?: boolean;
    disabled?: boolean;
    loading?: boolean;
    icon?: React.ReactNode;
    iconPosition?: AppButtonIconPosition;
    shape?: AppButtonShape;
    href?: string;
    onPress?: (event: import('react-native').GestureResponderEvent) => void;
    style?: import('react-native').StyleProp<import('react-native').ViewStyle>;
    textStyle?: import('react-native').StyleProp<import('react-native').TextStyle>;
    testID?: string;
  }

  interface AccordionProps {
    items: AppAccordionItem[];
    type?: AppAccordionType;
    value?: string[];
    defaultValue?: string[];
    onChange?: (value: string[]) => void;
    size?: AppAccordionSize;
    collapsible?: boolean;
    style?: import('react-native').StyleProp<import('react-native').ViewStyle>;
    itemStyle?: import('react-native').StyleProp<import('react-native').ViewStyle>;
    contentStyle?: import('react-native').StyleProp<import('react-native').ViewStyle>;
    testID?: string;
  }

  interface ButtonGroupProps {
    items: AppButtonGroupItem[];
    value: string;
    onChange?: (value: string) => void;
    size?: AppButtonSize;
    color?: AppButtonColor;
    disabled?: boolean;
    fullWidth?: boolean;
    style?: import('react-native').StyleProp<import('react-native').ViewStyle>;
    itemStyle?: import('react-native').StyleProp<import('react-native').ViewStyle>;
    testID?: string;
  }

  interface DropdownProps {
    items: DropdownItem[];
    onChange?: (value: string) => void;
    dialogPosition?: 'left' | 'right';
    dialogWidth?: number;
    label?: React.ReactNode;
    disabled?: boolean;
    buttonVariant?: AppButtonVariant;
    size?: AppButtonSize;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    style?: import('react-native').StyleProp<import('react-native').ViewStyle>;
    buttonStyle?: import('react-native').StyleProp<import('react-native').ViewStyle>;
    menuStyle?: import('react-native').StyleProp<import('react-native').ViewStyle>;
    itemStyle?: import('react-native').StyleProp<import('react-native').ViewStyle>;
    testID?: string;
  }

  interface PopoverProps {
    trigger: React.ReactNode;
    children?: React.ReactNode;
    title?: React.ReactNode;
    description?: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    side?: AppPopoverSide;
    align?: AppPopoverAlign;
    width?: number;
    showArrow?: boolean;
    disabled?: boolean;
    style?: import('react-native').StyleProp<import('react-native').ViewStyle>;
    contentStyle?: import('react-native').StyleProp<import('react-native').ViewStyle>;
    testID?: string;
  }

  interface ActionSheetProps {
    isOpen: boolean;
    onClose?: () => void;
    onSelect?: (id: string) => void;
    title?: React.ReactNode;
    description?: React.ReactNode;
    items: AppActionSheetItem[];
    size?: AppActionSheetSize;
    style?: import('react-native').StyleProp<import('react-native').ViewStyle>;
    overlayStyle?: import('react-native').StyleProp<import('react-native').ViewStyle>;
    sheetStyle?: import('react-native').StyleProp<import('react-native').ViewStyle>;
    itemStyle?: import('react-native').StyleProp<import('react-native').ViewStyle>;
    testID?: string;
  }

  interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm?: () => void;
    title?: React.ReactNode;
    children?: React.ReactNode;
    maxWidth?: AppModalSize;
    state?: AppModalState;
    position?: AppModalPosition;
    confirmText?: string;
    cancelText?: string;
    hideCancel?: boolean;
    hideBottom?: boolean;
    loading?: boolean;
    style?: import('react-native').StyleProp<import('react-native').ViewStyle>;
    overlayStyle?: import('react-native').StyleProp<import('react-native').ViewStyle>;
    panelStyle?: import('react-native').StyleProp<import('react-native').ViewStyle>;
    contentStyle?: import('react-native').StyleProp<import('react-native').ViewStyle>;
    testID?: string;
  }

  interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm?: () => void;
    title?: React.ReactNode;
    children?: React.ReactNode;
    size?: AppDrawerSize;
    confirmText?: string;
    cancelText?: string;
    hideBottom?: boolean;
    loading?: boolean;
    style?: import('react-native').StyleProp<import('react-native').ViewStyle>;
    overlayStyle?: import('react-native').StyleProp<import('react-native').ViewStyle>;
    panelStyle?: import('react-native').StyleProp<import('react-native').ViewStyle>;
    contentStyle?: import('react-native').StyleProp<import('react-native').ViewStyle>;
    testID?: string;
  }
}
