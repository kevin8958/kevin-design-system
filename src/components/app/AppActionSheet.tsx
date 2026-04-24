import { Pressable, StyleSheet, View } from 'react-native';
import { renderAppTextNode, useResolvedAppScheme } from '@/components/app/appUtils';

type AppActionSheetPalette = {
  scrim: string;
  surface: string;
  border: string;
  title: string;
  description: string;
  itemText: string;
  itemDescription: string;
  icon: string;
  pressed: string;
  danger: string;
};

const palette: Record<'light' | 'dark', AppActionSheetPalette> = {
  light: {
    scrim: 'rgba(15, 23, 42, 0.12)',
    surface: '#FFFFFF',
    border: '#E5E5E5',
    title: '#171717',
    description: '#737373',
    itemText: '#171717',
    itemDescription: '#737373',
    icon: '#737373',
    pressed: '#F5F5F5',
    danger: '#D32F2F',
  },
  dark: {
    scrim: 'rgba(0, 0, 0, 0.28)',
    surface: '#0A0A0A',
    border: '#262626',
    title: '#FAFAFA',
    description: '#A3A3A3',
    itemText: '#FAFAFA',
    itemDescription: '#A3A3A3',
    icon: '#A3A3A3',
    pressed: '#171717',
    danger: '#F87171',
  },
};

const sizeStyles = {
  sm: { maxWidth: 320, paddingTop: 14, paddingBottom: 16 },
  md: { maxWidth: 340, paddingTop: 16, paddingBottom: 18 },
  lg: { maxWidth: 360, paddingTop: 18, paddingBottom: 20 },
} satisfies Record<
  App.AppActionSheetSize,
  { maxWidth: number; paddingTop: number; paddingBottom: number }
>;

const AppActionSheet = ({
  isOpen,
  onClose,
  onSelect,
  title,
  description,
  items,
  size = 'sm',
  style,
  overlayStyle,
  sheetStyle,
  itemStyle,
  testID,
}: App.ActionSheetProps) => {
  const scheme = useResolvedAppScheme();
  const colors = palette[scheme];
  const metrics = sizeStyles[size];

  if (!isOpen) return null;

  return (
    <View testID={testID} pointerEvents="box-none" style={[styles.overlay, style]}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Close action sheet"
        onPress={onClose}
        style={[styles.scrim, { backgroundColor: colors.scrim }, overlayStyle]}
      />

      <View style={styles.sheetContainer} pointerEvents="box-none">
        <View
          style={[
            styles.sheet,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
              maxWidth: metrics.maxWidth,
              paddingTop: metrics.paddingTop,
              paddingBottom: metrics.paddingBottom,
            },
            sheetStyle,
          ]}
        >
          <View style={styles.handle} />

          {title || description ? (
            <View style={styles.header}>
              {title
                ? renderAppTextNode(title, [
                    styles.titleText,
                    { color: colors.title },
                  ])
                : null}
              {description
                ? renderAppTextNode(description, [
                    styles.descriptionText,
                    { color: colors.description },
                  ])
                : null}
            </View>
          ) : null}

          <View style={styles.list}>
            {items.map((item) => (
              <Pressable
                key={item.id}
                accessibilityRole="button"
                accessibilityState={{ disabled: item.disabled }}
                disabled={item.disabled}
                onPress={() => {
                  if (item.disabled) return;
                  onSelect?.(item.id);
                  onClose?.();
                }}
                style={({ pressed }) => [
                  styles.row,
                  {
                    backgroundColor: pressed ? colors.pressed : 'transparent',
                    opacity: item.disabled ? 0.45 : 1,
                  },
                  itemStyle,
                ]}
              >
                {item.icon ? (
                  <View style={styles.iconSlot}>
                    {renderAppTextNode(item.icon, [
                      styles.iconText,
                      {
                        color:
                          item.tone === 'danger' ? colors.danger : colors.icon,
                      },
                    ])}
                  </View>
                ) : null}

                <View style={styles.rowBody}>
                  {renderAppTextNode(item.label, [
                    styles.rowLabel,
                    {
                      color:
                        item.tone === 'danger' ? colors.danger : colors.itemText,
                    },
                  ])}
                  {item.description
                    ? renderAppTextNode(item.description, [
                        styles.rowDescription,
                        {
                          color:
                            item.tone === 'danger'
                              ? colors.danger
                              : colors.itemDescription,
                        },
                      ])
                    : null}
                </View>
              </Pressable>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'flex-end',
    zIndex: 30,
  },
  scrim: {
    ...StyleSheet.absoluteFill,
  },
  sheetContainer: {
    justifyContent: 'flex-end',
    padding: 12,
  },
  sheet: {
    alignSelf: 'center',
    borderRadius: 24,
    borderWidth: 1,
    overflow: 'hidden',
    width: '100%',
  },
  handle: {
    alignSelf: 'center',
    backgroundColor: '#A3A3A3',
    borderRadius: 999,
    height: 5,
    marginBottom: 12,
    width: 44,
  },
  header: {
    gap: 4,
    paddingBottom: 8,
    paddingHorizontal: 16,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '600',
  },
  descriptionText: {
    fontSize: 13,
    lineHeight: 18,
  },
  list: {
    gap: 2,
    paddingHorizontal: 8,
  },
  row: {
    borderRadius: 16,
    flexDirection: 'row',
    gap: 12,
    minHeight: 54,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  iconSlot: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 20,
  },
  iconText: {
    fontSize: 16,
    fontWeight: '600',
  },
  rowBody: {
    flex: 1,
    gap: 2,
    minWidth: 0,
  },
  rowLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
  rowDescription: {
    fontSize: 12,
    lineHeight: 17,
  },
});

export default AppActionSheet;
