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
  type AppButtonGroupItem = {
    label: React.ReactNode;
    value: string;
    disabled?: boolean;
    testID?: string;
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
}
