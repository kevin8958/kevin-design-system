import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useResolvedAppScheme } from '@/components/app/appUtils';

type AppAccordionPalette = {
  surface: string;
  border: string;
  pressedBackground: string;
  openBackground: string;
  title: string;
  description: string;
  content: string;
  icon: string;
  badgeBackground: string;
  badgeText: string;
};

const palette: Record<'light' | 'dark', AppAccordionPalette> = {
  light: {
    surface: '#FFFFFF',
    border: '#E5E5E5',
    pressedBackground: 'rgba(23, 23, 23, 0.04)',
    openBackground: '#F5F5F5',
    title: '#171717',
    description: '#737373',
    content: '#525252',
    icon: '#737373',
    badgeBackground: '#E5E7EB',
    badgeText: '#262626',
  },
  dark: {
    surface: '#0A0A0A',
    border: '#262626',
    pressedBackground: 'rgba(255, 255, 255, 0.05)',
    openBackground: '#171717',
    title: '#FAFAFA',
    description: '#A3A3A3',
    content: '#D4D4D4',
    icon: '#A3A3A3',
    badgeBackground: '#262626',
    badgeText: '#E5E5E5',
  },
};

const sizeStyles = {
  sm: {
    triggerPaddingHorizontal: 14,
    triggerPaddingVertical: 12,
    contentPaddingTop: 10,
    contentPaddingBottom: 14,
    titleSize: 14,
    descriptionSize: 12,
    contentSize: 13,
    gap: 10,
  },
  md: {
    triggerPaddingHorizontal: 16,
    triggerPaddingVertical: 14,
    contentPaddingTop: 12,
    contentPaddingBottom: 16,
    titleSize: 15,
    descriptionSize: 13,
    contentSize: 14,
    gap: 12,
  },
  lg: {
    triggerPaddingHorizontal: 18,
    triggerPaddingVertical: 16,
    contentPaddingTop: 14,
    contentPaddingBottom: 18,
    titleSize: 16,
    descriptionSize: 14,
    contentSize: 15,
    gap: 14,
  },
} satisfies Record<
  App.AppAccordionSize,
  {
    triggerPaddingHorizontal: number;
    triggerPaddingVertical: number;
    contentPaddingTop: number;
    contentPaddingBottom: number;
    titleSize: number;
    descriptionSize: number;
    contentSize: number;
    gap: number;
  }
>;

const normalizeValue = (value?: string[]) => value ?? [];

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

const renderBadgeNode = (
  node: React.ReactNode,
  colors: AppAccordionPalette,
  fontSize: number,
) => {
  if (node === undefined || node === null) return null;

  if (isPrimitiveNode(node)) {
    return (
      <View
        style={[
          styles.badge,
          { backgroundColor: colors.badgeBackground },
        ]}
      >
        <Text style={[styles.badgeText, { color: colors.badgeText, fontSize }]}>
          {node}
        </Text>
      </View>
    );
  }

  return node;
};

