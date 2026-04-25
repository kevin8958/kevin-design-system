import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { renderAppTextNode } from '@/components/app/appUtils';
import { useAppFeedbackTheme, variantIcons } from '@/components/app/appFeedbackUtils';

const AppAlert = ({
  title,
  description,
  variant = 'info',
  closable = false,
  onClose,
  style,
  testID,
}: App.AlertProps) => {
  const { colors } = useAppFeedbackTheme();
  const [visible, setVisible] = useState(true);
  const tone = colors[variant];

  if (!visible) return null;

  return (
    <View
      testID={testID}
      style={[
        styles.root,
        {
          backgroundColor: tone.background,
          borderColor: tone.border,
        },
        style,
      ]}
    >
      <View style={[styles.iconWrap, { backgroundColor: tone.foreground }]}>
        <Text style={styles.iconText}>{variantIcons[variant]}</Text>
      </View>
      <View style={styles.content}>
        {renderAppTextNode(title, [
          styles.titleText,
          { color: tone.foreground },
        ])}
        {description
          ? renderAppTextNode(description, [
              styles.descriptionText,
              { color: tone.foreground },
            ])
          : null}
      </View>
      {closable ? (
        <Pressable
          accessibilityLabel="Dismiss alert"
          accessibilityRole="button"
          onPress={() => {
            setVisible(false);
            onClose?.();
          }}
          style={({ pressed }) => [
            styles.closeButton,
            { opacity: pressed ? 0.6 : 1 },
          ]}
        >
          <Text style={[styles.closeText, { color: tone.foreground }]}>✕</Text>
        </Pressable>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'flex-start',
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 12,
    padding: 14,
    width: '100%',
  },
  iconWrap: {
    alignItems: 'center',
    borderRadius: 999,
    height: 22,
    justifyContent: 'center',
    width: 22,
  },
  iconText: {
    color: '#FFFFFF',
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
    lineHeight: 19,
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

export default AppAlert;
