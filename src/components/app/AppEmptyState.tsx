import { StyleSheet, View } from 'react-native';
import { renderAppTextNode } from '@/components/app/appUtils';
import { appCardSizes, useAppDataTheme } from '@/components/app/appDataUtils';

const iconSizes = {
  sm: 28,
  md: 36,
  lg: 44,
} satisfies Record<App.AppCardSize, number>;

const AppEmptyState = ({
  title,
  description,
  icon = '⌂',
  primaryAction,
  secondaryAction,
  size = 'md',
  style,
  testID,
}: App.EmptyStateProps) => {
  const { colors } = useAppDataTheme();
  const metrics = appCardSizes[size];

  return (
    <View
      testID={testID}
      style={[
        styles.root,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
          borderRadius: metrics.radius,
          padding: metrics.padding + 6,
        },
        style,
      ]}
    >
      <View
        style={[
          styles.iconWrap,
          {
            backgroundColor: colors.surfaceMuted,
            borderRadius: iconSizes[size] / 2,
            height: iconSizes[size] + 16,
            width: iconSizes[size] + 16,
          },
        ]}
      >
        {renderAppTextNode(icon, [
          styles.iconText,
          { color: colors.title, fontSize: iconSizes[size] },
        ])}
      </View>
      {renderAppTextNode(title, [
        styles.titleText,
        { color: colors.title, fontSize: metrics.bodySize + 2 },
      ])}
      {description
        ? renderAppTextNode(description, [
            styles.descriptionText,
            { color: colors.muted, fontSize: metrics.bodySize },
          ])
        : null}
      {(primaryAction || secondaryAction) ? (
        <View style={styles.actionRow}>
          {primaryAction ? <View>{primaryAction}</View> : null}
          {secondaryAction ? <View>{secondaryAction}</View> : null}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    borderWidth: 1,
    gap: 12,
    justifyContent: 'center',
    width: '100%',
  },
  iconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontWeight: '700',
  },
  titleText: {
    fontWeight: '700',
    textAlign: 'center',
  },
  descriptionText: {
    lineHeight: 21,
    textAlign: 'center',
  },
  actionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
    marginTop: 4,
  },
});

export default AppEmptyState;
