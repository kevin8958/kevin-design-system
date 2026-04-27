'use client';

import { useState } from 'react';
import ButtonGroup from '@/components/action/ButtonGroup';
import SimpleTable from '@/components/data/SimpleTable';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import FlexWrapper from '@/components/layout/FlexWrapper';
import PatternDocsPageShell from '@/pages/patterns/common/PatternDocsPageShell';
import PatternGuideSection from '@/pages/patterns/common/PatternGuideSection';
import WebEmptyResultsPreview from '@/pages/patterns/web/emptyResults/WebEmptyResultsPreview';

const compositionColumns = [
  { label: 'Component', key: 'property' },
  { label: 'Role', key: 'type' },
  { label: 'Why It Matters', key: 'description' },
];

const compositionRows = [
  {
    id: '1',
    property: 'EmptyState',
    type: 'Primary recovery surface',
    description:
      'Explains why the result set is empty and gives the next action without sounding like an error.',
  },
  {
    id: '2',
    property: 'Tag',
    type: 'Refinement context',
    description:
      'Shows which active filters are responsible for narrowing the result set.',
  },
  {
    id: '3',
    property: 'TextInput',
    type: 'Editable query',
    description:
      'Keeps the search term visible so recovery can happen without starting over.',
  },
  {
    id: '4',
    property: 'Button',
    type: 'Recovery action',
    description:
      'Supports clearing filters, editing the search, or taking a nearby fallback action.',
  },
];

const searchCode = `
import Button from '@/components/action/Button';
import EmptyState from '@/components/data/EmptyState';

export function EmptySearchResults() {
  return (
    <EmptyState
      title="No roles match this search"
      description="Try broadening the query or removing one or two refinements."
      primaryAction={<Button color="primary">Clear filters</Button>}
    />
  );
}`.trim();

const savedCode = `
import Tag from '@/components/data/Tag';

export function SavedListEmptyResults() {
  return (
    <>
      <Tag label="Bookmarked only" variant="primary" />
      <Tag label="Updated this week" variant="primary" />
    </>
  );
}`.trim();

const actionCode = `
import Button from '@/components/action/Button';

export function EmptyResultsRecoveryActions() {
  return (
    <>
      <Button color="primary">Clear filters</Button>
      <Button variant="outline" color="neutral">
        Edit search
      </Button>
    </>
  );
}`.trim();

export default function PatternWebEmptyResultsPage() {
  const [context, setContext] = useState<'search' | 'saved'>('search');
  const [actions, setActions] = useState<'single' | 'double'>('double');
  const selectedDescription =
    context === 'search'
      ? 'Use the controller to inspect an empty search result state where the current query and refinements are too narrow. The main job is to explain what happened and give a quick path back.'
      : 'Use the controller to inspect an empty saved or curated result set. In this case, the user still needs reassurance that the underlying collection exists even though the active filters hide every match.';

  return (
    <PatternDocsPageShell
      platform="web"
      categoryId="states"
      categoryLabel="States"
      patternId="empty-results"
      title="Empty Results"
      description="A web empty-results pattern that keeps the query and refinements visible while guiding users back from an over-constrained result set."
    >
      <div className="w-full rounded-[28px] border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/70">
        <FlexWrapper direction="col" items="start" gap={4} classes="w-full">
          <Typography variant="H4">Controller</Typography>
          <Typography
            variant="B1"
            classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
          >
            Switch between a direct search miss and an empty saved result set,
            then review whether the recovery surface offers one or two actions.
          </Typography>

          <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2">
              <Typography variant="C1" classes="uppercase font-mono opacity-60">
                Context
              </Typography>
              <ButtonGroup
                color="neutral"
                size="sm"
                items={[
                  { label: 'Search', value: 'search' },
                  { label: 'Saved set', value: 'saved' },
                ]}
                onChange={(next) => setContext(next as 'search' | 'saved')}
                value={context}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Typography variant="C1" classes="uppercase font-mono opacity-60">
                Actions
              </Typography>
              <ButtonGroup
                color="neutral"
                size="sm"
                items={[
                  { label: 'Single', value: 'single' },
                  { label: 'Primary + fallback', value: 'double' },
                ]}
                onChange={(next) => setActions(next as 'single' | 'double')}
                value={actions}
              />
            </div>
          </div>
        </FlexWrapper>
      </div>

      <PatternGuideSection
        title="Empty Result Surface"
        description={selectedDescription}
        example={
          <CodeExample code={searchCode} className="w-full">
            <WebEmptyResultsPreview context={context} actions={actions} />
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Refinement Context"
        description="An empty state should still explain why the page is empty. Keep active filters or saved-set qualifiers visible so the user can connect the empty state to their own choices."
        example={
          <CodeExample code={savedCode} className="w-full">
            <WebEmptyResultsPreview context="saved" actions="double" />
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Recovery Actions"
        description="Clear the current constraints first, then offer a nearby fallback like editing the query. Avoid sending users somewhere unrelated just because the current result set is empty."
        example={
          <CodeExample code={actionCode} className="w-full">
            <WebEmptyResultsPreview context="search" actions="single" />
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
            Keep the query visible, reflect active filters, and make the first
            recovery action feel like a small step backward rather than a full
            restart.
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
