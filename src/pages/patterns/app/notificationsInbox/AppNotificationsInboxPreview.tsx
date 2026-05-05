'use client';

import AppAlert from '@/components/app/AppAlert';
import AppAvatar from '@/components/app/AppAvatar';
import AppBadge from '@/components/app/AppBadge';
import AppButton from '@/components/app/AppButton';
import AppSwitch from '@/components/app/AppSwitch';
import AppTag from '@/components/app/AppTag';
import { StyleSheet, Text, View } from 'react-native';
import type {
  NotificationsInboxPatternId,
  NotificationsInboxPreviewMode,
  NotificationsInboxPreviewState,
} from '@/pages/patterns/common/notificationsInboxPatternConfigs';

type AppNotificationsInboxPreviewProps = {
  patternId: NotificationsInboxPatternId;
  state?: NotificationsInboxPreviewState;
  mode?: NotificationsInboxPreviewMode;
};

const Hero = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) => (
  <View style={styles.hero}>
    <View style={styles.eyebrowChip}>
      <Text style={styles.eyebrowText}>{eyebrow}</Text>
    </View>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.card}>{children}</View>
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
  badgeVariant: App.BadgeProps['variant'];
}) => (
  <View style={styles.rowCard}>
    <View style={styles.memberIdentity}>
      <AppAvatar name={name} size="sm" />
      <View style={styles.rowBody}>
        <Text style={styles.rowLabel}>{name}</Text>
        <Text style={styles.rowDetail}>{detail}</Text>
      </View>
    </View>
    <AppBadge label={badgeLabel} size="sm" variant={badgeVariant} />
  </View>
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
    <View style={styles.screen}>
      <Hero
        eyebrow="Notifications"
        title="Keep important updates readable"
        description="Group updates by relevance, highlight unread work, and keep bulk actions close to the list."
      />

      {isAttention ? (
        <AppAlert
          variant="warning"
          title="3 critical notifications are still unread"
          description="Review the overdue approval and billing alerts before they age out."
        />
      ) : null}

      <Card>
        <View style={styles.rowBody}>
          <Text style={styles.cardEyebrow}>Overview</Text>
          <Text style={styles.cardTitle}>3 unread updates</Text>
          <Text style={styles.cardDescription}>
            Mentions, approvals, and billing alerts still need attention.
          </Text>
        </View>
        <View style={styles.cardBadge}>
          <AppBadge label="Unread" size="sm" variant="primary" />
        </View>
      </Card>

      {guided ? (
        <View style={styles.tagRow}>
          <AppTag label="Mentions" size="sm" variant="primary" />
          <AppTag label="Approvals" size="sm" />
          <AppTag label="Billing alerts" size="sm" />
        </View>
      ) : null}

      <View style={styles.stack}>
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
      </View>

      <AppButton
        fullWidth
        color="primary"
        loading={isLoading}
        label="Mark all read"
      />
    </View>
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
    <View style={styles.screen}>
      <Hero
        eyebrow="Inbox"
        title="Turn updates into actions"
        description="Frame the inbox as a decision queue with clear priorities, ownership, and next steps."
      />

      {isAttention ? (
        <AppAlert
          variant="warning"
          title="12 action items are overdue"
          description="Triage the oldest review and customer replies before they escalate."
        />
      ) : null}

      {guided ? (
        <View style={styles.tagRow}>
          <AppTag label="Needs reply" size="sm" variant="primary" />
          <AppTag label="Today" size="sm" />
          <AppTag label="Assigned to me" size="sm" />
        </View>
      ) : null}

      <View style={styles.stack}>
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
      </View>

      <AppButton
        fullWidth
        color="primary"
        loading={isLoading}
        label="Process queue"
      />
    </View>
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
    <View style={styles.screen}>
      <Hero
        eyebrow="Delivery"
        title="Make notification rules predictable"
        description="Clarify cadence, quiet hours, and exceptions so people understand what they will receive and when."
      />

      {isAttention ? (
        <AppAlert
          variant="warning"
          title="Critical alerts can still bypass quiet hours"
          description="Billing failures and security alerts will notify you immediately."
        />
      ) : null}

      <View style={styles.stack}>
        <AppSwitch
          label="Daily summary"
          description="Receive a recap of comments, approvals, and mentions every morning."
          defaultChecked
        />
        <AppSwitch
          label="Weekly product updates"
          description="Get feature release notes and workspace highlights on Fridays."
        />
      </View>

      {guided ? (
        <View style={styles.tagRow}>
          <AppTag label="Daily digest" size="sm" variant="primary" />
          <AppTag label="Quiet hours 10PM-7AM" size="sm" />
          <AppTag label="Urgent alerts bypass" size="sm" />
        </View>
      ) : null}

      <AppButton
        fullWidth
        color="primary"
        loading={isLoading}
        label="Save preferences"
      />
    </View>
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
    <View style={styles.screen}>
      <Hero
        eyebrow="Escalation"
        title="Route urgent alerts decisively"
        description="Show current ownership, backup paths, and the next action when a responder has not acknowledged in time."
      />

      {isAttention ? (
        <AppAlert
          variant="danger"
          title="Primary on-call did not acknowledge"
          description="Escalate this incident to the backup engineer and notify the operations lead."
        />
      ) : null}

      <Card>
        <View style={styles.rowBody}>
          <Text style={styles.cardEyebrow}>Current incident</Text>
          <Text style={styles.cardTitle}>Payment API failure</Text>
          <Text style={styles.cardDescription}>
            No acknowledgment after 10 minutes. Backup routing is ready.
          </Text>
        </View>
        <View style={styles.cardBadge}>
          <AppBadge label="Awaiting ack" size="sm" variant="warning" />
        </View>
      </Card>

      {guided ? (
        <View style={styles.tagRow}>
          <AppTag label="Pager first" size="sm" variant="primary" />
          <AppTag label="SMS backup" size="sm" />
          <AppTag label="Escalates after 10 min" size="sm" />
        </View>
      ) : null}

      <View style={styles.stackSm}>
        <AppButton
          fullWidth
          color="primary"
          loading={isLoading}
          label="Escalate now"
        />
        <AppButton
          fullWidth
          color="neutral"
          variant="outline"
          label="Reassign owner"
        />
      </View>
    </View>
  );
}

