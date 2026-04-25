import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { renderAppTextNode, useResolvedAppScheme } from '@/components/app/appUtils';

type AppBreadcrumbPalette = {
  active: string;
  inactive: string;
  separator: string;
  pressed: string;
};

const palette: Record<'light' | 'dark', AppBreadcrumbPalette> = {
  light: {
    active: '#171717',
    inactive: '#737373',
    separator: '#A3A3A3',
    pressed: 'rgba(23, 23, 23, 0.08)',
  },
  dark: {
    active: '#FAFAFA',
    inactive: '#A3A3A3',
    separator: '#737373',
    pressed: 'rgba(250, 250, 250, 0.08)',
  },
};

const AppBreadcrumb = ({
  items,
  separator,
  style,
  itemStyle,
  testID,
}: App.BreadcrumbProps) => {
  const scheme = useResolvedAppScheme();
  const colors = palette[scheme];
  const currentIndex = items.findIndex((item) => item.current);
  const resolvedCurrentIndex = currentIndex >= 0 ? currentIndex : items.length - 1;

  return (
    <View testID={testID} style={[styles.root, style]}>
      {items.map((item, index) => {
        const isCurrent = index === resolvedCurrentIndex;
        const isInteractive = !isCurrent && (!!item.onPress || !!item.href);

        return (
          <View key={`${String(item.label)}-${index}`} style={styles.segment}>
            <Pressable
              accessibilityRole={isInteractive ? 'button' : undefined}
              disabled={!isInteractive}
              onPress={() => {
                item.onPress?.();

                if (item.href && !item.onPress) {
                  void Linking.openURL(item.href);
                }
              }}
              style={({ pressed }) => [
                styles.item,
                {
                  backgroundColor: pressed && isInteractive ? colors.pressed : 'transparent',
                },
                itemStyle,
              ]}
            >
              {renderAppTextNode(item.label, [
                styles.labelText,
                {
                  color: isCurrent ? colors.active : colors.inactive,
                  fontWeight: isCurrent ? '700' : '600',
                },
              ])}
            </Pressable>
            {index < items.length - 1 ? (
              <View style={styles.separatorWrap}>
                {separator ? (
                  renderAppTextNode(separator, [
                    styles.separatorText,
                    { color: colors.separator },
                  ])
                ) : (
                  <Text style={[styles.separatorText, { color: colors.separator }]}>
                    ›
                  </Text>
                )}
              </View>
            ) : null}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  segment: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
  },
  item: {
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  labelText: {
    fontSize: 12,
  },
  separatorWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  separatorText: {
    fontSize: 12,
    fontWeight: '700',
  },
});

export default AppBreadcrumb;
