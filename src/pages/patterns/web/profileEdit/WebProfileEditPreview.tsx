'use client';

import Button from '@/components/action/Button';
import Alert from '@/components/feedback/Alert';
import Typography from '@/components/foundation/Typography';
import Select from '@/components/input/Select';
import Textarea from '@/components/input/Textarea';
import TextInput from '@/components/input/TextInput';

type WebProfileEditPreviewProps = {
  state?: 'default' | 'invalid' | 'loading';
  saveBar?: 'sticky' | 'inline';
};

const timezoneOptions = [
  { label: 'Pacific Time (UTC-8)', value: 'pt' },
  { label: 'Eastern Time (UTC-5)', value: 'et' },
  { label: 'Central European Time (UTC+1)', value: 'cet' },
];

export default function WebProfileEditPreview({
  state = 'default',
  saveBar = 'sticky',
}: WebProfileEditPreviewProps) {
  const isInvalid = state === 'invalid';
  const isLoading = state === 'loading';

  return (
    <div className="w-full max-w-[680px] rounded-[32px] border border-neutral-200 bg-white p-7 shadow-[0_28px_100px_-36px_rgba(17,24,39,0.38)] dark:border-neutral-800 dark:bg-neutral-950">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex size-16 items-center justify-center rounded-[22px] bg-primary-100 text-xl font-bold text-primary-700 dark:bg-primary-400/10 dark:text-primary-300">
              K
            </div>
            <div className="flex flex-col gap-1">
              <Typography variant="H3">Edit profile</Typography>
              <Typography
                variant="B1"
                classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
              >
                Keep identity, contact, and workspace preferences easy to scan
                before the save action.
              </Typography>
            </div>
          </div>

          <Button variant="outline" color="neutral" size="sm">
            View public profile
          </Button>
        </div>

        <div className="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-400/20 dark:bg-primary-400/10">
          <p className="text-sm font-semibold text-primary-700 dark:text-primary-300">
            Profile changes sync across your workspace
          </p>
          <p className="mt-1 text-sm text-primary-700/80 dark:text-primary-200/80">
            Update personal details here, then save once when every field is
            ready.
          </p>
        </div>

        {isInvalid ? (
          <Alert
            variant="danger"
            title="A few fields still need attention"
            description="Resolve the highlighted items before saving your profile changes."
          />
        ) : null}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <TextInput
            label="Full name"
            placeholder="Jane Doe"
            inputProps={{ defaultValue: 'Kevin Kim' }}
          />
          <TextInput
            label="Role"
            placeholder="Product Designer"
            inputProps={{ defaultValue: 'Design Systems Lead' }}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className={isInvalid ? 'pb-6' : ''}>
            <TextInput
              label="Work email"
              placeholder="you@company.com"
              inputProps={{ defaultValue: 'kevin@design.system' }}
              error={isInvalid}
              errorMsg="Use the verified email tied to your workspace."
            />
          </div>
          <Select
            label="Timezone"
            options={timezoneOptions}
            value="pt"
            invalid={isInvalid}
            errorMsg="Choose the timezone used for notifications and meeting times."
          />
        </div>

        <div className={isInvalid ? 'pb-6' : ''}>
          <Textarea
            label="Short bio"
            placeholder="Write a short profile summary"
            textareaProps={{
              defaultValue:
                'Design systems lead focused on accessibility, documentation, and cross-platform product quality.',
            }}
            error={isInvalid}
            errorMsg="Keep the summary concise and suitable for workspace discovery."
          />
        </div>

        <div className="rounded-2xl border border-dashed border-neutral-200 bg-neutral-50/80 p-4 dark:border-neutral-800 dark:bg-neutral-900/70">
          <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            Security note
          </p>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            Email updates require reverification before the new address appears
            in invites and billing notices.
          </p>
        </div>

        {saveBar === 'sticky' ? (
          <div className="-mx-7 mt-2 flex flex-col gap-3 border-t border-neutral-200 bg-white/95 px-7 pt-4 dark:border-neutral-800 dark:bg-neutral-950/95 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Unsaved changes
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Keep the primary action visible while longer forms scroll.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="clear" color="neutral" size="sm">
                Discard
              </Button>
              <Button color="primary" loading={isLoading}>
                Save changes
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-end">
            <Button variant="clear" color="neutral" size="sm">
              Cancel
            </Button>
            <Button color="primary" loading={isLoading}>
              Save changes
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
