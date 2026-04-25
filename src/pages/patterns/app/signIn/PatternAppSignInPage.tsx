'use client';

import { useState } from 'react';
import ButtonGroup from '@/components/action/ButtonGroup';
import SimpleTable from '@/components/data/SimpleTable';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import FlexWrapper from '@/components/layout/FlexWrapper';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';
import PatternDocsPageShell from '@/pages/patterns/common/PatternDocsPageShell';
import AppSignInPreview from '@/pages/patterns/app/signIn/AppSignInPreview';

const compositionColumns = [
  { label: 'Component', key: 'property' },
  { label: 'Role', key: 'type' },
  { label: 'Why It Matters', key: 'description' },
];

const compositionRows = [
  {
    id: '1',
    property: 'AppTextInput',
    type: 'Credential entry',
    description:
      'Handles native text entry, secure fields, helper copy, and inline validation in one stacked rhythm.',
  },
  {
    id: '2',
    property: 'AppCheckbox',
    type: 'Preference',
    description:
      'Keeps “remember this device” or trust-this-device preferences lightweight and tappable.',
  },
  {
    id: '3',
    property: 'AppButton',
    type: 'Primary / secondary action',
    description:
      'Supports the main sign-in action, recovery links, admin escalation, and alternate providers.',
  },
  {
    id: '4',
    property: 'AppAlert',
    type: 'System feedback',
    description:
      'Communicates failures that apply to the whole flow, not just one field.',
  },
];

const coreLayoutCode = `
import AppButton from '@/components/app/AppButton';
import AppCheckbox from '@/components/app/AppCheckbox';
import AppTextInput from '@/components/app/AppTextInput';

export function AppSignInScreen() {
  return (
    <>
      <AppTextInput label="Work email" placeholder="you@company.com" />
      <AppTextInput label="Password" type="password" placeholder="Enter your password" />

      <AppCheckbox label="Remember this device" />

      <AppButton fullWidth color="primary" label="Sign in" />
    </>
  );
}`.trim();

const validationCode = `
import AppAlert from '@/components/app/AppAlert';
import AppTextInput from '@/components/app/AppTextInput';

export function AppSignInValidation() {
  return (
    <>
      <AppAlert
        variant="danger"
        title="We couldn't sign you in"
        description="Double-check your email and password, or reset your password."
      />

      <AppTextInput
        label="Work email"
        value="kevin@design.system"
        error
        errorMsg="Use the email connected to your workspace."
      />

      <AppTextInput
        label="Password"
        type="password"
        value="incorrect-password"
        error
        errorMsg="Password must be at least 8 characters."
      />
    </>
  );
}`.trim();

const socialCode = `
import AppButton from '@/components/app/AppButton';

export function AppAlternateEntry() {
  return (
    <>
      <AppButton variant="outline" color="neutral" label="Google" />
      <AppButton variant="outline" color="neutral" label="Apple" />
    </>
  );
}`.trim();

export default function PatternAppSignInPage() {
  const [state, setState] = useState<'default' | 'invalid' | 'loading'>(
    'default',
  );
  const [entryMode, setEntryMode] = useState<'standard' | 'social'>('standard');

  return (
    <PatternDocsPageShell
      platform="app"
      categoryId="auth"
      categoryLabel="Auth"
      patternId="sign-in"
      title="Sign In"
      description="A mobile-first sign-in flow that respects vertical rhythm, thumb reach, and quick recovery without forcing people through unnecessary steps."
    >
      <div className="w-full rounded-[28px] border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/70">
        <FlexWrapper direction="col" items="start" gap={4} classes="w-full">
          <Typography variant="H4">Controller</Typography>
          <Typography
            variant="B1"
            classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
          >
            Switch between the main sign-in states and whether alternate
            providers are shown in the native flow.
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
                Entry
              </Typography>
              <ButtonGroup
                color="neutral"
                size="sm"
                items={[
                  { label: 'Standard', value: 'standard' },
                  { label: 'Social', value: 'social' },
                ]}
                onChange={(next) =>
                  setEntryMode(next as 'standard' | 'social')
                }
                value={entryMode}
              />
            </div>
          </div>
        </FlexWrapper>
      </div>

      <GuideSection
        title="Core Layout"
        description="On mobile, the first screen should carry context, credentials, recovery, and one primary CTA without forcing extra scrolling. Keep tappable targets large and avoid splitting the form across stacked surfaces."
        example={
          <CodeExample code={coreLayoutCode} className="flex-1 min-w-[320px]">
            <AppDevicePreviewFrame minHeight={620}>
              <AppSignInPreview
                state={state}
                showSocial={entryMode === 'social'}
              />
            </AppDevicePreviewFrame>
          </CodeExample>
        }
      />

      <GuideSection
        title="Validation And Recovery"
        description="Native sign-in flows need both field-level guidance and a top-level error container when the failure is ambiguous. Keep password recovery visible close to the credential field so the next move is immediate."
        example={
          <CodeExample code={validationCode} className="flex-1 min-w-[320px]">
            <AppDevicePreviewFrame minHeight={660}>
              <AppSignInPreview state="invalid" showSocial={false} />
            </AppDevicePreviewFrame>
          </CodeExample>
        }
      />

      <GuideSection
        title="Alternate Entry"
        description="If the app supports Apple, Google, or enterprise SSO, place those options beneath the primary action. This keeps the credential path obvious while still supporting faster repeat sign-in for the right audience."
        example={
          <CodeExample code={socialCode} className="flex-1 min-w-[320px]">
            <AppDevicePreviewFrame minHeight={660}>
              <AppSignInPreview
                state="default"
                showSocial
                showSupportNote={false}
              />
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
            Prioritize thumb-friendly controls, preserve a single clear submit
            action, and make recovery visible before failure. Extra providers
            should reduce effort, not turn the top of the screen into a menu.
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
