'use client';

import AppButton from '@/components/app/AppButton';
import AppCheckbox from '@/components/app/AppCheckbox';
import AppSelect from '@/components/app/AppSelect';
import AppTag from '@/components/app/AppTag';
import { StyleSheet, Text, View } from 'react-native';

type AppFilterSheetPreviewProps = {
  state?: 'default' | 'applied' | 'loading';
  surface?: 'peek' | 'full';
};

const sortOptions = [
  { label: 'Most relevant', value: 'relevant' },
  { label: 'Newest first', value: 'newest' },
];

export default function AppFilterSheetPreview({
  state = 'default',
  surface = 'peek',
}: AppFilterSheetPreviewProps) {
  const isApplied = state === 'applied';
  const isLoading = state === 'loading';
  const isFull = surface === 'full';

  return (
    <View style={styles.screen}>
      <View style={styles.backgroundFeed}>
        {['Design systems', 'Remote', 'Figma'].map((item) => (
          <View key={item} style={styles.resultCard}>
            <Text style={styles.resultTitle}>{item}</Text>
            <Text style={styles.resultMeta}>12 matching results</Text>
          </View>
        ))}
      </View>

      <View style={[styles.sheet, isFull && styles.sheetFull]}>
        <View style={styles.handle} />
        <View style={styles.header}>
          <Text style={styles.title}>Filters</Text>
          <Text style={styles.description}>
            Narrow the result set without losing the current query.
          </Text>
        </View>

        {isApplied ? (
          <View style={styles.tagRow}>
            <AppTag label="Remote" variant="primary" />
            <AppTag label="Design Systems" variant="primary" />
            <AppTag label="Senior" variant="primary" />
          </View>
        ) : null}

        <View style={styles.form}>
          <AppSelect label="Sort order" options={sortOptions} value="relevant" />
          <AppCheckbox checked label="Remote only" />
          <AppCheckbox checked={isApplied} label="Senior roles" />
          <AppCheckbox
            checked={isApplied}
            label="Design systems experience"
          />
        </View>

        <View style={styles.noteCard}>
          <Text style={styles.noteTitle}>Result expectation</Text>
          <Text style={styles.noteDescription}>
            Show how filters affect scope before the user commits, especially
            when the sheet covers the result list.
          </Text>
        </View>

        <View style={styles.footerRow}>
          <AppButton variant="clear" color="primary" size="sm" label="Clear all" />
          <AppButton
            color="primary"
            loading={isLoading}
            label="Apply filters"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    gap: 14,
    width: '100%',
  },
  backgroundFeed: {
    gap: 10,
    opacity: 0.65,
  },
  resultCard: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E5E5',
    borderRadius: 18,
    borderWidth: 1,
    gap: 4,
    padding: 12,
  },
  resultTitle: {
    color: '#171717',
    fontSize: 13,
    fontWeight: '700',
  },
  resultMeta: {
    color: '#737373',
    fontSize: 12,
  },
  sheet: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E5E5',
    borderRadius: 28,
    borderWidth: 1,
    gap: 14,
    marginTop: -18,
    padding: 16,
  },
  sheetFull: {
    marginTop: -8,
    minHeight: 620,
  },
  handle: {
    alignSelf: 'center',
    backgroundColor: '#D4D4D4',
    borderRadius: 999,
    height: 5,
    width: 44,
  },
  header: {
    gap: 4,
  },
  title: {
    color: '#171717',
    fontSize: 20,
    fontWeight: '800',
  },
  description: {
    color: '#525252',
    fontSize: 13,
    lineHeight: 19,
  },
  tagRow: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  form: {
    gap: 12,
  },
  noteCard: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E5E5',
    borderRadius: 18,
    borderStyle: 'dashed',
    borderWidth: 1,
    gap: 4,
    padding: 14,
  },
  noteTitle: {
    color: '#171717',
    fontSize: 14,
    fontWeight: '700',
  },
  noteDescription: {
    color: '#525252',
    fontSize: 13,
    lineHeight: 19,
  },
  footerRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
});
