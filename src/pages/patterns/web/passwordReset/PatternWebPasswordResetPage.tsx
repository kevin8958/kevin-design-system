'use client';

import { useState } from 'react';
import ButtonGroup from '@/components/action/ButtonGroup';
import SimpleTable from '@/components/data/SimpleTable';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import FlexWrapper from '@/components/layout/FlexWrapper';
import PatternGuideSection from '@/pages/patterns/common/PatternGuideSection';
import PatternDocsPageShell from '@/pages/patterns/common/PatternDocsPageShell';
import WebPasswordResetPreview from '@/pages/patterns/web/passwordReset/WebPasswordResetPreview';

const compositionColumns = [
  { label: 'Component', key: 'property' },
  { label: 'Role', key: 'type' },
  { label: 'Why It Matters', key: 'description' },
];

const compositionRows = [
  {
    id: '1',
    property: 'TextInput',
    type: 'Recovery input',
    description:
      'Collects the account email, verification code, and new password fields with clear validation.',
  },
  {
    id: '2',
    property: 'Button',
    type: 'Primary / support action',
    description:
      'Moves the user through request, resend, save, and return-to-sign-in actions without ambiguity.',
  },
  {
    id: '3',
    property: 'Alert',
    type: 'Error summary',
    description:
      'Surfaces account lookup or verification failures that affect the whole recovery step.',
  },
  {
    id: '4',
    property: 'EmptyState',
    type: 'Success confirmation',
    description:
      'Marks the end of recovery and points the user back toward the sign-in flow.',
  },
];

const requestCode = `
import Button from '@/components/action/Button';
import TextInput from '@/components/input/TextInput';

export function PasswordResetRequest() {
  return (
    <>
      <TextInput label="Work email" placeholder="you@company.com" />
      <Button fullWidth color="primary">
        Send reset code
      </Button>
    </>
  );
}`.trim();

const resetCode = `
import Button from '@/components/action/Button';
import TextInput from '@/components/input/TextInput';

export function PasswordResetVerify() {
  return (
    <>
      <TextInput label="Verification code" placeholder="123456" />
      <TextInput label="New password" type="password" />
      <TextInput label="Confirm password" type="password" />

      <Button fullWidth color="primary">
        Save new password
      </Button>
    </>
  );
}`.trim();

const successCode = `
import Button from '@/components/action/Button';
import EmptyState from '@/components/data/EmptyState';

export function PasswordResetSuccess() {
  return (
    <EmptyState
      title="Password updated"
      description="Your password has been changed successfully."
      primaryAction={<Button color="primary">Back to sign in</Button>}
    />
  );
}`.trim();

export default function PatternWebPasswordResetPage() {
  const [step, setStep] = useState<'request' | 'reset' | 'success'>('request');
  const [state, setState] = useState<'default' | 'invalid' | 'loading'>(
    'default',
  );

  return (
    <PatternDocsPageShell
      platform="web"
      categoryId="auth"
      categoryLabel="Auth"
      patternId="password-reset"
      title="Password Reset"
      description="A browser-first recovery flow that keeps account lookup, code verification, and password replacement clear without making the user repeat work."
    >
      <div className="w-full rounded-[28px] border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/70">
        <FlexWrapper direction="col" items="start" gap={4} classes="w-full">
          <Typography variant="H4">Controller</Typography>
          <Typography
            variant="B1"
            classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
          >
            Switch between the recovery stages and the current form state to
            review how the flow behaves from account lookup through success.
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
        description="The first step should ask for only one thing: the email tied to the account. Keep the action focused and explain what will happen next so the user doesn’t wonder whether the code was sent."
        example={
          <CodeExample code={requestCode} className="w-full">
            <WebPasswordResetPreview step="request" state={step === 'request' ? state : 'default'} />
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Verification And New Password"
        description="Once the reset code is sent, the next screen needs to combine verification and password replacement without losing context. Show where the code went, support resend, and keep password rules close to the inputs."
        example={
          <CodeExample code={resetCode} className="w-full">
            <WebPasswordResetPreview step="reset" state={step === 'reset' ? state : 'default'} />
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Success State"
        description="Success should clearly close the loop and give the person one obvious next step: return to sign in. Avoid dumping them back into the auth flow without confirmation."
        example={
          <CodeExample code={successCode} className="w-full">
            <WebPasswordResetPreview step="success" />
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
            Minimize input in the request step, keep verification context visible
            in the reset step, and use the success state to close the loop
            before returning the person to sign in.
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
