export type SettingsAdminPatternId =
  | 'member-management'
  | 'role-change'
  | 'billing-settings'
  | 'destructive-confirmations';

export type SettingsAdminPreviewState = 'default' | 'attention' | 'loading';
export type SettingsAdminPreviewMode = 'standard' | 'guided';

type SettingsAdminGuide = {
  title: string;
  description: string;
  code: string;
  previewState?: SettingsAdminPreviewState;
  previewMode?: SettingsAdminPreviewMode;
};

type SettingsAdminCompositionRow = {
  id: string;
  property: string;
  type: string;
  description: string;
};

export type SettingsAdminPatternConfig = {
  id: SettingsAdminPatternId;
  title: string;
  webDescription: string;
  appDescription: string;
  webControllerDescription: string;
  appControllerDescription: string;
  appPreviewMinHeight?: number;
  guides: [SettingsAdminGuide, SettingsAdminGuide, SettingsAdminGuide];
  checklist: string;
  webCompositionRows: SettingsAdminCompositionRow[];
  appCompositionRows: SettingsAdminCompositionRow[];
};

const memberManagementGuides: [
  SettingsAdminGuide,
  SettingsAdminGuide,
  SettingsAdminGuide,
] = [
  {
    title: 'Member Overview',
    description:
      'Member management should make identity, current role, and access state visible in one scan. The core surface is a list that supports review and lightweight actions without forcing a deeper audit flow too early.',
    code: `
import Avatar from '@/components/data/Avatar';
import Badge from '@/components/data/Badge';

export function MemberManagementList() {
  return (
    <div className="flex items-center justify-between rounded-2xl border p-4">
      <div className="flex items-center gap-3">
        <Avatar name="Mina Park" />
        <span>Mina Park</span>
      </div>
      <Badge label="Admin" variant="primary" />
    </div>
  );
}`.trim(),
  },
  {
    title: 'Bulk And Guided Actions',
    description:
      'When the team is large, the pattern should expose filters, invite entry points, and grouped actions without collapsing the list itself. Help people answer “who has access right now?” before asking them to act.',
    code: `
import Button from '@/components/action/Button';
import Tag from '@/components/data/Tag';

export function MemberManagementToolbar() {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        <Tag label="Admins" variant="primary" />
        <Tag label="Pending invite" />
      </div>
      <Button color="primary" size="sm">Invite members</Button>
    </>
  );
}`.trim(),
    previewMode: 'guided',
  },
  {
    title: 'Access Risk And Recovery',
    description:
      'Suspended accounts, expired invites, or seat limits need to be surfaced before admins take follow-up actions. Use one clear warning for the list-level problem and keep the recovery CTA close to the affected row or summary.',
    code: `
import Alert from '@/components/feedback/Alert';

export function MemberAccessWarning() {
  return (
    <Alert
      variant="warning"
      title="You are out of active seats"
      description="Add a seat or remove an inactive member before sending more invitations."
    />
  );
}`.trim(),
    previewState: 'attention',
  },
];

const roleChangeGuides: [
  SettingsAdminGuide,
  SettingsAdminGuide,
  SettingsAdminGuide,
] = [
  {
    title: 'Role Comparison',
    description:
      'Role change flows need to show what is changing, not just a dropdown. Present the current role, the next role, and the scope of permissions that will be gained or removed before confirmation.',
    code: `
import Badge from '@/components/data/Badge';
import Select from '@/components/input/Select';

export function RoleChange() {
  return (
    <>
      <Badge label="Current: Editor" />
      <Select value="admin" options={[{ label: 'Admin', value: 'admin' }]} />
    </>
  );
}`.trim(),
  },
  {
    title: 'Guided Permission Summary',
    description:
      'When the product has nuanced permission tiers, add a short summary of consequences so the admin does not need to remember them from another docs page. Keep the explanation adjacent to the action itself.',
    code: `
import Tag from '@/components/data/Tag';

export function RoleCapabilities() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag label="Can manage billing" variant="primary" />
      <Tag label="Can invite admins" variant="primary" />
      <Tag label="Can delete projects" />
    </div>
  );
}`.trim(),
    previewMode: 'guided',
  },
  {
    title: 'High-Risk Confirmation',
    description:
      'Promoting or demoting sensitive roles should trigger a stronger confirmation path when the consequence is meaningful. Focus the warning on business impact, not generic danger language.',
    code: `
import Alert from '@/components/feedback/Alert';

export function RoleChangeWarning() {
  return (
    <Alert
      variant="danger"
      title="This change transfers workspace-level control"
      description="Promoting this member to admin allows billing, member, and deletion actions."
    />
  );
}`.trim(),
    previewState: 'attention',
  },
];

