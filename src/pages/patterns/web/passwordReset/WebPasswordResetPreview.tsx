'use client';

import Button from '@/components/action/Button';
import EmptyState from '@/components/data/EmptyState';
import Alert from '@/components/feedback/Alert';
import Typography from '@/components/foundation/Typography';
import TextInput from '@/components/input/TextInput';

type WebPasswordResetPreviewProps = {
  step?: 'request' | 'reset' | 'success';
  state?: 'default' | 'invalid' | 'loading';
};

export default function WebPasswordResetPreview({
  step = 'request',
  state = 'default',
}: WebPasswordResetPreviewProps) {
  const isInvalid = state === 'invalid';
  const isLoading = state === 'loading';

  if (step === 'success') {
    return (
      <div className="w-full max-w-[560px] rounded-[32px] border border-neutral-200 bg-white p-7 shadow-[0_28px_100px_-36px_rgba(17,24,39,0.38)] dark:border-neutral-800 dark:bg-neutral-950">
        <EmptyState
          title="Password updated"
          description="Your password has been changed successfully. You can head back to sign in with your new credentials."
          primaryAction={
            <Button color="primary" fullWidth>
              Back to sign in
            </Button>
          }
          secondaryAction={
            <Button variant="outline" color="neutral">
              Open inbox
            </Button>
          }
        />
      </div>
    );
  }

  return (
    <div className="w-full max-w-[560px] rounded-[32px] border border-neutral-200 bg-white p-7 shadow-[0_28px_100px_-36px_rgba(17,24,39,0.38)] dark:border-neutral-800 dark:bg-neutral-950">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-primary-100 text-lg font-bold text-primary-700 dark:bg-primary-400/10 dark:text-primary-300">
            K
          </div>
          <div className="flex flex-col gap-1">
            <Typography variant="H3">
              {step === 'request'
                ? 'Reset your password'
                : 'Create a new password'}
            </Typography>
            <Typography
              variant="B1"
              classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
            >
              {step === 'request'
                ? 'Enter the email tied to your workspace and we’ll send a verification code to continue.'
                : 'Enter the verification code we sent, then choose a secure new password.'}
            </Typography>
          </div>
        </div>

        {step === 'reset' ? (
          <div className="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-400/20 dark:bg-primary-400/10">
            <p className="text-sm font-semibold text-primary-700 dark:text-primary-300">
              Code sent to kevin@design.system
            </p>
            <p className="mt-1 text-sm text-primary-700/80 dark:text-primary-200/80">
              Use the 6-digit code from your inbox. Codes expire after 10
              minutes.
            </p>
          </div>
        ) : null}

        {isInvalid ? (
          <Alert
            variant="danger"
            title={
              step === 'request'
                ? "We couldn't find that account"
                : 'Check the verification code and password fields'
            }
            description={
              step === 'request'
                ? 'Use the same email you sign in with, or contact your workspace admin.'
                : 'Verification codes expire quickly, and the new password still needs to meet the policy.'
            }
          />
        ) : null}

        {step === 'request' ? (
          <div className={isInvalid ? 'pb-6' : ''}>
            <TextInput
              label="Work email"
              placeholder="you@company.com"
              inputProps={{ defaultValue: 'kevin@design.system' }}
              error={isInvalid}
              errorMsg="Use the email tied to your workspace."
            />
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className={isInvalid ? 'pb-6' : ''}>
              <TextInput
                label="Verification code"
                placeholder="123456"
                inputProps={{ defaultValue: '103592' }}
                error={isInvalid}
                errorMsg="Enter the latest 6-digit code from your inbox."
              />
            </div>

            <div className={isInvalid ? 'pb-6' : ''}>
              <TextInput
                label="New password"
                type="password"
                placeholder="Create a new password"
                inputProps={{ defaultValue: 'short' }}
                error={isInvalid}
                errorMsg="Use at least 8 characters with letters and numbers."
              />
            </div>

            <div className={isInvalid ? 'pb-6' : ''}>
              <TextInput
                label="Confirm password"
                type="password"
                placeholder="Repeat your new password"
                inputProps={{ defaultValue: 'shorter' }}
                error={isInvalid}
                errorMsg="Passwords must match."
              />
            </div>
          </div>
        )}

        <div className="rounded-2xl border border-dashed border-neutral-200 bg-neutral-50/80 p-4 dark:border-neutral-800 dark:bg-neutral-900/70">
          <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            Recovery note
          </p>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            If you don’t receive the code, check your spam folder or ask your
            admin whether email delivery is restricted.
          </p>
        </div>

        <Button fullWidth color="primary" loading={isLoading}>
          {step === 'request' ? 'Send reset code' : 'Save new password'}
        </Button>

        <div className="flex items-center justify-between gap-3">
          <Button variant="clear" color="primary" size="sm">
            Back to sign in
          </Button>
          {step === 'reset' ? (
            <Button variant="outline" color="neutral" size="sm">
              Resend code
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
