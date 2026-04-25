import { StyleSheet, Text, View } from 'react-native';
import { appLabelSizes, useAppDataTheme } from '@/components/app/appDataUtils';

const AppBadge = ({
  label,
  size = 'md',
  variant = 'neutral',
  style,
  testID,
}: App.BadgeProps) => {
  const { semantic } = useAppDataTheme();
  const metrics = appLabelSizes[size];
  const tone = semantic[variant];

  return (
    <View
      testID={testID}
      style={[
        styles.root,
        {
          backgroundColor: tone.background,
          borderColor: tone.border,
          borderRadius: metrics.radius,
          minHeight: metrics.height,
          paddingHorizontal: metrics.horizontalPadding,
        },
        style,
      ]}
    >
      <Text
        style={[
          styles.label,
          {
            color: tone.foreground,
            fontSize: metrics.fontSize,
          },
        ]}
      >
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  label: {
    fontWeight: '700',
  },
});

export default AppBadge;
