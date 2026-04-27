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
import AppEmptyResultsPreview from '@/pages/patterns/app/emptyResults/AppEmptyResultsPreview';

const compositionColumns = [
  { label: 'Component', key: 'property' },
  { label: 'Role', key: 'type' },
  { label: 'Why It Matters', key: 'description' },
];

const compositionRows = [
  {
    id: '1',
    property: 'AppEmptyState',
    type: 'Primary recovery surface',
    description:
      'Explains why the mobile result feed is empty and gives the next action without sounding like a crash.',
  },
  {
    id: '2',
    property: 'AppTag',
    type: 'Refinement context',
    description:
      'Shows which active filters are responsible for narrowing the feed.',
  },
  {
    id: '3',
    property: 'AppTextInput',
    type: 'Editable query',
    description:
      'Keeps the current query visible so recovery can happen without starting over.',
  },
  {
    id: '4',
    property: 'AppButton',
    type: 'Recovery action',
    description:
      'Supports clearing filters, editing the search, or taking a nearby fallback action.',
  },
];

const searchCode = `
import AppButton from '@/components/app/AppButton';
import AppEmptyState from '@/components/app/AppEmptyState';

export function AppEmptySearchResults() {
  return (
    <AppEmptyState
      title="No roles match this search"
      description="Try broadening the query or removing one or two refinements."
      primaryAction={<AppButton color="primary" label="Clear filters" />}
    />
  );
}`.trim();

const savedCode = `
import AppTag from '@/components/app/AppTag';

export function AppSavedListEmptyResults() {
  return (
    <>
      <AppTag label="Bookmarked only" variant="primary" />
      <AppTag label="Updated this week" variant="primary" />
    </>
  );
}`.trim();

const actionCode = `
import AppButton from '@/components/app/AppButton';

export function AppEmptyResultsRecoveryActions() {
  return (
    <>
      <AppButton color="primary" label="Clear filters" />
      <AppButton variant="outline" color="neutral" label="Edit search" />
    </>
  );
}`.trim();

export default function PatternAppEmptyResultsPage() {
  const [context, setContext] = useState<'search' | 'saved'>('search');
  const [actions, setActions] = useState<'single' | 'double'>('double');
  const selectedDescription =
    context === 'search'
      ? 'Use the controller to inspect an empty mobile result feed where the current query and refinements are too narrow. The main job is to explain what happened and give a quick path back.'
      : 'Use the controller to inspect an empty saved or curated result set on mobile. The user still needs reassurance that the underlying collection exists even though the active filters hide every match.';

  return (
    <PatternDocsPageShell
      platform="app"
      categoryId="states"
      categoryLabel="States"
      patternId="empty-results"
      title="Empty Results"
      description="A mobile empty-results pattern that keeps query and refinement context visible while guiding users back from an over-constrained feed."
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
            <AppDevicePreviewFrame minHeight={760} maxWidthClass="max-w-[420px]">
              <AppEmptyResultsPreview context={context} actions={actions} />
            </AppDevicePreviewFrame>
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Refinement Context"
        description="An empty state should still explain why the feed is empty. Keep active filters or saved-set qualifiers visible so the person can connect the empty result to their own choices."
        example={
          <CodeExample code={savedCode} className="w-full">
            <AppDevicePreviewFrame minHeight={760} maxWidthClass="max-w-[420px]">
              <AppEmptyResultsPreview context="saved" actions="double" />
            </AppDevicePreviewFrame>
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Recovery Actions"
        description="Clear the current constraints first, then offer a nearby fallback like editing the query. On mobile, avoid sending the user into a completely different route just to recover from an empty feed."
        example={
          <CodeExample code={actionCode} className="w-full">
            <AppDevicePreviewFrame minHeight={760} maxWidthClass="max-w-[420px]">
              <AppEmptyResultsPreview context="search" actions="single" />
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
            Keep the query visible, reflect active filters, and make the first
            recovery action feel like a small step backward instead of a reset.
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
