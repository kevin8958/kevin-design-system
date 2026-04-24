import { Pressable, StyleSheet, View } from 'react-native';
import AppButton from '@/components/app/AppButton';
import { renderAppTextNode, useResolvedAppScheme } from '@/components/app/appUtils';

type AppDrawerPalette = {
  scrim: string;
  surface: string;
  border: string;
  title: string;
  content: string;
  close: string;
};

const palette: Record<'light' | 'dark', AppDrawerPalette> = {
  light: {
    scrim: 'rgba(15, 23, 42, 0.12)',
    surface: '#FFFFFF',
    border: '#E5E5E5',
    title: '#171717',
    content: '#404040',
    close: '#737373',
  },
  dark: {
    scrim: 'rgba(0, 0, 0, 0.28)',
    surface: '#0A0A0A',
    border: '#262626',
    title: '#FAFAFA',
    content: '#D4D4D4',
    close: '#A3A3A3',
  },
};

const sizeStyles = {
  sm: 260,
  md: 300,
  lg: 340,
  xl: 400,
  full: 9999,
} satisfies Record<App.AppDrawerSize, number>;

const AppDrawer = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  children,
  size = 'lg',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  hideBottom = false,
  loading = false,
  style,
  overlayStyle,
  panelStyle,
  contentStyle,
  testID,
}: App.DrawerProps) => {
  const scheme = useResolvedAppScheme();
  const colors = palette[scheme];

  if (!isOpen) return null;

  return (
    <View testID={testID} pointerEvents="box-none" style={[styles.overlay, style]}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Close drawer"
        onPress={onClose}
        style={[styles.scrim, { backgroundColor: colors.scrim }, overlayStyle]}
      />

      <View style={styles.container} pointerEvents="box-none">
        <View
          style={[
            styles.panel,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
              maxWidth: size === 'full' ? '100%' : sizeStyles[size],
            },
            panelStyle,
          ]}
        >
          <View style={[styles.header, { borderBottomColor: colors.border }]}>
            <View style={styles.headerTitleWrap}>
              {title
                ? renderAppTextNode(title, [
                    styles.titleText,
                    { color: colors.title },
                  ])
                : null}
            </View>
            <Pressable
              accessibilityRole="button"
              onPress={onClose}
              style={styles.closeButton}
            >
              {renderAppTextNode('×', [
                styles.closeText,
                { color: colors.close },
              ])}
            </Pressable>
          </View>

          <View style={[styles.body, contentStyle]}>
            {renderAppTextNode(children, [
              styles.bodyText,
              { color: colors.content },
            ])}
          </View>

          {!hideBottom ? (
            <View style={[styles.footer, { borderTopColor: colors.border }]}>
              <AppButton
                label={cancelText}
                variant="clear"
                color="neutral"
                onPress={onClose}
              />
              <AppButton
                label={confirmText}
                loading={loading}
                onPress={onConfirm ?? onClose}
              />
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFill,
    zIndex: 30,
  },
  scrim: {
    ...StyleSheet.absoluteFill,
  },
  container: {
    ...StyleSheet.absoluteFill,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    padding: 8,
  },
  panel: {
    borderRadius: 24,
    borderWidth: 1,
    height: '100%',
    minWidth: 240,
    overflow: 'hidden',
    width: '100%',
  },
  header: {
    alignItems: 'center',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 60,
    paddingHorizontal: 16,
  },
  headerTitleWrap: {
    flex: 1,
    minWidth: 0,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
  },
  closeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  closeText: {
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 24,
  },
  body: {
    flex: 1,
    padding: 16,
  },
  bodyText: {
    fontSize: 14,
    lineHeight: 20,
  },
  footer: {
    borderTopWidth: 1,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'space-between',
    padding: 12,
  },
});

export default AppDrawer;
