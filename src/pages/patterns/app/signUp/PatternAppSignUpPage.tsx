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
import AppSignUpPreview from '@/pages/patterns/app/signUp/AppSignUpPreview';

const compositionColumns = [
  { label: 'Component', key: 'property' },
  { label: 'Role', key: 'type' },
  { label: 'Why It Matters', key: 'description' },
];

const compositionRows = [
  {
    id: '1',
    property: 'AppTextInput',
    type: 'Account setup',
    description:
      'Handles profile details, email verification inputs, and password creation with native spacing.',
  },
  {
    id: '2',
    property: 'AppCheckbox',
    type: 'Required agreement',
    description:
      'Makes required consent or policy acknowledgment tappable without hiding the requirement.',
  },
  {
    id: '3',
    property: 'AppButton',
    type: 'Primary / alternate action',
    description:
      'Supports account creation, sign-in fallback, and invite-aware navigation.',
  },
  {
    id: '4',
    property: 'AppAlert',
    type: 'Form-level validation',
    description:
      'Provides a single, high-signal failure summary when the user needs to correct multiple inputs.',
  },
];

const coreLayoutCode = `
import AppButton from '@/components/app/AppButton';
import AppCheckbox from '@/components/app/AppCheckbox';
import AppTextInput from '@/components/app/AppTextInput';

export function AppSignUpScreen() {
  return (
    <>
      <AppTextInput label="Full name" placeholder="Jane Doe" />
      <AppTextInput label="Work email" placeholder="you@company.com" />
      <AppTextInput label="Password" type="password" placeholder="Create a password" />

      <AppCheckbox label="I agree to the Terms of Service and Security Policy" />

      <AppButton fullWidth color="primary" label="Create account" />
    </>
  );
}`.trim();

const validationCode = `
import AppAlert from '@/components/app/AppAlert';
import AppCheckbox from '@/components/app/AppCheckbox';
import AppTextInput from '@/components/app/AppTextInput';

export function AppSignUpValidation() {
  return (
    <>
      <AppAlert
        variant="danger"
        title="We need a few fixes before continuing"
        description="Check the highlighted fields and confirm the required agreement."
      />

      <AppTextInput
        label="Work email"
        error
        errorMsg="Use a company email you can verify."
      />

      <AppTextInput
        label="Password"
        type="password"
        error
        errorMsg="Use at least 8 characters with letters and numbers."
      />

      <AppCheckbox
        invalid
        label="I agree to the Terms of Service and Security Policy"
        errorMsg="You need to accept the required terms to continue."
      />
    </>
  );
}`.trim();

const inviteCode = `
import AppButton from '@/components/app/AppButton';

export function InviteAwareSignUp() {
  return (
    <>
      <AppButton variant="clear" color="primary" size="sm" label="Review invite details" />
      <AppButton fullWidth color="primary" label="Create account" />
    </>
  );
}`.trim();

export default function PatternAppSignUpPage() {
  const [state, setState] = useState<'default' | 'invalid' | 'loading'>(
    'default',
  );
  const [flow, setFlow] = useState<'standard' | 'invite'>('standard');

  return (
    <PatternDocsPageShell
      platform="app"
      categoryId="auth"
      categoryLabel="Auth"
      patternId="sign-up"
      title="Sign Up"
      description="A mobile-first signup flow that keeps account creation clear, agreement handling explicit, and invite context visible without overloading the first screen."
    >
      <div className="w-full rounded-[28px] border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/70">
        <FlexWrapper direction="col" items="start" gap={4} classes="w-full">
          <Typography variant="H4">Controller</Typography>
          <Typography
            variant="B1"
            classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
          >
            Switch between the current signup state and whether the person is
            entering from a standard flow or an invite-aware onboarding path.
          </Typography>

          <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
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

            <div className="flex flex-col gap-2">
              <Typography
                variant="C1"
                classes="uppercase font-mono opacity-60"
              >
                Flow
              </Typography>
              <ButtonGroup
                color="neutral"
                size="sm"
                items={[
                  { label: 'Standard', value: 'standard' },
                  { label: 'Invite', value: 'invite' },
                ]}
                onChange={(next) => setFlow(next as 'standard' | 'invite')}
                value={flow}
              />
            </div>
          </div>
        </FlexWrapper>
      </div>

      <PatternGuideSection
        title="Core Layout"
        description="On mobile, signup should feel like a guided start rather than a wall of form fields. Keep the path vertical, place agreements close to the CTA, and keep the sign-in fallback visible for returning users."
        example={
          <CodeExample code={coreLayoutCode} className="w-full">
            <AppDevicePreviewFrame minHeight={740} maxWidthClass="max-w-[420px]">
              <AppSignUpPreview state={state} flow={flow} />
            </AppDevicePreviewFrame>
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Validation And Agreement Handling"
        description="Signup often fails on password rules or required policy acknowledgment. Combine inline error copy with a single alert summary so the person knows both what failed and where to fix it."
        example={
          <CodeExample code={validationCode} className="w-full">
            <AppDevicePreviewFrame minHeight={760} maxWidthClass="max-w-[420px]">
              <AppSignUpPreview state="invalid" flow="standard" />
            </AppDevicePreviewFrame>
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Invite-Aware Onboarding"
        description="When signup starts from an invite, use the top of the screen to explain what is already known and what will happen after account creation. That context reduces uncertainty and makes the flow feel personalized."
        example={
          <CodeExample code={inviteCode} className="w-full">
            <AppDevicePreviewFrame minHeight={760} maxWidthClass="max-w-[420px]">
              <AppSignUpPreview state="default" flow="invite" />
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
            Keep the account creation path vertical, explain password
            expectations before failure, and make invite context or sign-in
            fallback obvious before the person gets blocked.
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
