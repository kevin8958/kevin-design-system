export type OnboardingPatternId =
  | 'workspace-creation'
  | 'invite-acceptance'
  | 'first-run-setup'
  | 'permission-education';

export type OnboardingPreviewState = 'default' | 'attention' | 'loading';
export type OnboardingPreviewMode = 'standard' | 'guided';

type OnboardingGuide = {
  title: string;
  description: string;
  code: string;
  previewState?: OnboardingPreviewState;
  previewMode?: OnboardingPreviewMode;
};

type OnboardingCompositionRow = {
  id: string;
  property: string;
  type: string;
  description: string;
};

export type OnboardingPatternConfig = {
  id: OnboardingPatternId;
  title: string;
  webDescription: string;
  appDescription: string;
  webControllerDescription: string;
  appControllerDescription: string;
  appPreviewMinHeight?: number;
  guides: [OnboardingGuide, OnboardingGuide, OnboardingGuide];
  checklist: string;
  webCompositionRows: OnboardingCompositionRow[];
  appCompositionRows: OnboardingCompositionRow[];
};

const workspaceCreationGuides: [OnboardingGuide, OnboardingGuide, OnboardingGuide] = [
  {
    title: 'Core Flow',
    description:
      'Workspace creation should establish identity, destination, and the next action in one pass. Collect only what is required to name the space, claim the URL, and move into setup without making the first step feel like admin work.',
    code: `
import Button from '@/components/action/Button';
import TextInput from '@/components/input/TextInput';

export function WorkspaceCreation() {
  return (
    <>
      <TextInput label="Workspace name" placeholder="Kevin Studio" />
      <TextInput label="Workspace URL" placeholder="kevin-studio" />
      <Button fullWidth color="primary">
        Create workspace
      </Button>
    </>
  );
}`.trim(),
  },
  {
    title: 'Templates And Invitations',
    description:
      'When the product offers starter templates or teammate invites, keep them secondary to the core identity fields. They should accelerate setup, not block the moment of creation.',
    code: `
import Tag from '@/components/data/Tag';

export function WorkspaceSetupOptions() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag label="Product roadmap" variant="primary" />
      <Tag label="Design system" />
      <Tag label="Invite 3 teammates" />
    </div>
  );
}`.trim(),
    previewMode: 'guided',
  },
  {
    title: 'Validation And Trust',
    description:
      'URL conflicts, naming rules, and billing implications need to show up before the person hits a dead end. Prefer inline guidance supported by one calm alert rather than multiple competing warnings.',
    code: `
import Alert from '@/components/feedback/Alert';
import TextInput from '@/components/input/TextInput';

export function WorkspaceValidation() {
  return (
    <>
      <Alert
        variant="warning"
        title="This workspace URL is already in use"
        description="Pick a unique workspace URL before continuing."
      />
      <TextInput
        label="Workspace URL"
        value="kevin-product"
        error
        errorMsg="Choose a unique URL for your team."
      />
    </>
  );
}`.trim(),
    previewState: 'attention',
  },
];

const inviteAcceptanceGuides: [OnboardingGuide, OnboardingGuide, OnboardingGuide] = [
  {
    title: 'Context First',
    description:
      'Invite acceptance should confirm who invited the person, which workspace they are joining, and what role they will receive before asking for action. The goal is immediate confidence, not just a big accept button.',
    code: `
import Badge from '@/components/data/Badge';
import Button from '@/components/action/Button';

export function InviteAcceptance() {
  return (
    <>
      <Badge label="Editor invite" variant="primary" />
      <Button fullWidth color="primary">
        Accept invite
      </Button>
    </>
  );
}`.trim(),
  },
  {
    title: 'Role And Team Clarity',
    description:
      'If the invite grants access to specific spaces, permissions, or teammates, surface that scope early. People should understand the reach of the invitation before they accept it.',
    code: `
import Avatar from '@/components/data/Avatar';

export function InviteTeamPreview() {
  return (
    <div className="flex items-center gap-2">
      <Avatar name="Mina Park" size="sm" />
      <Avatar name="Jordan Lee" size="sm" />
      <Avatar name="Noah Chen" size="sm" />
    </div>
  );
}`.trim(),
    previewMode: 'guided',
  },
  {
    title: 'Mismatch And Recovery',
    description:
      'When the person opens the invite with the wrong email or stale session, the recovery path needs to be obvious. Don’t strand them between sign-in and acceptance without explaining what account is required.',
    code: `
import Alert from '@/components/feedback/Alert';

export function InviteMismatch() {
  return (
    <Alert
      variant="danger"
      title="This invite was sent to another email"
      description="Sign in with the invited account or ask the owner to resend the invitation."
    />
  );
}`.trim(),
    previewState: 'attention',
  },
];

