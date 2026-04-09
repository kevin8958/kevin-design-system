namespace Mobile {
  type MobileItem = {
    id: string;
    label: string;
    icon?: React.ReactNode;
    badge?: string | number;
    description?: string;
    disabled?: boolean;
    active?: boolean;
  };

  /** BottomNavigation */
  interface BottomNavigationProps {
    items: MobileItem[];
    value: string;
    onChange?: (id: string) => void;
    classes?: string;
  }

  /** TopAppBar */
  type TopAppBarAlign = 'left' | 'center';

  interface TopAppBarProps {
    title: string;
    subtitle?: string;
    align?: TopAppBarAlign;
    leading?: React.ReactNode;
    actions?: React.ReactNode;
    classes?: string;
  }

  /** BottomSheet */
  type BottomSheetSize = 'sm' | 'md' | 'lg' | 'full';

  interface BottomSheetProps {
    isOpen: boolean;
    onClose?: () => void;
    title?: string;
    description?: string;
    children?: React.ReactNode;
    footer?: React.ReactNode;
    size?: BottomSheetSize;
    showDragHandle?: boolean;
    contained?: boolean;
    classes?: string;
    overlayClasses?: string;
  }

  /** NavDrawer */
  type NavDrawerSize = 'sm' | 'md';

  interface NavDrawerProps {
    isOpen: boolean;
    onClose?: () => void;
    onChange?: (id: string) => void;
    title?: string;
    subtitle?: string;
    items: MobileItem[];
    footer?: React.ReactNode;
    size?: NavDrawerSize;
    contained?: boolean;
    classes?: string;
    overlayClasses?: string;
  }

  type MobileNavDrawerSize = NavDrawerSize;
  type MobileNavDrawerProps = NavDrawerProps;
}
