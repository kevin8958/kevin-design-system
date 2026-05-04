'use client';

import AppAlert from '@/components/app/AppAlert';
import AppAvatar from '@/components/app/AppAvatar';
import AppBadge from '@/components/app/AppBadge';
import AppButton from '@/components/app/AppButton';
import AppTag from '@/components/app/AppTag';
import AppTextInput from '@/components/app/AppTextInput';
import { StyleSheet, Text, View } from 'react-native';
import type {
  CollaborationPatternId,
  CollaborationPreviewMode,
  CollaborationPreviewState,
} from '@/pages/patterns/common/collaborationPatternConfigs';

type AppCollaborationPreviewProps = {
  patternId: CollaborationPatternId;
  state?: CollaborationPreviewState;
  mode?: CollaborationPreviewMode;
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

const PersonRow = ({
  name,
  role,
  badgeLabel,
  badgeVariant,
}: {
  name: string;
  role: string;
  badgeLabel: string;
  badgeVariant: App.BadgeProps['variant'];
}) => (
  <View style={styles.rowCard}>
    <View style={styles.memberIdentity}>
      <AppAvatar name={name} size="sm" />
      <View style={styles.rowBody}>
        <Text style={styles.rowLabel}>{name}</Text>
        <Text style={styles.rowDetail}>{role}</Text>
      </View>
    </View>
    <AppBadge label={badgeLabel} size="sm" variant={badgeVariant} />
  </View>
);

function CommentsPreview({
  state,
  mode,
}: {
  state: CollaborationPreviewState;
  mode: CollaborationPreviewMode;
}) {
  const isAttention = state === 'attention';
  const guided = mode === 'guided';
  const isLoading = state === 'loading';

  return (
    <View style={styles.screen}>
      <Hero
        eyebrow="Collaboration"
        title="Discuss changes in context"
        description="Keep artifact context, conversation state, and reply actions visible without leaving the current workflow."
      />

      {isAttention ? (
        <AppAlert
          variant="warning"
          title="This thread is blocking launch"
          description="Resolve the header spacing issue before the onboarding refresh can be published."
        />
      ) : null}

      <Card>
        <View style={styles.rowBody}>
          <Text style={styles.cardEyebrow}>Open thread</Text>
          <Text style={styles.cardTitle}>Header spacing on mobile</Text>
          <Text style={styles.cardDescription}>
            Mina Park asked for one more spacing pass before final approval.
          </Text>
        </View>
        <View style={styles.cardBadge}>
          <AppBadge label="2 replies" size="sm" variant="primary" />
        </View>
      </Card>

      {guided ? (
        <View style={styles.tagRow}>
          <AppTag label="Open thread" size="sm" variant="primary" />
          <AppTag label="Assigned to design" size="sm" />
          <AppTag label="Blocks approval" size="sm" />
        </View>
      ) : null}

      <View style={styles.stack}>
        <PersonRow
          name="Mina Park"
          role="Requested tighter spacing above the hero button."
          badgeLabel="Author"
          badgeVariant="neutral"
        />
        <PersonRow
          name="Jordan Lee"
          role="Drafted a fix and asked for design confirmation."
          badgeLabel="Waiting"
          badgeVariant="warning"
        />
      </View>

      <AppButton
        fullWidth
        color="primary"
        loading={isLoading}
        label="Reply to thread"
      />
    </View>
  );
}

function ApprovalsPreview({
  state,
  mode,
}: {
  state: CollaborationPreviewState;
  mode: CollaborationPreviewMode;
}) {
  const isAttention = state === 'attention';
  const guided = mode === 'guided';
  const isLoading = state === 'loading';

  return (
    <View style={styles.screen}>
      <Hero
        eyebrow="Review"
        title="Request sign-off with clear criteria"
        description="Show what is being reviewed, who still needs to weigh in, and what conditions must be met before approval."
      />

      {isAttention ? (
        <AppAlert
          variant="danger"
          title="Legal sign-off is still missing"
          description="Do not approve this campaign until the legal review is completed."
        />
      ) : null}

      <Card>
        <View style={styles.rowBody}>
          <Text style={styles.cardEyebrow}>Awaiting decision</Text>
          <Text style={styles.cardTitle}>Spring launch email</Text>
          <Text style={styles.cardDescription}>
            Content review is complete, but legal and QA still need to confirm the final copy.
          </Text>
        </View>
        <View style={styles.cardBadge}>
          <AppBadge label="Waiting" size="sm" variant="warning" />
        </View>
      </Card>

      {guided ? (
        <View style={styles.tagRow}>
          <AppTag label="Content approved" size="sm" variant="primary" />
          <AppTag label="Legal reviewed" size="sm" />
          <AppTag label="QA passed" size="sm" />
        </View>
      ) : null}

      <View style={styles.stackSm}>
        <AppButton
          fullWidth
          color="primary"
          loading={isLoading}
          label="Approve request"
        />
        <AppButton
          fullWidth
          color="neutral"
          variant="outline"
          label="Request changes"
        />
      </View>
    </View>
  );
}

function SharingPreview({
  state,
  mode,
}: {
  state: CollaborationPreviewState;
  mode: CollaborationPreviewMode;
}) {
  const isAttention = state === 'attention';
  const guided = mode === 'guided';
  const isLoading = state === 'loading';

  return (
    <View style={styles.screen}>
      <Hero
        eyebrow="Sharing"
        title="Invite people with the right access"
        description="Keep recipients, link scope, and access rules visible so the sharing decision feels safe."
      />

      {isAttention ? (
        <AppAlert
          variant="warning"
          title="Anyone with the link can view this draft"
          description="Switch back to workspace-only access if this file should stay internal."
        />
      ) : null}

      <AppTextInput label="Invite people" placeholder="name@company.com" />

      {guided ? (
        <View style={styles.tagRow}>
          <AppTag label="Workspace only" size="sm" variant="primary" />
          <AppTag label="Comment access" size="sm" />
          <AppTag label="Expires in 7 days" size="sm" />
        </View>
      ) : null}

      <View style={styles.stack}>
        <PersonRow
          name="Dana Kim"
          role="Can edit"
          badgeLabel="Editor"
          badgeVariant="primary"
        />
        <PersonRow
          name="Bob Smith"
          role="Can comment"
          badgeLabel="Comment"
          badgeVariant="neutral"
        />
      </View>

      <AppButton
        fullWidth
        color="primary"
        loading={isLoading}
        label="Send invite"
      />
    </View>
  );
}

function MentionsPreview({
  state,
  mode,
}: {
  state: CollaborationPreviewState;
  mode: CollaborationPreviewMode;
}) {
  const isAttention = state === 'attention';
  const guided = mode === 'guided';
  const isLoading = state === 'loading';

  return (
    <View style={styles.screen}>
      <Hero
        eyebrow="Mentions"
        title="Notify the right teammate without breaking the writing flow"
        description="Keep suggestions understandable and show the notification consequence before sending."
      />

      {isAttention ? (
        <AppAlert
          variant="warning"
          title="Mentioning @everyone will notify 42 people"
          description="Use a narrower group if the update only needs design and QA input."
        />
      ) : null}

      <AppTextInput
        label="Comment"
        defaultValue="Can @Jordan Lee confirm the mobile header spacing?"
        placeholder="Type @ to notify the right teammate"
      />

      {guided ? (
        <View style={styles.tagRow}>
          <AppTag label="Recent editor" size="sm" variant="primary" />
          <AppTag label="Assigned reviewer" size="sm" />
          <AppTag label="Workspace owner" size="sm" />
        </View>
      ) : null}

      <View style={styles.stack}>
        <PersonRow
          name="Jordan Lee"
          role="Edited this screen 2 hours ago"
          badgeLabel="Suggested"
          badgeVariant="primary"
        />
        <PersonRow
          name="Mina Park"
          role="Assigned reviewer for this flow"
          badgeLabel="Suggested"
          badgeVariant="neutral"
        />
      </View>

      <AppButton
        fullWidth
        color="primary"
        loading={isLoading}
        label="Post comment"
      />
    </View>
  );
}

function ActivityFlowsPreview({
  state,
  mode,
}: {
  state: CollaborationPreviewState;
  mode: CollaborationPreviewMode;
}) {
  const isAttention = state === 'attention';
  const guided = mode === 'guided';
  const isLoading = state === 'loading';

  return (
    <View style={styles.screen}>
      <Hero
        eyebrow="Activity"
        title="Track collaboration history clearly"
        description="Make chronology, actor, and next follow-up action obvious so the feed can be trusted."
      />

      {isAttention ? (
        <AppAlert
          variant="warning"
          title="Some events are delayed"
          description="Refresh the feed to see the latest comments and approvals from the last few minutes."
        />
      ) : null}

      {guided ? (
        <View style={styles.tagRow}>
          <AppTag label="Approvals" size="sm" variant="primary" />
          <AppTag label="Mentions" size="sm" />
          <AppTag label="Comments" size="sm" />
        </View>
      ) : null}

      <View style={styles.stack}>
        <PersonRow
          name="Jordan Lee"
          role="Approved the launch brief for Spring campaign."
          badgeLabel="Approved"
          badgeVariant="success"
        />
        <PersonRow
          name="Dana Kim"
          role="Mentioned design in the onboarding feedback thread."
          badgeLabel="Mention"
          badgeVariant="neutral"
        />
      </View>

      <AppButton
        fullWidth
        color="primary"
        loading={isLoading}
        label="Refresh activity"
      />
    </View>
  );
}

export default function AppCollaborationPreview({
  patternId,
  state = 'default',
  mode = 'standard',
}: AppCollaborationPreviewProps) {
  switch (patternId) {
    case 'comments':
      return <CommentsPreview state={state} mode={mode} />;
    case 'approvals':
      return <ApprovalsPreview state={state} mode={mode} />;
    case 'sharing':
      return <SharingPreview state={state} mode={mode} />;
    case 'mentions':
      return <MentionsPreview state={state} mode={mode} />;
    case 'activity-flows':
      return <ActivityFlowsPreview state={state} mode={mode} />;
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
