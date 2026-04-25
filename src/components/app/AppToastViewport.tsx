import { StyleSheet, View, type ViewStyle } from 'react-native';
import AppToast from '@/components/app/AppToast';

const containerByPlacement: Record<App.AppToastPlacement, ViewStyle> = {
  'top-left': { alignItems: 'flex-start', justifyContent: 'flex-start', top: 16, left: 16 },
  'top-center': { alignItems: 'center', justifyContent: 'flex-start', top: 16, left: 16, right: 16 },
  'top-right': { alignItems: 'flex-end', justifyContent: 'flex-start', top: 16, right: 16 },
  'bottom-left': { alignItems: 'flex-start', justifyContent: 'flex-end', bottom: 16, left: 16 },
  'bottom-center': { alignItems: 'center', justifyContent: 'flex-end', bottom: 16, left: 16, right: 16 },
  'bottom-right': { alignItems: 'flex-end', justifyContent: 'flex-end', bottom: 16, right: 16 },
};

const AppToastViewport = ({
  toasts,
  placement = 'top-right',
  onClose,
  style,
  testID,
}: App.ToastViewportProps) => {
  return (
    <View pointerEvents="box-none" style={[styles.viewport, containerByPlacement[placement], style]} testID={testID}>
      <View pointerEvents="box-none" style={styles.stack}>
        {toasts.map((toast, index) => (
          <AppToast
            key={toast.id}
            autoClose={toast.autoClose}
            closable={toast.closable}
            description={toast.description}
            onClose={() => onClose?.(toast.id)}
            placement={placement}
            stackIndex={index}
            title={toast.title}
            variant={toast.variant}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewport: {
    pointerEvents: 'box-none',
    position: 'absolute',
    zIndex: 40,
  },
  stack: {
    maxWidth: 360,
    width: '100%',
  },
});

export default AppToastViewport;
