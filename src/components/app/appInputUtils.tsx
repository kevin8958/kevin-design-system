import type { ReactNode } from 'react';
import { StyleSheet, Text, View, type KeyboardTypeOptions } from 'react-native';
import { isPrimitiveAppNode, renderAppTextNode, useResolvedAppScheme } from '@/components/app/appUtils';

export type AppInputPalette = {
  surface: string;
  surfaceMuted: string;
  surfaceRaised: string;
  border: string;
  borderStrong: string;
  borderInvalid: string;
  borderDisabled: string;
  text: string;
  textMuted: string;
  label: string;
  placeholder: string;
  helper: string;
  error: string;
  accent: string;
  accentSubtle: string;
  accentStrong: string;
  success: string;
  warning: string;
};

export const appInputPalette: Record<'light' | 'dark', AppInputPalette> = {
  light: {
    surface: '#FFFFFF',
    surfaceMuted: '#F5F5F5',
    surfaceRaised: '#FAFAFA',
    border: '#D4D4D4',
    borderStrong: '#A3A3A3',
    borderInvalid: '#D32F2F',
    borderDisabled: '#E5E5E5',
    text: '#171717',
    textMuted: '#525252',
    label: '#262626',
    placeholder: '#A3A3A3',
    helper: '#737373',
    error: '#D32F2F',
    accent: '#0073FF',
    accentSubtle: 'rgba(0, 115, 255, 0.08)',
    accentStrong: '#0057C2',
    success: '#3BAC87',
    warning: '#D97706',
  },
  dark: {
    surface: '#171717',
    surfaceMuted: '#0A0A0A',
    surfaceRaised: '#262626',
    border: '#404040',
    borderStrong: '#737373',
    borderInvalid: '#F87171',
    borderDisabled: '#262626',
    text: '#FAFAFA',
    textMuted: '#D4D4D4',
    label: '#F5F5F5',
    placeholder: '#737373',
    helper: '#A3A3A3',
    error: '#F87171',
    accent: '#FFB74D',
    accentSubtle: 'rgba(255, 183, 77, 0.12)',
    accentStrong: '#F59E0B',
    success: '#7AD7BC',
    warning: '#FBBF24',
  },
};

export const appInputSizeStyles = {
  sm: {
    fieldHeight: 40,
    fontSize: 14,
    lineHeight: 20,
    paddingHorizontal: 12,
    radius: 14,
    iconSize: 15,
    indicatorSize: 18,
    switchWidth: 36,
    switchHeight: 22,
    switchThumb: 16,
    textareaMinHeight: 110,
  },
  md: {
    fieldHeight: 46,
    fontSize: 15,
    lineHeight: 21,
    paddingHorizontal: 14,
    radius: 16,
    iconSize: 16,
    indicatorSize: 20,
    switchWidth: 44,
    switchHeight: 26,
    switchThumb: 20,
    textareaMinHeight: 126,
  },
  lg: {
    fieldHeight: 52,
    fontSize: 16,
    lineHeight: 22,
    paddingHorizontal: 16,
    radius: 18,
    iconSize: 18,
    indicatorSize: 22,
    switchWidth: 52,
    switchHeight: 30,
    switchThumb: 24,
    textareaMinHeight: 142,
  },
} satisfies Record<
  App.AppInputSize,
  {
    fieldHeight: number;
    fontSize: number;
    lineHeight: number;
    paddingHorizontal: number;
    radius: number;
    iconSize: number;
    indicatorSize: number;
    switchWidth: number;
    switchHeight: number;
    switchThumb: number;
    textareaMinHeight: number;
  }
>;

export const useAppInputTheme = () => {
  const scheme = useResolvedAppScheme();

  return {
    scheme,
    colors: appInputPalette[scheme],
  };
};

export const resolveKeyboardType = (
  type: App.AppTextInputType,
): KeyboardTypeOptions => {
  if (type === 'email') return 'email-address';
  if (type === 'number') return 'numeric';

  return 'default';
};

export const stringifyAppNode = (node: ReactNode): string => {
  if (node === undefined || node === null) return '';

  if (isPrimitiveAppNode(node)) {
    return String(node);
  }

  return '';
};

