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

  /** Checkbox */
  type CheckboxSize = 'sm' | 'md' | 'lg';

  interface CheckboxProps {
    classes?: string;
    id?: string;
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    invalid?: boolean;
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
}
