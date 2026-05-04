'use client';

import Alert from '@/components/feedback/Alert';
import Avatar from '@/components/data/Avatar';
import Badge from '@/components/data/Badge';
import Tag from '@/components/data/Tag';
import Button from '@/components/action/Button';
import TextInput from '@/components/input/TextInput';
import FlexWrapper from '@/components/layout/FlexWrapper';
import type {
  OnboardingPatternId,
  OnboardingPreviewMode,
  OnboardingPreviewState,
} from '@/pages/patterns/common/onboardingPatternConfigs';

type WebOnboardingPreviewProps = {
  patternId: OnboardingPatternId;
  state?: OnboardingPreviewState;
  mode?: OnboardingPreviewMode;
};

const Surface = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full max-w-[640px] rounded-[32px] border border-neutral-200 bg-white p-7 shadow-[0_28px_100px_-36px_rgba(17,24,39,0.38)] dark:border-neutral-800 dark:bg-neutral-950">
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
    <span className="inline-flex w-fit items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-400/10 dark:text-primary-300">
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

const ChecklistRow = ({
  label,
  detail,
  tone,
}: {
  label: string;
  detail: string;
  tone: Data.BadgeVariant;
}) => (
  <div className="flex items-start justify-between gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 dark:border-neutral-800 dark:bg-neutral-900">
    <div className="min-w-0">
      <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
        {label}
      </p>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        {detail}
      </p>
    </div>
    <Badge
      label={tone === 'primary' ? 'Recommended' : tone === 'warning' ? 'Required' : 'Done'}
      size="sm"
      variant={tone}
    />
  </div>
);

function WorkspaceCreationPreview({
  state,
  mode,
}: {
  state: OnboardingPreviewState;
  mode: OnboardingPreviewMode;
}) {
  const isAttention = state === 'attention';
  const isLoading = state === 'loading';
  const guided = mode === 'guided';

  return (
    <Surface>
      <Hero
        eyebrow={guided ? 'Step 1 of 3' : 'Onboarding'}
        title="Create your workspace"
        description="Set the team name, claim the workspace URL, and optionally start from a template or invite your first teammates."
      />

      {isAttention ? (
        <Alert
          variant="warning"
          title="One detail needs attention"
          description="The URL you picked is already taken. Choose another URL to continue creating the workspace."
        />
      ) : null}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <TextInput
          label="Workspace name"
          placeholder="Kevin Studio"
          inputProps={{ defaultValue: 'Kevin Studio' }}
        />
        <TextInput
          label="Workspace URL"
          placeholder="kevin-studio"
          inputProps={{ defaultValue: 'kevin-product' }}
          error={isAttention}
          errorMsg="Choose a unique workspace URL."
        />
      </div>

      {guided ? (
        <>
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50/80 p-4 dark:border-neutral-800 dark:bg-neutral-900/70">
            <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Starter template
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Tag label="Design system" variant="primary" />
              <Tag label="Product roadmap" />
              <Tag label="Marketing launch" />
            </div>
          </div>

          <div className="rounded-2xl border border-dashed border-primary-200 bg-primary-50/60 p-4 dark:border-primary-400/20 dark:bg-primary-400/10">
            <p className="text-sm font-semibold text-primary-700 dark:text-primary-300">
              Invite teammates now or do it after setup
            </p>
            <p className="mt-1 text-sm text-primary-700/80 dark:text-primary-200/80">
              Start with a few email invites so the workspace is ready for the
              rest of the team as soon as it launches.
            </p>
          </div>
        </>
      ) : null}

      <div className="flex items-center justify-between gap-3 rounded-2xl border border-neutral-200 bg-neutral-50/80 p-4 dark:border-neutral-800 dark:bg-neutral-900/70">
        <div>
          <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            Billing starts after the trial
          </p>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            You can rename the workspace later without affecting your account owner.
          </p>
        </div>
        <Badge label="14-day trial" size="sm" variant="success" />
      </div>

      <Button fullWidth color="primary" loading={isLoading}>
        Create workspace
      </Button>
    </Surface>
  );
}

