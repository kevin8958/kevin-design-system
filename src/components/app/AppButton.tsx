import { useEffect, useState, type ReactNode } from 'react';
import {
  ActivityIndicator,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

type AppButtonPalette = Record<
  App.AppButtonColor,
  {
    containBackground: string;
    containText: string;
    outlineBorder: string;
    outlineText: string;
    clearText: string;
    pressedOverlay: string;
  }
>;

const palette: Record<'light' | 'dark', AppButtonPalette> = {
  light: {
    primary: {
      containBackground: '#0073FF',
      containText: '#FFFFFF',
      outlineBorder: '#0073FF',
      outlineText: '#0073FF',
      clearText: '#0073FF',
      pressedOverlay: 'rgba(0, 115, 255, 0.12)',
    },
    neutral: {
      containBackground: '#171717',
      containText: '#FFFFFF',
      outlineBorder: '#737373',
      outlineText: '#262626',
      clearText: '#262626',
      pressedOverlay: 'rgba(38, 38, 38, 0.08)',
    },
    info: {
      containBackground: '#0288D1',
      containText: '#FFFFFF',
      outlineBorder: '#0288D1',
      outlineText: '#0288D1',
      clearText: '#0288D1',
      pressedOverlay: 'rgba(2, 136, 209, 0.12)',
    },
    success: {
      containBackground: '#3BAC87',
      containText: '#FFFFFF',
      outlineBorder: '#3BAC87',
      outlineText: '#3BAC87',
      clearText: '#3BAC87',
      pressedOverlay: 'rgba(59, 172, 135, 0.12)',
    },
    warning: {
      containBackground: '#D97706',
      containText: '#FFFFFF',
      outlineBorder: '#D97706',
      outlineText: '#D97706',
      clearText: '#D97706',
      pressedOverlay: 'rgba(217, 119, 6, 0.12)',
    },
    danger: {
      containBackground: '#D32F2F',
      containText: '#FFFFFF',
      outlineBorder: '#D32F2F',
      outlineText: '#D32F2F',
      clearText: '#D32F2F',
      pressedOverlay: 'rgba(211, 47, 47, 0.12)',
    },
  },
  dark: {
    primary: {
      containBackground: '#FFB74D',
      containText: '#171717',
      outlineBorder: '#FFB74D',
      outlineText: '#FFB74D',
      clearText: '#FFB74D',
      pressedOverlay: 'rgba(255, 183, 77, 0.18)',
    },
    neutral: {
      containBackground: '#E5E5E5',
      containText: '#171717',
      outlineBorder: '#525252',
      outlineText: '#D4D4D4',
      clearText: '#D4D4D4',
      pressedOverlay: 'rgba(229, 229, 229, 0.12)',
    },
    info: {
      containBackground: '#0288D1',
      containText: '#FFFFFF',
      outlineBorder: '#7DD3FC',
      outlineText: '#B3E5FC',
      clearText: '#B3E5FC',
      pressedOverlay: 'rgba(179, 229, 252, 0.14)',
    },
    success: {
      containBackground: '#3BAC87',
      containText: '#FFFFFF',
      outlineBorder: '#7AD7BC',
      outlineText: '#C4E6DB',
      clearText: '#C4E6DB',
      pressedOverlay: 'rgba(196, 230, 219, 0.14)',
    },
    warning: {
      containBackground: '#D97706',
      containText: '#FFFFFF',
      outlineBorder: '#FBBF24',
      outlineText: '#FDE68A',
      clearText: '#FDE68A',
      pressedOverlay: 'rgba(253, 230, 138, 0.14)',
    },
    danger: {
      containBackground: '#D32F2F',
      containText: '#FFFFFF',
      outlineBorder: '#F87171',
      outlineText: '#F87171',
      clearText: '#F87171',
      pressedOverlay: 'rgba(248, 113, 113, 0.14)',
    },
  },
};

const sizeStyles = {
  sm: {
    minHeight: 36,
    horizontalPadding: 14,
    textSize: 14,
  },
  md: {
    minHeight: 44,
    horizontalPadding: 18,
    textSize: 15,
  },
  lg: {
    minHeight: 52,
    horizontalPadding: 22,
    textSize: 16,
  },
} satisfies Record<App.AppButtonSize, { minHeight: number; horizontalPadding: number; textSize: number }>;

const AppButton = ({
  children,
  label,
  variant = 'contain',
  color = 'neutral',
  size = 'md',
  justify = 'center',
  fullWidth = false,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  shape = 'rect',
  href,
  style,
  textStyle,
  onPress,
  testID,
}: App.ButtonProps) => {
  const systemScheme = useColorScheme();
  const [webScheme, setWebScheme] = useState<'light' | 'dark' | null>(() => {
    if (typeof document === 'undefined') return null;
    return document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light';
  });
  const resolvedScheme =
    webScheme ?? (systemScheme === 'dark' ? 'dark' : 'light');
  const resolvedLabel = label ?? children;
  const colors = palette[resolvedScheme][color];
  const metrics = sizeStyles[size];
  const resolvedIcon =
    href && !icon ? (
      <Text
        style={[
          styles.linkIcon,
          variant === 'contain'
            ? { color: colors.containText }
            : { color: colors.outlineText },
        ]}
      >
        ↗
      </Text>
    ) : (
      icon
    );
  const resolvedIconPosition = href && !icon ? 'right' : iconPosition;
  const contentJustify =
    shape === 'circle' ? 'center' : justify === 'start' ? 'flex-start' : 'center';
  const isCircle = shape === 'circle';

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    const syncScheme = () => {
      setWebScheme(root.classList.contains('dark') ? 'dark' : 'light');
    };

    syncScheme();

    const observer = new MutationObserver(syncScheme);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const content =
    typeof resolvedLabel === 'string' ? (
      <Text
        style={[
          styles.text,
          { fontSize: metrics.textSize },
          variant === 'contain'
            ? { color: colors.containText }
            : { color: variant === 'outline' ? colors.outlineText : colors.clearText },
          (disabled || loading) && styles.disabledText,
          textStyle,
        ]}
      >
        {resolvedLabel}
      </Text>
    ) : (
      resolvedLabel
    );

  return (
    <Pressable
      testID={testID}
      accessibilityRole="button"
      accessibilityState={{ disabled: disabled || loading, busy: loading }}
      disabled={disabled || loading}
      onPress={(event) => {
        onPress?.(event);

        if (href && !onPress) {
          void Linking.openURL(href);
        }
      }}
      style={({ pressed }) => [
        styles.base,
        isCircle
          ? {
              height: metrics.minHeight,
              width: metrics.minHeight,
              borderRadius: metrics.minHeight / 2,
              paddingHorizontal: 0,
            }
          : {
              minHeight: metrics.minHeight,
              paddingHorizontal: metrics.horizontalPadding,
            },
        fullWidth && styles.fullWidth,
        variant === 'contain' && {
          backgroundColor: colors.containBackground,
          borderWidth: 0,
        },
        variant === 'outline' && {
          backgroundColor: 'transparent',
          borderColor: colors.outlineBorder,
          borderWidth: 1,
        },
        variant === 'clear' && {
          backgroundColor: 'transparent',
          borderWidth: 0,
        },
        pressed && !disabled && !loading && { backgroundColor: colors.pressedOverlay },
        (disabled || loading) && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'contain' ? colors.containText : colors.outlineText}
        />
      ) : (
        <View
          style={[
            styles.content,
            fullWidth && styles.fullWidth,
            { justifyContent: contentJustify },
          ]}
        >
          {resolvedIcon && resolvedIconPosition === 'left' ? (
            <View style={styles.iconSlot}>{resolvedIcon as ReactNode}</View>
          ) : null}
          {content as ReactNode}
          {resolvedIcon && resolvedIconPosition === 'right' ? (
            <View style={styles.iconSlot}>{resolvedIcon as ReactNode}</View>
          ) : null}
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
  },
  text: {
    fontWeight: '600',
  },
  iconSlot: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkIcon: {
    fontSize: 14,
    fontWeight: '700',
  },
  fullWidth: {
    alignSelf: 'stretch',
    width: '100%',
  },
  disabled: {
    opacity: 0.5,
  },
  disabledText: {
    opacity: 0.9,
  },
});

export default AppButton;
