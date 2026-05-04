export type CollaborationPatternId =
  | 'comments'
  | 'approvals'
  | 'sharing'
  | 'mentions'
  | 'activity-flows';

export type CollaborationPreviewState = 'default' | 'attention' | 'loading';
export type CollaborationPreviewMode = 'standard' | 'guided';

type CollaborationGuide = {
  title: string;
  description: string;
  code: string;
  previewState?: CollaborationPreviewState;
  previewMode?: CollaborationPreviewMode;
};

type CollaborationCompositionRow = {
  id: string;
  property: string;
  type: string;
  description: string;
};

export type CollaborationPatternConfig = {
  id: CollaborationPatternId;
  title: string;
  webDescription: string;
  appDescription: string;
  webControllerDescription: string;
  appControllerDescription: string;
  appPreviewMinHeight?: number;
  guides: [CollaborationGuide, CollaborationGuide, CollaborationGuide];
  checklist: string;
  webCompositionRows: CollaborationCompositionRow[];
  appCompositionRows: CollaborationCompositionRow[];
};

const commentsGuides: [
  CollaborationGuide,
  CollaborationGuide,
  CollaborationGuide,
] = [
  {
    title: 'Thread Context',
    description:
      'Comments work best when the person can immediately understand what artifact they are discussing, who is involved, and which thread still needs attention. The layout should keep the object context and the conversation in one scan.',
    code: `
import Avatar from '@/components/data/Avatar';
import Button from '@/components/action/Button';

export function CommentThread() {
  return (
    <div className="rounded-2xl border p-4">
      <div className="flex items-center gap-3">
        <Avatar name="Mina Park" />
        <span>Mina Park mentioned a spacing issue in the header.</span>
      </div>
      <Button size="sm" color="primary">Reply</Button>
    </div>
  );
}`.trim(),
  },
  {
    title: 'Guided Resolution',
    description:
      'When comments are tied to approval or task state, guided content should make resolution obvious. Use chips or lightweight summaries to show open comments, assignees, and what happens when the reply closes the thread.',
    code: `
import Tag from '@/components/data/Tag';

export function CommentMeta() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag label="Open thread" variant="primary" />
      <Tag label="Assigned to design" />
      <Tag label="Resolves approval blocker" />
    </div>
  );
}`.trim(),
    previewMode: 'guided',
  },
  {
    title: 'Escalation Or Blocked State',
    description:
      'If a thread is blocking release or has gone stale, that state should be visible without reading every reply. Highlight the blocker and keep the next action adjacent to the conversation.',
    code: `
import Alert from '@/components/feedback/Alert';

export function CommentBlocker() {
  return (
    <Alert
      variant="warning"
      title="This thread is blocking launch"
      description="Resolve the header spacing issue before publishing the updated onboarding flow."
    />
  );
}`.trim(),
    previewState: 'attention',
  },
];

const approvalsGuides: [
  CollaborationGuide,
  CollaborationGuide,
  CollaborationGuide,
] = [
  {
    title: 'Decision Surface',
    description:
      'Approval patterns should make the review target, current reviewers, and decision deadline visible before the person chooses approve or request changes. The decision surface is the product, not just the buttons.',
    code: `
import Badge from '@/components/data/Badge';
import Button from '@/components/action/Button';

export function ApprovalHeader() {
  return (
    <div className="rounded-2xl border p-4">
      <Badge label="Waiting for review" variant="warning" />
      <Button color="primary">Approve</Button>
    </div>
  );
}`.trim(),
  },
  {
    title: 'Guided Review Criteria',
    description:
      'Guided mode should surface what the reviewer is meant to verify: copy accuracy, legal sign-off, visual polish, or readiness for launch. This avoids the “approve what?” feeling in cross-functional reviews.',
    code: `
import Tag from '@/components/data/Tag';

export function ApprovalChecklist() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag label="Content approved" variant="primary" />
      <Tag label="Legal reviewed" />
      <Tag label="QA passed" />
    </div>
  );
}`.trim(),
    previewMode: 'guided',
  },
  {
    title: 'Risky Or Rejected State',
    description:
      'If approval is blocked by missing sign-off, failed QA, or legal concerns, escalate the blocker above the action buttons. The warning should explain what still needs to happen, not just that approval is unavailable.',
    code: `
import Alert from '@/components/feedback/Alert';

export function ApprovalWarning() {
  return (
    <Alert
      variant="danger"
      title="Legal sign-off is still missing"
      description="Do not approve this launch request until legal review is complete."
    />
  );
}`.trim(),
    previewState: 'attention',
  },
];

