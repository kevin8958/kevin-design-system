import { useEffect } from 'react';
import { Pressable, StyleSheet, Text, View, type ViewStyle } from 'react-native';
import { useAppFeedbackTheme, variantIcons } from '@/components/app/appFeedbackUtils';

const placementStyles: Record<App.AppToastPlacement, ViewStyle> = {
  'top-left': { alignSelf: 'flex-start' },
  'top-center': { alignSelf: 'center' },
  'top-right': { alignSelf: 'flex-end' },
  'bottom-left': { alignSelf: 'flex-start' },
  'bottom-center': { alignSelf: 'center' },
  'bottom-right': { alignSelf: 'flex-end' },
};

const AppToast = ({
  title,
  description,
  variant = 'info',
  placement = 'top-right',
  autoClose,
  stackIndex = 0,
  closable = false,
  onClose,
  style,
  testID,
}: App.ToastProps) => {
  const { colors } = useAppFeedbackTheme();
  const tone = colors[variant];

  useEffect(() => {
    if (!autoClose) return undefined;

    const timer = setTimeout(() => {
      onClose?.();
    }, autoClose);

    return () => clearTimeout(timer);
  }, [autoClose, onClose]);

  const isTopPlacement = placement.startsWith('top');

  return (
    <View
      testID={testID}
      style={[
        styles.root,
        placementStyles[placement],
        {
          backgroundColor: colors.surface,
          borderColor: tone.border,
          marginTop: isTopPlacement && stackIndex > 0 ? 10 : 0,
          marginBottom: !isTopPlacement && stackIndex > 0 ? 10 : 0,
        },
        style,
      ]}
    >
      <View style={[styles.iconWrap, { backgroundColor: tone.background }]}>
        <Text style={[styles.iconText, { color: tone.foreground }]}>
          {variantIcons[variant]}
        </Text>
      </View>
      <View style={styles.content}>
        <Text style={[styles.titleText, { color: colors.text }]}>{title}</Text>
        {description ? (
          <Text style={[styles.descriptionText, { color: colors.muted }]}>
            {description}
          </Text>
        ) : null}
      </View>
      {closable ? (
        <Pressable
          accessibilityLabel="Dismiss toast"
          accessibilityRole="button"
          onPress={() => onClose?.()}
          style={({ pressed }) => [
            styles.closeButton,
            { opacity: pressed ? 0.6 : 1 },
          ]}
        >
          <Text style={[styles.closeText, { color: colors.muted }]}>✕</Text>
        </Pressable>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 12,
    maxWidth: 320,
    minWidth: 240,
    padding: 14,
    width: '100%',
  },
  iconWrap: {
    alignItems: 'center',
    borderRadius: 999,
    height: 24,
    justifyContent: 'center',
    width: 24,
  },
  iconText: {
    fontSize: 12,
    fontWeight: '800',
  },
  content: {
    flex: 1,
    gap: 4,
    minWidth: 0,
  },
  titleText: {
    fontSize: 14,
    fontWeight: '700',
  },
  descriptionText: {
    fontSize: 13,
    lineHeight: 18,
  },
  closeButton: {
    alignItems: 'center',
    height: 24,
    justifyContent: 'center',
    width: 24,
  },
  closeText: {
    fontSize: 14,
    fontWeight: '700',
  },
});

export default AppToast;
