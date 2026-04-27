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
import AppErrorRecoveryPreview from '@/pages/patterns/app/errorRecovery/AppErrorRecoveryPreview';

const compositionColumns = [
  { label: 'Component', key: 'property' },
  { label: 'Role', key: 'type' },
  { label: 'Why It Matters', key: 'description' },
];

const compositionRows = [
  {
    id: '1',
    property: 'AppAlert',
    type: 'Failure summary',
    description:
      'Communicates the primary issue before the user has to interpret the rest of the screen.',
  },
  {
    id: '2',
    property: 'AppDescriptionList',
    type: 'Recovery context',
    description:
      'Explains status, ownership, and the most useful next step without turning the screen into a paragraph wall.',
  },
  {
    id: '3',
    property: 'AppButton',
    type: 'Retry and escape action',
    description:
      'Pairs the main recovery path with one safe fallback route out of the broken surface.',
  },
];

const networkCode = `
import AppAlert from '@/components/app/AppAlert';

export function AppNetworkRecoveryAlert() {
  return (
    <AppAlert
      variant="danger"
      title="We could not refresh this data right now"
      description="The request timed out before the latest analytics could load."
    />
  );
}`.trim();

const permissionCode = `
import AppDescriptionList from '@/components/app/AppDescriptionList';

export function AppPermissionRecoveryContext() {
  return (
    <AppDescriptionList
      columns={2}
      items={[
        { label: 'Status', value: 'Permission removed' },
        { label: 'Next best step', value: 'Request access' },
      ]}
    />
  );
}`.trim();

const actionCode = `
import AppButton from '@/components/app/AppButton';

export function AppRecoveryActions() {
  return (
    <>
      <AppButton variant="outline" color="neutral" label="Back to overview" />
      <AppButton color="primary" label="Retry now" />
    </>
  );
}`.trim();

export default function PatternAppErrorRecoveryPage() {
  const [issue, setIssue] = useState<'network' | 'permission'>('network');
  const [actions, setActions] = useState<'retry' | 'support'>('retry');
  const selectedDescription =
    issue === 'network'
      ? 'Use the controller to inspect a recoverable mobile network failure where the user can likely retry without losing work. The screen should acknowledge the interruption without dramatizing it.'
      : 'Use the controller to inspect a permission or access failure on mobile. In this case, the interface should stop pretending the user can self-heal and instead provide a clear route to safety or escalation.';

  return (
    <PatternDocsPageShell
      platform="app"
      categoryId="states"
      categoryLabel="States"
      patternId="error-recovery"
      title="Error Recovery"
      description="A mobile failure-state pattern that keeps the cause, impact, and next best action visible when a screen-level request or permission check goes wrong."
    >
      <div className="w-full rounded-[28px] border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/70">
        <FlexWrapper direction="col" items="start" gap={4} classes="w-full">
          <Typography variant="H4">Controller</Typography>
          <Typography
            variant="B1"
            classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
          >
            Switch between a recoverable network problem and a harder
            permission issue, then review whether the main action should retry
            or escalate.
          </Typography>

          <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2">
              <Typography variant="C1" classes="uppercase font-mono opacity-60">
                Issue
              </Typography>
              <ButtonGroup
                color="neutral"
                size="sm"
                items={[
                  { label: 'Network', value: 'network' },
                  { label: 'Permission', value: 'permission' },
                ]}
                onChange={(next) => setIssue(next as 'network' | 'permission')}
                value={issue}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Typography variant="C1" classes="uppercase font-mono opacity-60">
                Main action
              </Typography>
              <ButtonGroup
                color="neutral"
                size="sm"
                items={[
                  { label: 'Retry', value: 'retry' },
                  { label: 'Escalate', value: 'support' },
                ]}
                onChange={(next) => setActions(next as 'retry' | 'support')}
                value={actions}
              />
            </div>
          </div>
        </FlexWrapper>
      </div>

      <PatternGuideSection
        title="Failure Summary"
        description={selectedDescription}
        example={
          <CodeExample code={networkCode} className="w-full">
            <AppDevicePreviewFrame minHeight={820} maxWidthClass="max-w-[420px]">
              <AppErrorRecoveryPreview issue={issue} actions={actions} />
            </AppDevicePreviewFrame>
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Recovery Context"
        description="The user should understand not just that something failed, but what kind of recovery is realistic. Use compact context to explain whether retrying, waiting, or requesting access is the right next move."
        example={
          <CodeExample code={permissionCode} className="w-full">
            <AppDevicePreviewFrame minHeight={820} maxWidthClass="max-w-[420px]">
              <AppErrorRecoveryPreview issue="permission" actions="support" />
            </AppDevicePreviewFrame>
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Action Pairing"
        description="Pair the best next action with one safe fallback path. On mobile, a retry should stay close to the failure and an exit should be visible without asking the user to guess where to go."
        example={
          <CodeExample code={actionCode} className="w-full">
            <AppDevicePreviewFrame minHeight={820} maxWidthClass="max-w-[420px]">
              <AppErrorRecoveryPreview issue="network" actions="retry" />
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
            Name the failure clearly, explain what recovery is realistic, and
            pair the best next action with one safe fallback route out.
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
