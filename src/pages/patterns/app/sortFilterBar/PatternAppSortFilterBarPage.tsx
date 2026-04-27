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
import AppSortFilterBarPreview from '@/pages/patterns/app/sortFilterBar/AppSortFilterBarPreview';

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
      'Keeps search input visible inside the same mobile control group as sorting and filtering.',
  },
  {
    id: '2',
    property: 'AppSelect',
    type: 'Sort control',
    description:
      'Lets users change ordering without leaving the current result screen.',
  },
  {
    id: '3',
    property: 'AppTag',
    type: 'Applied filter summary',
    description:
      'Shows active refinements so the user understands why the result feed changed.',
  },
  {
    id: '4',
    property: 'AppButton',
    type: 'Primary and support action',
    description:
      'Anchors filter entry, refresh, and clear-all actions in the same toolbar.',
  },
];

const layoutCode = `
import AppButton from '@/components/app/AppButton';
import AppSelect from '@/components/app/AppSelect';
import AppTextInput from '@/components/app/AppTextInput';

export function AppResultsToolbar() {
  return (
    <>
      <AppTextInput placeholder="Search roles, teams, or keywords" />
      <AppSelect label="Sort" options={sortOptions} value="relevant" />
      <AppButton variant="outline" color="neutral" label="Filters (6)" />
    </>
  );
}`.trim();

const appliedCode = `
import AppTag from '@/components/app/AppTag';

export function AppActiveFilterSummary() {
  return (
    <>
      <AppTag label="Remote" variant="primary" />
      <AppTag label="Design Systems" variant="primary" />
      <AppTag label="Senior" variant="primary" />
    </>
  );
}`.trim();

const compactCode = `
import AppButton from '@/components/app/AppButton';

export function AppCompactToolbarRecovery() {
  return <AppButton variant="clear" color="primary" label="Clear all" />;
}`.trim();

export default function PatternAppSortFilterBarPage() {
  const [state, setState] = useState<'default' | 'filtered' | 'loading'>(
    'default',
  );
  const [layout, setLayout] = useState<'compact' | 'expanded'>('compact');
  const selectedDescription =
    layout === 'compact'
      ? 'Use the controller to inspect a compact mobile toolbar where query, sort, and filter entry stay in a short stacked group. This works well when active refinements can collapse into a brief summary.'
      : 'Use the controller to inspect an expanded toolbar that keeps active filter chips visible beneath the main controls. Choose this when people need persistent refinement context while scrolling.';
  const selectedMinHeight = layout === 'compact' ? 760 : 840;

  return (
    <PatternDocsPageShell
      platform="app"
      categoryId="search-filter"
      categoryLabel="Search & Filter"
      patternId="sort-filter-bar"
      title="Sort & Filter Bar"
      description="A mobile-first toolbar that keeps search, sorting, and active refinements close together above the result feed."
    >
      <div className="w-full rounded-[28px] border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/70">
        <FlexWrapper direction="col" items="start" gap={4} classes="w-full">
          <Typography variant="H4">Controller</Typography>
          <Typography
            variant="B1"
            classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
          >
            Switch between toolbar state and whether the refinement summary
            stays compact or remains expanded beneath the primary controls.
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
            <AppDevicePreviewFrame
              minHeight={selectedMinHeight}
              maxWidthClass="max-w-[420px]"
            >
              <AppSortFilterBarPreview state={state} layout={layout} />
            </AppDevicePreviewFrame>
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Applied Filter Summary"
        description="Applied filters should stay readable without crowding the small screen. Keep them close to the query and sort controls so the result changes make sense immediately."
        example={
          <CodeExample code={appliedCode} className="w-full">
            <AppDevicePreviewFrame minHeight={840} maxWidthClass="max-w-[420px]">
              <AppSortFilterBarPreview state="filtered" layout="expanded" />
            </AppDevicePreviewFrame>
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Compact Recovery"
        description="On shorter mobile toolbars, one fast recovery action is often enough. Give users a clear way to clear filters or reopen the sheet without adding another full row of controls."
        example={
          <CodeExample code={compactCode} className="w-full">
            <AppDevicePreviewFrame minHeight={760} maxWidthClass="max-w-[420px]">
              <AppSortFilterBarPreview state="default" layout="compact" />
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
            Keep query, sort, and filter entry in one stacked group, show
            active refinements close to those controls, and preserve a quick
            recovery path when the user over-filters.
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
