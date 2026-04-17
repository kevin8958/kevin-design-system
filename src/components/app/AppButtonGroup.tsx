import { View, StyleSheet } from 'react-native';
import AppButton from '@/components/app/AppButton';

const AppButtonGroup = ({
  items,
  value,
  onChange,
  size = 'sm',
  color = 'neutral',
  disabled = false,
  fullWidth = false,
  style,
  itemStyle,
  testID,
}: App.ButtonGroupProps) => {
  return (
    <View
      testID={testID}
      style={[
        styles.root,
        fullWidth ? styles.fullWidthRoot : styles.autoWidthRoot,
        style,
      ]}
    >
      {items.map((item, index) => {
        const selected = item.value === value;
        const isFirst = index === 0;
        const isLast = index === items.length - 1;

        return (
          <View
            key={item.value}
            style={[
              styles.itemWrap,
              !isFirst && styles.itemOverlap,
              fullWidth && styles.fullWidthItem,
              selected && styles.selectedItem,
            ]}
          >
            <AppButton
              label={item.label}
              size={size}
              color={color}
              variant={selected ? 'contain' : 'outline'}
              disabled={disabled || item.disabled}
              fullWidth={fullWidth}
              onPress={() => {
                if (!disabled && !item.disabled) {
                  onChange?.(item.value);
                }
              }}
              style={[
                styles.button,
                !isFirst && styles.middleLeftRadius,
                !isLast && styles.middleRightRadius,
                fullWidth && styles.fullWidthItem,
                itemStyle,
              ]}
              testID={item.testID}
            />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
  autoWidthRoot: {
    alignSelf: 'flex-start',
  },
  fullWidthRoot: {
    alignSelf: 'stretch',
    width: '100%',
  },
  itemWrap: {
    minWidth: 0,
  },
  itemOverlap: {
    marginLeft: -1,
  },
  fullWidthItem: {
    flex: 1,
  },
  selectedItem: {
    zIndex: 1,
  },
  button: {
    borderRadius: 12,
    minWidth: 0,
  },
  middleLeftRadius: {
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },
  middleRightRadius: {
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
});

export default AppButtonGroup;
