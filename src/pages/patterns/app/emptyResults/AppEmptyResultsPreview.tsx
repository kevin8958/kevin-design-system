'use client';

import AppButton from '@/components/app/AppButton';
import AppEmptyState from '@/components/app/AppEmptyState';
import AppTag from '@/components/app/AppTag';
import AppTextInput from '@/components/app/AppTextInput';
import { StyleSheet, View } from 'react-native';

type AppEmptyResultsPreviewProps = {
  context?: 'search' | 'saved';
  actions?: 'single' | 'double';
};

export default function AppEmptyResultsPreview({
  context = 'search',
  actions = 'double',
}: AppEmptyResultsPreviewProps) {
  const isSaved = context === 'saved';

  return (
    <View style={styles.screen}>
      <AppTextInput
        placeholder="Search open roles"
        defaultValue={isSaved ? 'saved candidate lists' : 'design manager'}
        prefix="⌕"
      />

      <View style={styles.tagRow}>
        <AppTag label="Remote" variant="primary" />
        <AppTag label={isSaved ? 'Bookmarked only' : 'Series A'} variant="primary" />
        <AppTag label={isSaved ? 'Updated this week' : 'Leadership'} variant="primary" />
      </View>

      <AppEmptyState
        title={isSaved ? 'No saved matches fit these filters' : 'No roles match this search'}
        description={
          isSaved
            ? 'The saved list still exists, but the active refinements are hiding every result. Relax one or two filters to recover the shortlist.'
            : 'Try broadening the query or removing one or two refinements so the result set can recover.'
        }
        primaryAction={<AppButton color="primary" label="Clear filters" />}
        secondaryAction={
          actions === 'double' ? (
            <AppButton variant="outline" color="neutral" label="Edit search" />
          ) : undefined
        }
        size="lg"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    gap: 16,
    width: '100%',
  },
  tagRow: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
});
