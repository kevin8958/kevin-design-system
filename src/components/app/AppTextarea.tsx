import { useState } from 'react';
import {
  StyleSheet,
  TextInput as NativeTextInput,
  View,
} from 'react-native';
import {
  AppFieldShell,
  appInputSizeStyles,
  useAppInputTheme,
} from '@/components/app/appInputUtils';

const AppTextarea = ({
  label,
  value,
  defaultValue = '',
  onChangeText,
  size = 'md',
  placeholder = '',
  required = false,
  disabled = false,
  error = false,
  errorMsg,
  helperText,
  minRows = 4,
  style,
  inputStyle,
  testID,
}: App.TextareaProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const resolvedValue = isControlled ? value : internalValue;
  const { colors } = useAppInputTheme();
  const metrics = appInputSizeStyles[size];
  const minHeight = Math.max(metrics.textareaMinHeight, minRows * metrics.lineHeight + 44);

  return (
    <AppFieldShell
      label={label}
      required={required}
      helperText={helperText}
      errorMsg={errorMsg}
      invalid={error}
      style={style}
      testID={testID}
    >
      <View
        style={[
          styles.frame,
          {
            backgroundColor: disabled ? colors.surfaceMuted : colors.surface,
            borderColor: error
              ? colors.borderInvalid
              : disabled
                ? colors.borderDisabled
                : colors.border,
            borderRadius: metrics.radius,
            minHeight,
            paddingHorizontal: metrics.paddingHorizontal,
            paddingVertical: 12,
          },
        ]}
      >
        <NativeTextInput
          accessibilityState={{ disabled }}
          editable={!disabled}
          multiline
          onChangeText={(nextValue) => {
            if (!isControlled) {
              setInternalValue(nextValue);
            }

            onChangeText?.(nextValue);
          }}
          placeholder={placeholder}
          placeholderTextColor={colors.placeholder}
          selectionColor={colors.accent}
          style={[
            styles.input,
            {
              color: disabled ? colors.textMuted : colors.text,
              fontSize: metrics.fontSize,
              lineHeight: metrics.lineHeight,
            },
            inputStyle,
          ]}
          testID={testID ? `${testID}-textarea` : undefined}
          textAlignVertical="top"
          value={resolvedValue}
        />
      </View>
    </AppFieldShell>
  );
};

const styles = StyleSheet.create({
  frame: {
    borderWidth: 1,
    width: '100%',
  },
  input: {
    minHeight: 96,
    paddingVertical: 0,
    width: '100%',
  },
});

export default AppTextarea;
