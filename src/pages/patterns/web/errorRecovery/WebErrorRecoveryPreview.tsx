'use client';

import Button from '@/components/action/Button';
import Alert from '@/components/feedback/Alert';
import Typography from '@/components/foundation/Typography';
import DescriptionList from '@/components/data/DescriptionList';

type WebErrorRecoveryPreviewProps = {
  issue?: 'network' | 'permission';
  actions?: 'retry' | 'support';
};

export default function WebErrorRecoveryPreview({
  issue = 'network',
  actions = 'retry',
}: WebErrorRecoveryPreviewProps) {
  const isNetwork = issue === 'network';

  return (
    <div className="w-full max-w-[760px] rounded-[32px] border border-neutral-200 bg-white p-7 shadow-[0_28px_100px_-36px_rgba(17,24,39,0.38)] dark:border-neutral-800 dark:bg-neutral-950">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <Typography variant="H3">
            {isNetwork ? 'Workspace analytics' : 'Restricted project panel'}
          </Typography>
          <Typography
            variant="B1"
            classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
          >
            Keep failure context, likely cause, and next steps close together so
            the page does not feel abandoned.
          </Typography>
        </div>

        <Alert
          variant="danger"
          title={
            isNetwork
              ? 'We could not refresh this data right now'
              : 'You no longer have access to this workspace'
          }
          description={
            isNetwork
              ? 'The request timed out before the latest analytics could load. You can retry now or come back in a moment.'
              : 'Your current role cannot view this project surface. Ask an admin for access or return to a workspace you still manage.'
          }
        />

        <DescriptionList
          columns={2}
          items={[
            {
              label: 'Status',
              value: isNetwork ? 'Timed out' : 'Permission removed',
              hint: isNetwork ? 'Last successful sync 12m ago' : 'Role changed 3m ago',
            },
            {
              label: 'Next best step',
              value: isNetwork ? 'Retry request' : 'Request access',
              hint: isNetwork
                ? 'Keeps the current page intact'
                : 'Returns the user to an actionable path',
            },
          ]}
        />

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-neutral-500 dark:text-neutral-400">
            {isNetwork
              ? 'Preserve page context so the user can retry without losing their place.'
              : 'Offer a safe exit when the user cannot recover directly from the current page.'}
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" color="neutral">
              Back to overview
            </Button>
            <Button color="primary">
              {actions === 'retry'
                ? 'Retry now'
                : isNetwork
                  ? 'Contact support'
                  : 'Request access'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
