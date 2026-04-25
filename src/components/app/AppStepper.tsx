import { Fragment } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { renderAppTextNode, useResolvedAppScheme } from '@/components/app/appUtils';

type AppStepperPalette = {
  completeBackground: string;
  completeBorder: string;
  completeText: string;
  currentBackground: string;
  currentBorder: string;
  currentText: string;
  upcomingBackground: string;
  upcomingBorder: string;
  upcomingText: string;
  disabledBackground: string;
  disabledBorder: string;
  disabledText: string;
  label: string;
  description: string;
  muted: string;
  connector: string;
};

const palette: Record<'light' | 'dark', AppStepperPalette> = {
  light: {
    completeBackground: '#171717',
    completeBorder: '#171717',
    completeText: '#FFFFFF',
    currentBackground: 'rgba(23, 23, 23, 0.08)',
    currentBorder: '#171717',
    currentText: '#171717',
    upcomingBackground: '#FFFFFF',
    upcomingBorder: '#D4D4D4',
    upcomingText: '#737373',
    disabledBackground: '#F5F5F5',
    disabledBorder: '#E5E5E5',
    disabledText: '#A3A3A3',
    label: '#171717',
    description: '#737373',
    muted: '#A3A3A3',
    connector: '#D4D4D4',
  },
  dark: {
    completeBackground: '#F5F5F5',
    completeBorder: '#F5F5F5',
    completeText: '#171717',
    currentBackground: 'rgba(245, 245, 245, 0.12)',
    currentBorder: '#F5F5F5',
    currentText: '#F5F5F5',
    upcomingBackground: '#171717',
    upcomingBorder: '#404040',
    upcomingText: '#A3A3A3',
    disabledBackground: '#171717',
    disabledBorder: '#262626',
    disabledText: '#525252',
    label: '#FAFAFA',
    description: '#A3A3A3',
    muted: '#737373',
    connector: '#404040',
  },
};

const sizeStyles = {
  sm: {
    indicator: 28,
    labelSize: 13,
    descriptionSize: 11,
    horizontalGap: 10,
    verticalGap: 14,
    connectorOffset: 14,
  },
  md: {
    indicator: 36,
    labelSize: 14,
    descriptionSize: 12,
    horizontalGap: 12,
    verticalGap: 18,
    connectorOffset: 18,
  },
  lg: {
    indicator: 44,
    labelSize: 15,
    descriptionSize: 13,
    horizontalGap: 14,
    verticalGap: 20,
    connectorOffset: 22,
  },
} satisfies Record<
  App.AppNavigationSize,
  {
    indicator: number;
    labelSize: number;
    descriptionSize: number;
    horizontalGap: number;
    verticalGap: number;
    connectorOffset: number;
  }
>;

const resolveStepState = (
  item: App.AppStepperItem,
  itemIndex: number,
  currentIndex: number,
) => {
  if (item.disabled) return 'disabled' as const;
  if (itemIndex < currentIndex) return 'complete' as const;
  if (itemIndex === currentIndex) return 'current' as const;
  return 'upcoming' as const;
};

