import { useState } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { getInitials, appAvatarSizes, useAppDataTheme } from '@/components/app/appDataUtils';

const statusColors = {
  online: '#22C55E',
  offline: '#A3A3A3',
  busy: '#F97316',
} satisfies Record<App.AppAvatarStatus, string>;

const AppAvatar = ({
  src,
  name = '',
  alt,
  size = 'md',
  status,
  onPress,
  style,
  testID,
}: App.AvatarProps) => {
  const { colors } = useAppDataTheme();
  const metrics = appAvatarSizes[size];
  const [hasImageError, setHasImageError] = useState(false);
  const showImage = !!src && !hasImageError;

  return (
    <Pressable
      accessibilityLabel={alt ?? name ?? 'Avatar'}
      accessibilityRole={onPress ? 'button' : undefined}
      disabled={!onPress}
      onPress={onPress}
      testID={testID}
      style={({ pressed }) => [
        styles.root,
        {
          height: metrics.size,
          opacity: pressed && onPress ? 0.88 : 1,
          width: metrics.size,
        },
        style,
      ]}
    >
      <View
        style={[
          styles.avatarSurface,
          {
            backgroundColor: colors.surfaceMuted,
            borderColor: colors.borderStrong,
            borderRadius: metrics.size / 2,
            height: metrics.size,
            width: metrics.size,
          },
        ]}
      >
        {showImage ? (
          <Image
            onError={() => setHasImageError(true)}
            source={{ uri: src }}
            style={[
              styles.image,
              {
                borderRadius: metrics.size / 2,
                height: metrics.size,
                width: metrics.size,
              },
            ]}
          />
        ) : (
          <Text
            style={[
              styles.initials,
              {
                color: colors.title,
                fontSize: metrics.textSize,
              },
            ]}
          >
            {getInitials(name)}
          </Text>
        )}
      </View>
      {status ? (
        <View
          style={[
            styles.statusDot,
            {
              backgroundColor: statusColors[status],
              borderColor: colors.surface,
              borderRadius: metrics.statusSize / 2,
              height: metrics.statusSize,
              width: metrics.statusSize,
            },
          ]}
        />
      ) : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'relative',
  },
  avatarSurface: {
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'cover',
  },
  initials: {
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  statusDot: {
    borderWidth: 2,
    bottom: 1,
    position: 'absolute',
    right: 1,
  },
});

export default AppAvatar;
