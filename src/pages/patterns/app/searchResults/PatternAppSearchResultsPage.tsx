'use client';

import { useState } from 'react';
import ButtonGroup from '@/components/action/ButtonGroup';
import SimpleTable from '@/components/data/SimpleTable';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import FlexWrapper from '@/components/layout/FlexWrapper';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';
import PatternDocsPageShell from '@/pages/patterns/common/PatternDocsPageShell';
import PatternGuideSection from '@/pages/patterns/common/PatternGuideSection';
import AppSearchResultsPreview from '@/pages/patterns/app/searchResults/AppSearchResultsPreview';

const compositionColumns = [
  { label: 'Component', key: 'property' },
  { label: 'Role', key: 'type' },
  { label: 'Why It Matters', key: 'description' },
];

const compositionRows = [
  {
    id: '1',
    property: 'AppTextInput',
    type: 'Query entry',
    description:
      'Keeps the search term editable above the result feed without breaking continuity.',
  },
  {
    id: '2',
    property: 'AppSelect',
    type: 'Sort control',
    description:
      'Lets users re-order results without leaving the result screen.',
  },
  {
    id: '3',
    property: 'AppTag',
    type: 'Applied filter summary',
    description:
      'Reflects the active refinements so loading or empty states still make sense.',
  },
  {
    id: '4',
    property: 'AppEmptyState',
    type: 'Recovery state',
    description:
      'Guides users back when the current query and filters over-constrain the feed.',
  },
  {
    id: '5',
    property: 'AppButton',
    type: 'Save and recovery action',
    description:
      'Supports filter editing, clearing, and saving the current search configuration.',
  },
];

const listCode = `
import AppSelect from '@/components/app/AppSelect';
import AppTextInput from '@/components/app/AppTextInput';

export function AppSearchResultsToolbar() {
  return (
    <>
      <AppTextInput placeholder="Search open roles" />
      <AppSelect label="Sort" options={sortOptions} value="relevant" />
    </>
  );
}`.trim();

const emptyCode = `
import AppButton from '@/components/app/AppButton';
import AppEmptyState from '@/components/app/AppEmptyState';

export function AppEmptyResultsState() {
  return (
    <AppEmptyState
      title="No matching roles found"
      description="Try broadening your filters or removing one or two refinements."
      primaryAction={<AppButton color="primary" label="Clear filters" />}
    />
  );
}`.trim();

const layoutCode = `
export function AppResultsLayoutVariants() {
  return (
    <>
      <Text>Cards for richer summaries.</Text>
      <Text>Compact rows for faster scanning.</Text>
    </>
  );
}`.trim();

export default function PatternAppSearchResultsPage() {
  const [state, setState] = useState<'default' | 'loading' | 'empty'>(
    'default',
  );
  const [layout, setLayout] = useState<'cards' | 'compact'>('cards');
  const selectedDescription =
    layout === 'cards'
      ? 'Use the controller to inspect a card-based result feed that supports richer summaries and more varied metadata. This helps when each result needs more context before opening detail.'
      : 'Use the controller to inspect a denser compact row layout for faster scanning. Choose this when the user needs to compare many structured results inside the same feed.';
  const selectedMinHeight =
    state === 'empty' ? 880 : layout === 'cards' ? 940 : 860;

  return (
    <PatternDocsPageShell
      platform="app"
      categoryId="search-filter"
      categoryLabel="Search & Filter"
      patternId="search-results"
      title="Search Results"
      description="A mobile results pattern that keeps query, refinements, and result feedback tightly coupled so people can recover quickly from loading or empty states."
    >
      <div className="w-full rounded-[28px] border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/70">
        <FlexWrapper direction="col" items="start" gap={4} classes="w-full">
          <Typography variant="H4">Controller</Typography>
          <Typography
            variant="B1"
            classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
          >
            Switch between result state and whether the content is laid out as
            richer cards or denser compact rows.
          </Typography>

          <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2">
              <Typography variant="C1" classes="uppercase font-mono opacity-60">
                State
              </Typography>
              <ButtonGroup
                color="neutral"
                size="sm"
                items={[
                  { label: 'Default', value: 'default' },
                  { label: 'Loading', value: 'loading' },
                  { label: 'Empty', value: 'empty' },
                ]}
                onChange={(next) =>
                  setState(next as 'default' | 'loading' | 'empty')
                }
                value={state}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Typography variant="C1" classes="uppercase font-mono opacity-60">
                Layout
              </Typography>
              <ButtonGroup
                color="neutral"
                size="sm"
                items={[
                  { label: 'Cards', value: 'cards' },
                  { label: 'Compact', value: 'compact' },
                ]}
                onChange={(next) => setLayout(next as 'cards' | 'compact')}
                value={layout}
              />
            </div>
          </div>
        </FlexWrapper>
      </div>

      <PatternGuideSection
        title="Results Layout"
        description={selectedDescription}
        example={
          <CodeExample code={listCode} className="w-full">
            <AppDevicePreviewFrame
              minHeight={selectedMinHeight}
              maxWidthClass="max-w-[420px]"
            >
              <AppSearchResultsPreview state={state} layout={layout} />
            </AppDevicePreviewFrame>
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Empty Results Recovery"
        description="Empty results should never feel like a dead end. Keep the current query visible, explain why nothing matched, and provide a simple way to back out of the strongest refinements."
        example={
          <CodeExample code={emptyCode} className="w-full">
            <AppDevicePreviewFrame minHeight={880} maxWidthClass="max-w-[420px]">
              <AppSearchResultsPreview state="empty" layout="cards" />
            </AppDevicePreviewFrame>
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Loading And Comparison Modes"
        description="Loading states and layout changes should preserve the user’s mental model of the feed. Avoid moving the search bar or active filters while the next result set is arriving."
        example={
          <CodeExample code={layoutCode} className="w-full">
            <AppDevicePreviewFrame minHeight={860} maxWidthClass="max-w-[420px]">
              <AppSearchResultsPreview state="loading" layout="compact" />
            </AppDevicePreviewFrame>
          </CodeExample>
        }
      />

      <div className="w-full rounded-[28px] border border-dashed border-primary-200 bg-primary-50/50 p-6 dark:border-primary-400/20 dark:bg-primary-400/5">
        <FlexWrapper direction="col" items="start" gap={3}>
          <Typography variant="H4">Pattern Checklist</Typography>
          <Typography
            variant="B1"
            classes="!font-normal !text-neutral-700 dark:!text-neutral-300"
          >
            Keep the query editable above the feed, reflect active filters in
            every state, and make loading plus empty moments feel like part of
            the same mobile search experience.
          </Typography>
        </FlexWrapper>
      </div>

      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">Included Components</Typography>
        <SimpleTable columns={compositionColumns} data={compositionRows} />
      </FlexWrapper>
    </PatternDocsPageShell>
  );
}