const billingSettingsGuides: [
  SettingsAdminGuide,
  SettingsAdminGuide,
  SettingsAdminGuide,
] = [
  {
    title: 'Plan And Spend Overview',
    description:
      'Billing settings should anchor the admin in the current plan, renewal timing, and spend drivers before surfacing detailed forms. Lead with summary, then move into payment and invoice detail.',
    code: `
import Badge from '@/components/data/Badge';

export function BillingOverview() {
  return (
    <div className="flex items-center justify-between rounded-2xl border p-4">
      <span>Growth plan</span>
      <Badge label="Renews May 28" variant="success" />
    </div>
  );
}`.trim(),
  },
  {
    title: 'Invoice And Seat Guidance',
    description:
      'Admins often arrive with a specific job: change contact info, add seats, or review invoices. Use guided sections and calm helper copy so the path to that job is obvious without searching around the page.',
    code: `
import TextInput from '@/components/input/TextInput';

export function BillingContact() {
  return (
    <TextInput label="Invoice email" placeholder="billing@company.com" />
  );
}`.trim(),
    previewMode: 'guided',
  },
  {
    title: 'Payment Failure And Recovery',
    description:
      'If payment is failing or the card is near expiration, treat that as the top state of the page. Pair the warning with the exact recovery action needed rather than burying the issue under the rest of settings.',
    code: `
import Alert from '@/components/feedback/Alert';

export function BillingFailure() {
  return (
    <Alert
      variant="warning"
      title="Your payment method needs attention"
      description="Update the card before renewal to avoid interrupted access."
    />
  );
}`.trim(),
    previewState: 'attention',
  },
];

const destructiveConfirmationGuides: [
  SettingsAdminGuide,
  SettingsAdminGuide,
  SettingsAdminGuide,
] = [
  {
    title: 'Clear Risk Framing',
    description:
      'Destructive confirmations should name what is being deleted, what survives, and whether the action can be undone. People should never need to infer the blast radius from button color alone.',
    code: `
import Button from '@/components/action/Button';

export function DeleteConfirmation() {
  return (
    <Button color="danger">Delete workspace</Button>
  );
}`.trim(),
  },
  {
    title: 'Guided Safeguards',
    description:
      'For high-risk actions, add lightweight safeguards like typed confirmation, owner acknowledgement, or summary bullets. The friction should match the consequence, not become a generic pattern everywhere.',
    code: `
import TextInput from '@/components/input/TextInput';

export function TypedConfirmation() {
  return (
    <TextInput label="Type DELETE to continue" placeholder="DELETE" />
  );
}`.trim(),
    previewMode: 'guided',
  },
  {
    title: 'Blocked Or Irreversible States',
    description:
      'If the action cannot proceed because of ownership, compliance, or billing conditions, make the blocker the primary message. If it can proceed but is irreversible, state that explicitly once and keep the CTA specific.',
    code: `
import Alert from '@/components/feedback/Alert';

export function DestructiveWarning() {
  return (
    <Alert
      variant="danger"
      title="Deleting this workspace permanently removes projects and approvals"
      description="Export data and transfer ownership before continuing."
    />
  );
}`.trim(),
    previewState: 'attention',
  },
];

export const settingsAdminPatternConfigs: Record<
  SettingsAdminPatternId,
  SettingsAdminPatternConfig
