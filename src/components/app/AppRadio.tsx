import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import {
  AppFieldShell,
  appInputSizeStyles,
  useAppInputTheme,
} from '@/components/app/appInputUtils';
import { renderAppTextNode } from '@/components/app/appUtils';

const AppRadio = ({
  title,
  options,
  value,
  defaultValue,
  onChange,
  size = 'md',
  invalid = false,
  errorMsg,
  disabled = false,
  style,
  testID,
}: App.RadioProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue ?? '');
  const isControlled = value !== undefined;
  const resolvedValue = isControlled ? value : internalValue;
  const { colors } = useAppInputTheme();
  const metrics = appInputSizeStyles[size];

  return (
    <AppFieldShell
      label={title}
      errorMsg={errorMsg}
      invalid={invalid}
      style={style}
      testID={testID}
    >
      <View style={styles.group}>
        {options.map((option) => {
          const isSelected = option.id === resolvedValue;
          const isDisabled = disabled || option.disabled;

          return (
            <Pressable
              key={option.id}
              accessibilityRole="radio"
              accessibilityState={{ selected: isSelected, disabled: isDisabled }}
              disabled={isDisabled}
              onPress={() => {
                if (isDisabled) return;

                if (!isControlled) {
                  setInternalValue(option.id);
                }

                onChange?.(option.id);
              }}
              style={({ pressed }) => [
                styles.optionRow,
                {
                  opacity: isDisabled ? 0.45 : 1,
                  backgroundColor: pressed ? colors.accentSubtle : 'transparent',
                },
              ]}
            >
              <View
                style={[
                  styles.outerCircle,
                  {
                    borderColor: invalid
                      ? colors.borderInvalid
                      : isSelected
                        ? colors.accent
                        : colors.border,
                    height: metrics.indicatorSize,
                    width: metrics.indicatorSize,
                  },
                ]}
              >
                {isSelected ? (
                  <View
                    style={[
                      styles.innerCircle,
                      {
                        backgroundColor: invalid ? colors.borderInvalid : colors.accent,
                        height: Math.max(metrics.indicatorSize - 10, 8),
                        width: Math.max(metrics.indicatorSize - 10, 8),
                      },
                    ]}
                  />
                ) : null}
              </View>
              <View style={styles.optionBody}>
                {renderAppTextNode(option.label, [
                  styles.optionLabel,
                  { color: colors.text },
                ])}
                {option.desc
                  ? renderAppTextNode(option.desc, [
                      styles.optionDescription,
                      { color: colors.helper },
                    ])
                  : null}
              </View>
            </Pressable>
          );
        })}
      </View>
    </AppFieldShell>
  );
};

const styles = StyleSheet.create({
  group: {
    gap: 8,
  },
  optionRow: {
    alignItems: 'flex-start',
    borderRadius: 16,
    flexDirection: 'row',
    gap: 12,
    padding: 4,
  },
  outerCircle: {
    alignItems: 'center',
    borderRadius: 999,
    borderWidth: 1.5,
    justifyContent: 'center',
    marginTop: 1,
  },
  innerCircle: {
    borderRadius: 999,
  },
  optionBody: {
    flex: 1,
    gap: 2,
    minWidth: 0,
  },
  optionLabel: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
  optionDescription: {
    fontSize: 12,
    lineHeight: 17,
  },
});

export default AppRadio;
