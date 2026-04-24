import { useMemo, useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  AppFieldShell,
  appInputSizeStyles,
  formatAppDate,
  formatRangeLabel,
  getMonthMatrix,
  isDateDisabled,
  isDateInRange,
  isSameDate,
  useAppInputTheme,
} from '@/components/app/appInputUtils';

const weekdayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const sizeMaxWidth = {
  sm: 280,
  md: 308,
  lg: 336,
} satisfies Record<App.AppInputSize, number>;

const AppDatePicker = ({
  label,
  value,
  defaultValue = null,
  onChange,
  isRange = false,
  startDate,
  endDate,
  defaultRange = [null, null],
  variant = 'outline',
  size = 'md',
  isError = false,
  errorMsg,
  helperText,
  minDate,
  maxDate,
  disabled = false,
  placeholder = 'Select date',
  open,
  defaultOpen = false,
  onOpenChange,
  style,
  panelStyle,
  testID,
}: App.DatePickerProps) => {
  const { colors } = useAppInputTheme();
  const metrics = appInputSizeStyles[size];
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const [internalValue, setInternalValue] = useState<Date | null>(defaultValue);
  const [internalRange, setInternalRange] = useState<[Date | null, Date | null]>(defaultRange);
  const resolvedSingleValue = value ?? internalValue;
  const resolvedRangeStart = startDate ?? internalRange[0];
  const resolvedRangeEnd = endDate ?? internalRange[1];
  const initialMonth = resolvedSingleValue ?? resolvedRangeStart ?? new Date();
  const [monthDate, setMonthDate] = useState(
    new Date(initialMonth.getFullYear(), initialMonth.getMonth(), 1),
  );
  const isOpen = open ?? internalOpen;
  const days = useMemo(() => getMonthMatrix(monthDate), [monthDate]);

  const setOpen = (nextOpen: boolean) => {
    if (open === undefined) {
      setInternalOpen(nextOpen);
    }

    onOpenChange?.(nextOpen);
  };

  const displayLabel = isRange
    ? formatRangeLabel(resolvedRangeStart, resolvedRangeEnd)
    : formatAppDate(resolvedSingleValue);

  const triggerBackground =
    variant === 'contain'
      ? colors.surfaceMuted
      : variant === 'clear'
        ? 'transparent'
        : colors.surface;

  const triggerBorderColor =
    isError ? colors.borderInvalid : isOpen ? colors.accent : colors.border;

  const panelHeight = 320;

  return (
    <AppFieldShell
      label={label}
      helperText={helperText}
      errorMsg={errorMsg}
      invalid={isError}
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
              backgroundColor: pressed ? colors.accentSubtle : triggerBackground,
              borderColor: disabled ? colors.borderDisabled : triggerBorderColor,
              borderRadius: metrics.radius,
              minHeight: metrics.fieldHeight,
              paddingHorizontal: metrics.paddingHorizontal,
            },
          ]}
        >
          <Text
            style={[
              styles.triggerLabel,
              {
                color: displayLabel ? colors.text : colors.placeholder,
                fontSize: metrics.fontSize,
              },
            ]}
          >
            {displayLabel || placeholder}
          </Text>
          <Text style={[styles.triggerIcon, { color: colors.textMuted }]}>📅</Text>
        </Pressable>

        {isOpen ? (
          <View style={[styles.panelWrap, { maxWidth: sizeMaxWidth[size] }]}>
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
              <View style={styles.header}>
                <Pressable
                  accessibilityRole="button"
                  onPress={() =>
                    setMonthDate(
                      new Date(monthDate.getFullYear(), monthDate.getMonth() - 1, 1),
                    )
                  }
                  style={({ pressed }) => [
                    styles.headerButton,
                    { backgroundColor: pressed ? colors.accentSubtle : 'transparent' },
                  ]}
                >
                  <Text style={[styles.headerButtonText, { color: colors.text }]}>
                    ‹
                  </Text>
                </Pressable>
                <Text style={[styles.headerTitle, { color: colors.text }]}>
                  {monthDate.toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </Text>
                <Pressable
                  accessibilityRole="button"
                  onPress={() =>
                    setMonthDate(
                      new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 1),
                    )
                  }
                  style={({ pressed }) => [
                    styles.headerButton,
                    { backgroundColor: pressed ? colors.accentSubtle : 'transparent' },
                  ]}
                >
                  <Text style={[styles.headerButtonText, { color: colors.text }]}>
                    ›
                  </Text>
                </Pressable>
              </View>

              <View style={styles.weekdayRow}>
                {weekdayLabels.map((labelText) => (
                  <Text
                    key={labelText}
                    style={[styles.weekdayText, { color: colors.helper }]}
                  >
                    {labelText}
                  </Text>
                ))}
              </View>

              <View style={styles.grid}>
                {days.map((date) => {
                  const outsideMonth = date.getMonth() !== monthDate.getMonth();
                  const disabledDate =
                    outsideMonth || isDateDisabled(date, minDate, maxDate);
                  const isSelected = isRange
                    ? isSameDate(date, resolvedRangeStart) ||
                      isSameDate(date, resolvedRangeEnd)
                    : isSameDate(date, resolvedSingleValue);
                  const isInRange = isRange
                    ? isDateInRange(date, resolvedRangeStart, resolvedRangeEnd)
                    : false;

                  return (
                    <Pressable
                      key={date.toISOString()}
                      accessibilityRole="button"
                      accessibilityState={{ disabled: disabledDate, selected: isSelected }}
                      disabled={disabledDate}
                      onPress={() => {
                        if (disabledDate) return;

                        if (!isRange) {
                          if (value === undefined) {
                            setInternalValue(date);
                          }

                          onChange?.(date);
                          setOpen(false);
                          return;
                        }

                        const currentStart = resolvedRangeStart;
                        const currentEnd = resolvedRangeEnd;

                        if (!currentStart || (currentStart && currentEnd)) {
                          if (startDate === undefined || endDate === undefined) {
                            setInternalRange([date, null]);
                          }
                          onChange?.([date, null]);
                          return;
                        }

                        if (date.getTime() < currentStart.getTime()) {
                          if (startDate === undefined || endDate === undefined) {
                            setInternalRange([date, currentStart]);
                          }
                          onChange?.([date, currentStart]);
                          setOpen(false);
                          return;
                        }

                        if (startDate === undefined || endDate === undefined) {
                          setInternalRange([currentStart, date]);
                        }
                        onChange?.([currentStart, date]);
                        setOpen(false);
                      }}
                      style={({ pressed }) => [
                        styles.dayCell,
                        isInRange && { backgroundColor: colors.accentSubtle },
                        pressed && !disabledDate && { backgroundColor: colors.accentSubtle },
                      ]}
                    >
                      <View
                        style={[
                          styles.dayBadge,
                          isSelected && {
                            backgroundColor: isError ? colors.borderInvalid : colors.accent,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.dayText,
                            {
                              color: disabledDate
                                ? colors.placeholder
                                : isSelected
                                  ? '#FFFFFF'
                                  : outsideMonth
                                    ? colors.placeholder
                                    : colors.text,
                            },
                          ]}
                        >
                          {date.getDate()}
                        </Text>
                      </View>
                    </Pressable>
                  );
                })}
              </View>
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
    justifyContent: 'space-between',
    width: '100%',
  },
  triggerLabel: {
    flex: 1,
    fontWeight: '400',
  },
  triggerIcon: {
    fontSize: 16,
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
    padding: 12,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  headerButton: {
    alignItems: 'center',
    borderRadius: 12,
    height: 32,
    justifyContent: 'center',
    width: 32,
  },
  headerButtonText: {
    fontSize: 18,
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: '600',
  },
  weekdayRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  weekdayText: {
    flex: 1,
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayCell: {
    alignItems: 'center',
    borderRadius: 14,
    justifyContent: 'center',
    marginVertical: 2,
    width: '14.2857%',
  },
  dayBadge: {
    alignItems: 'center',
    borderRadius: 999,
    height: 36,
    justifyContent: 'center',
    width: 36,
  },
  dayText: {
    fontSize: 13,
    fontWeight: '500',
  },
});

export default AppDatePicker;