> = {
  'member-management': {
    id: 'member-management',
    title: 'Member Management',
    webDescription:
      'A web admin pattern for reviewing members, access state, and invite health while keeping invites and removals close to the list itself.',
    appDescription:
      'A native admin pattern for scanning members, pending invites, and access state from a compact mobile management surface.',
    webControllerDescription:
      'Switch between the normal management view and a more guided admin mode with stronger filtering and action prompts, plus the state where access limits or invite problems need attention.',
    appControllerDescription:
      'Toggle between the standard mobile management list and a guided admin mode that adds more member context, filters, and recovery cues.',
    appPreviewMinHeight: 760,
    guides: memberManagementGuides,
    checklist:
      'Keep identity, role, and access state visible together, make invite and seat issues obvious before new actions begin, and reserve heavy actions for the rows or summaries they affect.',
    webCompositionRows: [
      {
        id: '1',
        property: 'Avatar',
        type: 'Identity',
        description:
          'Helps admins quickly scan who each row represents before taking access actions.',
      },
      {
        id: '2',
        property: 'Badge',
        type: 'Role and status',
        description:
          'Distinguishes admins, editors, viewers, and invite states without extra clicks.',
      },
      {
        id: '3',
        property: 'Button',
        type: 'Invite and row action',
        description:
          'Provides the primary entry point for invite, resend, revoke, or remove actions.',
      },
      {
        id: '4',
        property: 'Alert',
        type: 'Seat or access warning',
        description:
          'Surfaces list-level blockers like seat caps, suspended members, or stale invites.',
      },
    ],
    appCompositionRows: [
      {
        id: '1',
        property: 'AppAvatar',
        type: 'Identity',
        description:
          'Keeps member recognition fast inside a dense mobile list.',
      },
      {
        id: '2',
        property: 'AppBadge',
        type: 'Role and status',
        description:
          'Makes role tier and invite state easy to scan without a secondary detail screen.',
      },
      {
        id: '3',
        property: 'AppButton',
        type: 'Invite and row action',
        description:
          'Carries invite, resend, and row-level admin actions in a touch-friendly format.',
      },
      {
        id: '4',
        property: 'AppAlert',
        type: 'Seat or access warning',
        description:
          'Highlights list-level blockers before the admin attempts more changes.',
      },
    ],
  },
  'role-change': {
    id: 'role-change',
    title: 'Role Change',
    webDescription:
      'A permission-change pattern for promoting or demoting members with clear comparison, capability summary, and explicit confirmation for high-impact roles.',
    appDescription:
      'A mobile permission-change pattern that explains the effect of role updates before the admin commits to them on a smaller screen.',
    webControllerDescription:
      'Toggle between the standard role change flow and a guided version with a stronger capability summary, plus the state where the change has heightened organizational risk.',
    appControllerDescription:
      'Switch between the normal role change flow and a guided mobile version that spells out elevated capabilities before confirmation.',
    appPreviewMinHeight: 740,
    guides: roleChangeGuides,
    checklist:
      'Show current versus next role, summarize the capability impact close to the control, and add confirmation only when the resulting authority materially changes ownership or risk.',
    webCompositionRows: [
      {
        id: '1',
        property: 'Badge',
        type: 'Current state',
        description:
          'Keeps the current role visible so the change is not interpreted in isolation.',
      },
      {
        id: '2',
        property: 'Select',
        type: 'Role chooser',
        description:
          'Supports choosing the next role without leaving the current admin context.',
      },
      {
        id: '3',
        property: 'Tag',
        type: 'Capability summary',
        description:
          'Communicates the permissions gained or removed by the selected role.',
      },
      {
        id: '4',
        property: 'Alert',
        type: 'High-risk confirmation',
        description:
          'Explains when the role update increases deletion, billing, or member-management authority.',
      },
    ],
    appCompositionRows: [
      {
        id: '1',
        property: 'AppBadge',
        type: 'Current state',
        description:
          'Keeps the existing role visible in a compact header before changes are made.',
      },
      {
        id: '2',
        property: 'AppSelect',
        type: 'Role chooser',
        description:
          'Provides a touch-friendly way to pick the next role inside the same flow.',
      },
      {
        id: '3',
        property: 'AppTag',
        type: 'Capability summary',
        description:
          'Explains the operational effect of the role choice in a scannable way.',
      },
      {
        id: '4',
        property: 'AppAlert',
        type: 'High-risk confirmation',
        description:
          'Warns when the update changes ownership or expands sensitive admin access.',
      },
    ],
  },
  'billing-settings': {
    id: 'billing-settings',
    title: 'Billing Settings',
    webDescription:
      'A billing administration pattern for summarizing plan state, payment health, invoice details, and seat drivers before the admin edits anything.',
    appDescription:
      'A mobile billing settings pattern that keeps plan context, invoice contacts, and payment recovery concise but still actionable.',
    webControllerDescription:
      'Switch between the standard billing view and a more guided version that emphasizes invoice and seat tasks, plus the state where payment health needs immediate recovery.',
    appControllerDescription:
      'Toggle between the normal mobile billing flow and a guided version that highlights contact, seats, and renewal work with stronger recovery cues.',
    appPreviewMinHeight: 760,
    guides: billingSettingsGuides,
    checklist:
      'Lead with plan and payment state, let admins jump directly to invoice and seat tasks, and promote payment failures to the top of the page with one clear recovery action.',
    webCompositionRows: [
      {
        id: '1',
        property: 'Badge',
        type: 'Plan status',
        description:
          'Surfaces renewal timing, payment health, and current plan state at a glance.',
      },
      {
        id: '2',
        property: 'TextInput',
        type: 'Invoice detail',
        description:
          'Supports editing billing contacts and operational accounting metadata.',
      },
      {
        id: '3',
        property: 'Button',
        type: 'Recovery action',
        description:
          'Supports updating payment methods, downloading invoices, or changing plan details.',
      },
      {
        id: '4',
        property: 'Alert',
        type: 'Payment warning',
        description:
          'Elevates payment failures or expiring cards above secondary billing settings.',
      },
    ],
    appCompositionRows: [
      {
        id: '1',
        property: 'AppBadge',
        type: 'Plan status',
        description:
          'Keeps renewal and plan state visible in a tight mobile summary.',
      },
      {
        id: '2',
        property: 'AppTextInput',
        type: 'Invoice detail',
        description:
          'Captures invoice email and billing contact details in a stacked layout.',
      },
      {
        id: '3',
        property: 'AppButton',
        type: 'Recovery action',
        description:
          'Handles actions like updating payment method or managing seats.',
      },
      {
        id: '4',
        property: 'AppAlert',
        type: 'Payment warning',
        description:
          'Pushes payment failures and renewal risks to the top of the screen.',
      },
    ],
  },
  'destructive-confirmations': {
    id: 'destructive-confirmations',
    title: 'Destructive Confirmations',
    webDescription:
      'A high-risk confirmation pattern for irreversible actions such as deleting workspaces, projects, or billing entities with appropriately scaled friction.',
    appDescription:
      'A native destructive confirmation pattern for irreversible actions that need explicit risk framing, acknowledgement, and recovery guidance.',
    webControllerDescription:
      'Switch between a standard destructive confirmation and a more guided safeguard mode with typed acknowledgement, plus the high-alert state where the action has permanent impact.',
    appControllerDescription:
      'Toggle between the normal mobile destructive confirmation and a guided version that adds stronger acknowledgement before permanent deletion.',
    appPreviewMinHeight: 760,
    guides: destructiveConfirmationGuides,
    checklist:
      'Name the exact object being removed, state whether the action is reversible, and match the amount of friction to the real consequence instead of applying the same pattern everywhere.',
    webCompositionRows: [
      {
        id: '1',
        property: 'Alert',
        type: 'Risk framing',
        description:
          'Clarifies the blast radius and permanence of the destructive action.',
      },
      {
        id: '2',
        property: 'TextInput',
        type: 'Typed acknowledgement',
        description:
          'Adds friction when the action affects ownership, billing, or large amounts of work.',
      },
      {
        id: '3',
        property: 'Button',
        type: 'Primary destructive action',
        description:
          'Carries the irreversible action and must be explicit about the object being deleted.',
      },
      {
        id: '4',
        property: 'Badge',
        type: 'Impact marker',
        description:
          'Supports quick interpretation of whether the action is temporary, permanent, or owner-restricted.',
      },
    ],
    appCompositionRows: [
      {
        id: '1',
        property: 'AppAlert',
        type: 'Risk framing',
        description:
          'Explains permanence and impact before the user reaches the final CTA.',
      },
      {
        id: '2',
        property: 'AppTextInput',
        type: 'Typed acknowledgement',
        description:
          'Introduces stronger intent confirmation for irreversible mobile actions.',
      },
      {
        id: '3',
        property: 'AppButton',
        type: 'Primary destructive action',
        description:
          'Handles the final irreversible confirmation with explicit labeling.',
      },
      {
        id: '4',
        property: 'AppBadge',
        type: 'Impact marker',
        description:
          'Signals permanence or restriction level without forcing extra reading.',
      },
    ],
  },
};
