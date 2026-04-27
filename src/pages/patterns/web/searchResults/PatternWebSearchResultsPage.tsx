'use client';

import { useState } from 'react';
import ButtonGroup from '@/components/action/ButtonGroup';
import SimpleTable from '@/components/data/SimpleTable';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import FlexWrapper from '@/components/layout/FlexWrapper';
import PatternDocsPageShell from '@/pages/patterns/common/PatternDocsPageShell';
import PatternGuideSection from '@/pages/patterns/common/PatternGuideSection';
import WebSearchResultsPreview from '@/pages/patterns/web/searchResults/WebSearchResultsPreview';

const compositionColumns = [
  { label: 'Component', key: 'property' },
  { label: 'Role', key: 'type' },
  { label: 'Why It Matters', key: 'description' },
];

const compositionRows = [
  {
    id: '1',
    property: 'TextInput',
    type: 'Query entry',
    description:
      'Keeps the search term editable above the result set without breaking continuity.',
  },
  {
    id: '2',
    property: 'Select',
    type: 'Sort control',
    description:
      'Lets users re-order results without leaving the result screen.',
  },
  {
    id: '3',
    property: 'Tag',
    type: 'Applied filter summary',
    description:
      'Reflects the active refinements so empty or short result sets still make sense.',
  },
  {
    id: '4',
    property: 'EmptyState',
    type: 'Recovery state',
    description:
      'Guides users back when the current query and filters over-constrain the results.',
  },
  {
    id: '5',
    property: 'Button',
    type: 'Save and recovery action',
    description:
      'Supports filter editing, clearing, and saving the current result configuration.',
  },
];

const listCode = `
import Select from '@/components/input/Select';
import TextInput from '@/components/input/TextInput';

export function SearchResultsToolbar() {
  return (
    <>
      <TextInput placeholder="Search open roles" />
      <Select label="Sort" options={sortOptions} value="relevant" />
    </>
  );
}`.trim();

const emptyCode = `
import Button from '@/components/action/Button';
import EmptyState from '@/components/data/EmptyState';

export function EmptyResultsState() {
  return (
    <EmptyState
      title="No matching roles found"
      description="Try broadening your filters or removing one or two refinements."
      primaryAction={<Button color="primary">Clear filters</Button>}
    />
  );
}`.trim();

const layoutCode = `
export function ResultsLayoutVariants() {
  return (
    <>
      <p>Cards for scanning richer summaries.</p>
      <p>Tables for comparing repeated columns.</p>
    </>
  );
}`.trim();

export default function PatternWebSearchResultsPage() {
  const [state, setState] = useState<'default' | 'loading' | 'empty'>(
    'default',
  );
  const [layout, setLayout] = useState<'cards' | 'table'>('cards');
  const selectedDescription =
    layout === 'cards'
      ? 'Use the controller to inspect a card-based result layout that supports richer summaries and varied metadata. This is useful when each result needs more context before opening detail.'
      : 'Use the controller to inspect a denser table-style result layout for repeated columns and faster comparison. Choose this when users need to scan many structured records at once.';

  return (
    <PatternDocsPageShell
      platform="web"
      categoryId="search-filter"
      categoryLabel="Search & Filter"
      patternId="search-results"
      title="Search Results"
      description="A web search results pattern that keeps query, refinements, and result feedback tightly coupled so users can recover quickly from loading or empty states."
    >
      <div className="w-full rounded-[28px] border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/70">
        <FlexWrapper direction="col" items="start" gap={4} classes="w-full">
          <Typography variant="H4">Controller</Typography>
          <Typography
            variant="B1"
            classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
          >
            Switch between result-set state and whether the content is laid out
            as richer cards or denser comparable rows.
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
                  { label: 'Table', value: 'table' },
                ]}
                onChange={(next) => setLayout(next as 'cards' | 'table')}
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
            <WebSearchResultsPreview state={state} layout={layout} />
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Empty Results Recovery"
        description="Empty results should never feel like the system failed silently. Keep the current query visible, explain why nothing matched, and offer a simple way to back out of the strongest refinements."
        example={
          <CodeExample code={emptyCode} className="w-full">
            <WebSearchResultsPreview state="empty" layout="cards" />
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Loading And Comparison Modes"
        description="Loading states and layout toggles should preserve the person’s mental model of the result set. Avoid jumping the toolbar or active filters while new results arrive."
        example={
          <CodeExample code={layoutCode} className="w-full">
            <WebSearchResultsPreview state="loading" layout="table" />
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
            Keep the query editable above the results, reflect active filters in
            every state, and make loading plus empty moments feel like part of
            the same search experience rather than a separate page.
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
