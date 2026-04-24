import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import {
  AppFieldShell,
  appInputSizeStyles,
  useAppInputTheme,
} from '@/components/app/appInputUtils';
import { renderAppTextNode } from '@/components/app/appUtils';

const AppSwitch = ({
  label,
  description,
  checked,
  defaultChecked = false,
  onChange,
  size = 'md',
  disabled = false,
  invalid = false,
  errorMsg,
  style,
  testID,
}: App.SwitchProps) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isControlled = checked !== undefined;
  const resolvedChecked = isControlled ? checked : internalChecked;
  const { colors } = useAppInputTheme();
  const metrics = appInputSizeStyles[size];

  return (
    <AppFieldShell
      errorMsg={errorMsg}
      invalid={invalid}
      style={style}
      testID={testID}
    >
      <Pressable
        accessibilityRole="switch"
        accessibilityState={{ checked: resolvedChecked, disabled }}
        disabled={disabled}
        onPress={() => {
          const nextValue = !resolvedChecked;

          if (!isControlled) {
            setInternalChecked(nextValue);
          }

          onChange?.(nextValue);
        }}
        style={({ pressed }) => [
          styles.row,
          {
            opacity: disabled ? 0.45 : 1,
            backgroundColor: pressed ? colors.accentSubtle : 'transparent',
          },
        ]}
      >
        <View style={styles.content}>
          {label
            ? renderAppTextNode(label, [styles.labelText, { color: colors.text }])
            : null}
          {description
            ? renderAppTextNode(description, [
                styles.descriptionText,
                { color: colors.helper },
              ])
            : null}
        </View>
        <View
          style={[
            styles.track,
            {
              backgroundColor: resolvedChecked
                ? invalid
                  ? colors.borderInvalid
                  : colors.accent
                : colors.borderStrong,
              borderRadius: metrics.switchHeight / 2,
              height: metrics.switchHeight,
              width: metrics.switchWidth,
            },
          ]}
        >
          <View
            style={[
              styles.thumb,
              {
                backgroundColor: '#FFFFFF',
                borderRadius: metrics.switchThumb / 2,
                height: metrics.switchThumb,
                left: resolvedChecked
                  ? metrics.switchWidth - metrics.switchThumb - 3
                  : 3,
                top: (metrics.switchHeight - metrics.switchThumb) / 2,
                width: metrics.switchThumb,
              },
            ]}
          />
        </View>
      </Pressable>
    </AppFieldShell>
  );
};

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    borderRadius: 18,
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
    padding: 4,
  },
  content: {
    flex: 1,
    gap: 2,
    minWidth: 0,
  },
  labelText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
  descriptionText: {
    fontSize: 12,
    lineHeight: 17,
  },
  track: {
    position: 'relative',
  },
  thumb: {
    position: 'absolute',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 3,
  },
});

export default AppSwitch;
