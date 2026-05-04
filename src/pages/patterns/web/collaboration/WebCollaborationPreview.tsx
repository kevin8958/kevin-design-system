'use client';

import Alert from '@/components/feedback/Alert';
import Avatar from '@/components/data/Avatar';
import Badge from '@/components/data/Badge';
import Tag from '@/components/data/Tag';
import Button from '@/components/action/Button';
import TextInput from '@/components/input/TextInput';
import type {
  CollaborationPatternId,
  CollaborationPreviewMode,
  CollaborationPreviewState,
} from '@/pages/patterns/common/collaborationPatternConfigs';

type WebCollaborationPreviewProps = {
  patternId: CollaborationPatternId;
  state?: CollaborationPreviewState;
  mode?: CollaborationPreviewMode;
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

const PersonRow = ({
  name,
  role,
  badgeLabel,
  badgeVariant,
}: {
  name: string;
  role: string;
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
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{role}</p>
      </div>
    </div>
    <Badge label={badgeLabel} size="sm" variant={badgeVariant} />
  </div>
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
    <Surface>
      <Hero
        eyebrow="Collaboration"
        title="Discuss changes in context"
        description="Keep artifact context, conversation state, and the next reply action visible without forcing people into a separate review tool."
      />

      {isAttention ? (
        <Alert
          variant="warning"
          title="This thread is blocking launch"
          description="Resolve the header spacing issue before the onboarding refresh can be published."
        />
      ) : null}

      <InfoCard
        eyebrow="Open thread"
        title="Header spacing on mobile"
        description="Mina Park asked for one more spacing pass before final approval."
        trailing={<Badge label="2 replies" size="sm" variant="primary" />}
      />

      {guided ? (
        <div className="flex flex-wrap gap-2">
          <Tag label="Open thread" variant="primary" />
          <Tag label="Assigned to design" />
          <Tag label="Blocks approval" />
        </div>
      ) : null}

      <div className="space-y-3">
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
      </div>

      <Button color="primary" fullWidth loading={isLoading}>
        Reply to thread
      </Button>
    </Surface>
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
    <Surface>
      <Hero
        eyebrow="Review"
        title="Request sign-off with clear criteria"
        description="Show what is being reviewed, who still needs to weigh in, and what conditions must be met before approval."
      />

      {isAttention ? (
        <Alert
          variant="danger"
          title="Legal sign-off is still missing"
          description="Do not approve this campaign until the legal review is completed."
        />
      ) : null}

      <InfoCard
        eyebrow="Awaiting decision"
        title="Spring launch email"
        description="Content review is complete, but legal and QA still need to confirm the final copy."
        trailing={<Badge label="Waiting for review" size="sm" variant="warning" />}
      />

      {guided ? (
        <div className="flex flex-wrap gap-2">
          <Tag label="Content approved" variant="primary" />
          <Tag label="Legal reviewed" />
          <Tag label="QA passed" />
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <Button color="primary" fullWidth loading={isLoading}>
          Approve request
        </Button>
        <Button color="neutral" fullWidth>
          Request changes
        </Button>
      </div>
    </Surface>
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
    <Surface>
      <Hero
        eyebrow="Sharing"
        title="Invite people with the right access"
        description="Keep recipient entry, current scope, and link behavior visible so the sharing decision feels safe before it is sent."
      />

      {isAttention ? (
        <Alert
          variant="warning"
          title="Anyone with the link can view this draft"
          description="Switch back to workspace-only access if this file should stay internal."
        />
      ) : null}

      <TextInput label="Invite people" placeholder="name@company.com" />

      {guided ? (
        <div className="flex flex-wrap gap-2">
          <Tag label="Workspace only" variant="primary" />
          <Tag label="Comment access" />
          <Tag label="Expires in 7 days" />
        </div>
      ) : null}

      <div className="space-y-3">
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
      </div>

      <Button color="primary" fullWidth loading={isLoading}>
        Send invite
      </Button>
    </Surface>
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
    <Surface>
      <Hero
        eyebrow="Mentions"
        title="Notify the right teammate without breaking the writing flow"
        description="Keep the composer stable, make suggestions explainable, and show the notification consequence before the note is sent."
      />

      {isAttention ? (
        <Alert
          variant="warning"
          title="Mentioning @everyone will notify 42 people"
          description="Use a narrower group if the update only needs design and QA input."
        />
      ) : null}

      <TextInput
        label="Comment"
        placeholder="Type @ to notify the right teammate"
        inputProps={{ defaultValue: 'Can @Jordan Lee confirm the mobile header spacing?' }}
      />

      {guided ? (
        <div className="flex flex-wrap gap-2">
          <Tag label="Recent editor" variant="primary" />
          <Tag label="Assigned reviewer" />
          <Tag label="Workspace owner" />
        </div>
      ) : null}

      <div className="space-y-3">
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
      </div>

      <Button color="primary" fullWidth loading={isLoading}>
        Post comment
      </Button>
    </Surface>
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
    <Surface>
      <Hero
        eyebrow="Activity"
        title="Track collaboration history clearly"
        description="Make chronology, actor, and next follow-up action obvious so the feed can be trusted as a system of record."
      />

      {isAttention ? (
        <Alert
          variant="warning"
          title="Some events are delayed"
          description="Refresh the feed to see the latest comments and approvals from the last few minutes."
        />
      ) : null}

      {guided ? (
        <div className="flex flex-wrap gap-2">
          <Tag label="Approvals" variant="primary" />
          <Tag label="Mentions" />
          <Tag label="Comments" />
        </div>
      ) : null}

      <div className="space-y-3">
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
      </div>

      <Button color="primary" fullWidth loading={isLoading}>
        Refresh activity
      </Button>
    </Surface>
  );
}

export default function WebCollaborationPreview({
  patternId,
  state = 'default',
  mode = 'standard',
}: WebCollaborationPreviewProps) {
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
