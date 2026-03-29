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
    id?: string; // useId 대응을 위해 선택사항으로 변경 권장
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    size?: CheckboxSize;
    onChange?: (data: { id: string; checked: boolean }) => void;
  }
}