const sharingGuides: [
  CollaborationGuide,
  CollaborationGuide,
  CollaborationGuide,
] = [
  {
    title: 'Access Overview',
    description:
      'Sharing flows need to answer who can access the resource, how they got access, and whether the link scope is safe. Keep the audience summary and the invite action in the same frame.',
    code: `
import TextInput from '@/components/input/TextInput';
import Button from '@/components/action/Button';

export function SharePanel() {
  return (
    <>
      <TextInput label="Invite people" placeholder="name@company.com" />
      <Button color="primary">Send invite</Button>
    </>
  );
}`.trim(),
  },
  {
    title: 'Guided Sharing Rules',
    description:
      'When sharing rules are nuanced, guided content should clarify whether the link is workspace-only, public, expiring, or comment-only. The rule needs to be clear before the invite is sent.',
    code: `
import Tag from '@/components/data/Tag';

export function ShareRules() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag label="Workspace only" variant="primary" />
      <Tag label="Comment access" />
      <Tag label="Expires in 7 days" />
    </div>
  );
}`.trim(),
    previewMode: 'guided',
  },
  {
    title: 'Public Link Warning',
    description:
      'If the sharing action opens access beyond the workspace, elevate that risk clearly. People should understand whether they are exposing view-only access, editable access, or a discoverable public page.',
    code: `
import Alert from '@/components/feedback/Alert';

export function PublicShareWarning() {
  return (
    <Alert
      variant="warning"
      title="Anyone with the link can view this draft"
      description="Switch back to workspace-only access if the content should stay internal."
    />
  );
}`.trim(),
    previewState: 'attention',
  },
];

const mentionsGuides: [
  CollaborationGuide,
  CollaborationGuide,
  CollaborationGuide,
] = [
  {
    title: 'Mention Entry',
    description:
      'Mention patterns should keep the writing flow intact while making it obvious who will be notified. Suggest the right people quickly and keep the composer stable while the suggestion list appears.',
    code: `
import TextInput from '@/components/input/TextInput';

export function MentionComposer() {
  return (
    <TextInput
      label="Comment"
      placeholder="Type @ to notify the right teammate"
    />
  );
}`.trim(),
  },
  {
    title: 'Guided Suggestion Context',
    description:
      'Guided mode should explain why someone is suggested: recent editor, approver, assignee, or page owner. This keeps the mention list from feeling like an arbitrary directory search.',
    code: `
import Tag from '@/components/data/Tag';

export function MentionHints() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag label="Recent editor" variant="primary" />
      <Tag label="Assigned reviewer" />
      <Tag label="Workspace owner" />
    </div>
  );
}`.trim(),
    previewMode: 'guided',
  },
  {
    title: 'Notification Risk',
    description:
      'If the mention will notify a large audience or a sensitive channel, make that consequence explicit before sending. The user should understand the social cost of the mention, not just the syntax.',
    code: `
import Alert from '@/components/feedback/Alert';

export function MentionWarning() {
  return (
    <Alert
      variant="warning"
      title="Mentioning @everyone will notify 42 people"
      description="Use a narrower group if the update only needs design and QA input."
    />
  );
}`.trim(),
    previewState: 'attention',
  },
];

