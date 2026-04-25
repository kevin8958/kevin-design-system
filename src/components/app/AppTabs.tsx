import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { renderAppTextNode, useResolvedAppScheme } from '@/components/app/appUtils';

type AppTabsPalette = {
  listBackground: string;
  listBorder: string;
  tabText: string;
  tabPressed: string;
  activeBackground: string;
  activeText: string;
  disabledText: string;
  panelBackground: string;
  panelBorder: string;
  panelText: string;
};

const palette: Record<'light' | 'dark', AppTabsPalette> = {
  light: {
    listBackground: '#F5F5F5',
    listBorder: '#E5E5E5',
    tabText: '#525252',
    tabPressed: '#E5E5E5',
    activeBackground: '#FFFFFF',
    activeText: '#171717',
    disabledText: '#A3A3A3',
    panelBackground: '#FFFFFF',
    panelBorder: '#E5E5E5',
    panelText: '#404040',
  },
  dark: {
    listBackground: '#171717',
    listBorder: '#262626',
    tabText: '#A3A3A3',
    tabPressed: '#262626',
    activeBackground: '#262626',
    activeText: '#FAFAFA',
    disabledText: '#525252',
    panelBackground: '#171717',
    panelBorder: '#262626',
    panelText: '#D4D4D4',
  },
};

const sizeStyles = {
  sm: {
    minHeight: 34,
    paddingHorizontal: 12,
    fontSize: 12,
    panelPadding: 14,
  },
  md: {
    minHeight: 40,
    paddingHorizontal: 14,
    fontSize: 14,
    panelPadding: 16,
  },
  lg: {
    minHeight: 46,
    paddingHorizontal: 16,
    fontSize: 15,
    panelPadding: 18,
  },
} satisfies Record<
  App.AppNavigationSize,
  { minHeight: number; paddingHorizontal: number; fontSize: number; panelPadding: number }
>;

const AppTabs = ({
  items,
  value,
  onChange,
  disabled = false,
  size = 'md',
  style,
  listStyle,
  tabStyle,
  panelStyle,
  testID,
}: App.TabsProps) => {
  const scheme = useResolvedAppScheme();
  const colors = palette[scheme];
  const metrics = sizeStyles[size];
  const selectedTab = items.find((item) => item.id === value) || items[0];

  return (
    <View testID={testID} style={[styles.root, style]}>
      <View
        style={[
          styles.listWrap,
          {
            backgroundColor: colors.listBackground,
            borderColor: colors.listBorder,
          },
          listStyle,
        ]}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.listInner}>
            {items.map((item) => {
              const isSelected = item.id === selectedTab?.id;
              const isDisabled = disabled || item.disabled;

              return (
                <Pressable
                  key={item.id}
                  accessibilityRole="tab"
                  accessibilityState={{ selected: isSelected, disabled: isDisabled }}
                  disabled={isDisabled}
                  onPress={() => {
                    if (!isDisabled) {
                      onChange?.(item.id);
                    }
                  }}
                  style={({ pressed }) => [
                    styles.tabButton,
                    {
                      backgroundColor: isSelected
                        ? colors.activeBackground
                        : pressed
                          ? colors.tabPressed
                          : 'transparent',
                      minHeight: metrics.minHeight,
                      paddingHorizontal: metrics.paddingHorizontal,
                      opacity: isDisabled ? 0.5 : 1,
                    },
                    tabStyle,
                  ]}
                >
                  {renderAppTextNode(item.label, [
                    styles.tabLabel,
                    {
                      color: isDisabled
                        ? colors.disabledText
                        : isSelected
                          ? colors.activeText
                          : colors.tabText,
                      fontSize: metrics.fontSize,
                    },
                  ])}
                </Pressable>
              );
            })}
          </View>
        </ScrollView>
      </View>

      {selectedTab?.content ? (
        <View
          style={[
            styles.panel,
            {
              backgroundColor: colors.panelBackground,
              borderColor: colors.panelBorder,
              padding: metrics.panelPadding,
            },
            panelStyle,
          ]}
        >
          {renderAppTextNode(selectedTab.content, [
            styles.panelText,
            { color: colors.panelText, fontSize: metrics.fontSize },
          ])}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    gap: 12,
    width: '100%',
  },
  listWrap: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 4,
  },
  listInner: {
    flexDirection: 'row',
    gap: 4,
  },
  tabButton: {
    alignItems: 'center',
    borderRadius: 16,
    justifyContent: 'center',
    minWidth: 88,
  },
  tabLabel: {
    fontWeight: '600',
  },
  panel: {
    borderRadius: 18,
    borderWidth: 1,
  },
  panelText: {
    lineHeight: 22,
  },
});

export default AppTabs;