const AppAccordion = ({
  items,
  type = 'single',
  value,
  defaultValue,
  onChange,
  size = 'md',
  collapsible = true,
  style,
  itemStyle,
  contentStyle,
  testID,
}: App.AccordionProps) => {
  const resolvedScheme = useResolvedAppScheme();
  const colors = palette[resolvedScheme];
  const metrics = sizeStyles[size];
  const [internalValue, setInternalValue] = useState<string[]>(
    normalizeValue(defaultValue),
  );
  const resolvedValue = useMemo(
    () => normalizeValue(value ?? internalValue),
    [internalValue, value],
  );

  const setValue = (nextValue: string[]) => {
    if (value === undefined) {
      setInternalValue(nextValue);
    }

    onChange?.(nextValue);
  };

  const handleToggle = (itemId: string) => {
    const isOpen = resolvedValue.includes(itemId);

    if (type === 'multiple') {
      setValue(
        isOpen
          ? resolvedValue.filter((entry) => entry !== itemId)
          : [...resolvedValue, itemId],
      );
      return;
    }

    if (isOpen) {
      if (collapsible) {
        setValue([]);
      }
      return;
    }

    setValue([itemId]);
  };

  return (
    <View
      testID={testID}
      style={[
        styles.root,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
        },
        style,
      ]}
    >
      {items.map((item, index) => {
        const isOpen = resolvedValue.includes(item.id);

        return (
          <View
            key={item.id}
            style={[
              styles.item,
              index < items.length - 1 && {
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderBottomColor: colors.border,
              },
              itemStyle,
            ]}
          >
            <Pressable
              accessibilityRole="button"
              accessibilityState={{
                disabled: item.disabled,
                expanded: isOpen,
              }}
              disabled={item.disabled}
              onPress={() => handleToggle(item.id)}
              style={({ pressed }) => [
                styles.trigger,
                {
                  paddingHorizontal: metrics.triggerPaddingHorizontal,
                  paddingVertical: metrics.triggerPaddingVertical,
                  gap: metrics.gap,
                  backgroundColor: isOpen
                    ? colors.openBackground
                    : pressed
                      ? colors.pressedBackground
                      : 'transparent',
                },
                item.disabled && styles.disabled,
              ]}
            >
              {item.icon ? (
                <View style={styles.iconSlot}>
                  {renderTextNode(item.icon, [
                    styles.iconText,
                    { color: colors.icon, fontSize: metrics.titleSize },
                  ])}
                </View>
              ) : null}

              <View style={styles.body}>
                <View style={styles.titleRow}>
                  <View style={styles.titleWrap}>
                    {renderTextNode(item.title, [
                      styles.titleText,
                      { color: colors.title, fontSize: metrics.titleSize },
                    ])}
                  </View>
                  {item.badge ? (
                    <View style={styles.badgeSlot}>
                      {renderBadgeNode(
                        item.badge,
                        colors,
                        Math.max(metrics.descriptionSize - 1, 11),
                      )}
                    </View>
                  ) : null}
                </View>

                {item.description ? (
                  <View style={styles.descriptionWrap}>
                    {renderTextNode(item.description, [
                      styles.descriptionText,
                      {
                        color: colors.description,
                        fontSize: metrics.descriptionSize,
                        lineHeight: metrics.descriptionSize + 6,
                      },
                    ])}
                  </View>
                ) : null}
              </View>

              <View
                style={[
                  styles.chevronSlot,
                  { transform: [{ rotate: isOpen ? '180deg' : '0deg' }] },
                ]}
              >
                <Text
                  style={[
                    styles.chevronText,
                    { color: colors.icon, fontSize: metrics.titleSize },
                  ]}
                >
                  v
                </Text>
              </View>
            </Pressable>

            {isOpen ? (
              <View
                style={[
                  styles.content,
                  {
                    paddingTop: metrics.contentPaddingTop,
                    paddingBottom: metrics.contentPaddingBottom,
                    paddingHorizontal: metrics.triggerPaddingHorizontal,
                  },
                  contentStyle,
                ]}
              >
                {renderTextNode(item.content, [
                  styles.contentText,
                  {
                    color: colors.content,
                    fontSize: metrics.contentSize,
                    lineHeight: metrics.contentSize + 7,
                  },
                ])}
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
    alignSelf: 'stretch',
    borderRadius: 20,
    borderWidth: 1,
    overflow: 'hidden',
    width: '100%',
  },
  item: {
    width: '100%',
  },
  trigger: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
  disabled: {
    opacity: 0.45,
  },
  iconSlot: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 20,
    minWidth: 20,
    paddingTop: 1,
  },
  iconText: {
    fontWeight: '600',
  },
  body: {
    flex: 1,
    minWidth: 0,
  },
  titleRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'space-between',
  },
  titleWrap: {
    flex: 1,
    minWidth: 0,
  },
  titleText: {
    fontWeight: '600',
  },
  badgeSlot: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeText: {
    fontWeight: '700',
  },
  descriptionWrap: {
    marginTop: 6,
  },
  descriptionText: {
    fontWeight: '400',
  },
  chevronSlot: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 20,
    minWidth: 20,
    paddingTop: 1,
  },
  chevronText: {
    fontWeight: '600',
  },
  content: {
    width: '100%',
  },
  contentText: {
    fontWeight: '400',
  },
});

export default AppAccordion;