function InviteAcceptancePreview({
  state,
  mode,
}: {
  state: OnboardingPreviewState;
  mode: OnboardingPreviewMode;
}) {
  const isAttention = state === 'attention';
  const isLoading = state === 'loading';
  const guided = mode === 'guided';

  return (
    <Surface>
      <Hero
        eyebrow="Invitation"
        title="Join Kevin Product"
        description="Mina Park invited you to the Kevin Product workspace. Review the role and workspace context before you accept."
      />

      {isAttention ? (
        <Alert
          variant="danger"
          title="This invite was opened with the wrong account"
          description="Sign in with the invited email or ask the owner to resend the invitation."
        />
      ) : null}

      <div className="rounded-2xl border border-neutral-200 bg-neutral-50/80 p-4 dark:border-neutral-800 dark:bg-neutral-900/70">
        <FlexWrapper justify="between" items="start" classes="gap-3">
          <div>
            <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Kevin Product workspace
            </p>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              Shared product planning, design review, and launch coordination.
            </p>
          </div>
          <Badge label="Editor access" size="sm" variant="primary" />
        </FlexWrapper>
      </div>

      {guided ? (
        <div className="rounded-2xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
          <FlexWrapper justify="between" items="center" classes="mb-3">
            <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              You&apos;ll join this team
            </p>
            <div className="flex items-center gap-2">
              <Avatar name="Mina Park" size="sm" />
              <Avatar name="Jordan Lee" size="sm" />
              <Avatar name="Noah Chen" size="sm" />
            </div>
          </FlexWrapper>
          <div className="flex flex-wrap gap-2">
            <Tag label="Can comment" variant="primary" />
            <Tag label="Can edit shared pages" />
            <Tag label="No billing access" />
          </div>
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <Button fullWidth color="primary" loading={isLoading}>
          Accept invite
        </Button>
        <Button fullWidth variant="outline" color="neutral">
          Ask for another email
        </Button>
      </div>

      <p className="text-xs leading-5 text-neutral-500 dark:text-neutral-400">
        Accepting the invite signs you into the invited workspace and keeps your
        existing personal account intact.
      </p>
    </Surface>
  );
}

function FirstRunSetupPreview({
  state,
  mode,
}: {
  state: OnboardingPreviewState;
  mode: OnboardingPreviewMode;
}) {
  const isAttention = state === 'attention';
  const isLoading = state === 'loading';
  const guided = mode === 'guided';

  return (
    <Surface>
      <Hero
        eyebrow="First run"
        title="Finish your workspace setup"
        description="A few focused steps will make the workspace ready for teammates, review requests, and launch work."
      />

      {isAttention ? (
        <Alert
          variant="warning"
          title="Security review still needs to be completed"
          description="Finish SSO and recovery settings before inviting the rest of the team."
        />
      ) : null}

      <div className="flex items-center justify-between rounded-2xl border border-primary-200 bg-primary-50/60 px-4 py-3 dark:border-primary-400/20 dark:bg-primary-400/10">
        <div>
          <p className="text-sm font-semibold text-primary-700 dark:text-primary-300">
            Setup progress
          </p>
          <p className="mt-1 text-sm text-primary-700/80 dark:text-primary-200/80">
            2 of 4 launch steps completed
          </p>
        </div>
        <Badge label="50%" size="sm" variant="primary" />
      </div>

      <div className="space-y-3">
        <ChecklistRow
          label="Invite teammates"
          detail="Share the workspace with the people who need access first."
          tone="primary"
        />
        <ChecklistRow
          label="Review security settings"
          detail="Confirm SSO, recovery contacts, and owner coverage."
          tone="warning"
        />
        <ChecklistRow
          label="Create your first project"
          detail="Seed the workspace with one active planning surface."
          tone="success"
        />
      </div>

      {guided ? (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50/80 p-4 dark:border-neutral-800 dark:bg-neutral-900/70">
            <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Recommended next
            </p>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              Finish the security review before expanding team access.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50/80 p-4 dark:border-neutral-800 dark:bg-neutral-900/70">
            <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Quick launch tip
            </p>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              Keep optional setup after the first real project so momentum stays high.
            </p>
          </div>
        </div>
      ) : null}

      <Button fullWidth color="primary" loading={isLoading}>
        Continue setup
      </Button>
    </Surface>
  );
}

function PermissionEducationPreview({
  state,
  mode,
}: {
  state: OnboardingPreviewState;
  mode: OnboardingPreviewMode;
}) {
  const isAttention = state === 'attention';
  const isLoading = state === 'loading';
  const guided = mode === 'guided';

  return (
    <Surface>
      <Hero
        eyebrow="Permissions"
        title="Help us unlock the full workflow"
        description="A few permissions make approvals, uploads, and reminders feel seamless. You can still continue if you are not ready to grant everything yet."
      />

      {isAttention ? (
        <Alert
          variant="info"
          title="Notifications are currently blocked"
          description="You can continue without them, then enable alerts later from browser or device settings."
        />
      ) : null}

      <div className="space-y-3">
        <ChecklistRow
          label="Notifications"
          detail="Send approval reminders and due-date nudges at the right time."
          tone="primary"
        />
        <ChecklistRow
          label="File access"
          detail="Attach briefs, assets, and reference files directly from your device."
          tone="primary"
        />
        <ChecklistRow
          label="Camera"
          detail="Optional: capture receipts or whiteboard notes without leaving the flow."
          tone="success"
        />
      </div>

      {guided ? (
        <div className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50/80 p-4 dark:border-neutral-700 dark:bg-neutral-900/70">
          <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            Why we ask
          </p>
          <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
            <li>Notifications keep pending approvals from going stale.</li>
            <li>File access saves drafts without bouncing to another tool.</li>
            <li>Camera is optional and only supports capture-based workflows.</li>
          </ul>
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <Button fullWidth color="primary" loading={isLoading}>
          Enable permissions
        </Button>
        <Button fullWidth variant="outline" color="neutral">
          Ask later
        </Button>
      </div>
    </Surface>
  );
}

export default function WebOnboardingPreview({
  patternId,
  state = 'default',
  mode = 'standard',
}: WebOnboardingPreviewProps) {
  switch (patternId) {
    case 'workspace-creation':
      return <WorkspaceCreationPreview state={state} mode={mode} />;
    case 'invite-acceptance':
      return <InviteAcceptancePreview state={state} mode={mode} />;
    case 'first-run-setup':
      return <FirstRunSetupPreview state={state} mode={mode} />;
    case 'permission-education':
      return <PermissionEducationPreview state={state} mode={mode} />;
    default:
      return null;
  }
}
