import { StyleSheet, Text, View } from 'react-native';
import { appCardSizes, formatMetric, useAppDataTheme } from '@/components/app/appDataUtils';

const trendConfig = {
  up: {
    icon: '▲',
    light: '#1D6B52',
    dark: '#C4E6DB',
  },
  down: {
    icon: '▼',
    light: '#A61E1E',
    dark: '#FCA5A5',
  },
  neutral: {
    icon: '•',
    light: '#737373',
    dark: '#A3A3A3',
  },
} satisfies Record<
  App.AppMetricTrend,
  { icon: string; light: string; dark: string }
>;

const AppMetricCard = ({
  title,
  value,
  change,
  size = 'md',
  trend,
  prefix = '',
  suffix = '',
  changeSuffix = '',
  decimals = 0,
  changeDecimals = 1,
  style,
  testID,
}: App.MetricCardProps) => {
  const { colors, scheme } = useAppDataTheme();
  const metrics = appCardSizes[size];
  const resolvedTrend =
    trend ?? (change === undefined ? 'neutral' : change > 0 ? 'up' : change < 0 ? 'down' : 'neutral');
  const trendMeta = trendConfig[resolvedTrend];
  const trendColor = scheme === 'dark' ? trendMeta.dark : trendMeta.light;

  return (
    <View
      testID={testID}
      style={[
        styles.root,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
          borderRadius: metrics.radius,
          padding: metrics.padding,
        },
        style,
      ]}
    >
      <Text style={[styles.titleText, { color: colors.muted, fontSize: metrics.titleSize }]}>
        {title}
      </Text>
      <View style={styles.valueRow}>
        <Text style={[styles.valueText, { color: colors.title, fontSize: metrics.valueSize }]}>
          {`${prefix}${formatMetric(value, decimals)}${suffix}`}
        </Text>
        {change !== undefined ? (
          <View style={styles.changeRow}>
            <Text style={[styles.changeText, { color: trendColor, fontSize: metrics.titleSize + 1 }]}>
              {trendMeta.icon}
            </Text>
            <Text style={[styles.changeText, { color: trendColor, fontSize: metrics.titleSize + 1 }]}>
              {`${formatMetric(Math.abs(change), changeDecimals)}${changeSuffix}`}
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    gap: 10,
    width: '100%',
  },
  titleText: {
    fontWeight: '600',
  },
  valueRow: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  valueText: {
    fontWeight: '800',
    letterSpacing: -0.4,
  },
  changeRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
  },
  changeText: {
    fontWeight: '700',
  },
});

export default AppMetricCard;
