'use client';

import Alert from '@/components/feedback/Alert';
import Avatar from '@/components/data/Avatar';
import Badge from '@/components/data/Badge';
import Tag from '@/components/data/Tag';
import Button from '@/components/action/Button';
import TextInput from '@/components/input/TextInput';
import FlexWrapper from '@/components/layout/FlexWrapper';
import type {
  SettingsAdminPatternId,
  SettingsAdminPreviewMode,
  SettingsAdminPreviewState,
} from '@/pages/patterns/common/settingsAdminPatternConfigs';

type WebSettingsAdminPreviewProps = {
  patternId: SettingsAdminPatternId;
  state?: SettingsAdminPreviewState;
  mode?: SettingsAdminPreviewMode;
};

const Surface = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full max-w-[680px] rounded-[32px] border border-neutral-200 bg-white p-7 shadow-[0_28px_100px_-36px_rgba(17,24,39,0.38)] dark:border-neutral-800 dark:bg-neutral-950">
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

const MemberRow = ({
  name,
  role,
  status,
}: {
  name: string;
  role: string;
  status: Data.BadgeVariant;
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
    <Badge
      label={status === 'warning' ? 'Pending' : role}
      size="sm"
      variant={status}
    />
  </div>
);

function MemberManagementPreview({
  state,
  mode,
}: {
  state: SettingsAdminPreviewState;
  mode: SettingsAdminPreviewMode;
}) {
  const isAttention = state === 'attention';
  const isLoading = state === 'loading';
  const guided = mode === 'guided';

  return (
    <Surface>
      <Hero
        eyebrow="Settings / Admin"
        title="Manage members"
        description="Review access, resend invites, and keep role coverage healthy without losing sight of the current team state."
      />

      {isAttention ? (
        <Alert
          variant="warning"
          title="You are out of active seats"
          description="Remove an inactive member or add a seat before sending more invitations."
        />
      ) : null}

      <FlexWrapper justify="between" items="center" classes="rounded-2xl border border-neutral-200 bg-neutral-50/80 p-4 dark:border-neutral-800 dark:bg-neutral-900/70">
        <div>
          <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            18 members, 2 pending invites
          </p>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            Keep admin coverage healthy while monitoring inactive members.
          </p>
        </div>
        <Button color="primary" size="sm" loading={isLoading}>
          Invite members
        </Button>
      </FlexWrapper>

      {guided ? (
        <div className="flex flex-wrap gap-2">
          <Tag label="Admins" variant="primary" />
          <Tag label="Pending invite" />
          <Tag label="Suspended" />
        </div>
      ) : null}

      <div className="space-y-3">
        <MemberRow name="Mina Park" role="Admin" status="primary" />
        <MemberRow name="Jordan Lee" role="Editor" status="neutral" />
        <MemberRow name="Noah Chen" role="Pending invite" status="warning" />
      </div>
    </Surface>
  );
}

function RoleChangePreview({
  state,
  mode,
}: {
  state: SettingsAdminPreviewState;
  mode: SettingsAdminPreviewMode;
}) {
  const isAttention = state === 'attention';
  const guided = mode === 'guided';
  const isLoading = state === 'loading';

  return (
    <Surface>
      <Hero
        eyebrow="Permission change"
        title="Update member role"
        description="Compare the current role with the next one and make the capability impact obvious before the change is confirmed."
      />

      {isAttention ? (
        <Alert
          variant="danger"
          title="This role change grants billing and member management access"
          description="Promoting this member to admin increases deletion, billing, and invite authority."
        />
      ) : null}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50/80 p-4 dark:border-neutral-800 dark:bg-neutral-900/70">
          <p className="text-xs font-mono uppercase text-neutral-500">Current</p>
          <p className="mt-2 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            Editor
          </p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-xs font-mono uppercase text-neutral-500">Next</p>
          <p className="mt-2 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            Admin
          </p>
        </div>
      </div>

      {guided ? (
        <div className="flex flex-wrap gap-2">
          <Tag label="Can manage billing" variant="primary" />
          <Tag label="Can invite admins" variant="primary" />
          <Tag label="Can delete projects" />
        </div>
      ) : null}

      <Button color="primary" fullWidth loading={isLoading}>
        Save role change
      </Button>
    </Surface>
  );
}

function BillingSettingsPreview({
  state,
  mode,
}: {
  state: SettingsAdminPreviewState;
  mode: SettingsAdminPreviewMode;
}) {
  const isAttention = state === 'attention';
  const guided = mode === 'guided';
  const isLoading = state === 'loading';

  return (
    <Surface>
      <Hero
        eyebrow="Billing"
        title="Billing settings"
        description="Review plan health, renewal timing, and invoice settings before making payment or seat changes."
      />

      {isAttention ? (
        <Alert
          variant="warning"
          title="Your payment method needs attention"
          description="Update the card before renewal to avoid interrupted access."
        />
      ) : null}

      <div className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
        <div>
          <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            Growth plan
          </p>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            24 active seats, annual billing
          </p>
        </div>
        <Badge label="Renews May 28" size="sm" variant="success" />
      </div>

      {guided ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <TextInput
            label="Invoice email"
            placeholder="billing@company.com"
            inputProps={{ defaultValue: 'billing@kevin.studio' }}
          />
          <TextInput
            label="Purchase order"
            placeholder="Optional"
            inputProps={{ defaultValue: 'PO-2048' }}
          />
        </div>
      ) : null}

      <Button color="primary" fullWidth loading={isLoading}>
        Update payment method
      </Button>
    </Surface>
  );
}

function DestructiveConfirmationsPreview({
  state,
  mode,
}: {
  state: SettingsAdminPreviewState;
  mode: SettingsAdminPreviewMode;
}) {
  const isAttention = state === 'attention';
  const guided = mode === 'guided';
  const isLoading = state === 'loading';

  return (
    <Surface>
      <Hero
        eyebrow="High risk action"
        title="Delete workspace"
        description="Make the blast radius explicit and add just enough friction to prevent accidental irreversible admin actions."
      />

      <Alert
        variant={isAttention ? 'danger' : 'warning'}
        title="Deleting this workspace permanently removes projects and approvals"
        description="Export data and transfer ownership before continuing. This action cannot be undone."
      />

      {guided ? (
        <TextInput
          label="Type DELETE to continue"
          placeholder="DELETE"
          inputProps={{ defaultValue: isAttention ? 'DELETE' : '' }}
        />
      ) : null}

      <div className="flex items-center justify-between rounded-2xl border border-dashed border-danger/40 bg-danger/5 p-4">
        <div>
          <p className="text-sm font-semibold text-danger">
            Includes 42 projects and 186 approvals
          </p>
          <p className="mt-1 text-sm text-danger/80">
            Workspace domains, comments, and audit history are removed too.
          </p>
        </div>
        <Badge label="Permanent" size="sm" variant="danger" />
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <Button fullWidth variant="outline" color="neutral">
          Cancel
        </Button>
        <Button fullWidth color="danger" loading={isLoading}>
          Delete workspace
        </Button>
      </div>
    </Surface>
  );
}

export default function WebSettingsAdminPreview({
  patternId,
  state = 'default',
  mode = 'standard',
}: WebSettingsAdminPreviewProps) {
  switch (patternId) {
    case 'member-management':
      return <MemberManagementPreview state={state} mode={mode} />;
    case 'role-change':
      return <RoleChangePreview state={state} mode={mode} />;
    case 'billing-settings':
      return <BillingSettingsPreview state={state} mode={mode} />;
    case 'destructive-confirmations':
      return <DestructiveConfirmationsPreview state={state} mode={mode} />;
    default:
      return null;
  }
}
