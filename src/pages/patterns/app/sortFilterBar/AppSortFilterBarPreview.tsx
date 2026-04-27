'use client';

import AppButton from '@/components/app/AppButton';
import AppSelect from '@/components/app/AppSelect';
import AppTag from '@/components/app/AppTag';
import AppTextInput from '@/components/app/AppTextInput';
import { StyleSheet, Text, View } from 'react-native';

type AppSortFilterBarPreviewProps = {
  state?: 'default' | 'filtered' | 'loading';
  layout?: 'compact' | 'expanded';
};

const sortOptions = [
  { label: 'Most relevant', value: 'relevant' },
  { label: 'Newest first', value: 'newest' },
  { label: 'Highest rated', value: 'rated' },
];

const activeFilters = ['Remote', 'Design Systems', 'Senior'];

export default function AppSortFilterBarPreview({
  state = 'default',
  layout = 'compact',
}: AppSortFilterBarPreviewProps) {
  const isFiltered = state === 'filtered';
  const isLoading = state === 'loading';
  const showFilterRow = isFiltered || layout === 'expanded';

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Sort & Filter Bar</Text>
        <Text style={styles.description}>
          Keep query, sort, and active refinements readable above the result
          feed.
        </Text>
      </View>

      <View style={styles.toolbarCard}>
        <View style={styles.form}>
          <AppTextInput
            placeholder="Search roles, teams, or keywords"
            defaultValue="design system"
            prefix="⌕"
          />
          <AppSelect label="Sort" options={sortOptions} value="relevant" />
          <View style={styles.buttonRow}>
            <AppButton
              variant="outline"
              color="neutral"
              size="sm"
              label="Filters (6)"
            />
            <AppButton
              color="primary"
              size="sm"
              loading={isLoading}
              label="Refresh"
            />
          </View>
        </View>

        <View style={styles.metaRow}>
          <Text style={styles.metaStrong}>
            {isFiltered ? '14 filtered results' : '148 results'}
          </Text>
          <Text style={styles.metaText}>Updated 2 minutes ago</Text>
        </View>

        {showFilterRow ? (
          <View style={styles.tagRow}>
            {activeFilters.map((filter) => (
              <AppTag key={filter} label={filter} variant="primary" />
            ))}
            <AppButton
              variant="clear"
              color="primary"
              size="sm"
              label="Clear all"
            />
          </View>
        ) : null}
      </View>

      <View style={styles.results}>
        {[
          'Principal Product Designer',
          'Design Systems Engineer',
          'Senior UX Architect',
        ].map((title) => (
          <View key={title} style={styles.resultCard}>
            <Text style={styles.resultTitle}>{title}</Text>
            <Text style={styles.resultMeta}>Remote · Full-time · 5m ago</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    gap: 16,
    width: '100%',
  },
  header: {
    gap: 6,
  },
  title: {
    color: '#171717',
    fontSize: 24,
    fontWeight: '800',
  },
  description: {
    color: '#525252',
    fontSize: 14,
    lineHeight: 21,
  },
  toolbarCard: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E5E5',
    borderRadius: 24,
    borderWidth: 1,
    gap: 14,
    padding: 14,
  },
  form: {
    gap: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
  metaRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  metaStrong: {
    color: '#171717',
    fontSize: 13,
    fontWeight: '700',
  },
  metaText: {
    color: '#737373',
    fontSize: 12,
  },
  tagRow: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  results: {
    gap: 10,
  },
  resultCard: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E5E5',
    borderRadius: 20,
    borderWidth: 1,
    gap: 4,
    padding: 14,
  },
  resultTitle: {
    color: '#171717',
    fontSize: 14,
    fontWeight: '700',
  },
  resultMeta: {
    color: '#737373',
    fontSize: 12,
    lineHeight: 18,
  },
});
