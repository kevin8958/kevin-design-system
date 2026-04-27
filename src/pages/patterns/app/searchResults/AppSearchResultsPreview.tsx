'use client';

import AppButton from '@/components/app/AppButton';
import AppEmptyState from '@/components/app/AppEmptyState';
import AppSelect from '@/components/app/AppSelect';
import AppTag from '@/components/app/AppTag';
import AppTextInput from '@/components/app/AppTextInput';
import { StyleSheet, Text, View } from 'react-native';

type AppSearchResultsPreviewProps = {
  state?: 'default' | 'loading' | 'empty';
  layout?: 'cards' | 'compact';
};

const sortOptions = [
  { label: 'Most relevant', value: 'relevant' },
  { label: 'Newest first', value: 'newest' },
];

const resultCards = [
  {
    title: 'Senior Design Systems Engineer',
    meta: 'Remote · Full-time · Platform',
    description:
      'Lead tokens, component APIs, and accessibility quality across the suite.',
  },
  {
    title: 'Product Designer, Search UX',
    meta: 'Toronto · Hybrid · Growth',
    description:
      'Shape faceted discovery, ranking feedback, and multi-step filtering flows.',
  },
  {
    title: 'Content Designer, Marketplace',
    meta: 'Remote · Contract · Commerce',
    description:
      'Clarify listing taxonomy, search guidance, and onboarding content for sellers.',
  },
];

export default function AppSearchResultsPreview({
  state = 'default',
  layout = 'cards',
}: AppSearchResultsPreviewProps) {
  return (
    <View style={styles.screen}>
      <View style={styles.form}>
        <AppTextInput
          placeholder="Search open roles"
          defaultValue="design"
          prefix="⌕"
        />
        <View style={styles.controlRow}>
          <View style={styles.selectWrap}>
            <AppSelect label="Sort" options={sortOptions} value="relevant" />
          </View>
          <AppButton
            variant="outline"
            color="neutral"
            size="sm"
            label="Filters (3)"
          />
        </View>
      </View>

      <View style={styles.tagRow}>
        <AppTag label="Remote" variant="primary" />
        <AppTag label="Design Systems" variant="primary" />
        <AppTag label="Senior" variant="primary" />
      </View>

      <View style={styles.metaRow}>
        <Text style={styles.metaStrong}>24 matching roles</Text>
        <AppButton variant="clear" color="primary" size="sm" label="Save" />
      </View>

      {state === 'empty' ? (
        <AppEmptyState
          title="No matching roles found"
          description="Try broadening your filters or removing one or two refinements to recover the result set."
          primaryAction={<AppButton color="primary" label="Clear filters" />}
          secondaryAction={
            <AppButton
              variant="outline"
              color="neutral"
              label="Edit search"
            />
          }
        />
      ) : state === 'loading' ? (
        <View style={styles.results}>
          {[0, 1, 2].map((item) => (
            <View key={item} style={styles.loadingCard}>
              <View style={styles.loadingLineLarge} />
              <View style={styles.loadingLineSmall} />
              <View style={styles.loadingLineFull} />
            </View>
          ))}
        </View>
      ) : (
        <View style={styles.results}>
          {resultCards.map((card) => (
            <View
              key={card.title}
              style={layout === 'cards' ? styles.resultCard : styles.resultRow}
            >
              <Text style={styles.resultTitle}>{card.title}</Text>
              <Text style={styles.resultMeta}>{card.meta}</Text>
              {layout === 'cards' ? (
                <Text style={styles.resultDescription}>{card.description}</Text>
              ) : null}
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    gap: 16,
    width: '100%',
  },
  form: {
    gap: 12,
  },
  controlRow: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    gap: 10,
  },
  selectWrap: {
    flex: 1,
  },
  tagRow: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
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
  results: {
    gap: 10,
  },
  resultCard: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E5E5',
    borderRadius: 20,
    borderWidth: 1,
    gap: 6,
    padding: 14,
  },
  resultRow: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E5E5',
    borderRadius: 16,
    borderWidth: 1,
    gap: 4,
    padding: 12,
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
  resultDescription: {
    color: '#525252',
    fontSize: 13,
    lineHeight: 19,
  },
  loadingCard: {
    backgroundColor: '#F7F7F7',
    borderColor: '#E5E5E5',
    borderRadius: 20,
    borderWidth: 1,
    gap: 10,
    padding: 14,
  },
  loadingLineLarge: {
    backgroundColor: '#E5E5E5',
    borderRadius: 999,
    height: 14,
    width: 180,
  },
  loadingLineSmall: {
    backgroundColor: '#E5E5E5',
    borderRadius: 999,
    height: 10,
    width: 120,
  },
  loadingLineFull: {
    backgroundColor: '#E5E5E5',
    borderRadius: 999,
    height: 10,
    width: '100%',
  },
});
