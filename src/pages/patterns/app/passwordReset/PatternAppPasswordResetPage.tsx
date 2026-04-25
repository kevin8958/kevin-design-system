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
import AppPasswordResetPreview from '@/pages/patterns/app/passwordReset/AppPasswordResetPreview';

const compositionColumns = [
  { label: 'Component', key: 'property' },
  { label: 'Role', key: 'type' },
  { label: 'Why It Matters', key: 'description' },
];

const compositionRows = [
  {
    id: '1',
    property: 'AppTextInput',
    type: 'Recovery input',
    description:
      'Handles account email, verification code, and new password fields with stacked native spacing.',
  },
  {
    id: '2',
    property: 'AppButton',
    type: 'Primary / support action',
    description:
      'Moves the person through send, resend, save, and return-to-sign-in actions without ambiguity.',
  },
  {
    id: '3',
    property: 'AppAlert',
    type: 'Error summary',
    description:
      'Communicates failures that block the whole recovery step, not just one field.',
  },
  {
    id: '4',
    property: 'AppEmptyState',
    type: 'Success confirmation',
    description:
      'Closes the recovery flow clearly before sending the person back to sign in.',
  },
];

const requestCode = `
import AppButton from '@/components/app/AppButton';
import AppTextInput from '@/components/app/AppTextInput';

export function AppPasswordResetRequest() {
  return (
    <>
      <AppTextInput label="Work email" placeholder="you@company.com" />
      <AppButton fullWidth color="primary" label="Send reset code" />
    </>
  );
}`.trim();

const resetCode = `
import AppButton from '@/components/app/AppButton';
import AppTextInput from '@/components/app/AppTextInput';

export function AppPasswordResetVerify() {
  return (
    <>
      <AppTextInput label="Verification code" placeholder="123456" />
      <AppTextInput label="New password" type="password" />
      <AppTextInput label="Confirm password" type="password" />
      <AppButton fullWidth color="primary" label="Save new password" />
    </>
  );
}`.trim();

const successCode = `
import AppButton from '@/components/app/AppButton';
import AppEmptyState from '@/components/app/AppEmptyState';

export function AppPasswordResetSuccess() {
  return (
    <AppEmptyState
      title="Password updated"
      description="Your password has been changed successfully."
      primaryAction={<AppButton color="primary" label="Back to sign in" />}
    />
  );
}`.trim();

export default function PatternAppPasswordResetPage() {
  const [step, setStep] = useState<'request' | 'reset' | 'success'>('request');
  const [state, setState] = useState<'default' | 'invalid' | 'loading'>(
    'default',
  );

  return (
    <PatternDocsPageShell
      platform="app"
      categoryId="auth"
      categoryLabel="Auth"
      patternId="password-reset"
      title="Password Reset"
      description="A mobile-first recovery flow that keeps request, verification, and reset states easy to follow without making the user repeat information."
    >
      <div className="w-full rounded-[28px] border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/70">
        <FlexWrapper direction="col" items="start" gap={4} classes="w-full">
          <Typography variant="H4">Controller</Typography>
          <Typography
            variant="B1"
            classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
          >
            Switch between the recovery stages and the current form state to
            review how request, reset, and success moments should feel in the
            native flow.
          </Typography>

          <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2">
              <Typography
                variant="C1"
                classes="uppercase font-mono opacity-60"
              >
                Step
              </Typography>
              <ButtonGroup
                color="neutral"
                size="sm"
                items={[
                  { label: 'Request', value: 'request' },
                  { label: 'Reset', value: 'reset' },
                  { label: 'Success', value: 'success' },
                ]}
                onChange={(next) =>
                  setStep(next as 'request' | 'reset' | 'success')
                }
                value={step}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Typography
                variant="C1"
                classes="uppercase font-mono opacity-60"
              >
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
          </div>
        </FlexWrapper>
      </div>

      <PatternGuideSection
        title="Request Step"
        description="The first mobile recovery step should stay as lightweight as possible: one account email field, one primary action, and a clear explanation of what happens next."
        example={
          <CodeExample code={requestCode} className="w-full">
            <AppDevicePreviewFrame minHeight={620} maxWidthClass="max-w-[420px]">
              <AppPasswordResetPreview
                step="request"
                state={step === 'request' ? state : 'default'}
              />
            </AppDevicePreviewFrame>
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Verification And New Password"
        description="When the person reaches the reset step, keep code context visible and combine password creation with resend support so they don’t need to guess where the flow stalled."
        example={
          <CodeExample code={resetCode} className="w-full">
            <AppDevicePreviewFrame minHeight={760} maxWidthClass="max-w-[420px]">
              <AppPasswordResetPreview
                step="reset"
                state={step === 'reset' ? state : 'default'}
              />
            </AppDevicePreviewFrame>
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Success State"
        description="Use the final state to close the loop clearly and point the person back toward sign in. This is especially important on mobile, where abrupt route changes can feel like the form disappeared."
        example={
          <CodeExample code={successCode} className="w-full">
            <AppDevicePreviewFrame minHeight={520} maxWidthClass="max-w-[420px]">
              <AppPasswordResetPreview step="success" />
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
            Keep the first step lightweight, make verification context visible
            in the reset step, and use the success state to explicitly hand the
            person back to sign in.
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
