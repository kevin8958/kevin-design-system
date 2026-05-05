'use client';

import Alert from '@/components/feedback/Alert';
import Avatar from '@/components/data/Avatar';
import Badge from '@/components/data/Badge';
import Tag from '@/components/data/Tag';
import Button from '@/components/action/Button';
import Switch from '@/components/input/Switch';
import type {
  NotificationsInboxPatternId,
  NotificationsInboxPreviewMode,
  NotificationsInboxPreviewState,
} from '@/pages/patterns/common/notificationsInboxPatternConfigs';

type WebNotificationsInboxPreviewProps = {
  patternId: NotificationsInboxPatternId;
  state?: NotificationsInboxPreviewState;
  mode?: NotificationsInboxPreviewMode;
};

const Surface = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full max-w-[720px] rounded-[32px] border border-neutral-200 bg-white p-7 shadow-[0_28px_100px_-36px_rgba(17,24,39,0.38)] dark:border-neutral-800 dark:bg-neutral-950">
    <div className="flex flex-col gap-5">{children}</div>
  </div>
);

const Hero = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col gap-3">
    <span className="inline-flex w-fit items-center rounded-full bg-secondary-100 px-3 py-1 text-xs font-semibold text-secondary-700 dark:bg-primary-400/10 dark:text-primary-300">
      {eyebrow}
    </span>
    <div className="flex flex-col gap-1">
      <h3 className="text-[26px] font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
        {title}
      </h3>
      <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-300">
        {description}
      </p>
    </div>
  </div>
);

const InfoCard = ({
  eyebrow,
  title,
  description,
  trailing,
}: {
  eyebrow: string;
  title: string;
  description: string;
  trailing?: React.ReactNode;
}) => (
  <div className="rounded-2xl border border-neutral-200 bg-neutral-50/80 p-4 dark:border-neutral-800 dark:bg-neutral-900/70">
    <div className="flex items-start justify-between gap-3">
      <div className="min-w-0">
        <p className="text-xs font-mono uppercase tracking-wide text-neutral-500">
          {eyebrow}
        </p>
        <p className="mt-2 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
          {title}
        </p>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>
      {trailing}
    </div>
  </div>
);

const QueueRow = ({
  name,
  detail,
  badgeLabel,
  badgeVariant,
}: {
  name: string;
  detail: string;
  badgeLabel: string;
  badgeVariant: Data.BadgeVariant;
}) => (
  <div className="flex items-center justify-between gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 dark:border-neutral-800 dark:bg-neutral-900">
    <div className="flex min-w-0 items-center gap-3">
      <Avatar name={name} size="sm" />
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-neutral-900 dark:text-neutral-100">
          {name}
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{detail}</p>
      </div>
    </div>
    <Badge label={badgeLabel} size="sm" variant={badgeVariant} />
  </div>
);

function NotificationCenterPreview({
  state,
  mode,
}: {
  state: NotificationsInboxPreviewState;
  mode: NotificationsInboxPreviewMode;
}) {
  const isAttention = state === 'attention';
  const guided = mode === 'guided';
  const isLoading = state === 'loading';

  return (
    <Surface>
      <Hero
        eyebrow="Notifications"
        title="Keep important updates readable"
        description="Group updates by relevance, highlight unread work, and keep bulk actions close to the list."
      />

      {isAttention ? (
        <Alert
          variant="warning"
          title="3 critical notifications are still unread"
          description="Review the overdue approval and billing alerts before they age out."
        />
      ) : null}

      <InfoCard
        eyebrow="Overview"
        title="3 unread updates"
        description="Mentions, approvals, and billing alerts still need attention."
        trailing={<Badge label="Unread" size="sm" variant="primary" />}
      />

      {guided ? (
        <div className="flex flex-wrap gap-2">
          <Tag label="Mentions" variant="primary" />
          <Tag label="Approvals" />
          <Tag label="Billing alerts" />
        </div>
      ) : null}

      <div className="space-y-3">
        <QueueRow
          name="Mina Park"
          detail="Mentioned you in the homepage review thread."
          badgeLabel="Mention"
          badgeVariant="primary"
        />
        <QueueRow
          name="System"
          detail="Monthly invoice failed to process."
          badgeLabel="Critical"
          badgeVariant="danger"
        />
      </div>

      <Button color="primary" fullWidth loading={isLoading}>
        Mark all read
      </Button>
    </Surface>
  );
}

