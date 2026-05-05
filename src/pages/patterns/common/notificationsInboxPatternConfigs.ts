export type NotificationsInboxPatternId =
  | 'notification-center'
  | 'inbox-triage'
  | 'digest-settings'
  | 'alert-escalation';

export type NotificationsInboxPreviewState =
  | 'default'
  | 'attention'
  | 'loading';
export type NotificationsInboxPreviewMode = 'standard' | 'guided';

type NotificationsInboxGuide = {
  title: string;
  description: string;
  code: string;
  previewState?: NotificationsInboxPreviewState;
  previewMode?: NotificationsInboxPreviewMode;
};

type NotificationsInboxCompositionRow = {
  id: string;
  property: string;
  type: string;
  description: string;
};

export type NotificationsInboxPatternConfig = {
  id: NotificationsInboxPatternId;
  title: string;
  webDescription: string;
  appDescription: string;
  webControllerDescription: string;
  appControllerDescription: string;
  appPreviewMinHeight?: number;
  guides: [
    NotificationsInboxGuide,
    NotificationsInboxGuide,
    NotificationsInboxGuide,
  ];
  checklist: string;
  webCompositionRows: NotificationsInboxCompositionRow[];
  appCompositionRows: NotificationsInboxCompositionRow[];
};

const notificationCenterGuides: [
  NotificationsInboxGuide,
  NotificationsInboxGuide,
  NotificationsInboxGuide,
] = [
  {
    title: 'Priority Ordering',
    description:
      'Notification centers should make urgency and relevance obvious without forcing people to scan every item. Lead with unread, actionable, or critical events while preserving enough context to decide whether a notification deserves attention now.',
    code: `
import Badge from '@/components/data/Badge';
import Button from '@/components/action/Button';

export function NotificationCenterCard() {
  return (
    <div className="rounded-2xl border p-4">
      <Badge label="3 unread" variant="primary" />
      <Button color="primary">Mark all read</Button>
    </div>
  );
}`.trim(),
  },
  {
    title: 'Guided Grouping',
    description:
      'Guided mode should explain why a notification appears where it does: mentions, approvals, billing alerts, or product updates. Grouping helps people build trust in the feed rather than feeling spammed by a random stream.',
    code: `
import Tag from '@/components/data/Tag';

export function NotificationFilters() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag label="Mentions" variant="primary" />
      <Tag label="Approvals" />
      <Tag label="Billing alerts" />
    </div>
  );
}`.trim(),
    previewMode: 'guided',
  },
  {
    title: 'Backlog Or Escalated State',
    description:
      'If unread or critical alerts have piled up, elevate that state above the list. The person should know whether something important is aging out or still waiting for acknowledgment.',
    code: `
import Alert from '@/components/feedback/Alert';

export function NotificationBacklog() {
  return (
    <Alert
      variant="warning"
      title="3 critical notifications are still unread"
      description="Review the overdue approval and billing alerts before they age out."
    />
  );
}`.trim(),
    previewState: 'attention',
  },
];

const inboxTriageGuides: [
  NotificationsInboxGuide,
  NotificationsInboxGuide,
  NotificationsInboxGuide,
] = [
  {
    title: 'Action Queue',
    description:
      'Inbox triage works when every item clearly communicates what happened, who triggered it, and what action is expected. The inbox should feel like a queue of decisions, not just a passive activity feed.',
    code: `
import Avatar from '@/components/data/Avatar';
import Badge from '@/components/data/Badge';

export function InboxRow() {
  return (
    <div className="rounded-2xl border p-4">
      <Avatar name="Dana Kim" />
      <Badge label="Needs reply" variant="warning" />
    </div>
  );
}`.trim(),
  },
  {
    title: 'Guided Triage Filters',
    description:
      'Guided mode should show how people can narrow the queue by urgency, assignee, or type. Good filters turn a long inbox into a manageable set of choices without hiding the most critical items.',
    code: `
import Tag from '@/components/data/Tag';

export function InboxFilters() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag label="Needs reply" variant="primary" />
      <Tag label="Today" />
      <Tag label="Assigned to me" />
    </div>
  );
}`.trim(),
    previewMode: 'guided',
  },
  {
    title: 'Overdue Queue',
    description:
      'If action items are getting stale, the inbox should say so clearly. A backlog warning belongs above the queue because it changes how the person prioritizes the rest of the list.',
    code: `
import Alert from '@/components/feedback/Alert';

export function InboxBacklog() {
  return (
    <Alert
      variant="warning"
      title="12 action items are overdue"
      description="Triage the oldest review and customer replies before they escalate."
    />
  );
}`.trim(),
    previewState: 'attention',
  },
];