const AppStepper = ({
  items,
  value,
  onChange,
  size = 'md',
  orientation = 'horizontal',
  allowStepPress = true,
  style,
  itemStyle,
  testID,
}: App.StepperProps) => {
  const scheme = useResolvedAppScheme();
  const colors = palette[scheme];
  const metrics = sizeStyles[size];
  const currentIndex = Math.max(
    items.findIndex((item) => item.id === value),
    0,
  );

  const getIndicatorStyles = (state: ReturnType<typeof resolveStepState>) => {
    if (state === 'complete') {
      return {
        backgroundColor: colors.completeBackground,
        borderColor: colors.completeBorder,
        color: colors.completeText,
      };
    }

    if (state === 'current') {
      return {
        backgroundColor: colors.currentBackground,
        borderColor: colors.currentBorder,
        color: colors.currentText,
      };
    }

    if (state === 'disabled') {
      return {
        backgroundColor: colors.disabledBackground,
        borderColor: colors.disabledBorder,
        color: colors.disabledText,
      };
    }

    return {
      backgroundColor: colors.upcomingBackground,
      borderColor: colors.upcomingBorder,
      color: colors.upcomingText,
    };
  };

  if (orientation === 'vertical') {
    return (
      <View testID={testID} style={[styles.verticalRoot, { gap: metrics.verticalGap }, style]}>
        {items.map((item, index) => {
          const state = resolveStepState(item, index, currentIndex);
          const indicatorColors = getIndicatorStyles(state);
          const isClickable = allowStepPress && !item.disabled && !!onChange;

          return (
            <View key={item.id}>
              <Pressable
                accessibilityRole="button"
                accessibilityState={{
                  disabled: !isClickable,
                  selected: index === currentIndex,
                }}
                disabled={!isClickable}
                onPress={() => onChange?.(item.id)}
                style={({ pressed }) => [
                  styles.verticalItem,
                  {
                    opacity: item.disabled ? 0.5 : 1,
                    backgroundColor: pressed ? indicatorColors.backgroundColor : 'transparent',
                  },
                  itemStyle,
                ]}
              >
                <View style={styles.verticalTrack}>
                  <View
                    style={[
                      styles.indicator,
                      {
                        backgroundColor: indicatorColors.backgroundColor,
                        borderColor: indicatorColors.borderColor,
                        height: metrics.indicator,
                        width: metrics.indicator,
                      },
                    ]}
                  >
                    <Text style={[styles.indicatorText, { color: indicatorColors.color }]}>
                      {index + 1}
                    </Text>
                  </View>
                  {index < items.length - 1 ? (
                    <View
                      style={[
                        styles.verticalConnector,
                        {
                          backgroundColor:
                            state === 'complete' ? colors.completeBorder : colors.connector,
                          left: metrics.indicator / 2 - 1,
                          top: metrics.indicator + 6,
                        },
                      ]}
                    />
                  ) : null}
                </View>
                <View style={styles.content}>
                  {renderAppTextNode(item.label, [
                    styles.labelText,
                    { color: item.disabled ? colors.muted : colors.label, fontSize: metrics.labelSize },
                  ])}
                  {item.description
                    ? renderAppTextNode(item.description, [
                        styles.descriptionText,
                        {
                          color: item.disabled ? colors.muted : colors.description,
                          fontSize: metrics.descriptionSize,
                        },
                      ])
                    : null}
                </View>
              </Pressable>
            </View>
          );
        })}
      </View>
    );
  }

  return (
    <View testID={testID} style={[styles.horizontalRoot, style]}>
      {items.map((item, index) => {
        const state = resolveStepState(item, index, currentIndex);
        const indicatorColors = getIndicatorStyles(state);
        const isClickable = allowStepPress && !item.disabled && !!onChange;

        return (
          <Fragment key={item.id}>
            <View style={styles.horizontalItemWrap}>
              <Pressable
                accessibilityRole="button"
                accessibilityState={{
                  disabled: !isClickable,
                  selected: index === currentIndex,
                }}
                disabled={!isClickable}
                onPress={() => onChange?.(item.id)}
                style={({ pressed }) => [
                  styles.horizontalItem,
                  {
                    opacity: item.disabled ? 0.5 : 1,
                    backgroundColor: pressed ? indicatorColors.backgroundColor : 'transparent',
                  },
                  itemStyle,
                ]}
              >
                <View
                  style={[
                    styles.indicator,
                    {
                      backgroundColor: indicatorColors.backgroundColor,
                      borderColor: indicatorColors.borderColor,
                      height: metrics.indicator,
                      width: metrics.indicator,
                    },
                  ]}
                >
                  <Text style={[styles.indicatorText, { color: indicatorColors.color }]}>
                    {index + 1}
                  </Text>
                </View>
                <View style={styles.horizontalContent}>
                  {renderAppTextNode(item.label, [
                    styles.labelText,
                    { color: item.disabled ? colors.muted : colors.label, fontSize: metrics.labelSize },
                  ])}
                  {item.description
                    ? renderAppTextNode(item.description, [
                        styles.descriptionText,
                        {
                          color: item.disabled ? colors.muted : colors.description,
                          fontSize: metrics.descriptionSize,
                        },
                      ])
                    : null}
                </View>
              </Pressable>
            </View>
            {index < items.length - 1 ? (
              <View
                style={[
                  styles.horizontalConnector,
                  {
                    backgroundColor:
                      state === 'complete' ? colors.completeBorder : colors.connector,
                    marginHorizontal: metrics.horizontalGap,
                    marginTop: metrics.connectorOffset,
                  },
                ]}
              />
            ) : null}
          </Fragment>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  horizontalRoot: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
  horizontalItemWrap: {
    flex: 1,
    minWidth: 0,
  },
  horizontalItem: {
    alignItems: 'center',
    borderRadius: 16,
    paddingVertical: 2,
  },
  horizontalContent: {
    alignItems: 'center',
    gap: 4,
    marginTop: 10,
  },
  horizontalConnector: {
    flex: 1,
    height: 2,
    minWidth: 20,
  },
  verticalRoot: {
    width: '100%',
  },
  verticalItem: {
    alignItems: 'flex-start',
    borderRadius: 16,
    flexDirection: 'row',
    gap: 14,
    padding: 2,
  },
  verticalTrack: {
    position: 'relative',
  },
  verticalConnector: {
    bottom: -20,
    position: 'absolute',
    width: 2,
  },
  indicator: {
    alignItems: 'center',
    borderRadius: 999,
    borderWidth: 1.5,
    justifyContent: 'center',
  },
  indicatorText: {
    fontSize: 13,
    fontWeight: '700',
  },
  content: {
    flex: 1,
    gap: 4,
    minWidth: 0,
  },
  labelText: {
    fontWeight: '600',
    textAlign: 'center',
  },
  descriptionText: {
    lineHeight: 18,
    textAlign: 'center',
  },
});

export default AppStepper;
