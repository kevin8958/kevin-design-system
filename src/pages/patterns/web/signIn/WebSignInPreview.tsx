'use client';

import Button from '@/components/action/Button';
import Alert from '@/components/feedback/Alert';
import Typography from '@/components/foundation/Typography';
import Checkbox from '@/components/input/Checkbox';
import TextInput from '@/components/input/TextInput';

type WebSignInPreviewProps = {
  state?: 'default' | 'invalid' | 'loading';
  showSocial?: boolean;
  showSupportNote?: boolean;
};

export default function WebSignInPreview({
  state = 'default',
  showSocial = false,
  showSupportNote = true,
}: WebSignInPreviewProps) {
  const isInvalid = state === 'invalid';
  const isLoading = state === 'loading';

  return (
    <div className="w-full max-w-[440px] rounded-[28px] border border-neutral-200 bg-white p-6 shadow-[0_24px_80px_-32px_rgba(17,24,39,0.35)] dark:border-neutral-800 dark:bg-neutral-950">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-primary-100 text-lg font-bold text-primary-700 dark:bg-primary-400/10 dark:text-primary-300">
            K
          </div>
          <div className="flex flex-col gap-1">
            <Typography variant="H3">Welcome back</Typography>
            <Typography
              variant="B1"
              classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
            >
              Sign in to continue to your workspace, recent drafts, and shared
              approvals.
            </Typography>
          </div>
        </div>

        {isInvalid ? (
          <Alert
            variant="danger"
            title="We couldn't sign you in"
            description="Check your email and password, then try again or use password recovery."
          />
        ) : null}

        <div className="flex flex-col gap-4">
          <div className={isInvalid ? 'pb-6' : ''}>
            <TextInput
              label="Work email"
              placeholder="you@company.com"
              inputProps={{ defaultValue: 'kevin@design.system' }}
              error={isInvalid}
              errorMsg="Use the email tied to your workspace."
            />
          </div>

          <div className={isInvalid ? 'pb-6' : ''}>
            <TextInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              inputProps={{ defaultValue: 'incorrect-password' }}
              error={isInvalid}
              errorMsg="Password must be at least 8 characters."
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <Checkbox checked label="Remember this device" size="sm" />
          <Button variant="clear" color="primary" size="sm">
            Forgot password
          </Button>
        </div>

        <Button fullWidth color="primary" loading={isLoading}>
          Sign in
        </Button>

        {showSocial ? (
          <>
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                or continue with
              </span>
              <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" color="neutral" fullWidth>
                Google
              </Button>
              <Button variant="outline" color="neutral" fullWidth>
                Apple
              </Button>
            </div>
          </>
        ) : null}

        <div className="rounded-2xl border border-dashed border-neutral-200 bg-neutral-50/80 p-4 dark:border-neutral-800 dark:bg-neutral-900/70">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Need a new account?
              </p>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                Invite-only workspaces keep account creation separate from sign
                in.
              </p>
            </div>
            <Button variant="outline" color="neutral" size="sm">
              Contact admin
            </Button>
          </div>
        </div>

        {showSupportNote ? (
          <p className="text-xs leading-5 text-neutral-500 dark:text-neutral-400">
            By continuing you agree to the workspace security policy and device
            monitoring notice.
          </p>
        ) : null}
      </div>
    </div>
  );
}