const digestSettingsGuides: [
  NotificationsInboxGuide,
  NotificationsInboxGuide,
  NotificationsInboxGuide,
] = [
  {
    title: 'Preference Clarity',
    description:
      'Digest settings should tell people what they will receive, where they will receive it, and how often. Preference screens fail when they expose toggles without enough outcome-level explanation.',
    code: `
import Switch from '@/components/input/Switch';

export function DigestToggles() {
  return (
    <Switch
      label="Daily summary"
      description="Receive a recap of comments, approvals, and mentions every morning."
      checked
      onChange={() => {}}
    />
  );
}`.trim(),
  },
  {
    title: 'Guided Delivery Rules',
    description:
      'Guided mode should explain quiet hours, digest windows, and urgent exceptions so the settings feel trustworthy. People need to understand the rule system, not just the labels.',
    code: `
import Tag from '@/components/data/Tag';

export function DeliveryRules() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag label="Daily digest" variant="primary" />
      <Tag label="Quiet hours 10PM-7AM" />
      <Tag label="Urgent alerts bypass" />
    </div>
  );
}`.trim(),
    previewMode: 'guided',
  },
  {
    title: 'Exception Warning',
    description:
      'If some notifications can bypass a user preference, that should be explicit. Exceptions are easy to justify internally and easy to resent externally if they are hidden.',
    code: `
import Alert from '@/components/feedback/Alert';

export function DigestException() {
  return (
    <Alert
      variant="warning"
      title="Critical alerts can still bypass quiet hours"
      description="Billing failures and security alerts will notify you immediately."
    />
  );
}`.trim(),
    previewState: 'attention',
  },
];

const alertEscalationGuides: [
  NotificationsInboxGuide,
  NotificationsInboxGuide,
  NotificationsInboxGuide,
] = [
  {
    title: 'Escalation Summary',
    description:
      'Escalation patterns should capture the alert, current responder, and next route in one frame. When someone opens the screen during an incident, they should immediately know whether the alert is owned or needs to move.',
    code: `
import Badge from '@/components/data/Badge';
import Button from '@/components/action/Button';

export function EscalationCard() {
  return (
    <div className="rounded-2xl border p-4">
      <Badge label="Awaiting ack" variant="warning" />
      <Button color="primary">Escalate now</Button>
    </div>
  );
}`.trim(),
  },
  {
    title: 'Guided Routing Rules',
    description:
      'Guided mode should explain who gets paged first, how long the system waits, and what the backup path looks like. Clear routing rules reduce panic and second-guessing during urgent moments.',
    code: `
import Tag from '@/components/data/Tag';

export function EscalationRules() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag label="Pager first" variant="primary" />
      <Tag label="SMS backup" />
      <Tag label="Escalates after 10 min" />
    </div>
  );
}`.trim(),
    previewMode: 'guided',
  },
  {
    title: 'Unacknowledged Critical Alert',
    description:
      'If the primary responder has not acknowledged the issue, the warning should dominate the screen. High-severity escalation is not just another notification; it is a recovery workflow.',
    code: `
import Alert from '@/components/feedback/Alert';

export function EscalationFailure() {
  return (
    <Alert
      variant="danger"
      title="Primary on-call did not acknowledge"
      description="Escalate this incident to the backup engineer and notify the operations lead."
    />
  );
}`.trim(),
    previewState: 'attention',
  },
];

export const notificationsInboxPatternConfigs: Record<
  NotificationsInboxPatternId,
  NotificationsInboxPatternConfig
