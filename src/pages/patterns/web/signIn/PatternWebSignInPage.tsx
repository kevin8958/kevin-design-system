'use client';

import { useState } from 'react';
import ButtonGroup from '@/components/action/ButtonGroup';
import SimpleTable from '@/components/data/SimpleTable';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import FlexWrapper from '@/components/layout/FlexWrapper';
import GuideSection from '@/components/layout/GuideSection';
import PatternDocsPageShell from '@/pages/patterns/common/PatternDocsPageShell';
import WebSignInPreview from '@/pages/patterns/web/signIn/WebSignInPreview';

const compositionColumns = [
  { label: 'Component', key: 'property' },
  { label: 'Role', key: 'type' },
  { label: 'Why It Matters', key: 'description' },
];

const compositionRows = [
  {
    id: '1',
    property: 'TextInput',
    type: 'Credential entry',
    description:
      'Collects email and password with labels, placeholders, and inline validation.',
  },
  {
    id: '2',
    property: 'Checkbox',
    type: 'Preference',
    description:
      'Handles “remember this device” without crowding the primary submit path.',
  },
  {
    id: '3',
    property: 'Button',
    type: 'Primary / secondary action',
    description:
      'Drives sign-in, password recovery, support escalation, and alternate entry methods.',
  },
  {
    id: '4',
    property: 'Alert',
    type: 'System feedback',
    description:
      'Surfaces top-level failures when the issue is broader than a single field.',
  },
];

const coreLayoutCode = `
import Alert from '@/components/feedback/Alert';
import Button from '@/components/action/Button';
import Checkbox from '@/components/input/Checkbox';
import TextInput from '@/components/input/TextInput';

export function SignInCard() {
  return (
    <div className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm">
      <h2>Welcome back</h2>
      <p>Sign in to continue to your workspace and approvals.</p>

      <TextInput label="Work email" placeholder="you@company.com" />
      <TextInput label="Password" type="password" placeholder="Enter your password" />

      <div className="flex items-center justify-between">
        <Checkbox label="Remember this device" />
        <Button variant="clear" color="primary" size="sm">
          Forgot password
        </Button>
      </div>

      <Button fullWidth color="primary">
        Sign in
      </Button>
    </div>
  );
}`.trim();

const validationCode = `
import Alert from '@/components/feedback/Alert';
import TextInput from '@/components/input/TextInput';

export function SignInWithValidation() {
  return (
    <>
      <Alert
        variant="danger"
        title="We couldn't sign you in"
        description="Check your email and password, then try again."
      />

      <TextInput
        label="Work email"
        value="kevin@design.system"
        error
        errorMsg="Use the email tied to your workspace."
      />

      <TextInput
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
import Button from '@/components/action/Button';

export function SignInAlternateEntry() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Button variant="outline" color="neutral" fullWidth>
        Google
      </Button>
      <Button variant="outline" color="neutral" fullWidth>
        Apple
      </Button>
    </div>
  );
}`.trim();

export default function PatternWebSignInPage() {
  const [state, setState] = useState<'default' | 'invalid' | 'loading'>(
    'default',
  );
  const [entryMode, setEntryMode] = useState<'standard' | 'social'>('standard');

  return (
    <PatternDocsPageShell
      platform="web"
      categoryId="auth"
      categoryLabel="Auth"
      patternId="sign-in"
      title="Sign In"
      description="A browser-first sign-in flow that prioritizes clear credential entry, fast recovery, and trustworthy system feedback without overwhelming the first step."
    >
      <div className="w-full rounded-[28px] border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/70">
        <FlexWrapper direction="col" items="start" gap={4} classes="w-full">
          <Typography variant="H4">Controller</Typography>
          <Typography
            variant="B1"
            classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
          >
            Toggle the main state and whether alternate sign-in providers are
            offered alongside the primary email-and-password path.
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
        description="Keep the sign-in surface focused: identity, context, credentials, recovery, and one clear primary action. Supporting actions should stay visible but never outrank the submit path."
        example={
          <CodeExample code={coreLayoutCode} className="flex-1 min-w-[320px]">
            <WebSignInPreview
              state={state}
              showSocial={entryMode === 'social'}
            />
          </CodeExample>
        }
      />

      <GuideSection
        title="Validation And Recovery"
        description="Field-level issues belong next to the input, while broader failures should also appear as a top alert. Recovery links need to be close to the password field so the next step feels obvious."
        example={
          <CodeExample code={validationCode} className="flex-1 min-w-[320px]">
            <WebSignInPreview state="invalid" showSocial={false} />
          </CodeExample>
        }
      />

      <GuideSection
        title="Alternate Entry"
        description="Only offer social or SSO options when they truly reduce friction for the same audience. Group them beneath the primary form so the main credential path remains easy to scan."
        example={
          <CodeExample code={socialCode} className="flex-1 min-w-[320px]">
            <WebSignInPreview state="default" showSocial showSupportNote={false} />
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
            Keep labels persistent, make recovery visible before failure, and
            reserve social options for cases where they reduce actual sign-in
            effort. Trust cues should support the form, not compete with it.
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
