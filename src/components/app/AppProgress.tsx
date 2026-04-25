import { StyleSheet, Text, View } from 'react-native';
import { progressHeights, useAppFeedbackTheme } from '@/components/app/appFeedbackUtils';

const accentByScheme = {
  light: '#0073FF',
  dark: '#FFB74D',
};

const AppProgress = ({
  value,
  max = 100,
  size = 'md',
  showValue = false,
  style,
  trackStyle,
  indicatorStyle,
  testID,
}: App.ProgressProps) => {
  const { scheme, colors } = useAppFeedbackTheme();
  const safeMax = Math.max(1, max);
  const percentage = Math.min(Math.max((value / safeMax) * 100, 0), 100);
  const height = progressHeights[size];

  return (
    <View testID={testID} style={[styles.root, style]}>
      {showValue ? (
        <Text style={[styles.valueText, { color: colors.muted }]}>
          {`${Math.round(percentage)}%`}
        </Text>
      ) : null}
      <View
        style={[
          styles.track,
          {
            backgroundColor: colors.track,
            borderRadius: height / 2,
            height,
          },
          trackStyle,
        ]}
      >
        <View
          style={[
            styles.indicator,
            {
              backgroundColor: accentByScheme[scheme],
              borderRadius: height / 2,
              width: `${percentage}%`,
            },
            indicatorStyle,
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    gap: 8,
    width: '100%',
  },
  valueText: {
    fontSize: 12,
    fontWeight: '700',
  },
  track: {
    overflow: 'hidden',
    width: '100%',
  },
  indicator: {
    height: '100%',
  },
});

export default AppProgress;