> = {
  'notification-center': {
    id: 'notification-center',
    title: 'Notification Center',
    webDescription:
      'A notifications pattern for browsing unread updates, grouping by type, and surfacing priority alerts in browser-based products.',
    appDescription:
      'A native notifications pattern for scanning unread updates, categories, and critical alerts in a touch-first center.',
    webControllerDescription:
      'Switch between the standard notification list and guided grouping mode, plus the state where unread critical items need stronger emphasis.',
    appControllerDescription:
      'Toggle between the normal mobile notification center and a guided mode that clarifies why updates are grouped the way they are.',
    appPreviewMinHeight: 760,
    guides: notificationCenterGuides,
    checklist:
      'Prioritize unread and actionable items, group updates in a way people can understand, and elevate backlog risk before important notifications are missed.',
    webCompositionRows: [
      {
        id: '1',
        property: 'Badge',
        type: 'Unread count',
        description:
          'Shows how much new activity still needs attention.',
      },
      {
        id: '2',
        property: 'Button',
        type: 'Bulk action',
        description:
          'Lets the person clear or mark the current set efficiently.',
      },
      {
        id: '3',
        property: 'Tag',
        type: 'Grouping cue',
        description:
          'Explains why items belong to a specific bucket in guided mode.',
      },
      {
        id: '4',
        property: 'Alert',
        type: 'Backlog warning',
        description:
          'Escalates when critical unread items are aging out.',
      },
    ],
    appCompositionRows: [
      {
        id: '1',
        property: 'AppBadge',
        type: 'Unread count',
        description:
          'Keeps new activity visible at the top of the mobile center.',
      },
      {
        id: '2',
        property: 'AppButton',
        type: 'Bulk action',
        description:
          'Supports quick acknowledgment or clear-all behavior.',
      },
      {
        id: '3',
        property: 'AppTag',
        type: 'Grouping cue',
        description:
          'Clarifies category and intent in a compact mobile layout.',
      },
      {
        id: '4',
        property: 'AppAlert',
        type: 'Backlog warning',
        description:
          'Warns when unread critical items still need attention.',
      },
    ],
  },
  'inbox-triage': {
    id: 'inbox-triage',
    title: 'Inbox Triage',
    webDescription:
      'An inbox pattern for turning notifications into decisions, replies, and follow-up actions without losing priority order.',
    appDescription:
      'A native inbox-triage pattern for processing action items, filtering the queue, and handling overdue work on mobile.',
    webControllerDescription:
      'Switch between the standard action queue and guided filter mode, plus the state where the backlog has become overdue.',
    appControllerDescription:
      'Toggle between the normal mobile inbox queue and a guided mode that emphasizes filters and ownership before action.',
    appPreviewMinHeight: 760,
    guides: inboxTriageGuides,
    checklist:
      'Frame the inbox as a queue of decisions, provide fast filters for triage, and escalate stale backlogs before important tasks are buried.',
    webCompositionRows: [
      {
        id: '1',
        property: 'Avatar',
        type: 'Actor context',
        description:
          'Shows who triggered the action item in the queue.',
      },
      {
        id: '2',
        property: 'Badge',
        type: 'Action state',
        description:
          'Explains whether the item needs reply, review, or acknowledgment.',
      },
      {
        id: '3',
        property: 'Tag',
        type: 'Filter chip',
        description:
          'Lets people narrow the queue by urgency or ownership.',
      },
      {
        id: '4',
        property: 'Alert',
        type: 'Overdue backlog',
        description:
          'Warns when queue items have aged beyond the expected response time.',
      },
    ],
    appCompositionRows: [
      {
        id: '1',
        property: 'AppAvatar',
        type: 'Actor context',
        description:
          'Keeps who-triggered-what readable in the mobile queue.',
      },
      {
        id: '2',
        property: 'AppBadge',
        type: 'Action state',
        description:
          'Marks queue items that need immediate attention.',
      },
      {
        id: '3',
        property: 'AppTag',
        type: 'Filter chip',
        description:
          'Supports quick triage without leaving the inbox.',
      },
      {
        id: '4',
        property: 'AppAlert',
        type: 'Overdue backlog',
        description:
          'Elevates when action items are getting stale.',
      },
    ],
  },
  'digest-settings': {
    id: 'digest-settings',
    title: 'Digest Settings',
    webDescription:
      'A preferences pattern for delivery cadence, quiet hours, and exception rules around notification digests and updates.',
    appDescription:
      'A native preferences pattern for notification cadence, quiet hours, and urgent delivery exceptions on mobile.',
    webControllerDescription:
      'Switch between the standard settings screen and guided delivery rules, plus the state where urgent exceptions need stronger disclosure.',
    appControllerDescription:
      'Toggle between the normal mobile preference view and a guided mode that spells out quiet hours, digest windows, and exceptions.',
    appPreviewMinHeight: 780,
    guides: digestSettingsGuides,
    checklist:
      'Make each preference outcome clear, explain delivery rules and exceptions in plain language, and never hide which alerts can bypass user choices.',
    webCompositionRows: [
      {
        id: '1',
        property: 'Switch',
        type: 'Preference toggle',
        description:
          'Controls whether a category is delivered and how often.',
      },
      {
        id: '2',
        property: 'Tag',
        type: 'Delivery rule hint',
        description:
          'Explains quiet hours, digest frequency, or urgent overrides.',
      },
      {
        id: '3',
        property: 'Button',
        type: 'Save action',
        description:
          'Persists updated notification preferences.',
      },
      {
        id: '4',
        property: 'Alert',
        type: 'Exception disclosure',
        description:
          'Clarifies which alerts can bypass a user preference.',
      },
    ],
    appCompositionRows: [
      {
        id: '1',
        property: 'AppSwitch',
        type: 'Preference toggle',
        description:
          'Lets the person manage delivery rules in a touch-first format.',
      },
      {
        id: '2',
        property: 'AppTag',
        type: 'Delivery rule hint',
        description:
          'Summarizes cadence, quiet hours, and urgent exceptions.',
      },
      {
        id: '3',
        property: 'AppButton',
        type: 'Save action',
        description:
          'Commits the updated notification settings.',
      },
      {
        id: '4',
        property: 'AppAlert',
        type: 'Exception disclosure',
        description:
          'Warns when some alerts can still bypass user preferences.',
      },
    ],
  },
  'alert-escalation': {
    id: 'alert-escalation',
    title: 'Alert Escalation',
    webDescription:
      'An alert-routing pattern for urgent notifications, responder ownership, and escalation rules when acknowledgment does not happen in time.',
    appDescription:
      'A native incident-alert pattern for urgent routing, responder handoff, and escalation when the first contact does not respond.',
    webControllerDescription:
      'Switch between the standard escalation summary and guided routing rules, plus the critical state where the primary responder has not acknowledged.',
    appControllerDescription:
      'Toggle between the normal mobile escalation view and a guided mode that explains pager order, timing, and backup paths more clearly.',
    appPreviewMinHeight: 760,
    guides: alertEscalationGuides,
    checklist:
      'Summarize the current owner and next route clearly, explain escalation rules before incidents happen, and dominate the screen when a critical alert is still unacknowledged.',
    webCompositionRows: [
      {
        id: '1',
        property: 'Badge',
        type: 'Acknowledgment state',
        description:
          'Shows whether the current alert is owned, pending, or escalated.',
      },
      {
        id: '2',
        property: 'Button',
        type: 'Escalation action',
        description:
          'Triggers the next route or manual override in the chain.',
      },
      {
        id: '3',
        property: 'Tag',
        type: 'Routing rule',
        description:
          'Explains pager order, backup path, or escalation delay.',
      },
      {
        id: '4',
        property: 'Alert',
        type: 'Critical failure state',
        description:
          'Elevates when no responder has acknowledged a high-severity alert.',
      },
    ],
    appCompositionRows: [
      {
        id: '1',
        property: 'AppBadge',
        type: 'Acknowledgment state',
        description:
          'Keeps incident ownership visible inside the mobile escalation view.',
      },
      {
        id: '2',
        property: 'AppButton',
        type: 'Escalation action',
        description:
          'Lets the person escalate or reassign quickly on mobile.',
      },
      {
        id: '3',
        property: 'AppTag',
        type: 'Routing rule',
        description:
          'Summarizes the escalation chain in a compact form.',
      },
      {
        id: '4',
        property: 'AppAlert',
        type: 'Critical failure state',
        description:
          'Warns when the primary responder still has not acknowledged the alert.',
      },
    ],
  },
};