function InboxTriagePreview({
  state,
  mode,
}: {
  state: NotificationsInboxPreviewState;
  mode: NotificationsInboxPreviewMode;
}) {
  const isAttention = state === 'attention';
  const guided = mode === 'guided';
  const isLoading = state === 'loading';

  return (
    <Surface>
      <Hero
        eyebrow="Inbox"
        title="Turn updates into actions"
        description="Frame the inbox as a decision queue with clear priorities, ownership, and next steps."
      />

      {isAttention ? (
        <Alert
          variant="warning"
          title="12 action items are overdue"
          description="Triage the oldest review and customer replies before they escalate."
        />
      ) : null}

      {guided ? (
        <div className="flex flex-wrap gap-2">
          <Tag label="Needs reply" variant="primary" />
          <Tag label="Today" />
          <Tag label="Assigned to me" />
        </div>
      ) : null}

      <div className="space-y-3">
        <QueueRow
          name="Dana Kim"
          detail="Needs a reply on the onboarding feedback thread."
          badgeLabel="Needs reply"
          badgeVariant="warning"
        />
        <QueueRow
          name="Jordan Lee"
          detail="Requested approval on the mobile nav update."
          badgeLabel="Needs review"
          badgeVariant="primary"
        />
      </div>

      <Button color="primary" fullWidth loading={isLoading}>
        Process queue
      </Button>
    </Surface>
  );
}

function DigestSettingsPreview({
  state,
  mode,
}: {
  state: NotificationsInboxPreviewState;
  mode: NotificationsInboxPreviewMode;
}) {
  const isAttention = state === 'attention';
  const guided = mode === 'guided';
  const isLoading = state === 'loading';

  return (
    <Surface>
      <Hero
        eyebrow="Delivery"
        title="Make notification rules predictable"
        description="Clarify cadence, quiet hours, and exceptions so people understand what they will receive and when."
      />

      {isAttention ? (
        <Alert
          variant="warning"
          title="Critical alerts can still bypass quiet hours"
          description="Billing failures and security alerts will notify you immediately."
        />
      ) : null}

      <div className="space-y-4">
        <Switch
          label="Daily summary"
          description="Receive a recap of comments, approvals, and mentions every morning."
          checked
          onChange={() => {}}
        />
        <Switch
          label="Weekly product updates"
          description="Get feature release notes and workspace highlights on Fridays."
          checked={false}
          onChange={() => {}}
        />
      </div>

      {guided ? (
        <div className="flex flex-wrap gap-2">
          <Tag label="Daily digest" variant="primary" />
          <Tag label="Quiet hours 10PM-7AM" />
          <Tag label="Urgent alerts bypass" />
        </div>
      ) : null}

      <Button color="primary" fullWidth loading={isLoading}>
        Save preferences
      </Button>
    </Surface>
  );
}

function AlertEscalationPreview({
  state,
  mode,
}: {
  state: NotificationsInboxPreviewState;
  mode: NotificationsInboxPreviewMode;
}) {
  const isAttention = state === 'attention';
  const guided = mode === 'guided';
  const isLoading = state === 'loading';

  return (
    <Surface>
      <Hero
        eyebrow="Escalation"
        title="Route urgent alerts decisively"
        description="Show current ownership, backup paths, and the next action when a responder has not acknowledged in time."
      />

      {isAttention ? (
        <Alert
          variant="danger"
          title="Primary on-call did not acknowledge"
          description="Escalate this incident to the backup engineer and notify the operations lead."
        />
      ) : null}

      <InfoCard
        eyebrow="Current incident"
        title="Payment API failure"
        description="No acknowledgment after 10 minutes. Backup routing is ready."
        trailing={<Badge label="Awaiting ack" size="sm" variant="warning" />}
      />

      {guided ? (
        <div className="flex flex-wrap gap-2">
          <Tag label="Pager first" variant="primary" />
          <Tag label="SMS backup" />
          <Tag label="Escalates after 10 min" />
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <Button color="primary" fullWidth loading={isLoading}>
          Escalate now
        </Button>
        <Button color="neutral" fullWidth>
          Reassign owner
        </Button>
      </div>
    </Surface>
  );
}

export default function WebNotificationsInboxPreview({
  patternId,
  state = 'default',
  mode = 'standard',
}: WebNotificationsInboxPreviewProps) {
  switch (patternId) {
    case 'notification-center':
      return <NotificationCenterPreview state={state} mode={mode} />;
    case 'inbox-triage':
      return <InboxTriagePreview state={state} mode={mode} />;
    case 'digest-settings':
      return <DigestSettingsPreview state={state} mode={mode} />;
    case 'alert-escalation':
      return <AlertEscalationPreview state={state} mode={mode} />;
    default:
      return null;
  }
}
