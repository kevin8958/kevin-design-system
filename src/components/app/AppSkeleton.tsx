import { useEffect, useState } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  type DimensionValue,
} from 'react-native';
import { useAppFeedbackTheme } from '@/components/app/appFeedbackUtils';

const AppSkeleton = ({
  width,
  height,
  variant = 'line',
  animated = true,
  style,
  testID,
}: App.SkeletonProps) => {
  const { colors } = useAppFeedbackTheme();
  const [shimmer] = useState(() => new Animated.Value(1));
  const useNativeDriver = typeof document === 'undefined';

  useEffect(() => {
    if (!animated) {
      shimmer.setValue(1);
      return undefined;
    }

    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(shimmer, {
          duration: 900,
          easing: Easing.inOut(Easing.ease),
          toValue: 0.55,
          useNativeDriver,
        }),
        Animated.timing(shimmer, {
          duration: 900,
          easing: Easing.inOut(Easing.ease),
          toValue: 1,
          useNativeDriver,
        }),
      ]),
    );

    loop.start();

    return () => loop.stop();
  }, [animated, shimmer, useNativeDriver]);

  const resolvedHeight =
    height ?? (variant === 'line' ? 14 : variant === 'circle' ? 40 : 72);
  const resolvedWidth =
    width ?? (variant === 'line' ? '100%' : variant === 'circle' ? 40 : '100%');
  const circleRadius =
    typeof resolvedHeight === 'number' ? resolvedHeight / 2 : 999;
  const heightStyle = resolvedHeight as DimensionValue;
  const widthStyle = resolvedWidth as DimensionValue;

  return (
    <Animated.View
      testID={testID}
      style={[
        styles.root,
        {
          backgroundColor: colors.skeletonBase,
          borderRadius:
            variant === 'circle' ? circleRadius : variant === 'line' ? 999 : 16,
          height: heightStyle,
          opacity: animated ? shimmer : 1,
          width: widthStyle,
        },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  root: {
    overflow: 'hidden',
  },
});

export default AppSkeleton;