const activityFlowsGuides: [
  CollaborationGuide,
  CollaborationGuide,
  CollaborationGuide,
] = [
  {
    title: 'Activity Timeline',
    description:
      'Activity flows need a readable timeline of who changed what and when. Good activity design makes chronology, actor, and affected object visible without requiring each row to be expanded.',
    code: `
import Avatar from '@/components/data/Avatar';
import Badge from '@/components/data/Badge';

export function ActivityItem() {
  return (
    <div className="rounded-2xl border p-4">
      <Avatar name="Jordan Lee" />
      <Badge label="Approved" variant="success" />
    </div>
  );
}`.trim(),
  },
  {
    title: 'Guided Filters And Follow-up',
    description:
      'Guided activity mode should help people narrow the stream by object, team, or event type. It should also surface follow-up actions like open thread, review change, or restore a version.',
    code: `
import Tag from '@/components/data/Tag';

export function ActivityFilters() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag label="Approvals" variant="primary" />
      <Tag label="Mentions" />
      <Tag label="Comments" />
    </div>
  );
}`.trim(),
    previewMode: 'guided',
  },
  {
    title: 'Sync Failure Or Recovery',
    description:
      'If activity is delayed or partially synced, say so clearly instead of leaving people with a stale feed. Recovery messaging belongs near the timeline because trust in chronology is the core value of the pattern.',
    code: `
import Alert from '@/components/feedback/Alert';

export function ActivityFailure() {
  return (
    <Alert
      variant="warning"
      title="Some events are delayed"
      description="Refresh the feed to see the latest comments and approvals from the last few minutes."
    />
  );
}`.trim(),
    previewState: 'attention',
  },
];

export const collaborationPatternConfigs: Record<
  CollaborationPatternId,
  CollaborationPatternConfig
