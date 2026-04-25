import { StyleSheet, View } from 'react-native';
import { renderAppTextNode } from '@/components/app/appUtils';
import { appCardSizes, useAppDataTheme } from '@/components/app/appDataUtils';

const AppDescriptionList = ({
  items,
  size = 'md',
  columns = 1,
  style,
  itemStyle,
  testID,
}: App.DescriptionListProps) => {
  const { colors } = useAppDataTheme();
  const metrics = appCardSizes[size];

  return (
    <View
      testID={testID}
      style={[
        styles.root,
        {
          gap: 12,
        },
        style,
      ]}
    >
      {items.map((item) => (
        <View
          key={item.label}
          style={[
            styles.card,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
              borderRadius: metrics.radius,
              padding: metrics.padding,
              width: columns === 2 ? '48%' : '100%',
            },
            itemStyle,
          ]}
        >
          {renderAppTextNode(item.label, [
            styles.labelText,
            { color: colors.muted, fontSize: metrics.titleSize },
          ])}
          {renderAppTextNode(item.value, [
            styles.valueText,
            { color: colors.title, fontSize: metrics.bodySize },
          ])}
          {item.hint
            ? renderAppTextNode(item.hint, [
                styles.hintText,
                { color: colors.muted, fontSize: metrics.titleSize },
              ])
            : null}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  card: {
    borderWidth: 1,
    gap: 8,
  },
  labelText: {
    fontWeight: '600',
  },
  valueText: {
    fontWeight: '600',
    lineHeight: 22,
  },
  hintText: {
    lineHeight: 18,
  },
});

export default AppDescriptionList;
