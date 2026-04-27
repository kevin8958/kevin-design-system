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
import AppFilterSheetPreview from '@/pages/patterns/app/filterSheet/AppFilterSheetPreview';

const compositionColumns = [
  { label: 'Component', key: 'property' },
  { label: 'Role', key: 'type' },
  { label: 'Why It Matters', key: 'description' },
];

const compositionRows = [
  {
    id: '1',
    property: 'AppSelect',
    type: 'Structured refinement',
    description:
      'Handles sort or bounded filter choices without pushing users into freeform entry.',
  },
  {
    id: '2',
    property: 'AppCheckbox',
    type: 'Quick inclusion rule',
    description:
      'Lets people toggle common filters with minimal reading and thumb travel.',
  },
  {
    id: '3',
    property: 'AppTag',
    type: 'Applied filter summary',
    description:
      'Shows what is already committed before the sheet collapses again.',
  },
  {
    id: '4',
    property: 'AppButton',
    type: 'Commit and recovery action',
    description:
      'Supports apply, clear, and close behavior while the sheet is open.',
  },
];

const sheetCode = `
import AppCheckbox from '@/components/app/AppCheckbox';
import AppSelect from '@/components/app/AppSelect';

export function AppFilterSheet() {
  return (
    <>
      <AppSelect label="Sort order" options={sortOptions} value="relevant" />
      <AppCheckbox checked label="Remote only" />
      <AppCheckbox label="Senior roles" />
    </>
  );
}`.trim();

const appliedCode = `
import AppTag from '@/components/app/AppTag';

export function AppAppliedFiltersSummary() {
  return (
    <>
      <AppTag label="Remote" variant="primary" />
      <AppTag label="Design Systems" variant="primary" />
      <AppTag label="Senior" variant="primary" />
    </>
  );
}`.trim();

const actionCode = `
import AppButton from '@/components/app/AppButton';

export function AppFilterSheetActions() {
  return (
    <>
      <AppButton variant="clear" color="primary" label="Clear all" />
      <AppButton color="primary" label="Apply filters" />
    </>
  );
}`.trim();

export default function PatternAppFilterSheetPage() {
  const [state, setState] = useState<'default' | 'applied' | 'loading'>(
    'default',
  );
  const [surface, setSurface] = useState<'peek' | 'full'>('peek');
  const selectedDescription =
    surface === 'peek'
      ? 'Use the controller to inspect a bottom sheet that preserves part of the result feed underneath. This helps users keep orientation while making several filter changes.'
      : 'Use the controller to inspect a fuller-screen sheet for denser refinements. Choose this when the filter set needs more room than a peek surface can reasonably carry.';
  const selectedMinHeight = surface === 'peek' ? 980 : 1120;

  return (
    <PatternDocsPageShell
      platform="app"
      categoryId="search-filter"
      categoryLabel="Search & Filter"
      patternId="filter-sheet"
      title="Filter Sheet"
      description="A mobile filter surface that keeps denser refinement work close to the results while preserving clear apply and recovery actions."
    >
      <div className="w-full rounded-[28px] border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/70">
        <FlexWrapper direction="col" items="start" gap={4} classes="w-full">
          <Typography variant="H4">Controller</Typography>
          <Typography
            variant="B1"
            classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
          >
            Switch between filter-sheet state and whether the mobile surface
            behaves like a peek sheet or a fuller-screen filter mode.
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
                  { label: 'Applied', value: 'applied' },
                  { label: 'Loading', value: 'loading' },
                ]}
                onChange={(next) =>
                  setState(next as 'default' | 'applied' | 'loading')
                }
                value={state}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Typography variant="C1" classes="uppercase font-mono opacity-60">
                Surface
              </Typography>
              <ButtonGroup
                color="neutral"
                size="sm"
                items={[
                  { label: 'Peek', value: 'peek' },
                  { label: 'Full', value: 'full' },
                ]}
                onChange={(next) => setSurface(next as 'peek' | 'full')}
                value={surface}
              />
            </div>
          </div>
        </FlexWrapper>
      </div>

      <PatternGuideSection
        title="Filter Surface"
        description={selectedDescription}
        example={
          <CodeExample code={sheetCode} className="w-full">
            <AppDevicePreviewFrame
              minHeight={selectedMinHeight}
              maxWidthClass="max-w-[420px]"
            >
              <AppFilterSheetPreview state={state} surface={surface} />
            </AppDevicePreviewFrame>
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Applied Refinement Summary"
        description="If the sheet can collapse over the result feed, reflect applied filters inside the sheet first. Users need confirmation that the new result set matches what they selected."
        example={
          <CodeExample code={appliedCode} className="w-full">
            <AppDevicePreviewFrame minHeight={980} maxWidthClass="max-w-[420px]">
              <AppFilterSheetPreview state="applied" surface="peek" />
            </AppDevicePreviewFrame>
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Apply And Recovery Actions"
        description="Apply and clear actions should stay paired at the bottom of the sheet. On mobile, the user should not have to scroll back into the filter list just to undo one strong refinement."
        example={
          <CodeExample code={actionCode} className="w-full">
            <AppDevicePreviewFrame minHeight={1120} maxWidthClass="max-w-[420px]">
              <AppFilterSheetPreview state="loading" surface="full" />
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
            Keep the refinement surface close to the result feed, confirm
            applied filters before the sheet closes, and anchor apply plus clear
            actions where the user can reach them without another search.
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
