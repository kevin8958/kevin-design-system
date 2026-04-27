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
import AppLoadingPanelPreview from '@/pages/patterns/app/loadingPanel/AppLoadingPanelPreview';

const compositionColumns = [
  { label: 'Component', key: 'property' },
  { label: 'Role', key: 'type' },
  { label: 'Why It Matters', key: 'description' },
];

const compositionRows = [
  {
    id: '1',
    property: 'AppSkeleton',
    type: 'Structural placeholder',
    description:
      'Preserves the future shape of content so loading feels stable and expected on mobile.',
  },
  {
    id: '2',
    property: 'AppMetricCard',
    type: 'Summary scaffold',
    description:
      'Keeps dashboard rhythm intact while top-level summary values are still loading.',
  },
  {
    id: '3',
    property: 'AppDescriptionList',
    type: 'Detail scaffold',
    description:
      'Supports denser state panels where users expect a mix of labels and values together.',
  },
];

const summaryCode = `
import AppMetricCard from '@/components/app/AppMetricCard';
import AppSkeleton from '@/components/app/AppSkeleton';

export function AppLoadingSummaryPanel() {
  return (
    <>
      <AppMetricCard title="Metric" value={0} />
      <AppSkeleton height={18} width={180} />
    </>
  );
}`.trim();

const detailCode = `
import AppDescriptionList from '@/components/app/AppDescriptionList';

export function AppLoadingDetailScaffold() {
  return (
    <AppDescriptionList
      columns={2}
      items={[
        { label: 'Status', value: 'Loading' },
        { label: 'Owner', value: 'Loading' },
      ]}
    />
  );
}`.trim();

const refreshCode = `
export function AppRefreshingPanelState() {
  return 'Refreshing';
}`.trim();

export default function PatternAppLoadingPanelPage() {
  const [density, setDensity] = useState<'summary' | 'detail'>('summary');
  const [phase, setPhase] = useState<'initial' | 'refresh'>('initial');
  const selectedDescription =
    phase === 'initial'
      ? 'Use the controller to inspect a first-load mobile panel where the layout needs to stabilize before real content arrives. The goal is to preserve hierarchy, not distract from the wait.'
      : 'Use the controller to inspect a refresh state where layout context is already familiar. The user should understand that content is updating, not disappearing and restarting.';
  const selectedMinHeight = density === 'detail' ? 1080 : 940;

  return (
    <PatternDocsPageShell
      platform="app"
      categoryId="states"
      categoryLabel="States"
      patternId="loading-panel"
      title="Loading Panel"
      description="A structured mobile loading pattern that preserves layout, hierarchy, and trust while content is still arriving."
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
            <AppDevicePreviewFrame
              minHeight={selectedMinHeight}
              maxWidthClass="max-w-[420px]"
            >
              <AppLoadingPanelPreview density={density} phase={phase} />
            </AppDevicePreviewFrame>
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Detail Scaffolding"
        description="Densely structured mobile panels still need placeholders that preserve the relationship between labels, values, and summary cards. The final shape should feel obvious before content arrives."
        example={
          <CodeExample code={detailCode} className="w-full">
            <AppDevicePreviewFrame minHeight={1080} maxWidthClass="max-w-[420px]">
              <AppLoadingPanelPreview density="detail" phase="initial" />
            </AppDevicePreviewFrame>
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Refresh Signaling"
        description="Refreshing is different from loading for the first time. Add a quiet signal when content is updating so the user does not think the app stalled or reset unexpectedly."
        example={
          <CodeExample code={refreshCode} className="w-full">
            <AppDevicePreviewFrame minHeight={940} maxWidthClass="max-w-[420px]">
              <AppLoadingPanelPreview density="summary" phase="refresh" />
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
