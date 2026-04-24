import { useMemo, useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  AppFieldShell,
  appInputSizeStyles,
  renderAccessoryNode,
  stringifyAppNode,
  useAppInputTheme,
} from '@/components/app/appInputUtils';

const getPanelHeight = (optionCount: number) => Math.min(optionCount * 52 + 16, 228);

const AppSelect = ({
  label,
  options,
  value,
  defaultValue,
  onChange,
  placeholder = 'Select option',
  size = 'md',
  disabled = false,
  invalid = false,
  errorMsg,
  helperText,
  open,
  defaultOpen = false,
  onOpenChange,
  style,
  triggerStyle,
  panelStyle,
  optionStyle,
  testID,
}: App.SelectProps) => {
  const { colors } = useAppInputTheme();
  const metrics = appInputSizeStyles[size];
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const resolvedValue = isControlled ? value : internalValue;
  const isOpen = open ?? internalOpen;
  const selectedOption = useMemo(
    () => options.find((option) => option.value === resolvedValue),
    [options, resolvedValue],
  );
  const panelHeight = getPanelHeight(options.length);

  const setOpen = (nextOpen: boolean) => {
    if (open === undefined) {
      setInternalOpen(nextOpen);
    }

    onOpenChange?.(nextOpen);
  };

  return (
    <AppFieldShell
      label={label}
      helperText={helperText}
      errorMsg={errorMsg}
      invalid={invalid}
      style={style}
      testID={testID}
    >
      <View style={[styles.root, isOpen && { paddingBottom: panelHeight + 12 }]}>
        <Pressable
          accessibilityRole="button"
          accessibilityState={{ disabled, expanded: isOpen }}
          disabled={disabled}
          onPress={() => {
            if (!disabled) {
              setOpen(!isOpen);
            }
          }}
          style={({ pressed }) => [
            styles.trigger,
            {
              backgroundColor: disabled
                ? colors.surfaceMuted
                : pressed
                  ? colors.accentSubtle
                  : colors.surface,
              borderColor: invalid
                ? colors.borderInvalid
                : isOpen
                  ? colors.accent
                  : disabled
                    ? colors.borderDisabled
                    : colors.border,
              borderRadius: metrics.radius,
              minHeight: metrics.fieldHeight,
              paddingHorizontal: metrics.paddingHorizontal,
            },
            triggerStyle,
          ]}
        >
          <View style={styles.valueWrap}>
            {selectedOption ? (
              renderAccessoryNode(
                selectedOption.label,
                disabled ? colors.textMuted : colors.text,
                metrics.fontSize,
              )
            ) : (
              <Text
                style={[
                  styles.placeholderText,
                  {
                    color: colors.placeholder,
                    fontSize: metrics.fontSize,
                  },
                ]}
              >
                {placeholder}
              </Text>
            )}
          </View>
          <Text
            style={[
              styles.chevron,
              {
                color: disabled ? colors.placeholder : colors.textMuted,
                fontSize: metrics.iconSize,
              },
            ]}
          >
            {isOpen ? '▴' : '▾'}
          </Text>
        </Pressable>

        {isOpen ? (
          <View
            style={[
              styles.panelWrap,
              {
                maxHeight: panelHeight,
              },
            ]}
          >
            <View
              style={[
                styles.panel,
                {
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                  borderRadius: metrics.radius,
                },
                panelStyle,
              ]}
            >
              <ScrollView>
                {options.map((option) => {
                  const isSelected = option.value === resolvedValue;

                  return (
                    <Pressable
                      key={option.value}
                      accessibilityRole="button"
                      accessibilityState={{
                        disabled: option.disabled,
                        selected: isSelected,
                      }}
                      disabled={option.disabled}
                      onPress={() => {
                        if (option.disabled) return;

                        if (!isControlled) {
                          setInternalValue(option.value);
                        }

                        onChange?.(option.value);
                        setOpen(false);
                      }}
                      style={({ pressed }) => [
                        styles.optionRow,
                        {
                          backgroundColor: pressed
                            ? colors.accentSubtle
                            : 'transparent',
                          opacity: option.disabled ? 0.4 : 1,
                        },
                        optionStyle,
                      ]}
                    >
                      <View style={styles.optionBody}>
                        {option.icon ? (
                          <View style={styles.optionIconSlot}>
                            {renderAccessoryNode(
                              option.icon,
                              colors.textMuted,
                              metrics.iconSize,
                            )}
                          </View>
                        ) : null}
                        <View style={styles.optionTextWrap}>
                          {renderAccessoryNode(
                            option.label,
                            colors.text,
                            metrics.fontSize,
                          )}
                          {option.description ? (
                            <Text
                              style={[
                                styles.optionDescription,
                                { color: colors.helper },
                              ]}
                            >
                              {stringifyAppNode(option.description)}
                            </Text>
                          ) : null}
                        </View>
                      </View>
                      {isSelected ? (
                        <Text style={[styles.checkText, { color: colors.accent }]}>
                          ✓
                        </Text>
                      ) : null}
                    </Pressable>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        ) : null}
      </View>
    </AppFieldShell>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
  },
  trigger: {
    alignItems: 'center',
    borderWidth: 1,
    flexDirection: 'row',
    gap: 10,
    width: '100%',
  },
  valueWrap: {
    flex: 1,
    minWidth: 0,
  },
  placeholderText: {
    fontWeight: '400',
  },
  chevron: {
    fontWeight: '700',
  },
  panelWrap: {
    left: 0,
    position: 'absolute',
    right: 0,
    top: '100%',
    zIndex: 20,
  },
  panel: {
    borderWidth: 1,
    marginTop: 8,
    overflow: 'hidden',
    paddingVertical: 8,
  },
  optionRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    minHeight: 46,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  optionBody: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    minWidth: 0,
  },
  optionIconSlot: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 18,
  },
  optionTextWrap: {
    flex: 1,
    gap: 2,
    minWidth: 0,
  },
  optionDescription: {
    fontSize: 12,
    lineHeight: 17,
  },
  checkText: {
    fontSize: 15,
    fontWeight: '700',
  },
});

export default AppSelect;
