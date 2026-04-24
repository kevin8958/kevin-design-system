import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {
  AppFieldShell,
  appInputSizeStyles,
  useAppInputTheme,
} from '@/components/app/appInputUtils';
import { renderAppTextNode } from '@/components/app/appUtils';

const AppCheckbox = ({
  label,
  description,
  checked,
  defaultChecked = false,
  onChange,
  size = 'md',
  disabled = false,
  invalid = false,
  errorMsg,
  style,
  testID,
}: App.CheckboxProps) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isControlled = checked !== undefined;
  const resolvedChecked = isControlled ? checked : internalChecked;
  const { colors } = useAppInputTheme();
  const metrics = appInputSizeStyles[size];

  return (
    <AppFieldShell
      errorMsg={errorMsg}
      invalid={invalid}
      style={style}
      testID={testID}
    >
      <Pressable
        accessibilityRole="checkbox"
        accessibilityState={{ checked: resolvedChecked, disabled }}
        disabled={disabled}
        onPress={() => {
          const nextValue = !resolvedChecked;

          if (!isControlled) {
            setInternalChecked(nextValue);
          }

          onChange?.(nextValue);
        }}
        style={({ pressed }) => [
          styles.row,
          {
            opacity: disabled ? 0.45 : 1,
            backgroundColor: pressed ? colors.accentSubtle : 'transparent',
          },
        ]}
      >
        <View
          style={[
            styles.box,
            {
              backgroundColor: resolvedChecked ? colors.accent : colors.surface,
              borderColor: invalid
                ? colors.borderInvalid
                : resolvedChecked
                  ? colors.accent
                  : colors.border,
              borderRadius: metrics.radius - 8,
              height: metrics.indicatorSize,
              width: metrics.indicatorSize,
            },
          ]}
        >
          {resolvedChecked ? (
            <Text style={[styles.checkMark, { color: '#FFFFFF' }]}>✓</Text>
          ) : null}
        </View>
        <View style={styles.body}>
          {label
            ? renderAppTextNode(label, [styles.labelText, { color: colors.text }])
            : null}
          {description
            ? renderAppTextNode(description, [
                styles.descriptionText,
                { color: colors.helper },
              ])
            : null}
        </View>
      </Pressable>
    </AppFieldShell>
  );
};

const styles = StyleSheet.create({
  row: {
    alignItems: 'flex-start',
    borderRadius: 16,
    flexDirection: 'row',
    gap: 12,
    padding: 4,
  },
  box: {
    alignItems: 'center',
    borderWidth: 1.5,
    justifyContent: 'center',
    marginTop: 1,
  },
  checkMark: {
    fontSize: 12,
    fontWeight: '700',
  },
  body: {
    flex: 1,
    gap: 2,
    minWidth: 0,
  },
  labelText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
  descriptionText: {
    fontSize: 12,
    lineHeight: 17,
  },
});

export default AppCheckbox;
