namespace App {
  type AppStyleProp = import('react-native').StyleProp<
    import('react-native').ViewStyle
  >;
  type AppInputSize = 'sm' | 'md' | 'lg';
  type AppTextInputType = 'text' | 'password' | 'email' | 'number';
  type AppNavigationSize = 'sm' | 'md' | 'lg';
  type AppStepperOrientation = 'horizontal' | 'vertical';
  type AppSemanticColor =
    | 'neutral'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';
  type AppAvatarSize = 'sm' | 'md' | 'lg';
  type AppAvatarStatus = 'online' | 'offline' | 'busy';
  type AppLabelSize = 'sm' | 'md' | 'lg';
  type AppCardSize = 'sm' | 'md' | 'lg';
  type AppDescriptionListColumns = 1 | 2;
  type AppMetricTrend = 'up' | 'down' | 'neutral';
  type AppTooltipPosition = 'top' | 'right' | 'bottom' | 'left';
  type AppFeedbackVariant = 'info' | 'success' | 'warning' | 'danger';
  type AppProgressSize = 'sm' | 'md' | 'lg';
  type AppSkeletonVariant = 'line' | 'rect' | 'circle';
  type AppToastPlacement =
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
  type AppToastItem = {
    id: string;
    title: string;
    description?: string;
    variant?: AppFeedbackVariant;
    autoClose?: number;
    closable?: boolean;
  };
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
  type AppSelectOption = {
    label: React.ReactNode;
    value: string;
    description?: React.ReactNode;
    disabled?: boolean;
    icon?: React.ReactNode;
    keywords?: string[];
  };
  type AppRadioOption = {
    id: string;
    label: React.ReactNode;
    desc?: React.ReactNode;
    disabled?: boolean;
  };
  type AppUploadFileStatus = 'uploaded' | 'uploading' | 'error';
  type AppUploadFile = {
    id: string;
    name: string;
    sizeLabel?: string;
    status?: AppUploadFileStatus;
  };
  type AppStepperItem = {
    id: string;
    label: React.ReactNode;
    description?: React.ReactNode;
    disabled?: boolean;
  };
  type AppTabsItem = {
    id: string;
    label: React.ReactNode;
    content?: React.ReactNode;
    disabled?: boolean;
  };
  type AppBreadcrumbItem = {
    label: React.ReactNode;
    href?: string;
    onPress?: () => void;
    current?: boolean;
  };
  type AppDescriptionListItem = {
    label: string;
    value: React.ReactNode;
    hint?: React.ReactNode;
  };
  type AppTableColumn = {
    key: string;
    label: string;
    width?: number;
  };
  type AppTableRow = Record<string, React.ReactNode> & {
    id?: string;
  };
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

  interface TextInputProps {
    label?: React.ReactNode;
    value?: string;
    defaultValue?: string;
    onChangeText?: (value: string) => void;
    type?: AppTextInputType;
    size?: AppInputSize;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    error?: boolean;
    errorMsg?: React.ReactNode;
    helperText?: React.ReactNode;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    style?: AppStyleProp;
    inputStyle?: import('react-native').StyleProp<import('react-native').TextStyle>;
    testID?: string;
  }

  interface TextareaProps {
    label?: React.ReactNode;
    value?: string;
    defaultValue?: string;
    onChangeText?: (value: string) => void;
    size?: AppInputSize;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    error?: boolean;
    errorMsg?: React.ReactNode;
    helperText?: React.ReactNode;
    minRows?: number;
    style?: AppStyleProp;
    inputStyle?: import('react-native').StyleProp<import('react-native').TextStyle>;
    testID?: string;
  }

  interface SelectProps {
    label?: React.ReactNode;
    options: AppSelectOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    size?: AppInputSize;
    disabled?: boolean;
    invalid?: boolean;
    errorMsg?: React.ReactNode;
    helperText?: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    style?: AppStyleProp;
    triggerStyle?: AppStyleProp;
    panelStyle?: AppStyleProp;
    optionStyle?: AppStyleProp;
    testID?: string;
  }

  interface ComboboxProps {
    label?: React.ReactNode;
    options: AppSelectOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    queryPlaceholder?: string;
    emptyText?: React.ReactNode;
    size?: AppInputSize;
    disabled?: boolean;
    invalid?: boolean;
    errorMsg?: React.ReactNode;
    helperText?: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    style?: AppStyleProp;
    triggerStyle?: AppStyleProp;
    panelStyle?: AppStyleProp;
    optionStyle?: AppStyleProp;
    testID?: string;
  }

  interface CheckboxProps {
    label?: React.ReactNode;
    description?: React.ReactNode;
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    size?: AppInputSize;
    disabled?: boolean;
    invalid?: boolean;
    errorMsg?: React.ReactNode;
    style?: AppStyleProp;
    testID?: string;
  }

  interface RadioProps {
    title?: React.ReactNode;
    options: AppRadioOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    size?: AppInputSize;
    invalid?: boolean;
    errorMsg?: React.ReactNode;
    disabled?: boolean;
    style?: AppStyleProp;
    testID?: string;
  }

  interface SwitchProps {
    label?: React.ReactNode;
    description?: React.ReactNode;
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    size?: AppInputSize;
    disabled?: boolean;
    invalid?: boolean;
    errorMsg?: React.ReactNode;
    style?: AppStyleProp;
    testID?: string;
  }