const firstRunSetupGuides: [OnboardingGuide, OnboardingGuide, OnboardingGuide] = [
  {
    title: 'Setup Checklist',
    description:
      'The first-run experience should make the next three or four actions feel finite and rewarding. Use a checklist with visible progress so people know what “done” means before they explore the rest of the product.',
    code: `
import Badge from '@/components/data/Badge';

export function FirstRunChecklist() {
  return (
    <div className="flex items-center justify-between rounded-2xl border p-4">
      <span>Invite teammates</span>
      <Badge label="Recommended" variant="primary" />
    </div>
  );
}`.trim(),
  },
  {
    title: 'Guided Ordering',
    description:
      'Some products benefit from a recommended order rather than a flat list. If settings like security, billing, or first content creation are interdependent, communicate the sequence without turning the screen into a wizard.',
    code: `
import Button from '@/components/action/Button';

export function RecommendedNextStep() {
  return (
    <Button color="primary" size="sm">
      Continue setup
    </Button>
  );
}`.trim(),
    previewMode: 'guided',
  },
  {
    title: 'Required Setup Warnings',
    description:
      'If one blocked step prevents launch, call it out clearly and anchor the user back to that task. Avoid generic “finish setup” messaging when one explicit dependency is the real issue.',
    code: `
import Alert from '@/components/feedback/Alert';

export function SetupWarning() {
  return (
    <Alert
      variant="warning"
      title="Finish security review before inviting the team"
      description="Workspace access should stay limited until SSO and recovery settings are confirmed."
    />
  );
}`.trim(),
    previewState: 'attention',
  },
];

const permissionEducationGuides: [OnboardingGuide, OnboardingGuide, OnboardingGuide] = [
  {
    title: 'Permission Request Framing',
    description:
      'Explain what access is being requested before the platform prompt appears. People are more likely to grant camera, notification, or file access when the benefit is concrete and immediate.',
    code: `
import Button from '@/components/action/Button';

export function PermissionPrompt() {
  return (
    <Button fullWidth color="primary">
      Enable notifications
    </Button>
  );
}`.trim(),
  },
  {
    title: 'Why We Ask',
    description:
      'Permission education works best when each request is paired with a plain-language explanation of the user benefit, the fallback if they skip it, and a path to revisit the setting later.',
    code: `
import Tag from '@/components/data/Tag';

export function PermissionReasons() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag label="Camera for receipts" variant="primary" />
      <Tag label="Notifications for approvals" variant="primary" />
    </div>
  );
}`.trim(),
    previewMode: 'guided',
  },
  {
    title: 'Blocked Or Deferred States',
    description:
      'When a permission has already been denied, the UI should pivot from asking to educating. Replace the primary request with settings guidance and reassure the user what still works without access.',
    code: `
import Alert from '@/components/feedback/Alert';

export function PermissionFallback() {
  return (
    <Alert
      variant="info"
      title="Notifications are off for now"
      description="You can continue, then enable alerts later from browser or device settings."
    />
  );
}`.trim(),
    previewState: 'attention',
  },
];

export const onboardingPatternConfigs: Record<
  OnboardingPatternId,
  OnboardingPatternConfig
