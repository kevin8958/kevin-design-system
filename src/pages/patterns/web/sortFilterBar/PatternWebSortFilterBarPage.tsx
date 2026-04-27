'use client';

import { useState } from 'react';
import ButtonGroup from '@/components/action/ButtonGroup';
import SimpleTable from '@/components/data/SimpleTable';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import FlexWrapper from '@/components/layout/FlexWrapper';
import PatternDocsPageShell from '@/pages/patterns/common/PatternDocsPageShell';
import PatternGuideSection from '@/pages/patterns/common/PatternGuideSection';
import WebSortFilterBarPreview from '@/pages/patterns/web/sortFilterBar/WebSortFilterBarPreview';

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
      'Keeps search input visible where sorting and filtering decisions are made.',
  },
  {
    id: '2',
    property: 'Select',
    type: 'Sort control',
    description:
      'Lets users change ordering without losing the rest of their active refinements.',
  },
  {
    id: '3',
    property: 'Tag',
    type: 'Applied filter summary',
    description:
      'Makes active refinements visible so people understand why results changed.',
  },
  {
    id: '4',
    property: 'Button',
    type: 'Primary and support action',
    description:
      'Anchors filter-sheet entry, refresh, and clear-all decisions inside the same toolbar.',
  },
];

const layoutCode = `
import Button from '@/components/action/Button';
import Select from '@/components/input/Select';
import TextInput from '@/components/input/TextInput';

export function ResultsToolbar() {
  return (
    <>
      <TextInput placeholder="Search roles, teams, or keywords" />
      <Select label="Sort" options={sortOptions} value="relevant" />
      <Button variant="outline" color="neutral">
        Filters (6)
      </Button>
    </>
  );
}`.trim();

const appliedCode = `
import Tag from '@/components/data/Tag';

export function ActiveFilterSummary() {
  return (
    <>
      <Tag label="Remote" variant="primary" />
      <Tag label="Design Systems" variant="primary" />
      <Tag label="Senior" variant="primary" />
    </>
  );
}`.trim();

const compactCode = `
import Button from '@/components/action/Button';

export function CompactResultsToolbar() {
  return (
    <Button variant="clear" color="primary" size="sm">
      Clear all
    </Button>
  );
}`.trim();

export default function PatternWebSortFilterBarPage() {
  const [state, setState] = useState<'default' | 'filtered' | 'loading'>(
    'default',
  );
  const [layout, setLayout] = useState<'compact' | 'expanded'>('compact');
  const selectedDescription =
    layout === 'compact'
      ? 'Use the controller to inspect a compact toolbar where query, sort, and filter entry stay on one line. This works well when refinements can collapse into a short summary.'
      : 'Use the controller to inspect an expanded toolbar that keeps active filters visible beneath the main controls. Choose this when users need persistent refinement context while scanning results.';

  return (
    <PatternDocsPageShell
      platform="web"
      categoryId="search-filter"
      categoryLabel="Search & Filter"
      patternId="sort-filter-bar"
      title="Sort & Filter Bar"
      description="A persistent web toolbar that combines search, sorting, and active refinements without separating them across multiple disconnected controls."
    >
      <div className="w-full rounded-[28px] border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/70">
        <FlexWrapper direction="col" items="start" gap={4} classes="w-full">
          <Typography variant="H4">Controller</Typography>
          <Typography
            variant="B1"
            classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
          >
            Switch between the toolbar state and whether the refinement summary
            stays compact or remains expanded beneath the main controls.
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
                  { label: 'Filtered', value: 'filtered' },
                  { label: 'Loading', value: 'loading' },
                ]}
                onChange={(next) =>
                  setState(next as 'default' | 'filtered' | 'loading')
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
                  { label: 'Compact', value: 'compact' },
                  { label: 'Expanded', value: 'expanded' },
                ]}
                onChange={(next) => setLayout(next as 'compact' | 'expanded')}
                value={layout}
              />
            </div>
          </div>
        </FlexWrapper>
      </div>

      <PatternGuideSection
        title="Toolbar Layout"
        description={selectedDescription}
        example={
          <CodeExample code={layoutCode} className="w-full">
            <WebSortFilterBarPreview state={state} layout={layout} />
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Applied Filter Summary"
        description="Applied filters should stay readable without overpowering the results themselves. Keep them close to the main controls so users can understand the current result set at a glance."
        example={
          <CodeExample code={appliedCode} className="w-full">
            <WebSortFilterBarPreview state="filtered" layout="expanded" />
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Compact Recovery"
        description="When the refinement surface is short, give users one quick way to clear filters or reopen the sheet. The toolbar should never force a full reset journey just to make a small change."
        example={
          <CodeExample code={compactCode} className="w-full">
            <WebSortFilterBarPreview state="default" layout="compact" />
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
            Keep query, sort, and filter entry in one band, show active
            refinements close to those controls, and give users a fast way to
            recover from over-filtering.
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