  interface DatePickerProps {
    label?: React.ReactNode;
    value?: Date | null;
    defaultValue?: Date | null;
    onChange?: (
      value: Date | null | [Date | null, Date | null],
    ) => void;
    isRange?: boolean;
    startDate?: Date | null;
    endDate?: Date | null;
    defaultRange?: [Date | null, Date | null];
    variant?: AppButtonVariant;
    size?: AppInputSize;
    isError?: boolean;
    errorMsg?: React.ReactNode;
    helperText?: React.ReactNode;
    minDate?: Date;
    maxDate?: Date;
    disabled?: boolean;
    placeholder?: string;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    style?: AppStyleProp;
    panelStyle?: AppStyleProp;
    testID?: string;
  }

  interface UploadDropzoneProps {
    label?: React.ReactNode;
    description?: React.ReactNode;
    files?: AppUploadFile[];
    defaultFiles?: AppUploadFile[];
    onPressSelect?: () => void;
    onRemoveFile?: (id: string) => void;
    multiple?: boolean;
    disabled?: boolean;
    error?: boolean;
    errorMsg?: React.ReactNode;
    helperText?: React.ReactNode;
    selectLabel?: React.ReactNode;
    style?: AppStyleProp;
    dropzoneStyle?: AppStyleProp;
    testID?: string;
  }

  interface PaginationProps {
    currentPage: number;
    totalPages: number;
    siblingCount?: number;
    disabled?: boolean;
    onPageChange?: (page: number) => void;
    style?: AppStyleProp;
    itemStyle?: AppStyleProp;
    testID?: string;
  }

  interface StepperProps {
    items: AppStepperItem[];
    value: string;
    onChange?: (id: string) => void;
    size?: AppNavigationSize;
    orientation?: AppStepperOrientation;
    allowStepPress?: boolean;
    style?: AppStyleProp;
    itemStyle?: AppStyleProp;
    testID?: string;
  }

  interface TabsProps {
    items: AppTabsItem[];
    value: string;
    onChange?: (id: string) => void;
    disabled?: boolean;
    size?: AppNavigationSize;
    style?: AppStyleProp;
    listStyle?: AppStyleProp;
    tabStyle?: AppStyleProp;
    panelStyle?: AppStyleProp;
    testID?: string;
  }

  interface BreadcrumbProps {
    items: AppBreadcrumbItem[];
    separator?: React.ReactNode;
    style?: AppStyleProp;
    itemStyle?: AppStyleProp;
    testID?: string;
  }

  interface AvatarProps {
    src?: string;
    name?: string;
    alt?: string;
    size?: AppAvatarSize;
    status?: AppAvatarStatus;
    onPress?: () => void;
    style?: AppStyleProp;
    testID?: string;
  }

  interface BadgeProps {
    label: string;
    size?: AppLabelSize;
    variant?: AppSemanticColor;
    style?: AppStyleProp;
    testID?: string;
  }

  interface TagProps {
    label: string;
    size?: AppLabelSize;
    variant?: 'neutral' | 'primary';
    style?: AppStyleProp;
    testID?: string;
  }

  interface DescriptionListProps {
    items: AppDescriptionListItem[];
    size?: AppCardSize;
    columns?: AppDescriptionListColumns;
    style?: AppStyleProp;
    itemStyle?: AppStyleProp;
    testID?: string;
  }

  interface EmptyStateProps {
    title: React.ReactNode;
    description?: React.ReactNode;
    icon?: React.ReactNode;
    primaryAction?: React.ReactNode;
    secondaryAction?: React.ReactNode;
    size?: AppCardSize;
    style?: AppStyleProp;
    testID?: string;
  }

  interface MetricCardProps {
    title: string;
    value: number;
    change?: number;
    size?: AppCardSize;
    trend?: AppMetricTrend;
    prefix?: string;
    suffix?: string;
    changeSuffix?: string;
    decimals?: number;
    changeDecimals?: number;
    style?: AppStyleProp;
    testID?: string;
  }

  interface TableProps {
    columns: AppTableColumn[];
    data: AppTableRow[];
    emptyState?: React.ReactNode;
    style?: import('react-native').StyleProp<import('react-native').ViewStyle>;
    testID?: string;
  }

  interface TooltipProps {
    content: React.ReactNode;
    children: React.ReactNode;
    position?: AppTooltipPosition;
    color?: AppSemanticColor;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    style?: AppStyleProp;
    contentStyle?: AppStyleProp;
    testID?: string;
  }

  interface AlertProps {
    title: React.ReactNode;
    description?: React.ReactNode;
    variant?: AppFeedbackVariant;
    closable?: boolean;
    onClose?: () => void;
    style?: AppStyleProp;
    testID?: string;
  }

  interface ProgressProps {
    value: number;
    max?: number;
    size?: AppProgressSize;
    showValue?: boolean;
    style?: AppStyleProp;
    trackStyle?: AppStyleProp;
    indicatorStyle?: AppStyleProp;
    testID?: string;
  }

  interface SkeletonProps {
    width?: number | string;
    height?: number | string;
    variant?: AppSkeletonVariant;
    animated?: boolean;
    style?: AppStyleProp;
    testID?: string;
  }

  interface ToastProps {
    title: string;
    description?: string;
    variant?: AppFeedbackVariant;
    placement?: AppToastPlacement;
    autoClose?: number;
    stackIndex?: number;
    closable?: boolean;
    onClose?: () => void;
    style?: AppStyleProp;
    testID?: string;
  }

  interface ToastViewportProps {
    toasts: AppToastItem[];
    placement?: AppToastPlacement;
    onClose?: (id: string) => void;
    style?: AppStyleProp;
    testID?: string;
  }

  interface ToastContextValue {
    showToast: (toast: Omit<AppToastItem, 'id'> & { id?: string }) => string;
    dismissToast: (id: string) => void;
    clearToasts: () => void;
    toasts: AppToastItem[];
  }

  interface ToastProviderProps {
    children?: React.ReactNode;
    placement?: AppToastPlacement;
    maxVisible?: number;
  }
}