export const formatAppDate = (value: Date | null | undefined) => {
  if (!value) return '';

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(value);
};

export const formatRangeLabel = (
  startDate: Date | null | undefined,
  endDate: Date | null | undefined,
) => {
  if (!startDate && !endDate) return '';
  if (startDate && !endDate) return `${formatAppDate(startDate)} -`;
  if (!startDate && endDate) return formatAppDate(endDate);

  return `${formatAppDate(startDate)} - ${formatAppDate(endDate)}`;
};

export const isSameDate = (left?: Date | null, right?: Date | null) => {
  if (!left || !right) return false;

  return (
    left.getFullYear() === right.getFullYear() &&
    left.getMonth() === right.getMonth() &&
    left.getDate() === right.getDate()
  );
};

export const isDateInRange = (
  date: Date,
  startDate?: Date | null,
  endDate?: Date | null,
) => {
  if (!startDate || !endDate) return false;

  const current = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  const start = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate(),
  ).getTime();
  const end = new Date(
    endDate.getFullYear(),
    endDate.getMonth(),
    endDate.getDate(),
  ).getTime();

  return current >= start && current <= end;
};

export const isDateDisabled = (
  date: Date,
  minDate?: Date,
  maxDate?: Date,
) => {
  const current = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();

  if (minDate) {
    const min = new Date(
      minDate.getFullYear(),
      minDate.getMonth(),
      minDate.getDate(),
    ).getTime();

    if (current < min) return true;
  }

  if (maxDate) {
    const max = new Date(
      maxDate.getFullYear(),
      maxDate.getMonth(),
      maxDate.getDate(),
    ).getTime();

    if (current > max) return true;
  }

  return false;
};

export const getMonthMatrix = (monthDate: Date) => {
  const first = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
  const startOffset = first.getDay();
  const cursor = new Date(first);
  cursor.setDate(cursor.getDate() - startOffset);

  return Array.from({ length: 42 }, (_, index) => {
    const value = new Date(cursor);
    value.setDate(cursor.getDate() + index);

    return value;
  });
};

type AppFieldShellProps = {
  label?: ReactNode;
  required?: boolean;
  helperText?: ReactNode;
  errorMsg?: ReactNode;
  invalid?: boolean;
  children: ReactNode;
  style?: App.AppStyleProp;
  testID?: string;
};

export const AppFieldShell = ({
  label,
  required = false,
  helperText,
  errorMsg,
  invalid = false,
  children,
  style,
  testID,
}: AppFieldShellProps) => {
  const { colors } = useAppInputTheme();
  const message = invalid ? errorMsg ?? helperText : helperText ?? errorMsg;

  return (
    <View testID={testID} style={[styles.fieldRoot, style]}>
      {label ? (
        <View style={styles.labelRow}>
          {renderAppTextNode(label, [styles.labelText, { color: colors.label }])}
          {required ? <Text style={[styles.requiredMark, { color: colors.error }]}>*</Text> : null}
        </View>
      ) : null}
      {children}
      {message ? (
        <View style={styles.messageRow}>
          {renderAppTextNode(message, [
            styles.messageText,
            { color: invalid ? colors.error : colors.helper },
          ])}
        </View>
      ) : null}
    </View>
  );
};

export const renderAccessoryNode = (
  node: ReactNode,
  color: string,
  fontSize: number,
) => {
  if (node === undefined || node === null) return null;

  return renderAppTextNode(node, [
    styles.accessoryText,
    { color, fontSize },
  ]);
};

const styles = StyleSheet.create({
  fieldRoot: {
    gap: 8,
    width: '100%',
  },
  labelRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
  },
  labelText: {
    fontSize: 13,
    fontWeight: '600',
  },
  requiredMark: {
    fontSize: 13,
    fontWeight: '700',
  },
  messageRow: {
    minHeight: 18,
  },
  messageText: {
    fontSize: 12,
    lineHeight: 17,
  },
  accessoryText: {
    fontWeight: '500',
    lineHeight: 20,
  },
});
