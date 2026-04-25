import { useState } from 'react';
import { Pressable, StyleSheet, View, type ViewStyle } from 'react-native';
import { renderAppTextNode, useResolvedAppScheme } from '@/components/app/appUtils';

type TooltipPalette = {
  background: string;
  foreground: string;
  border: string;
};

const palette: Record<
  'light' | 'dark',
  Record<App.AppSemanticColor, TooltipPalette>
> = {
  light: {
    neutral: { background: '#171717', foreground: '#FFFFFF', border: '#171717' },
    primary: { background: '#0057C2', foreground: '#FFFFFF', border: '#0057C2' },
    info: { background: '#0C4A6E', foreground: '#FFFFFF', border: '#0C4A6E' },
    success: { background: '#1D6B52', foreground: '#FFFFFF', border: '#1D6B52' },
    warning: { background: '#9A5B00', foreground: '#FFFFFF', border: '#9A5B00' },
    danger: { background: '#A61E1E', foreground: '#FFFFFF', border: '#A61E1E' },
  },
  dark: {
    neutral: { background: '#F5F5F5', foreground: '#171717', border: '#F5F5F5' },
    primary: { background: '#FFD089', foreground: '#171717', border: '#FFD089' },
    info: { background: '#B3E5FC', foreground: '#0C4A6E', border: '#B3E5FC' },
    success: { background: '#C4E6DB', foreground: '#1D6B52', border: '#C4E6DB' },
    warning: { background: '#FDE68A', foreground: '#78350F', border: '#FDE68A' },
    danger: { background: '#FCA5A5', foreground: '#7F1D1D', border: '#FCA5A5' },
  },
};

const getPositionStyle = (position: App.AppTooltipPosition): ViewStyle[] => {
  switch (position) {
    case 'right':
      return [{ left: '100%' as const, marginLeft: 10 }, { top: '50%' as const, transform: [{ translateY: -20 }] }];
    case 'bottom':
      return [{ top: '100%' as const, marginTop: 10 }, { left: '50%' as const, transform: [{ translateX: -70 }] }];
    case 'left':
      return [{ right: '100%' as const, marginRight: 10 }, { top: '50%' as const, transform: [{ translateY: -20 }] }];
    case 'top':
    default:
      return [{ bottom: '100%' as const, marginBottom: 10 }, { left: '50%' as const, transform: [{ translateX: -70 }] }];
  }
};

const AppTooltip = ({
  content,
  children,
  position = 'top',
  color = 'neutral',
  open,
  defaultOpen = false,
  onOpenChange,
  style,
  contentStyle,
  testID,
}: App.TooltipProps) => {
  const scheme = useResolvedAppScheme();
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpen = open ?? internalOpen;
  const tone = palette[scheme][color];

  const setOpen = (nextOpen: boolean) => {
    if (open === undefined) {
      setInternalOpen(nextOpen);
    }

    onOpenChange?.(nextOpen);
  };

  return (
    <View testID={testID} style={[styles.root, style]}>
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ expanded: isOpen }}
        onPress={() => setOpen(!isOpen)}
        style={styles.trigger}
      >
        <View>{children}</View>
      </Pressable>

      {isOpen ? (
        <View
          style={[
            styles.tooltipWrap,
            ...getPositionStyle(position),
            {
              backgroundColor: tone.background,
              borderColor: tone.border,
            },
            contentStyle,
          ]}
        >
          {renderAppTextNode(content, [
            styles.tooltipText,
            { color: tone.foreground },
          ])}
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
  trigger: {
    alignSelf: 'flex-start',
  },
  tooltipWrap: {
    borderRadius: 14,
    borderWidth: 1,
    maxWidth: 140,
    minWidth: 110,
    paddingHorizontal: 12,
    paddingVertical: 10,
    position: 'absolute',
    zIndex: 30,
  },
  tooltipText: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 17,
  },
});

export default AppTooltip;
