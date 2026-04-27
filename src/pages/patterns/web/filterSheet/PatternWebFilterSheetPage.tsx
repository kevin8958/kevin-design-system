'use client';

import { useState } from 'react';
import ButtonGroup from '@/components/action/ButtonGroup';
import SimpleTable from '@/components/data/SimpleTable';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import FlexWrapper from '@/components/layout/FlexWrapper';
import PatternDocsPageShell from '@/pages/patterns/common/PatternDocsPageShell';
import PatternGuideSection from '@/pages/patterns/common/PatternGuideSection';
import WebFilterSheetPreview from '@/pages/patterns/web/filterSheet/WebFilterSheetPreview';

const compositionColumns = [
  { label: 'Component', key: 'property' },
  { label: 'Role', key: 'type' },
  { label: 'Why It Matters', key: 'description' },
];

const compositionRows = [
  {
    id: '1',
    property: 'Select',
    type: 'Structured refinement',
    description:
      'Handles sort or bounded filter choices without pushing users into freeform search.',
  },
  {
    id: '2',
    property: 'Checkbox',
    type: 'Quick inclusion rule',
    description:
      'Lets users toggle common filters with minimal reading or pointer travel.',
  },
  {
    id: '3',
    property: 'Tag',
    type: 'Applied filter summary',
    description:
      'Shows what has already been committed before the sheet closes again.',
  },
  {
    id: '4',
    property: 'Button',
    type: 'Commit and recovery action',
    description:
      'Supports apply, clear, and close actions while the filter surface is open.',
  },
];

const drawerCode = `
import Checkbox from '@/components/input/Checkbox';
import Select from '@/components/input/Select';

export function FilterDrawer() {
  return (
    <>
      <Select label="Sort order" options={sortOptions} value="relevant" />
      <Checkbox checked label="Remote only" />
      <Checkbox label="Senior roles" />
    </>
  );
}`.trim();

const appliedCode = `
import Tag from '@/components/data/Tag';

export function AppliedFiltersSummary() {
  return (
    <>
      <Tag label="Remote" variant="primary" />
      <Tag label="Design Systems" variant="primary" />
      <Tag label="Senior" variant="primary" />
    </>
  );
}`.trim();

const modalCode = `
import Button from '@/components/action/Button';

export function ModalFilterActions() {
  return (
    <>
      <Button variant="clear" color="primary" size="sm">
        Clear all
      </Button>
      <Button color="primary">Apply filters</Button>
    </>
  );
}`.trim();

export default function PatternWebFilterSheetPage() {
  const [state, setState] = useState<'default' | 'applied' | 'loading'>(
    'default',
  );
  const [surface, setSurface] = useState<'drawer' | 'modal'>('drawer');
  const selectedDescription =
    surface === 'drawer'
      ? 'Use the controller to inspect a side-drawer filter surface that keeps part of the results visible. This helps users maintain context while making denser refinement choices.'
      : 'Use the controller to inspect a centered filter modal that fully isolates refinement decisions. Choose this only when the filter set needs focused attention.';

  return (
    <PatternDocsPageShell
      platform="web"
      categoryId="search-filter"
      categoryLabel="Search & Filter"
      patternId="filter-sheet"
      title="Filter Sheet"
      description="A web filter surface for denser refinement tasks, with clear apply and recovery actions that preserve the relationship to the underlying results."
    >
      <div className="w-full rounded-[28px] border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/70">
        <FlexWrapper direction="col" items="start" gap={4} classes="w-full">
          <Typography variant="H4">Controller</Typography>
          <Typography
            variant="B1"
            classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
          >
            Switch between filter-sheet state and whether the surface behaves
            like a side drawer or a focused modal.
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
                  { label: 'Drawer', value: 'drawer' },
                  { label: 'Modal', value: 'modal' },
                ]}
                onChange={(next) => setSurface(next as 'drawer' | 'modal')}
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
          <CodeExample code={drawerCode} className="w-full">
            <WebFilterSheetPreview state={state} surface={surface} />
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Applied Refinement Summary"
        description="If the sheet can close over a large result set, the user needs confidence that their changes were captured. Reflect applied filters inside the sheet before it disappears."
        example={
          <CodeExample code={appliedCode} className="w-full">
            <WebFilterSheetPreview state="applied" surface="drawer" />
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Apply And Recovery Actions"
        description="Apply and clear actions should stay anchored together. Users need one obvious commit action and one obvious recovery path instead of hunting through filter sections to undo a choice."
        example={
          <CodeExample code={modalCode} className="w-full">
            <WebFilterSheetPreview state="loading" surface="modal" />
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
            Keep the refinement surface close to the results, show applied
            filters before the sheet closes, and anchor apply plus clear actions
            where users do not have to hunt for them.
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