> = {
  comments: {
    id: 'comments',
    title: 'Comments',
    webDescription:
      'A collaboration pattern for threaded feedback, reply context, and resolution states around shared work on the web.',
    appDescription:
      'A mobile collaboration pattern for threaded comments, mention context, and touch-friendly reply flows.',
    webControllerDescription:
      'Switch between the standard comment thread and a guided resolution mode, plus the escalated state where a thread is blocking the next step.',
    appControllerDescription:
      'Toggle between the normal mobile comment thread and a guided mode with stronger resolution and ownership cues.',
    appPreviewMinHeight: 760,
    guides: commentsGuides,
    checklist:
      'Keep the artifact context visible, make reply ownership and resolution clear, and escalate blockers without forcing the reader to parse the whole thread.',
    webCompositionRows: [
      {
        id: '1',
        property: 'Avatar',
        type: 'Speaker identity',
        description:
          'Shows who wrote the comment or who is assigned to resolve it.',
      },
      {
        id: '2',
        property: 'Button',
        type: 'Reply and resolve action',
        description:
          'Supports the next step directly in the conversation surface.',
      },
      {
        id: '3',
        property: 'Tag',
        type: 'Resolution metadata',
        description:
          'Communicates open state, assignment, or relation to approval status.',
      },
      {
        id: '4',
        property: 'Alert',
        type: 'Blocking signal',
        description:
          'Escalates when unresolved feedback blocks publish or approval.',
      },
    ],
    appCompositionRows: [
      {
        id: '1',
        property: 'AppAvatar',
        type: 'Speaker identity',
        description:
          'Keeps ownership visible inside a stacked mobile thread.',
      },
      {
        id: '2',
        property: 'AppButton',
        type: 'Reply and resolve action',
        description:
          'Provides the touch-first action for continuing or closing the thread.',
      },
      {
        id: '3',
        property: 'AppTag',
        type: 'Resolution metadata',
        description:
          'Shows assignee, open state, or review relevance in compact chips.',
      },
      {
        id: '4',
        property: 'AppAlert',
        type: 'Blocking signal',
        description:
          'Warns when the unresolved conversation blocks the next workflow step.',
      },
    ],
  },
  approvals: {
    id: 'approvals',
    title: 'Approvals',
    webDescription:
      'A review pattern for approval decisions, reviewer coverage, and blocked sign-off states in collaborative web products.',
    appDescription:
      'A native review pattern for approval decisions, escalation, and touch-friendly sign-off actions.',
    webControllerDescription:
      'Switch between the standard approval surface and guided review criteria, plus the high-risk state where approval should not proceed yet.',
    appControllerDescription:
      'Toggle between the normal mobile approval flow and a guided review mode that spells out sign-off requirements more explicitly.',
    appPreviewMinHeight: 760,
    guides: approvalsGuides,
    checklist:
      'Lead with the review target and current decision state, show what needs verification, and elevate missing sign-off before approval actions become primary.',
    webCompositionRows: [
      {
        id: '1',
        property: 'Badge',
        type: 'Decision state',
        description:
          'Marks whether the item is pending, approved, or blocked.',
      },
      {
        id: '2',
        property: 'Button',
        type: 'Review action',
        description:
          'Supports approve or request changes with clear priority.',
      },
      {
        id: '3',
        property: 'Tag',
        type: 'Review criteria',
        description:
          'Makes the expected review dimensions visible in guided mode.',
      },
      {
        id: '4',
        property: 'Alert',
        type: 'Approval blocker',
        description:
          'Explains why approval is unsafe or unavailable right now.',
      },
    ],
    appCompositionRows: [
      {
        id: '1',
        property: 'AppBadge',
        type: 'Decision state',
        description:
          'Keeps review status visible in a compact mobile review card.',
      },
      {
        id: '2',
        property: 'AppButton',
        type: 'Review action',
        description:
          'Provides primary sign-off and secondary change-request actions.',
      },
      {
        id: '3',
        property: 'AppTag',
        type: 'Review criteria',
        description:
          'Explains what the reviewer is being asked to verify.',
      },
      {
        id: '4',
        property: 'AppAlert',
        type: 'Approval blocker',
        description:
          'Raises missing sign-off or risk conditions before approval.',
      },
    ],
  },
  sharing: {
    id: 'sharing',
    title: 'Sharing',
    webDescription:
      'A sharing pattern for inviting collaborators, reviewing access scope, and handling public-link risk on the web.',
    appDescription:
      'A native sharing pattern for invite entry, access review, and public-link safeguards in touch-first layouts.',
    webControllerDescription:
      'Switch between the standard sharing panel and guided sharing rules, plus the warning state where access is broader than expected.',
    appControllerDescription:
      'Toggle between the normal mobile share flow and a guided state that explains access rules and invite scope more clearly.',
    appPreviewMinHeight: 760,
    guides: sharingGuides,
    checklist:
      'Keep invite entry and current access in one frame, explain link scope before the action happens, and elevate public access risks clearly.',
    webCompositionRows: [
      {
        id: '1',
        property: 'TextInput',
        type: 'Invite entry',
        description:
          'Collects collaborator emails or names directly in the sharing surface.',
      },
      {
        id: '2',
        property: 'Button',
        type: 'Share action',
        description:
          'Sends invites or copies the configured access link.',
      },
      {
        id: '3',
        property: 'Tag',
        type: 'Access rules',
        description:
          'Shows whether access is internal, expiring, or comment-only.',
      },
      {
        id: '4',
        property: 'Alert',
        type: 'Public access warning',
        description:
          'Clarifies when the chosen sharing scope exposes the resource broadly.',
      },
    ],
    appCompositionRows: [
      {
        id: '1',
        property: 'AppTextInput',
        type: 'Invite entry',
        description:
          'Captures invite recipients in a mobile-friendly stacked form.',
      },
      {
        id: '2',
        property: 'AppButton',
        type: 'Share action',
        description:
          'Handles sending an invite or copying a share link.',
      },
      {
        id: '3',
        property: 'AppTag',
        type: 'Access rules',
        description:
          'Keeps sharing rules visible without opening a second modal.',
      },
      {
        id: '4',
        property: 'AppAlert',
        type: 'Public access warning',
        description:
          'Raises the risk when the sharing scope becomes too broad.',
      },
    ],
  },
  mentions: {
    id: 'mentions',
    title: 'Mentions',
    webDescription:
      'A mention pattern for notification-aware writing, contextual suggestions, and audience risk in collaborative text workflows.',
    appDescription:
      'A native mention pattern for touch-first writing, mention suggestions, and notification awareness.',
    webControllerDescription:
      'Switch between the standard mention composer and guided suggestion context, plus the state where the mention could notify too many people.',
    appControllerDescription:
      'Toggle between the normal mobile mention flow and a guided state that explains why a person or group is being suggested.',
    appPreviewMinHeight: 740,
    guides: mentionsGuides,
    checklist:
      'Protect the writing flow, make it obvious who will be notified, and warn before a broad or sensitive audience is pinged.',
    webCompositionRows: [
      {
        id: '1',
        property: 'TextInput',
        type: 'Composer',
        description:
          'Keeps the mention entry stable while suggestions appear.',
      },
      {
        id: '2',
        property: 'Tag',
        type: 'Suggestion rationale',
        description:
          'Explains why the mentioned person is relevant in guided mode.',
      },
      {
        id: '3',
        property: 'Button',
        type: 'Send action',
        description:
          'Confirms the comment or note after the mention is added.',
      },
      {
        id: '4',
        property: 'Alert',
        type: 'Audience warning',
        description:
          'Warns when the mention would notify a large or sensitive group.',
      },
    ],
    appCompositionRows: [
      {
        id: '1',
        property: 'AppTextInput',
        type: 'Composer',
        description:
          'Maintains the mobile writing flow while mention suggestions are shown.',
      },
      {
        id: '2',
        property: 'AppTag',
        type: 'Suggestion rationale',
        description:
          'Clarifies why a person or group is being suggested.',
      },
      {
        id: '3',
        property: 'AppButton',
        type: 'Send action',
        description:
          'Commits the note or comment after mention selection.',
      },
      {
        id: '4',
        property: 'AppAlert',
        type: 'Audience warning',
        description:
          'Explains the notification blast radius before sending.',
      },
    ],
  },
  'activity-flows': {
    id: 'activity-flows',
    title: 'Activity Flows',
    webDescription:
      'A collaboration pattern for readable activity timelines, filters, and recovery states around shared work history on the web.',
    appDescription:
      'A native activity-feed pattern for event chronology, filters, and sync recovery in mobile collaboration surfaces.',
    webControllerDescription:
      'Switch between the standard activity timeline and guided filter mode, plus the state where the feed is stale or delayed.',
    appControllerDescription:
      'Toggle between the normal mobile activity feed and a guided mode with stronger filtering and recovery cues.',
    appPreviewMinHeight: 760,
    guides: activityFlowsGuides,
    checklist:
      'Make chronology trustworthy, keep filter and follow-up actions close to the timeline, and clearly say when the feed may be incomplete.',
    webCompositionRows: [
      {
        id: '1',
        property: 'Avatar',
        type: 'Actor identity',
        description:
          'Shows who performed each event in the timeline.',
      },
      {
        id: '2',
        property: 'Badge',
        type: 'Event state',
        description:
          'Communicates approval, publish, failure, or restore status.',
      },
      {
        id: '3',
        property: 'Tag',
        type: 'Filter controls',
        description:
          'Lets people narrow the stream by event type or object.',
      },
      {
        id: '4',
        property: 'Alert',
        type: 'Sync recovery',
        description:
          'Warns when the activity feed may be delayed or incomplete.',
      },
    ],
    appCompositionRows: [
      {
        id: '1',
        property: 'AppAvatar',
        type: 'Actor identity',
        description:
          'Keeps who-did-what readable in a stacked mobile timeline.',
      },
      {
        id: '2',
        property: 'AppBadge',
        type: 'Event state',
        description:
          'Marks event outcomes inside a compact feed row.',
      },
      {
        id: '3',
        property: 'AppTag',
        type: 'Filter controls',
        description:
          'Supports quick filtering without leaving the timeline screen.',
      },
      {
        id: '4',
        property: 'AppAlert',
        type: 'Sync recovery',
        description:
          'Makes stale or delayed activity explicit before the user trusts the feed.',
      },
    ],
  },
};
