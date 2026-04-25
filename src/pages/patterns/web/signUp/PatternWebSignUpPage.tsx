'use client';

import { useState } from 'react';
import ButtonGroup from '@/components/action/ButtonGroup';
import SimpleTable from '@/components/data/SimpleTable';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import FlexWrapper from '@/components/layout/FlexWrapper';
import PatternDocsPageShell from '@/pages/patterns/common/PatternDocsPageShell';
import PatternGuideSection from '@/pages/patterns/common/PatternGuideSection';
import WebSignUpPreview from '@/pages/patterns/web/signUp/WebSignUpPreview';

const compositionColumns = [
  { label: 'Component', key: 'property' },
  { label: 'Role', key: 'type' },
  { label: 'Why It Matters', key: 'description' },
];

const compositionRows = [
  {
    id: '1',
    property: 'TextInput',
    type: 'Account setup',
    description:
      'Collects identity, team context, email, and password requirements in a single form rhythm.',
  },
  {
    id: '2',
    property: 'Checkbox',
    type: 'Required agreement',
    description:
      'Handles terms, security acknowledgment, or consent without hiding the requirement.',
  },
  {
    id: '3',
    property: 'Button',
    type: 'Primary / alternate action',
    description:
      'Supports account creation, sign-in fallback, and invite-aware branching.',
  },
  {
    id: '4',
    property: 'Alert',
    type: 'Form-level validation',
    description:
      'Surfaces errors that span multiple fields or block submission entirely.',
  },
];

const coreLayoutCode = `
import Button from '@/components/action/Button';
import Checkbox from '@/components/input/Checkbox';
import TextInput from '@/components/input/TextInput';

export function SignUpCard() {
  return (
    <>
      <TextInput label="Full name" placeholder="Jane Doe" />
      <TextInput label="Work email" placeholder="you@company.com" />
      <TextInput label="Password" type="password" placeholder="Create a password" />

      <Checkbox label="I agree to the Terms of Service and Security Policy" />

      <Button fullWidth color="primary">
        Create account
      </Button>
    </>
  );
}`.trim();

const validationCode = `
import Alert from '@/components/feedback/Alert';
import Checkbox from '@/components/input/Checkbox';
import TextInput from '@/components/input/TextInput';

export function SignUpValidation() {
  return (
    <>
      <Alert
        variant="danger"
        title="We need a few fixes before continuing"
        description="Check the highlighted fields and confirm the required agreement."
      />

      <TextInput
        label="Work email"
        error
        errorMsg="Use a company email you can verify."
      />

      <TextInput
        label="Password"
        type="password"
        error
        errorMsg="Use at least 8 characters with letters and numbers."
      />

      <Checkbox
        invalid
        label="I agree to the Terms of Service and Security Policy"
        errorMsg="You need to accept the required terms to continue."
      />
    </>
  );
}`.trim();

const inviteCode = `
import Button from '@/components/action/Button';

export function InviteAwareSignUp() {
  return (
    <div className="rounded-2xl border border-primary-200 bg-primary-50 p-4">
      <p>You're joining the Kevin Product workspace.</p>
      <Button variant="clear" color="primary" size="sm">
        Review invite details
      </Button>
    </div>
  );
}`.trim();

export default function PatternWebSignUpPage() {
  const [state, setState] = useState<'default' | 'invalid' | 'loading'>(
    'default',
  );
  const [flow, setFlow] = useState<'standard' | 'invite'>('standard');

  return (
    <PatternDocsPageShell
      platform="web"
      categoryId="auth"
      categoryLabel="Auth"
      patternId="sign-up"
      title="Sign Up"
      description="A web-first sign-up flow that balances account creation, password setup, required agreements, and invite context without making the form feel heavy."
    >
      <div className="w-full rounded-[28px] border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/70">
        <FlexWrapper direction="col" items="start" gap={4} classes="w-full">
          <Typography variant="H4">Controller</Typography>
          <Typography
            variant="B1"
            classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
          >
            Switch between the form state and whether the person is joining
            through a direct invite or the standard self-serve signup path.
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
        description="Signup needs a little more scaffolding than sign-in, but the path should still read top to bottom: identity, account credentials, agreement, then one clear submit action. Keep the sign-in fallback visible for returning users."
        example={
          <CodeExample code={coreLayoutCode} className="w-full">
            <WebSignUpPreview state={state} flow={flow} />
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Validation And Password Rules"
        description="People should understand what’s required before they fail, but inline guidance still needs to appear when the form blocks submission. Use field-level errors for specifics and a single top alert for summary context."
        example={
          <CodeExample code={validationCode} className="w-full">
            <WebSignUpPreview state="invalid" flow="standard" />
          </CodeExample>
        }
      />

      <PatternGuideSection
        title="Invite-Aware Onboarding"
        description="When someone arrives from an invite, explain what will happen next and what information is already known. That reassurance lowers hesitation and helps the signup form feel contextual rather than generic."
        example={
          <CodeExample code={inviteCode} className="w-full">
            <WebSignUpPreview state="default" flow="invite" />
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
            Ask only for information needed now, explain password expectations
            before failure, and make sign-in recovery obvious for people who
            landed on the wrong auth path.
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
