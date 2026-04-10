namespace Input {
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
    onChange?: (files: File[]) => void;
  }
}
