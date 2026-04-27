'use client';

import { useState } from 'react';
import ButtonGroup from '@/components/action/ButtonGroup';
import SimpleTable from '@/components/data/SimpleTable';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import FlexWrapper from '@/components/layout/FlexWrapper';
import PatternDocsPageShell from '@/pages/patterns/common/PatternDocsPageShell';
import PatternGuideSection from '@/pages/patterns/common/PatternGuideSection';
import WebLoadingPanelPreview from '@/pages/patterns/web/loadingPanel/WebLoadingPanelPreview';

const compositionColumns = [
  { label: 'Component', key: 'property' },
  { label: 'Role', key: 'type' },
  { label: 'Why It Matters', key: 'description' },
];

const compositionRows = [
  {
    id: '1',
    property: 'Skeleton',
    type: 'Structural placeholder',
    description:
      'Preserves the future shape of content so loading feels stable and expected.',
  },
  {
    id: '2',
    property: 'MetricCard',
    type: 'Summary scaffold',
    description:
      'Keeps dashboard rhythm intact while top-level summary numbers are still loading.',
  },
  {
    id: '3',
    property: 'DescriptionList',
    type: 'Detail scaffold',
    description:
      'Supports denser panels where users expect a mix of labels and values to appear together.',
  },
];

const summaryCode = `
import MetricCard from '@/components/data/MetricCard';
import Skeleton from '@/components/feedback/Skeleton';

export function LoadingSummaryPanel() {
  return (
    <>
      <MetricCard title="Metric" value={0} animated={false} />
      <Skeleton height={20} width={180} />
    </>
  );
}`.trim();

const detailCode = `
import DescriptionList from '@/components/data/DescriptionList';

export function LoadingDetailScaffold() {
  return (
    <DescriptionList
      columns={2}
      items={[
        { label: 'Status', value: 'Loading' },
        { label: 'Owner', value: 'Loading' },
      ]}
    />
  );
}`.trim();

const refreshCode = `
export function RefreshingPanelState() {
  return <span>Refreshing</span>;
}`.trim();

export default function PatternWebLoadingPanelPage() {
  const [density, setDensity] = useState<'summary' | 'detail'>('summary');
  const [phase, setPhase] = useState<'initial' | 'refresh'>('initial');
  const selectedDescription =
    phase === 'initial'
      ? 'Use the controller to inspect a first-load panel where the layout needs to stabilize before real content arrives. The goal is to preserve hierarchy, not to entertain the wait.'
      : 'Use the controller to inspect a refresh state where existing layout context is already familiar. The user should understand that content is updating, not disappearing and reappearing.';

  return (
    <PatternDocsPageShell
      platform="web"
      categoryId="states"
      categoryLabel="States"
      patternId="loading-panel"
      title="Loading Panel"
      description="A structured loading pattern for web dashboards and panels that preserves layout, hierarchy, and trust while content is still arriving."
    >
      <div className="w-full rounded-[28px] border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/70">
        <FlexWrapper direction="col" items="start" gap={4} classes="w-full">
          <Typography variant="H4">Controller</Typography>
          <Typography
            variant="B1"
            classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
          >
            Switch between a lighter summary scaffold and a denser detail panel,
            then review whether the loading moment is an initial fetch or a
            quieter refresh.
          </Typography>

          <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2">
              <Typography variant="C1" classes="uppercase font-mono opacity-60">
                Density
              </Typography>
              <ButtonGroup
                color="neutral"
                size="sm"
                items={[
                  { label: 'Summary', value: 'summary' },
                  { label: 'Detail', value: 'detail' },
                ]}
                onChange={(next) => setDensity(next as 'summary' | 'detail')}
                value={density}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Typography variant="C1" classes="uppercase font-mono opacity-60">
                Phase
              </Typography>
              <ButtonGroup
                color="neutral"
                size="sm"
                items={[
                  { label: 'Initial', value: 'initial' },
                  { label: 'Refresh', value: 'refresh' },
                ]}
                onChange={(next) => setPhase(next as 'initial' | 'refresh')}
                value={phase}
              />
            </div>
          </div>
        </FlexWrapper>
      </div>

      <PatternGuideSection
        title="Loading Structure"
        description={selectedDescription}
        example={
          <CodeExample code={summaryCode} className="w-full">
            <WebLoadingPanelPreview density={density} phase={phase} />
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Detail Scaffolding"
        description="Densely structured panels need placeholders that preserve the relationship between labels, values, and summary cards. Users should recognize the destination layout before real data arrives."
        example={
          <CodeExample code={detailCode} className="w-full">
            <WebLoadingPanelPreview density="detail" phase="initial" />
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Refresh Signaling"
        description="Refreshing is different from loading for the first time. Add a small signal when content is being updated so people do not think the page has stalled or reset unexpectedly."
        example={
          <CodeExample code={refreshCode} className="w-full">
            <WebLoadingPanelPreview density="summary" phase="refresh" />
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
            Preserve hierarchy, make placeholders resemble the final content,
            and distinguish quiet refreshes from full first-load waits.
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
