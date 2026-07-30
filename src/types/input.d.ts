namespace Input {
  /** Shared focus outline color for TextInput, Textarea, Select, and Datepicker. */
  type FocusColor =
    | 'primary'
    | 'neutral'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';

  /** TextInput */
  type TextInputSize = 'sm' | 'md' | 'lg';
  type TextInputType = 'text' | 'password' | 'email' | 'number';
  interface TextInputProps {
    label?: string;
    placeholder?: string;
    id?: string;
    classes?: string;
    type?: TextInputType;
    value?: string;
    max?: number;
    size?: TextInputSize;
    required?: boolean;
    disabled?: boolean;
    error?: boolean;
    errorMsg?: string;
    focusColor?: FocusColor;
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
    prefix?: string | ReactNode;
    suffix?: string | ReactNode;
    autoFocus?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  }

  /** Textarea */
  type TextareaSize = 'sm' | 'md' | 'lg';
  type TextareaResize = 'none' | 'vertical' | 'both';
  interface TextareaProps {
    label?: string;
    placeholder?: string;
    id?: string;
    classes?: string;
    value?: string;
    size?: TextareaSize;
    rows?: number;
    maxLength?: number;
    required?: boolean;
    disabled?: boolean;
    error?: boolean;
    errorMsg?: string;
    focusColor?: FocusColor;
    resize?: TextareaResize;
    autoFocus?: boolean;
    textareaProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  }

  /** Select */
  type SelectOption = {
    label: string;
    value: string;
    disabled?: boolean;
  };

  type SelectSize = 'sm' | 'md' | 'lg';

  interface SelectProps {
    label?: string;
    placeholder?: string;
    id?: string;
    classes?: string;
    value?: string;
    size?: SelectSize;
    disabled?: boolean;
    invalid?: boolean;
    errorMsg?: string;
    focusColor?: FocusColor;
    options: SelectOption[];
    onChange?: (value: string) => void;
  }

  /** Combobox */
  type ComboboxOption = {
    label: string;
    value: string;
    description?: string;
    keywords?: string[];
    disabled?: boolean;
  };

  type ComboboxSize = 'sm' | 'md' | 'lg';

  interface ComboboxProps {
    label?: string;
    placeholder?: string;
    id?: string;
    classes?: string;
    value?: string;
    size?: ComboboxSize;
    disabled?: boolean;
    invalid?: boolean;
    errorMsg?: string;
    options: ComboboxOption[];
    emptyText?: string;
    /** Caps the option list's height to roughly this many rows before it scrolls, measured from the actual rendered rows. */
    maxVisibleOptions?: number;
    onChange?: (value: string) => void;
  }

  /** Checkbox */
  type CheckboxSize = 'sm' | 'md' | 'lg';

  interface CheckboxProps {
    classes?: string;
    id?: string;
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    errorMsg?: string;
    size?: CheckboxSize;
    onChange?: (data: { id: string; checked: boolean }) => void;
  }

  /** Radio */
  type RadioOption = {
    id: string;
    label: string;
    desc?: string;
    disabled?: boolean;
  };

  type RadioSize = 'sm' | 'md' | 'lg';

  interface RadioProps {
    title?: string;
    options: RadioOption[];
    value: string;
    size?: RadioSize;
    onChange: (value: string) => void;
    classes?: string;
    disabled?: boolean;
    invalid?: boolean;
    errorMsg?: string;
    name?: string;
  }

  /** Switch */
  type SwitchSize = 'sm' | 'md' | 'lg';

  interface SwitchProps extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'onChange'
  > {
    label?: string;
    description?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    invalid?: boolean;
    errorMsg?: string;
    size?: SwitchSize;
  }

  /** Datepicker */
  type DatepickerType = 'single' | 'range';
  type DatepickerSize = 'sm' | 'md' | 'lg';
  type DatepickerVariant = 'outline' | 'contain' | 'clear';
  interface DatepickerProps {
    classes?: string;
    type?: DatepickerType;
    variant?: DatepickerVariant;
    value: Date | null;
    minDate?: Date;
    maxDate?: Date;
    isError?: boolean;
    errorMsg?: string;
    focusColor?: FocusColor;
    isNullable?: boolean;
    isFilter?: boolean;
    placeholder?: string;
    isRange?: boolean;
    isMultiple?: boolean;
    startDate?: Date;
    endDate?: Date;
    size?: DatepickerSize;
    disabled?: boolean;
    hideHeaderButtons?: boolean;
    /** dayjs format string for the displayed value, e.g. 'YYYY년 MM월 DD일'. Defaults to 'MMM D, YYYY'. */
    dateFormat?: string;
    onChange?: (
      update: Date | null | [Date | null, Date | null] | Date[],
    ) => void;
  }

  /** UploadDropzone */
  interface UploadDropzoneProps {
    label?: string;
    description?: string;
    helperText?: string;
    classes?: string;
    accept?: string;
    multiple?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    errorMsg?: string;
    files?: File[];
    maxFiles?: number;
    /** Compact, language-neutral layout: drops the default English heading, helper copy, "Accepted:" line, and Browse button, keeping just the icon (and the file list once files are selected). Any `helperText` you pass still renders. */
    simple?: boolean;
    /** Overrides the default "Drag file(s) here or browse" heading shown when no files are selected. */
    dragText?: string;
    /** Overrides the "{n} file(s) selected" heading. Receives the selected file count so plural forms can be localized. */
    selectedText?: (count: number) => string;
    /** Overrides the "Browse Files" button label. */
    browseButtonText?: string;
    /** Overrides the "Accepted: {accept}" caption. Receives the `accept` value. */
    acceptedText?: (accept: string) => string;
    /** Overrides the remove button's aria-label. Receives the file name. */
    removeFileLabel?: (fileName: string) => string;
    /** Overrides the dropzone's fallback aria-label, used when `label` isn't provided. */
    uploadAriaLabel?: string;
    onChange?: (files: File[]) => void;
  }
}
