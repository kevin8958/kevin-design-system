import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { renderAppTextNode } from '@/components/app/appUtils';
import { useAppDataTheme } from '@/components/app/appDataUtils';

const AppTable = ({
  columns,
  data,
  emptyState,
  style,
  testID,
}: App.TableProps) => {
  const { colors } = useAppDataTheme();

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={style} testID={testID}>
      <View
        style={[
          styles.table,
          {
            backgroundColor: colors.surface,
            borderColor: colors.border,
          },
        ]}
      >
        <View style={[styles.headerRow, { borderBottomColor: colors.border }]}>
          {columns.map((column) => (
            <View
              key={column.key}
              style={[
                styles.cell,
                styles.headerCell,
                column.width ? { width: column.width } : styles.flexCell,
              ]}
            >
              <Text style={[styles.headerText, { color: colors.muted }]}>
                {column.label}
              </Text>
            </View>
          ))}
        </View>

        {data.length === 0 ? (
          <View style={styles.emptyRow}>
            <Text style={[styles.emptyText, { color: colors.muted }]}>
              {emptyState ?? 'No rows available.'}
            </Text>
          </View>
        ) : (
          data.map((row, rowIndex) => (
            <View
              key={row.id ?? `row-${rowIndex}`}
              style={[
                styles.bodyRow,
                {
                  backgroundColor:
                    rowIndex % 2 === 0 ? colors.surface : colors.surfaceMuted,
                  borderBottomColor: colors.border,
                },
              ]}
            >
              {columns.map((column) => (
                <View
                  key={`${row.id ?? rowIndex}-${column.key}`}
                  style={[
                    styles.cell,
                    column.width ? { width: column.width } : styles.flexCell,
                  ]}
                >
                  {renderAppTextNode(row[column.key], [
                    styles.bodyText,
                    { color: colors.text },
                  ])}
                </View>
              ))}
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  table: {
    borderRadius: 20,
    borderWidth: 1,
    minWidth: 560,
    overflow: 'hidden',
  },
  headerRow: {
    flexDirection: 'row',
    minHeight: 44,
    borderBottomWidth: 1,
  },
  bodyRow: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    minHeight: 52,
  },
  cell: {
    justifyContent: 'center',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  headerCell: {
    justifyContent: 'center',
  },
  flexCell: {
    flex: 1,
    minWidth: 120,
  },
  headerText: {
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  bodyText: {
    fontSize: 13,
    lineHeight: 18,
  },
  emptyRow: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 120,
    padding: 20,
  },
  emptyText: {
    fontSize: 13,
  },
});

export default AppTable;
