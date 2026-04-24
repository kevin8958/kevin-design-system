import { useMemo, useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput as NativeTextInput,
  View,
} from 'react-native';
import {
  AppFieldShell,
  appInputSizeStyles,
  renderAccessoryNode,
  stringifyAppNode,
  useAppInputTheme,
} from '@/components/app/appInputUtils';

const getPanelHeight = (optionCount: number) => Math.min(optionCount * 52 + 72, 268);

const AppCombobox = ({
  label,
  options,
  value,
  defaultValue,
  onChange,
  placeholder = 'Select option',
  queryPlaceholder = 'Search',
  emptyText = 'No matching options',
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
}: App.ComboboxProps) => {
  const { colors } = useAppInputTheme();
  const metrics = appInputSizeStyles[size];
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [query, setQuery] = useState('');
  const isControlled = value !== undefined;
  const resolvedValue = isControlled ? value : internalValue;
  const isOpen = open ?? internalOpen;
  const selectedOption = options.find((option) => option.value === resolvedValue);
  const filteredOptions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) return options;

    return options.filter((option) => {
      const haystack = [
        stringifyAppNode(option.label),
        stringifyAppNode(option.description),
        ...(option.keywords ?? []),
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [options, query]);
  const panelHeight = getPanelHeight(filteredOptions.length);

  const setOpen = (nextOpen: boolean) => {
    if (open === undefined) {
      setInternalOpen(nextOpen);
    }

    if (!nextOpen) {
      setQuery('');
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
          <View style={[styles.panelWrap, { maxHeight: panelHeight }]}>
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
              <View style={styles.searchWrap}>
                <NativeTextInput
                  autoFocus
                  onChangeText={setQuery}
                  placeholder={queryPlaceholder}
                  placeholderTextColor={colors.placeholder}
                  selectionColor={colors.accent}
                  style={[
                    styles.searchInput,
                    {
                      backgroundColor: colors.surfaceMuted,
                      borderColor: colors.border,
                      color: colors.text,
                      fontSize: metrics.fontSize,
                    },
                  ]}
                  value={query}
                />
              </View>

              {filteredOptions.length === 0 ? (
                <View style={styles.emptyState}>
                  <Text style={[styles.emptyText, { color: colors.helper }]}>
                    {emptyText}
                  </Text>
                </View>
              ) : (
                <ScrollView>
                  {filteredOptions.map((option) => {
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
                        {isSelected ? (
                          <Text style={[styles.checkText, { color: colors.accent }]}>
                            ✓
                          </Text>
                        ) : null}
                      </Pressable>
                    );
                  })}
                </ScrollView>
              )}
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
    paddingBottom: 8,
  },
  searchWrap: {
    padding: 10,
  },
  searchInput: {
    borderRadius: 12,
    borderWidth: 1,
    minHeight: 40,
    paddingHorizontal: 12,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 120,
    paddingHorizontal: 16,
  },
  emptyText: {
    fontSize: 13,
    textAlign: 'center',
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

export default AppCombobox;
