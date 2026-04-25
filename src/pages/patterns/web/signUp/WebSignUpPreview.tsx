'use client';

import Button from '@/components/action/Button';
import Alert from '@/components/feedback/Alert';
import Typography from '@/components/foundation/Typography';
import Checkbox from '@/components/input/Checkbox';
import TextInput from '@/components/input/TextInput';

type WebSignUpPreviewProps = {
  state?: 'default' | 'invalid' | 'loading';
  flow?: 'standard' | 'invite';
};

export default function WebSignUpPreview({
  state = 'default',
  flow = 'standard',
}: WebSignUpPreviewProps) {
  const isInvalid = state === 'invalid';
  const isLoading = state === 'loading';

  return (
    <div className="w-full max-w-[560px] rounded-[32px] border border-neutral-200 bg-white p-7 shadow-[0_28px_100px_-36px_rgba(17,24,39,0.38)] dark:border-neutral-800 dark:bg-neutral-950">
      <div className="flex flex-col gap-5">
        {flow === 'invite' ? (
          <div className="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-400/20 dark:bg-primary-400/10">
            <p className="text-sm font-semibold text-primary-700 dark:text-primary-300">
              Invitation detected
            </p>
            <p className="mt-1 text-sm text-primary-700/80 dark:text-primary-200/80">
              You&apos;re joining the Kevin Product workspace. We&apos;ll prefill
              your company details after account creation.
            </p>
          </div>
        ) : null}

        <div className="flex flex-col gap-3">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-primary-100 text-lg font-bold text-primary-700 dark:bg-primary-400/10 dark:text-primary-300">
            K
          </div>
          <div className="flex flex-col gap-1">
            <Typography variant="H3">Create your account</Typography>
            <Typography
              variant="B1"
              classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
            >
              Set up your profile, secure your workspace access, and start with
              the projects already shared with you.
            </Typography>
          </div>
        </div>

        {isInvalid ? (
          <Alert
            variant="danger"
            title="We need a few fixes before continuing"
            description="Check the highlighted fields and confirm the required agreement to finish creating your account."
          />
        ) : null}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <TextInput
            label="Full name"
            placeholder="Jane Doe"
            inputProps={{ defaultValue: 'Kevin Kim' }}
          />
          <TextInput
            label="Team name"
            placeholder="Design Ops"
            inputProps={{ defaultValue: 'Kevin Product' }}
          />
        </div>

        <div className={isInvalid ? 'pb-6' : ''}>
          <TextInput
            label="Work email"
            placeholder="you@company.com"
            inputProps={{ defaultValue: 'kevin@design.system' }}
            error={isInvalid}
            errorMsg="Use a company email you can verify."
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className={isInvalid ? 'pb-6' : ''}>
            <TextInput
              label="Password"
              type="password"
              placeholder="Create a password"
              inputProps={{ defaultValue: 'short' }}
              error={isInvalid}
              errorMsg="Use at least 8 characters with letters and numbers."
            />
          </div>
          <div className={isInvalid ? 'pb-6' : ''}>
            <TextInput
              label="Confirm password"
              type="password"
              placeholder="Repeat your password"
              inputProps={{ defaultValue: 'shorter' }}
              error={isInvalid}
              errorMsg="Passwords must match."
            />
          </div>
        </div>

        <div className="rounded-2xl border border-dashed border-neutral-200 bg-neutral-50/80 p-4 dark:border-neutral-800 dark:bg-neutral-900/70">
          <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            Password checklist
          </p>
          <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
            <li>At least 8 characters</li>
            <li>Includes one number</li>
            <li>Avoids common or reused passwords</li>
          </ul>
        </div>

        <div className={isInvalid ? 'pb-6' : ''}>
          <Checkbox
            checked={!isInvalid}
            label="I agree to the Terms of Service and Security Policy"
            invalid={isInvalid}
            errorMsg="You need to accept the required terms to continue."
          />
        </div>

        <Button fullWidth color="primary" loading={isLoading}>
          Create account
        </Button>

        <div className="flex items-center justify-between gap-3">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Already have an account?
          </p>
          <Button variant="clear" color="primary" size="sm">
            Sign in
          </Button>
        </div>

        <p className="text-xs leading-5 text-neutral-500 dark:text-neutral-400">
          We&apos;ll send a verification email after signup so you can confirm
          ownership before joining the workspace.
        </p>
      </div>
    </div>
  );
}
