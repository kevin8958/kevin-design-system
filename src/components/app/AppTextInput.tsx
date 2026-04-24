import { useState } from 'react';
import {
  StyleSheet,
  TextInput as NativeTextInput,
  View,
} from 'react-native';
import {
  AppFieldShell,
  appInputSizeStyles,
  renderAccessoryNode,
  resolveKeyboardType,
  useAppInputTheme,
} from '@/components/app/appInputUtils';

const AppTextInput = ({
  label,
  value,
  defaultValue = '',
  onChangeText,
  type = 'text',
  size = 'md',
  placeholder = '',
  required = false,
  disabled = false,
  error = false,
  errorMsg,
  helperText,
  prefix,
  suffix,
  style,
  inputStyle,
  testID,
}: App.TextInputProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const resolvedValue = isControlled ? value : internalValue;
  const { colors } = useAppInputTheme();
  const metrics = appInputSizeStyles[size];

  const borderColor = error
    ? colors.borderInvalid
    : disabled
      ? colors.borderDisabled
      : colors.border;

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
            borderColor,
            borderRadius: metrics.radius,
            minHeight: metrics.fieldHeight,
            paddingHorizontal: metrics.paddingHorizontal,
          },
        ]}
      >
        {prefix ? (
          <View style={styles.affixSlot}>
            {renderAccessoryNode(prefix, colors.textMuted, metrics.fontSize)}
          </View>
        ) : null}
        <NativeTextInput
          accessibilityState={{ disabled }}
          editable={!disabled}
          keyboardType={resolveKeyboardType(type)}
          onChangeText={(nextValue) => {
            if (!isControlled) {
              setInternalValue(nextValue);
            }

            onChangeText?.(nextValue);
          }}
          placeholder={placeholder}
          placeholderTextColor={colors.placeholder}
          secureTextEntry={type === 'password'}
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
          testID={testID ? `${testID}-input` : undefined}
          value={resolvedValue}
        />
        {suffix ? (
          <View style={styles.affixSlot}>
            {renderAccessoryNode(suffix, colors.textMuted, metrics.fontSize)}
          </View>
        ) : null}
      </View>
    </AppFieldShell>
  );
};

const styles = StyleSheet.create({
  frame: {
    alignItems: 'center',
    borderWidth: 1,
    flexDirection: 'row',
    gap: 10,
    width: '100%',
  },
  input: {
    flex: 1,
    minWidth: 0,
    paddingVertical: 0,
  },
  affixSlot: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 16,
  },
});

export default AppTextInput;
