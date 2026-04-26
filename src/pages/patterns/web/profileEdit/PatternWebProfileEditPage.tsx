'use client';

import { useState } from 'react';
import ButtonGroup from '@/components/action/ButtonGroup';
import SimpleTable from '@/components/data/SimpleTable';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import FlexWrapper from '@/components/layout/FlexWrapper';
import PatternGuideSection from '@/pages/patterns/common/PatternGuideSection';
import PatternDocsPageShell from '@/pages/patterns/common/PatternDocsPageShell';
import WebProfileEditPreview from '@/pages/patterns/web/profileEdit/WebProfileEditPreview';

const compositionColumns = [
  { label: 'Component', key: 'property' },
  { label: 'Role', key: 'type' },
  { label: 'Why It Matters', key: 'description' },
];

const compositionRows = [
  {
    id: '1',
    property: 'TextInput',
    type: 'Identity fields',
    description:
      'Keeps editable profile details predictable with labels, defaults, and inline validation.',
  },
  {
    id: '2',
    property: 'Select',
    type: 'Preference input',
    description:
      'Supports profile settings like timezone or locale without forcing freeform entry.',
  },
  {
    id: '3',
    property: 'Textarea',
    type: 'Long-form field',
    description:
      'Handles profile summaries and descriptive fields while preserving clear hierarchy.',
  },
  {
    id: '4',
    property: 'Button',
    type: 'Primary / secondary action',
    description:
      'Anchors save, discard, and recovery actions so edits never feel lost.',
  },
  {
    id: '5',
    property: 'Alert',
    type: 'Form-level feedback',
    description:
      'Calls out issues that affect multiple fields before the user tries saving again.',
  },
];

const coreLayoutCode = `
import Button from '@/components/action/Button';
import Select from '@/components/input/Select';
import Textarea from '@/components/input/Textarea';
import TextInput from '@/components/input/TextInput';

export function ProfileEditForm() {
  return (
    <>
      <TextInput label="Full name" placeholder="Jane Doe" />
      <TextInput label="Role" placeholder="Product Designer" />
      <Select label="Timezone" options={timezoneOptions} value="pt" />
      <Textarea label="Short bio" placeholder="Write a short profile summary" />
      <Button color="primary">Save changes</Button>
    </>
  );
}`.trim();

const validationCode = `
import Alert from '@/components/feedback/Alert';
import Textarea from '@/components/input/Textarea';
import TextInput from '@/components/input/TextInput';

export function ProfileEditValidation() {
  return (
    <>
      <Alert
        variant="danger"
        title="A few fields still need attention"
        description="Resolve the highlighted items before saving your profile changes."
      />

      <TextInput
        label="Work email"
        error
        errorMsg="Use the verified email tied to your workspace."
      />

      <Textarea
        label="Short bio"
        error
        errorMsg="Keep the summary concise and suitable for workspace discovery."
      />
    </>
  );
}`.trim();

const stickyActionsCode = `
import Button from '@/components/action/Button';

export function StickyProfileSaveBar() {
  return (
    <div className="sticky bottom-0 flex items-center justify-between">
      <span>Unsaved changes</span>
      <Button color="primary">Save changes</Button>
    </div>
  );
}`.trim();

export default function PatternWebProfileEditPage() {
  const [state, setState] = useState<'default' | 'invalid' | 'loading'>(
    'default',
  );
  const [saveBar, setSaveBar] = useState<'sticky' | 'inline'>('sticky');
  const selectedDescription =
    saveBar === 'sticky'
      ? 'Use the controller to inspect a longer settings form with a persistent save bar. The primary action should stay visible without breaking the reading order of the fields.'
      : 'Use the controller to review a shorter profile form where actions can live inline at the end of the section. This works when the form remains fully visible without much scrolling.';

  return (
    <PatternDocsPageShell
      platform="web"
      categoryId="forms"
      categoryLabel="Forms"
      patternId="profile-edit"
      title="Profile Edit"
      description="A web profile settings form that groups identity, preferences, and save actions so longer edits stay easy to review before submission."
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
            <WebProfileEditPreview state={state} saveBar={saveBar} />
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Validation And Field Grouping"
        description="Identity, contact, and preference fields should stay grouped so users can recover quickly when validation fails. Use one top-level alert for summary context and let inline errors explain the fix."
        example={
          <CodeExample code={validationCode} className="w-full">
            <WebProfileEditPreview state="invalid" saveBar="sticky" />
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Save Actions And Recovery"
        description="Save and discard actions need a consistent relationship. If the form is short, inline actions are enough. If it becomes longer or denser, move to a persistent save bar instead of hiding the primary action below the fold."
        example={
          <CodeExample code={stickyActionsCode} className="w-full">
            <WebProfileEditPreview state="default" saveBar="inline" />
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
            Group related profile fields, keep save actions visible at the right
            moment, and show cross-field validation before the user leaves the
            page wondering what failed.
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