export default function AppNotificationsInboxPreview({
  patternId,
  state = 'default',
  mode = 'standard',
}: AppNotificationsInboxPreviewProps) {
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

const styles = StyleSheet.create({
  screen: {
    gap: 14,
  },
  hero: {
    gap: 8,
  },
  eyebrowChip: {
    alignSelf: 'flex-start',
    borderRadius: 999,
    backgroundColor: 'rgba(37, 99, 235, 0.12)',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  eyebrowText: {
    color: '#1d4ed8',
    fontSize: 12,
    fontWeight: '700',
  },
  title: {
    color: '#111827',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 30,
  },
  description: {
    color: '#4b5563',
    fontSize: 14,
    lineHeight: 21,
  },
  card: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 24,
    backgroundColor: '#ffffff',
    gap: 10,
    padding: 16,
  },
  rowCard: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#e5e7eb',
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  memberIdentity: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    gap: 12,
  },
  rowBody: {
    flex: 1,
    gap: 4,
  },
  rowLabel: {
    color: '#111827',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
  },
  rowDetail: {
    color: '#6b7280',
    fontSize: 13,
    lineHeight: 19,
  },
  stack: {
    gap: 12,
  },
  stackSm: {
    gap: 10,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  cardEyebrow: {
    color: '#6b7280',
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  cardTitle: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22,
  },
  cardDescription: {
    color: '#6b7280',
    fontSize: 13,
    lineHeight: 19,
  },
  cardBadge: {
    alignSelf: 'flex-start',
  },
});
