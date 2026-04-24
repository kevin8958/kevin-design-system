import { Pressable, StyleSheet, View } from 'react-native';
import AppButton from '@/components/app/AppButton';
import { renderAppTextNode, useResolvedAppScheme } from '@/components/app/appUtils';

type AppModalPalette = {
  scrim: string;
  surface: string;
  border: string;
  title: string;
  content: string;
  muted: string;
  close: string;
  stateBorder: Record<App.AppModalState, string>;
};

const palette: Record<'light' | 'dark', AppModalPalette> = {
  light: {
    scrim: 'rgba(15, 23, 42, 0.12)',
    surface: '#FFFFFF',
    border: '#E5E5E5',
    title: '#171717',
    content: '#404040',
    muted: '#737373',
    close: '#737373',
    stateBorder: {
      default: '#E5E5E5',
      info: '#0288D1',
      success: '#3BAC87',
      warning: '#D97706',
      danger: '#D32F2F',
    },
  },
  dark: {
    scrim: 'rgba(0, 0, 0, 0.28)',
    surface: '#0A0A0A',
    border: '#262626',
    title: '#FAFAFA',
    content: '#D4D4D4',
    muted: '#A3A3A3',
    close: '#A3A3A3',
    stateBorder: {
      default: '#262626',
      info: '#7DD3FC',
      success: '#7AD7BC',
      warning: '#FBBF24',
      danger: '#F87171',
    },
  },
};

const sizeStyles = {
  sm: 280,
  md: 320,
  lg: 360,
  xl: 420,
  '2xl': 500,
  full: 9999,
} satisfies Record<App.AppModalSize, number>;

const AppModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  children,
  maxWidth = 'md',
  state = 'default',
  position = 'center',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  hideCancel = false,
  hideBottom = false,
  loading = false,
  style,
  overlayStyle,
  panelStyle,
  contentStyle,
  testID,
}: App.ModalProps) => {
  const scheme = useResolvedAppScheme();
  const colors = palette[scheme];

  if (!isOpen) return null;

  return (
    <View testID={testID} pointerEvents="box-none" style={[styles.overlay, style]}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Close modal"
        onPress={onClose}
        style={[styles.scrim, { backgroundColor: colors.scrim }, overlayStyle]}
      />

      <View
        style={[
          styles.contentWrap,
          position === 'top'
            ? styles.top
            : position === 'bottom'
              ? styles.bottom
              : styles.center,
        ]}
      >
        <View
          style={[
            styles.panel,
            {
              backgroundColor: colors.surface,
              borderColor: colors.stateBorder[state],
              maxWidth: maxWidth === 'full' ? '100%' : sizeStyles[maxWidth],
            },
            panelStyle,
          ]}
        >
          {hideCancel || hideBottom ? (
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
          ) : null}

          {title ? (
            <View>
              {renderAppTextNode(title, [
                styles.titleText,
                { color: colors.title },
              ])}
            </View>
          ) : null}

          {children ? (
            <View style={[styles.body, title ? styles.bodyWithTitle : undefined, contentStyle]}>
              {renderAppTextNode(children, [
                styles.bodyText,
                { color: colors.content },
              ])}
            </View>
          ) : null}

          {!hideBottom ? (
            <View style={styles.footer}>
              {!hideCancel ? (
                <AppButton
                  label={cancelText}
                  variant="clear"
                  color="neutral"
                  onPress={onClose}
                />
              ) : null}

              <AppButton
                label={confirmText}
                color={state === 'default' ? 'primary' : state}
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
  contentWrap: {
    ...StyleSheet.absoluteFill,
    padding: 16,
  },
  top: {
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  center: {
    justifyContent: 'center',
  },
  bottom: {
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  panel: {
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 1.5,
    minWidth: 260,
    padding: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 18,
    width: '100%',
  },
  closeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 16,
    top: 16,
    zIndex: 1,
  },
  closeText: {
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 24,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    paddingRight: 28,
  },
  body: {
    minHeight: 72,
  },
  bodyWithTitle: {
    marginTop: 12,
  },
  bodyText: {
    fontSize: 14,
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'flex-end',
    marginTop: 20,
  },
});

export default AppModal;
