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
}
