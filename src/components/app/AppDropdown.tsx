import { useEffect, useMemo, useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import AppButton from '@/components/app/AppButton';

type AppDropdownPalette = {
  panelBackground: string;
  panelBorder: string;
  sectionLabel: string;
  itemText: string;
  itemIcon: string;
  itemHover: string;
  submenuIndicator: string;
  dangerText: string;
  dangerHover: string;
};

const palette: Record<'light' | 'dark', AppDropdownPalette> = {
  light: {
    panelBackground: '#FFFFFF',
    panelBorder: '#E5E5E5',
    sectionLabel: '#737373',
    itemText: '#262626',
    itemIcon: '#737373',
    itemHover: '#F5F5F5',
    submenuIndicator: '#737373',
    dangerText: '#D32F2F',
    dangerHover: 'rgba(211, 47, 47, 0.08)',
  },
  dark: {
    panelBackground: '#0A0A0A',
    panelBorder: '#262626',
    sectionLabel: '#A3A3A3',
    itemText: '#E5E5E5',
    itemIcon: '#A3A3A3',
    itemHover: '#171717',
    submenuIndicator: '#A3A3A3',
    dangerText: '#F87171',
    dangerHover: 'rgba(248, 113, 113, 0.12)',
  },
};

const flattenMenuHeight = (
  items: App.DropdownItem[],
  hasSubmenuHeader = false,
): number => {
  const itemHeight = 42;
  const sectionHeaderHeight = 22;
  const sectionGap = 6;
  const submenuHeaderHeight = hasSubmenuHeader ? 42 : 0;
  const contentHeight = items.reduce<number>((total, item, index) => {
    if (item.type === 'group') {
      const groupHeader = item.label ? sectionHeaderHeight : 0;
      const groupSpacing = index === 0 ? 0 : sectionGap;

      return total + groupSpacing + groupHeader + flattenMenuHeight(item.items);
    }

    return total + itemHeight;
  }, 0);

  return submenuHeaderHeight + contentHeight + 12;
};

const isPrimitiveNode = (
  node: React.ReactNode,
): node is string | number => typeof node === 'string' || typeof node === 'number';

const renderTextNode = (
  node: React.ReactNode,
  style: object | object[],
) => {
  if (node === undefined || node === null) return null;

  if (isPrimitiveNode(node)) {
    return <Text style={style}>{node}</Text>;
  }

  return node;
};

const AppDropdown = ({
  items,
  dialogPosition = 'left',
  dialogWidth,
  onChange,
  buttonVariant = 'contain',
  size = 'md',
  label,
  disabled = false,
  open,
  defaultOpen = false,
  onOpenChange,
  style,
  buttonStyle,
  menuStyle,
  itemStyle,
  testID,
}: App.DropdownProps) => {
  const systemScheme = useColorScheme();
  const [webScheme, setWebScheme] = useState<'light' | 'dark' | null>(() => {
    if (typeof document === 'undefined') return null;

    return document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light';
  });
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const [submenuStack, setSubmenuStack] = useState<
    { label?: React.ReactNode; items: App.DropdownItem[] }[]
  >([]);

  const resolvedScheme =
    webScheme ?? (systemScheme === 'dark' ? 'dark' : 'light');
  const colors = palette[resolvedScheme];
  const isOpen = open ?? internalOpen;
  const visibleItems =
    submenuStack.length > 0
      ? submenuStack[submenuStack.length - 1].items
      : items;

  useEffect(() => {
    if (typeof document === 'undefined') return undefined;

    const root = document.documentElement;
    const syncScheme = () => {
      setWebScheme(root.classList.contains('dark') ? 'dark' : 'light');
    };

    syncScheme();

    const observer = new MutationObserver(syncScheme);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const setOpen = (nextOpen: boolean) => {
    if (open === undefined) {
      setInternalOpen(nextOpen);
    }

    if (!nextOpen) {
      setSubmenuStack([]);
    }

    onOpenChange?.(nextOpen);
  };

  const estimatedMenuHeight = useMemo(
    () => flattenMenuHeight(visibleItems, submenuStack.length > 0),
    [visibleItems, submenuStack.length],
  );

  const handleItemPress = (item: Extract<App.DropdownItem, { type: 'item' }>) => {
    item.onPress?.();
    onChange?.(item.id);
    setOpen(false);
  };

  const renderMenuEntries = (entries: App.DropdownItem[]) =>
    entries.map((entry, index) => {
      if (entry.type === 'group') {
        return (
          <View
            key={entry.id}
            style={[index > 0 && styles.groupSpacing, styles.groupWrap]}
          >
            {entry.label ? (
              <View style={styles.groupHeader}>
                {renderTextNode(entry.label, [
                  styles.groupHeaderText,
                  { color: colors.sectionLabel },
                ])}
              </View>
            ) : null}
            <View style={styles.groupItems}>{renderMenuEntries(entry.items)}</View>
          </View>
        );
      }

      if (entry.type === 'submenu') {
        return (
          <Pressable
            key={entry.id}
            accessibilityRole="button"
            onPress={() =>
              setSubmenuStack((current) => [
                ...current,
                { label: entry.label, items: entry.items },
              ])
            }
            style={({ pressed }) => [
              styles.menuItem,
              {
                backgroundColor: pressed ? colors.itemHover : 'transparent',
              },
              itemStyle,
            ]}
          >
            <View style={styles.menuItemLeading}>
              {entry.icon ? (
                <View style={styles.iconSlot}>
                  {renderTextNode(entry.icon, [
                    styles.iconText,
                    { color: colors.itemIcon },
                  ])}
                </View>
              ) : null}
              <View style={styles.menuItemLabelWrap}>
                {renderTextNode(entry.label, [
                  styles.menuItemText,
                  { color: colors.itemText },
                ])}
              </View>
            </View>
            <Text
              style={[
                styles.submenuIndicator,
                { color: colors.submenuIndicator },
              ]}
            >
              {'>'}
            </Text>
          </Pressable>
        );
      }

      return (
        <Pressable
          key={entry.id}
          accessibilityRole="menuitem"
          onPress={() => handleItemPress(entry)}
          style={({ pressed }) => [
            styles.menuItem,
            {
              backgroundColor: entry.danger
                ? pressed
                  ? colors.dangerHover
                  : 'transparent'
                : pressed
                  ? colors.itemHover
                  : 'transparent',
            },
            itemStyle,
          ]}
        >
          <View style={styles.menuItemLeading}>
            {entry.icon ? (
              <View style={styles.iconSlot}>
                {renderTextNode(entry.icon, [
                  styles.iconText,
                  {
                    color: entry.danger ? colors.dangerText : colors.itemIcon,
                  },
                ])}
              </View>
            ) : null}
            <View style={styles.menuItemLabelWrap}>
              {renderTextNode(entry.label, [
                styles.menuItemText,
                {
                  color: entry.danger ? colors.dangerText : colors.itemText,
                },
              ])}
            </View>
          </View>
        </Pressable>
      );
    });

  return (
    <View
      testID={testID}
      style={[
        styles.root,
        isOpen && { paddingBottom: estimatedMenuHeight + 8 },
        style,
      ]}
    >
      <AppButton
        label={label ?? 'Dropdown'}
        variant={buttonVariant}
        size={size}
        disabled={disabled}
        onPress={() => {
          if (!disabled) {
            setOpen(!isOpen);
          }
        }}
        style={buttonStyle}
      />

      {isOpen ? (
        <View
          style={[
            styles.menuWrap,
            dialogPosition === 'left' ? styles.alignLeft : styles.alignRight,
            dialogWidth
              ? { width: dialogWidth }
              : { minWidth: 180, width: 200 },
          ]}
        >
          <View
            style={[
              styles.menuPanel,
              {
                backgroundColor: colors.panelBackground,
                borderColor: colors.panelBorder,
              },
              menuStyle,
            ]}
          >
            {submenuStack.length > 0 ? (
              <Pressable
                accessibilityRole="button"
                onPress={() =>
                  setSubmenuStack((current) => current.slice(0, -1))
                }
                style={({ pressed }) => [
                  styles.menuItem,
                  {
                    backgroundColor: pressed ? colors.itemHover : 'transparent',
                  },
                ]}
              >
                <Text
                  style={[
                    styles.submenuIndicator,
                    { color: colors.submenuIndicator },
                  ]}
                >
                  {'<'}
                </Text>
                <View style={styles.menuItemLabelWrap}>
                  {renderTextNode(
                    submenuStack[submenuStack.length - 1]?.label ?? 'Back',
                    [
                      styles.menuItemText,
                      { color: colors.itemText },
                    ],
                  )}
                </View>
              </Pressable>
            ) : null}

            <View>{renderMenuEntries(visibleItems)}</View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignSelf: 'flex-start',
    position: 'relative',
  },
  menuWrap: {
    marginTop: 8,
    position: 'absolute',
    top: '100%',
    zIndex: 20,
  },
  alignLeft: {
    left: 0,
  },
  alignRight: {
    right: 0,
  },
  menuPanel: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 6,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  groupWrap: {
    width: '100%',
  },
  groupSpacing: {
    marginTop: 6,
  },
  groupHeader: {
    paddingBottom: 4,
    paddingHorizontal: 10,
    paddingTop: 6,
  },
  groupHeaderText: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  groupItems: {
    gap: 2,
  },
  menuItem: {
    alignItems: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    minHeight: 42,
    paddingHorizontal: 12,
    paddingVertical: 9,
  },
  menuItemLeading: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    minWidth: 0,
  },
  iconSlot: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 18,
  },
  iconText: {
    fontSize: 14,
    fontWeight: '600',
  },
  menuItemLabelWrap: {
    flex: 1,
    minWidth: 0,
  },
  menuItemText: {
    fontSize: 14,
    fontWeight: '500',
  },
  submenuIndicator: {
    fontSize: 13,
    fontWeight: '700',
  },
});

export default AppDropdown;
