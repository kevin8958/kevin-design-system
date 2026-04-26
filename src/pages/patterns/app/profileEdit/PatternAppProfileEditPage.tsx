'use client';

import { useState } from 'react';
import ButtonGroup from '@/components/action/ButtonGroup';
import SimpleTable from '@/components/data/SimpleTable';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import FlexWrapper from '@/components/layout/FlexWrapper';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';
import PatternGuideSection from '@/pages/patterns/common/PatternGuideSection';
import PatternDocsPageShell from '@/pages/patterns/common/PatternDocsPageShell';
import AppProfileEditPreview from '@/pages/patterns/app/profileEdit/AppProfileEditPreview';

const compositionColumns = [
  { label: 'Component', key: 'property' },
  { label: 'Role', key: 'type' },
  { label: 'Why It Matters', key: 'description' },
];

const compositionRows = [
  {
    id: '1',
    property: 'AppTextInput',
    type: 'Identity fields',
    description:
      'Handles editable profile details with touch-friendly spacing and inline recovery.',
  },
  {
    id: '2',
    property: 'AppSelect',
    type: 'Preference input',
    description:
      'Supports timezone or locale selection without leaving the settings flow.',
  },
  {
    id: '3',
    property: 'AppTextarea',
    type: 'Long-form field',
    description:
      'Provides room for profile summaries while preserving a consistent stacked rhythm.',
  },
  {
    id: '4',
    property: 'AppButton',
    type: 'Primary / secondary action',
    description:
      'Anchors save and discard actions where the person can still see recent edits.',
  },
  {
    id: '5',
    property: 'AppAlert',
    type: 'Form-level feedback',
    description:
      'Calls out issues that span multiple fields before the user retries submission.',
  },
];

const coreLayoutCode = `
import AppButton from '@/components/app/AppButton';
import AppSelect from '@/components/app/AppSelect';
import AppTextarea from '@/components/app/AppTextarea';
import AppTextInput from '@/components/app/AppTextInput';

export function AppProfileEditForm() {
  return (
    <>
      <AppTextInput label="Full name" placeholder="Jane Doe" />
      <AppTextInput label="Role" placeholder="Product Designer" />
      <AppSelect label="Timezone" options={timezoneOptions} value="pt" />
      <AppTextarea label="Short bio" placeholder="Write a short summary" />
      <AppButton color="primary" label="Save changes" />
    </>
  );
}`.trim();

const validationCode = `
import AppAlert from '@/components/app/AppAlert';
import AppTextarea from '@/components/app/AppTextarea';
import AppTextInput from '@/components/app/AppTextInput';

export function AppProfileEditValidation() {
  return (
    <>
      <AppAlert
        variant="danger"
        title="A few fields still need attention"
        description="Resolve the highlighted items before saving your profile changes."
      />

      <AppTextInput
        label="Work email"
        error
        errorMsg="Use the verified email tied to your workspace."
      />

      <AppTextarea
        label="Short bio"
        error
        errorMsg="Keep the summary concise and suitable for workspace discovery."
      />
    </>
  );
}`.trim();

const stickyActionsCode = `
import AppButton from '@/components/app/AppButton';

export function AppProfileSaveBar() {
  return (
    <>
      <AppButton variant="clear" color="neutral" label="Discard" />
      <AppButton color="primary" label="Save changes" />
    </>
  );
}`.trim();

export default function PatternAppProfileEditPage() {
  const [state, setState] = useState<'default' | 'invalid' | 'loading'>(
    'default',
  );
  const [saveBar, setSaveBar] = useState<'sticky' | 'inline'>('sticky');
  const selectedDescription =
    saveBar === 'sticky'
      ? 'Use the controller to inspect a longer mobile settings form with a persistent save surface. The primary action should stay reachable even when the keyboard and scroll position shift.'
      : 'Use the controller to review a shorter mobile profile form where save actions can remain inline at the end of the content because the whole form stays visible.';
  const selectedMinHeight = saveBar === 'sticky' ? 980 : 900;

  return (
    <PatternDocsPageShell
      platform="app"
      categoryId="forms"
      categoryLabel="Forms"
      patternId="profile-edit"
      title="Profile Edit"
      description="A native profile settings pattern that keeps identity, preference, and save decisions clear in a longer mobile form flow."
    >
      <div className="w-full rounded-[28px] border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/70">
        <FlexWrapper direction="col" items="start" gap={4} classes="w-full">
          <Typography variant="H4">Controller</Typography>
          <Typography
            variant="B1"
            classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
          >
            Switch between field states and whether the save action stays
            persistent or ends inline with the form.
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
                  { label: 'Invalid', value: 'invalid' },
                  { label: 'Loading', value: 'loading' },
                ]}
                onChange={(next) =>
                  setState(next as 'default' | 'invalid' | 'loading')
                }
                value={state}
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
                  { label: 'Sticky bar', value: 'sticky' },
                  { label: 'Inline end', value: 'inline' },
                ]}
                onChange={(next) => setSaveBar(next as 'sticky' | 'inline')}
                value={saveBar}
              />
            </div>
          </div>
        </FlexWrapper>
      </div>

      <PatternGuideSection
        title="Profile Settings Layout"
        description={selectedDescription}
        example={
          <CodeExample code={coreLayoutCode} className="w-full">
            <AppDevicePreviewFrame
              minHeight={selectedMinHeight}
              maxWidthClass="max-w-[420px]"
            >
              <AppProfileEditPreview state={state} saveBar={saveBar} />
            </AppDevicePreviewFrame>
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Validation And Field Grouping"
        description="Mobile settings still need clear sectioning when validation fails. Keep the alert near the top, but let the person fix errors without losing their spot in the stack."
        example={
          <CodeExample code={validationCode} className="w-full">
            <AppDevicePreviewFrame minHeight={980} maxWidthClass="max-w-[420px]">
              <AppProfileEditPreview state="invalid" saveBar="sticky" />
            </AppDevicePreviewFrame>
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Save Actions And Recovery"
        description="Shorter forms can end with inline actions, but dense settings screens benefit from a persistent save surface instead. Choose the pattern that keeps the user from hunting for the primary action."
        example={
          <CodeExample code={stickyActionsCode} className="w-full">
            <AppDevicePreviewFrame minHeight={900} maxWidthClass="max-w-[420px]">
              <AppProfileEditPreview state="default" saveBar="inline" />
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
            Group related profile fields, keep the save action reachable while
            scrolling, and show cross-field validation before the person leaves
            the screen unsure what failed.
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
