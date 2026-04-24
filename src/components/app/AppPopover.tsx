import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  type ViewStyle,
} from 'react-native';
import { renderAppTextNode, useResolvedAppScheme } from '@/components/app/appUtils';

type AppPopoverPalette = {
  surface: string;
  border: string;
  title: string;
  description: string;
  content: string;
};

const palette: Record<'light' | 'dark', AppPopoverPalette> = {
  light: {
    surface: '#FFFFFF',
    border: '#E5E5E5',
    title: '#171717',
    description: '#737373',
    content: '#404040',
  },
  dark: {
    surface: '#0A0A0A',
    border: '#262626',
    title: '#FAFAFA',
    description: '#A3A3A3',
    content: '#D4D4D4',
  },
};

const reserveSpace = (
  side: App.AppPopoverSide,
  panelWidth: number,
) => {
  if (side === 'top') {
    return { paddingTop: 220 };
  }

  if (side === 'bottom') {
    return { paddingBottom: 220 };
  }

  return side === 'left'
    ? { paddingLeft: panelWidth + 24 }
    : { paddingRight: panelWidth + 24 };
};

const getPanelPosition = (
  side: App.AppPopoverSide,
  align: App.AppPopoverAlign,
  panelWidth: number,
): ViewStyle[] => {
  if (side === 'top' || side === 'bottom') {
    return [
      side === 'top'
        ? { bottom: '100%' as const, marginBottom: 12 }
        : { top: '100%' as const, marginTop: 12 },
      align === 'start'
        ? { left: 0 }
        : align === 'end'
          ? { right: 0 }
          : {
              left: '50%' as const,
              transform: [{ translateX: -panelWidth / 2 }],
            },
    ];
  }

  return [
    side === 'left'
      ? { right: '100%' as const, marginRight: 12 }
      : { left: '100%' as const, marginLeft: 12 },
    align === 'start'
      ? { top: 0 }
      : align === 'end'
        ? { bottom: 0 }
        : {
            top: '50%' as const,
            transform: [{ translateY: -64 }],
          },
  ];
};

const getArrowPosition = (
  side: App.AppPopoverSide,
  align: App.AppPopoverAlign,
): ViewStyle[] => {
  if (side === 'top' || side === 'bottom') {
    return [
      side === 'top' ? { bottom: -7 } : { top: -7 },
      align === 'start'
        ? { left: 20 }
        : align === 'end'
          ? { right: 20 }
          : {
              left: '50%' as const,
              transform: [{ translateX: -7 }, { rotate: '45deg' }],
            },
    ];
  }

  return [
    side === 'left' ? { right: -7 } : { left: -7 },
    align === 'start'
      ? { top: 20 }
      : align === 'end'
        ? { bottom: 20 }
        : {
            top: '50%' as const,
            transform: [{ translateY: -7 }, { rotate: '45deg' }],
          },
  ];
};

const AppPopover = ({
  trigger,
  children,
  title,
  description,
  open,
  defaultOpen = false,
  onOpenChange,
  side = 'bottom',
  align = 'center',
  width,
  showArrow = true,
  disabled = false,
  style,
  contentStyle,
  testID,
}: App.PopoverProps) => {
  const scheme = useResolvedAppScheme();
  const colors = palette[scheme];
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;
  const panelWidth = width ?? 280;

  const setOpen = (nextOpen: boolean) => {
    if (!isControlled) {
      setInternalOpen(nextOpen);
    }

    onOpenChange?.(nextOpen);
  };

  return (
    <View
      testID={testID}
      style={[styles.root, isOpen && reserveSpace(side, panelWidth), style]}
    >
      <View style={styles.anchor}>
        <Pressable
          accessibilityRole="button"
          accessibilityState={{ disabled, expanded: isOpen }}
          disabled={disabled}
          onPress={() => setOpen(!isOpen)}
          style={styles.triggerWrap}
        >
          <View>{trigger}</View>
        </Pressable>

        {isOpen ? (
          <View
            style={[
              styles.panelWrap,
              ...getPanelPosition(side, align, panelWidth),
              { width: panelWidth },
            ]}
          >
            <View
              style={[
                styles.panel,
                {
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                },
                contentStyle,
              ]}
            >
              {title ? (
                <View>
                  {renderAppTextNode(title, [
                    styles.titleText,
                    { color: colors.title },
                  ])}
                </View>
              ) : null}

              {description ? (
                <View style={title ? styles.sectionGapSm : undefined}>
                  {renderAppTextNode(description, [
                    styles.descriptionText,
                    { color: colors.description },
                  ])}
                </View>
              ) : null}

              {children ? (
                <View style={title || description ? styles.sectionGapMd : undefined}>
                  {renderAppTextNode(children, [
                    styles.contentText,
                    { color: colors.content },
                  ])}
                </View>
              ) : null}

              {showArrow ? (
                <View
                  style={[
                    styles.arrow,
                    {
                      backgroundColor: colors.surface,
                      borderColor: colors.border,
                    },
                    ...getArrowPosition(side, align),
                  ]}
                />
              ) : null}
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignSelf: 'flex-start',
  },
  anchor: {
    alignSelf: 'flex-start',
    position: 'relative',
  },
  triggerWrap: {
    alignSelf: 'flex-start',
  },
  panelWrap: {
    position: 'absolute',
    zIndex: 20,
  },
  panel: {
    borderRadius: 18,
    borderWidth: 1,
    minHeight: 96,
    padding: 16,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 14,
    elevation: 5,
  },
  titleText: {
    fontSize: 15,
    fontWeight: '600',
  },
  descriptionText: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19,
  },
  contentText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },
  sectionGapSm: {
    marginTop: 4,
  },
  sectionGapMd: {
    marginTop: 10,
  },
  arrow: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    height: 14,
    position: 'absolute',
    transform: [{ rotate: '45deg' }],
    width: 14,
  },
});

export default AppPopover;