> = {
  'workspace-creation': {
    id: 'workspace-creation',
    title: 'Workspace Creation',
    webDescription:
      'A browser-first onboarding pattern for naming a workspace, claiming its URL, and optionally choosing starter structure without overwhelming the first step.',
    appDescription:
      'A mobile onboarding pattern for creating a workspace with clear identity fields, light setup options, and a single obvious next action.',
    webControllerDescription:
      'Toggle the overall state and whether the screen stays lightweight or expands into a more guided setup with templates and teammate invites.',
    appControllerDescription:
      'Switch between the main creation states and whether the native flow includes guided setup details beyond the required workspace fields.',
    appPreviewMinHeight: 720,
    guides: workspaceCreationGuides,
    checklist:
      'Collect the name and URL first, keep optional setup secondary, and make validation specific enough that people can recover without leaving the screen.',
    webCompositionRows: [
      {
        id: '1',
        property: 'TextInput',
        type: 'Identity fields',
        description:
          'Captures the workspace name and URL with inline validation and placeholder guidance.',
      },
      {
        id: '2',
        property: 'Tag',
        type: 'Starter options',
        description:
          'Highlights optional templates, sample projects, or invite bundles without competing with the main form.',
      },
      {
        id: '3',
        property: 'Button',
        type: 'Primary action',
        description:
          'Carries the irreversible step of creating the workspace and starting setup.',
      },
      {
        id: '4',
        property: 'Alert',
        type: 'Validation summary',
        description:
          'Surfaces URL conflicts or account-level blockers when inline errors are not enough.',
      },
    ],
    appCompositionRows: [
      {
        id: '1',
        property: 'AppTextInput',
        type: 'Identity fields',
        description:
          'Captures workspace name and URL with touch-friendly spacing and inline error handling.',
      },
      {
        id: '2',
        property: 'AppTag',
        type: 'Starter options',
        description:
          'Keeps template and invite choices scannable without opening additional sheets.',
      },
      {
        id: '3',
        property: 'AppButton',
        type: 'Primary action',
        description:
          'Moves the user from creation into setup with one obvious CTA.',
      },
      {
        id: '4',
        property: 'AppAlert',
        type: 'Validation summary',
        description:
          'Communicates blockers that affect the whole flow, not just one field.',
      },
    ],
  },
  'invite-acceptance': {
    id: 'invite-acceptance',
    title: 'Invite Acceptance',
    webDescription:
      'A web onboarding pattern for joining an existing workspace with clear inviter context, role clarity, and safe recovery when the wrong account is active.',
    appDescription:
      'A native invite-acceptance pattern that confirms workspace context, granted access, and the correct account before joining the user to the team.',
    webControllerDescription:
      'Switch between the normal acceptance path and a richer guided view that exposes team and role details before the person accepts.',
    appControllerDescription:
      'Toggle between the main invite state and a more guided mobile version that gives extra role and teammate context before acceptance.',
    appPreviewMinHeight: 700,
    guides: inviteAcceptanceGuides,
    checklist:
      'Confirm inviter, workspace, and role up front, keep recovery obvious when the wrong email is active, and make accept versus decline feel like an informed choice.',
    webCompositionRows: [
      {
        id: '1',
        property: 'Badge',
        type: 'Role summary',
        description:
          'Signals access level at a glance before the person commits to joining.',
      },
      {
        id: '2',
        property: 'Avatar',
        type: 'Team context',
        description:
          'Adds trust by showing inviter or teammate identity around the invitation.',
      },
      {
        id: '3',
        property: 'Button',
        type: 'Accept / recover',
        description:
          'Supports accept, decline, or help actions without burying the primary decision.',
      },
      {
        id: '4',
        property: 'Alert',
        type: 'Mismatch recovery',
        description:
          'Explains what to do when the invite is opened under the wrong account.',
      },
    ],
    appCompositionRows: [
      {
        id: '1',
        property: 'AppBadge',
        type: 'Role summary',
        description:
          'Keeps access level obvious in a compact touch-first header.',
      },
      {
        id: '2',
        property: 'AppAvatar',
        type: 'Team context',
        description:
          'Reinforces trust by showing inviter and teammate identity.',
      },
      {
        id: '3',
        property: 'AppButton',
        type: 'Accept / recover',
        description:
          'Supports the main acceptance action plus decline or resend paths.',
      },
      {
        id: '4',
        property: 'AppAlert',
        type: 'Mismatch recovery',
        description:
          'Clarifies which account is required when the invitation cannot be accepted as-is.',
      },
    ],
  },
  'first-run-setup': {
    id: 'first-run-setup',
    title: 'First-Run Setup',
    webDescription:
      'A structured onboarding pattern for turning a new workspace into a usable environment through a guided checklist, recommended order, and clear progress.',
    appDescription:
      'A mobile setup pattern that translates first-run activation into a finite, thumb-friendly checklist with progress and guided next steps.',
    webControllerDescription:
      'Toggle between a lean checklist and a more guided setup view, plus the state where one required task blocks the rest of the launch.',
    appControllerDescription:
      'Switch between the normal checklist view and a richer guided mobile setup experience with stronger ordering and required-step emphasis.',
    appPreviewMinHeight: 760,
    guides: firstRunSetupGuides,
    checklist:
      'Make progress visible, show which step is required versus recommended, and keep the next best action easy to reach without forcing people through a rigid wizard.',
    webCompositionRows: [
      {
        id: '1',
        property: 'Badge',
        type: 'Progress and status',
        description:
          'Marks completion, recommendation level, or blocked steps inside the checklist.',
      },
      {
        id: '2',
        property: 'Button',
        type: 'Next-step action',
        description:
          'Moves the user into the most relevant unfinished task without losing context.',
      },
      {
        id: '3',
        property: 'Alert',
        type: 'Blocked requirement',
        description:
          'Calls out the one missing dependency that prevents the rest of onboarding from succeeding.',
      },
      {
        id: '4',
        property: 'Tag',
        type: 'Task classification',
        description:
          'Helps distinguish required, recommended, and optional setup actions.',
      },
    ],
    appCompositionRows: [
      {
        id: '1',
        property: 'AppBadge',
        type: 'Progress and status',
        description:
          'Keeps setup progress scannable inside a stacked native layout.',
      },
      {
        id: '2',
        property: 'AppButton',
        type: 'Next-step action',
        description:
          'Guides the user to the most important remaining setup task.',
      },
      {
        id: '3',
        property: 'AppAlert',
        type: 'Blocked requirement',
        description:
          'Explains which required step needs attention before activation continues.',
      },
      {
        id: '4',
        property: 'AppTag',
        type: 'Task classification',
        description:
          'Differentiates optional versus required setup actions in a dense mobile list.',
      },
    ],
  },
  'permission-education': {
    id: 'permission-education',
    title: 'Permission Education',
    webDescription:
      'A pre-permission pattern for explaining why notifications, file access, or device capabilities are requested before the browser prompt appears.',
    appDescription:
      'A native permission-education pattern that frames platform prompts with user benefit, fallback behavior, and a calm path for deferred access.',
    webControllerDescription:
      'Switch between the normal permission framing and a guided version that explains each request more deeply, plus the state where access has already been denied.',
    appControllerDescription:
      'Toggle between default permission education, a more guided explanation mode, and the state where the user has deferred or blocked access.',
    appPreviewMinHeight: 740,
    guides: permissionEducationGuides,
    checklist:
      'Explain the benefit before the prompt, separate required from optional access, and always offer a calm fallback for users who skip or deny permissions.',
    webCompositionRows: [
      {
        id: '1',
        property: 'Alert',
        type: 'Fallback guidance',
        description:
          'Reframes the screen when a permission is blocked or intentionally deferred.',
      },
      {
        id: '2',
        property: 'Tag',
        type: 'Reason labels',
        description:
          'Connects each permission to the task it unlocks so the request feels earned.',
      },
      {
        id: '3',
        property: 'Button',
        type: 'Grant or defer',
        description:
          'Provides one clear next step plus a lower-pressure path to continue without full access.',
      },
      {
        id: '4',
        property: 'Badge',
        type: 'Required / optional marker',
        description:
          'Clarifies whether the permission is critical for activation or simply improves the experience.',
      },
    ],
    appCompositionRows: [
      {
        id: '1',
        property: 'AppAlert',
        type: 'Fallback guidance',
        description:
          'Explains the consequence of denied access and what still works without it.',
      },
      {
        id: '2',
        property: 'AppTag',
        type: 'Reason labels',
        description:
          'Pairs each permission with the app task it directly supports.',
      },
      {
        id: '3',
        property: 'AppButton',
        type: 'Grant or defer',
        description:
          'Keeps the permission request and the defer path equally understandable on mobile.',
      },
      {
        id: '4',
        property: 'AppBadge',
        type: 'Required / optional marker',
        description:
          'Distinguishes mandatory access from nice-to-have platform permissions.',
      },
    ],
  },
};
