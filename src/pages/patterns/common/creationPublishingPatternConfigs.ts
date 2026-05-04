export type CreationPublishingPatternId =
  | 'editor-flow'
  | 'draft-save'
  | 'review-handoff'
  | 'publish-confirmation';

export type CreationPublishingPreviewState =
  | 'default'
  | 'attention'
  | 'loading';
export type CreationPublishingPreviewMode = 'standard' | 'guided';

type CreationPublishingGuide = {
  title: string;
  description: string;
  code: string;
  previewState?: CreationPublishingPreviewState;
  previewMode?: CreationPublishingPreviewMode;
};

type CreationPublishingCompositionRow = {
  id: string;
  property: string;
  type: string;
  description: string;
};

export type CreationPublishingPatternConfig = {
  id: CreationPublishingPatternId;
  title: string;
  webDescription: string;
  appDescription: string;
  webControllerDescription: string;
  appControllerDescription: string;
  appPreviewMinHeight?: number;
  guides: [
    CreationPublishingGuide,
    CreationPublishingGuide,
    CreationPublishingGuide,
  ];
  checklist: string;
  webCompositionRows: CreationPublishingCompositionRow[];
  appCompositionRows: CreationPublishingCompositionRow[];
};

const editorFlowGuides: [
  CreationPublishingGuide,
  CreationPublishingGuide,
  CreationPublishingGuide,
] = [
  {
    title: 'Primary Editing Surface',
    description:
      'Editor flows should keep the creation surface dominant while still exposing structure, status, and next actions. The person creating content should never have to wonder where the draft lives or how close it is to publish-ready.',
    code: `
import Button from '@/components/action/Button';
import TextInput from '@/components/input/TextInput';

export function EditorShell() {
  return (
    <>
      <TextInput label="Title" placeholder="Spring launch email" />
      <Button color="primary">Save draft</Button>
    </>
  );
}`.trim(),
  },
  {
    title: 'Guided Authoring Cues',
    description:
      'Guided mode should reveal structure and readiness without turning the editor into a checklist app. Use lightweight chips or section summaries to show what still needs work and what is already complete.',
    code: `
import Tag from '@/components/data/Tag';

export function EditorChecklist() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag label="Headline ready" variant="primary" />
      <Tag label="CTA missing" />
      <Tag label="Legal note pending" />
    </div>
  );
}`.trim(),
    previewMode: 'guided',
  },
  {
    title: 'Blocked Authoring State',
    description:
      'If a draft cannot move forward because required content is missing or another editor has conflicting changes, elevate that constraint without obscuring the work itself. The warning should point to the exact thing that needs attention.',
    code: `
import Alert from '@/components/feedback/Alert';

export function EditorWarning() {
  return (
    <Alert
      variant="warning"
      title="This draft is missing a primary CTA"
      description="Add the publish destination link before sending this draft to review."
    />
  );
}`.trim(),
    previewState: 'attention',
  },
];

const draftSaveGuides: [
  CreationPublishingGuide,
  CreationPublishingGuide,
  CreationPublishingGuide,
] = [
  {
    title: 'Save Confidence',
    description:
      'Draft-save patterns should answer whether the latest work is safe without demanding extra effort. The save signal needs to be calm, visible, and connected to the draft identity itself.',
    code: `
import Badge from '@/components/data/Badge';

export function SaveState() {
  return (
    <div className="rounded-2xl border p-4">
      <Badge label="Saved 2 minutes ago" variant="success" />
    </div>
  );
}`.trim(),
  },
  {
    title: 'Guided Recovery Context',
    description:
      'When autosave, local drafts, or version history matter, guided mode should explain where the work is being preserved and how to recover it. This is especially important when editing spans devices or collaborators.',
    code: `
import Tag from '@/components/data/Tag';

export function SaveHints() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag label="Autosave enabled" variant="primary" />
      <Tag label="Cloud synced" />
      <Tag label="Version history available" />
    </div>
  );
}`.trim(),
    previewMode: 'guided',
  },
  {
    title: 'Save Failure Or Conflict',
    description:
      'If save fails or a conflicting version exists, that state should be unmistakable. A silent failure is catastrophic here. The recovery path should tell the person whether to retry, duplicate, or resolve a conflict.',
    code: `
import Alert from '@/components/feedback/Alert';

export function SaveFailure() {
  return (
    <Alert
      variant="danger"
      title="We couldn't save the latest changes"
      description="Retry the save or restore the last synced version before closing this editor."
    />
  );
}`.trim(),
    previewState: 'attention',
  },
];

const reviewHandoffGuides: [
  CreationPublishingGuide,
  CreationPublishingGuide,
  CreationPublishingGuide,
] = [
  {
    title: 'Review Request Summary',
    description:
      'Review handoff should make it obvious what is being sent, who needs to review it, and what decision they are expected to make. The handoff surface is the bridge between creation and collaboration.',
    code: `
import Button from '@/components/action/Button';
import Badge from '@/components/data/Badge';

export function ReviewRequest() {
  return (
    <div className="rounded-2xl border p-4">
      <Badge label="Ready for review" variant="primary" />
      <Button color="primary">Send to reviewers</Button>
    </div>
  );
}`.trim(),
  },
  {
    title: 'Guided Reviewer Framing',
    description:
      'Guided mode should explain the review lens before handoff happens: copy, design polish, legal review, or stakeholder sign-off. This reduces vague review requests and accelerates useful feedback.',
    code: `
import Tag from '@/components/data/Tag';

export function ReviewScope() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag label="Content review" variant="primary" />
      <Tag label="Design sign-off" />
      <Tag label="Legal check" />
    </div>
  );
}`.trim(),
    previewMode: 'guided',
  },
  {
    title: 'Incomplete Handoff',
    description:
      'If a draft is missing required assets or metadata, block the handoff explicitly. The person handing work off should know exactly what makes the package incomplete before it reaches reviewers.',
    code: `
import Alert from '@/components/feedback/Alert';

export function ReviewBlocker() {
  return (
    <Alert
      variant="warning"
      title="Review handoff is incomplete"
      description="Attach the final hero image and confirm owner notes before sending this draft."
    />
  );
}`.trim(),
    previewState: 'attention',
  },
];

const publishConfirmationGuides: [
  CreationPublishingGuide,
  CreationPublishingGuide,
  CreationPublishingGuide,
] = [
  {
    title: 'Final Publish Check',
    description:
      'Publish confirmation should summarize the exact artifact, destination, and timing before the final action. This is the point where irreversible visibility changes often happen, so clarity matters more than drama.',
    code: `
import Badge from '@/components/data/Badge';
import Button from '@/components/action/Button';

export function PublishSummary() {
  return (
    <div className="rounded-2xl border p-4">
      <Badge label="Publishes today" variant="success" />
      <Button color="primary">Publish now</Button>
    </div>
  );
}`.trim(),
  },
  {
    title: 'Guided Destination Review',
    description:
      'Guided mode should reinforce where the content goes and who will see it. That might mean environment, audience segment, or scheduled time. People should not publish while still guessing about scope.',
    code: `
import Tag from '@/components/data/Tag';

export function PublishScope() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag label="Homepage banner" variant="primary" />
      <Tag label="US audience" />
      <Tag label="Scheduled 9:00 AM" />
    </div>
  );
}`.trim(),
    previewMode: 'guided',
  },
  {
    title: 'High-Risk Publish Warning',
    description:
      'If the publish action affects a broad audience, overwrites live content, or bypasses review, the confirmation should say so clearly. The warning should explain the blast radius, not just say “are you sure?”',
    code: `
import Alert from '@/components/feedback/Alert';

export function PublishWarning() {
  return (
    <Alert
      variant="danger"
      title="This replaces the live homepage banner"
      description="Publishing now updates the experience for all signed-out visitors immediately."
    />
  );
}`.trim(),
    previewState: 'attention',
  },
];

export const creationPublishingPatternConfigs: Record<
  CreationPublishingPatternId,
  CreationPublishingPatternConfig
> = {
  'editor-flow': {
    id: 'editor-flow',
    title: 'Editor Flow',
    webDescription:
      'A creation pattern for structured authoring, status-aware editing, and next-step actions inside browser-based editors.',
    appDescription:
      'A native creation pattern for focused editing, section progress, and touch-first authoring controls.',
    webControllerDescription:
      'Switch between the standard editor shell and a guided authoring mode, plus the state where required content is blocking progress.',
    appControllerDescription:
      'Toggle between the normal mobile editor flow and a guided mode with stronger readiness cues and blocked-field messaging.',
    appPreviewMinHeight: 780,
    guides: editorFlowGuides,
    checklist:
      'Keep the editing surface primary, show draft identity and readiness nearby, and make blocked authoring states specific enough to act on quickly.',
    webCompositionRows: [
      {
        id: '1',
        property: 'TextInput',
        type: 'Primary authoring field',
        description:
          'Captures the main draft content and reinforces what is being edited.',
      },
      {
        id: '2',
        property: 'Button',
        type: 'Authoring action',
        description:
          'Handles saving progress or moving the draft to the next step.',
      },
      {
        id: '3',
        property: 'Tag',
        type: 'Readiness cues',
        description:
          'Shows completion or missing-content hints without leaving the editor.',
      },
      {
        id: '4',
        property: 'Alert',
        type: 'Blocked authoring state',
        description:
          'Explains what prevents the draft from progressing further.',
      },
    ],
    appCompositionRows: [
      {
        id: '1',
        property: 'AppTextInput',
        type: 'Primary authoring field',
        description:
          'Supports touch-first editing and draft identity on mobile.',
      },
      {
        id: '2',
        property: 'AppButton',
        type: 'Authoring action',
        description:
          'Lets the person save, continue, or send the draft forward.',
      },
      {
        id: '3',
        property: 'AppTag',
        type: 'Readiness cues',
        description:
          'Provides compact progress signals in a stacked layout.',
      },
      {
        id: '4',
        property: 'AppAlert',
        type: 'Blocked authoring state',
        description:
          'Raises missing required content without hiding the editor.',
      },
    ],
  },
  'draft-save': {
    id: 'draft-save',
    title: 'Draft Save',
    webDescription:
      'A draft-preservation pattern for save confidence, version awareness, and conflict recovery inside browser-based creation flows.',
    appDescription:
      'A native draft-save pattern for autosave confidence, sync status, and recovery when a mobile session is interrupted.',
    webControllerDescription:
      'Switch between the calm save state and guided preservation mode, plus the failure state where the latest changes are not yet safe.',
    appControllerDescription:
      'Toggle between the normal mobile save status and a guided mode that explains autosave, sync, and recovery options more clearly.',
    appPreviewMinHeight: 760,
    guides: draftSaveGuides,
    checklist:
      'Make save status trustworthy at a glance, explain where the draft is preserved, and treat save failure as a top-level recovery state.',
    webCompositionRows: [
      {
        id: '1',
        property: 'Badge',
        type: 'Save state',
        description:
          'Communicates last saved time, syncing, or restored status.',
      },
      {
        id: '2',
        property: 'Tag',
        type: 'Preservation metadata',
        description:
          'Explains autosave, version history, or cloud sync behavior.',
      },
      {
        id: '3',
        property: 'Button',
        type: 'Recovery action',
        description:
          'Supports retrying save or restoring the latest safe version.',
      },
      {
        id: '4',
        property: 'Alert',
        type: 'Save failure',
        description:
          'Escalates when the newest work has not been safely preserved.',
      },
    ],
    appCompositionRows: [
      {
        id: '1',
        property: 'AppBadge',
        type: 'Save state',
        description:
          'Keeps last-saved confidence visible inside the mobile editor stack.',
      },
      {
        id: '2',
        property: 'AppTag',
        type: 'Preservation metadata',
        description:
          'Shows autosave, sync, and history availability without leaving the screen.',
      },
      {
        id: '3',
        property: 'AppButton',
        type: 'Recovery action',
        description:
          'Lets the person retry save or restore a synced version.',
      },
      {
        id: '4',
        property: 'AppAlert',
        type: 'Save failure',
        description:
          'Warns when edits are at risk because save or sync failed.',
      },
    ],
  },
  'review-handoff': {
    id: 'review-handoff',
    title: 'Review Handoff',
    webDescription:
      'A handoff pattern for sending drafts into review with clear reviewer scope, expectations, and completeness checks.',
    appDescription:
      'A native handoff pattern for moving drafts into review with compact reviewer framing and mobile-safe completeness checks.',
    webControllerDescription:
      'Switch between the standard review request and guided reviewer framing, plus the blocked state where the draft is incomplete for handoff.',
    appControllerDescription:
      'Toggle between the normal mobile handoff flow and a guided mode that clarifies who should review what before sending.',
    appPreviewMinHeight: 760,
    guides: reviewHandoffGuides,
    checklist:
      'Summarize the draft and expected review clearly, frame the review lens before sending, and block incomplete handoffs with specific missing pieces.',
    webCompositionRows: [
      {
        id: '1',
        property: 'Badge',
        type: 'Handoff readiness',
        description:
          'Signals whether the draft is prepared for review yet.',
      },
      {
        id: '2',
        property: 'Button',
        type: 'Send to review',
        description:
          'Moves the draft into the next collaborative step.',
      },
      {
        id: '3',
        property: 'Tag',
        type: 'Review framing',
        description:
          'Explains the type of review expected from recipients.',
      },
      {
        id: '4',
        property: 'Alert',
        type: 'Handoff blocker',
        description:
          'Lists the missing asset or metadata preventing review handoff.',
      },
    ],
    appCompositionRows: [
      {
        id: '1',
        property: 'AppBadge',
        type: 'Handoff readiness',
        description:
          'Keeps review readiness visible in the mobile confirmation step.',
      },
      {
        id: '2',
        property: 'AppButton',
        type: 'Send to review',
        description:
          'Lets the person trigger the review request from a touch-first layout.',
      },
      {
        id: '3',
        property: 'AppTag',
        type: 'Review framing',
        description:
          'Shows the review lens in compact mobile chips.',
      },
      {
        id: '4',
        property: 'AppAlert',
        type: 'Handoff blocker',
        description:
          'Warns when a missing asset or note prevents the review request.',
      },
    ],
  },
  'publish-confirmation': {
    id: 'publish-confirmation',
    title: 'Publish Confirmation',
    webDescription:
      'A publishing pattern for final destination checks, audience clarity, and high-risk confirmation before content goes live.',
    appDescription:
      'A native publishing pattern for final confirmation, audience scope, and go-live risk framing on mobile.',
    webControllerDescription:
      'Switch between the standard publish confirmation and guided destination review, plus the high-risk state where live overwrite or broad exposure needs emphasis.',
    appControllerDescription:
      'Toggle between the normal mobile publish confirmation and a guided mode that clarifies destination, schedule, and audience before go-live.',
    appPreviewMinHeight: 760,
    guides: publishConfirmationGuides,
    checklist:
      'Summarize exactly what will go live, where it will appear, and when it changes audience visibility, then elevate broad-impact publish risks clearly.',
    webCompositionRows: [
      {
        id: '1',
        property: 'Badge',
        type: 'Publish timing',
        description:
          'Marks whether the content publishes now, later, or replaces live content.',
      },
      {
        id: '2',
        property: 'Button',
        type: 'Final publish action',
        description:
          'Triggers the live update or schedule confirmation.',
      },
      {
        id: '3',
        property: 'Tag',
        type: 'Destination and audience scope',
        description:
          'Makes environment, audience, and schedule explicit before publish.',
      },
      {
        id: '4',
        property: 'Alert',
        type: 'High-risk warning',
        description:
          'Explains blast radius when the publish affects broad or live surfaces.',
      },
    ],
    appCompositionRows: [
      {
        id: '1',
        property: 'AppBadge',
        type: 'Publish timing',
        description:
          'Keeps go-live timing visible on the mobile confirmation step.',
      },
      {
        id: '2',
        property: 'AppButton',
        type: 'Final publish action',
        description:
          'Handles the last confirm action in a touch-friendly layout.',
      },
      {
        id: '3',
        property: 'AppTag',
        type: 'Destination and audience scope',
        description:
          'Clarifies where the content appears and who will see it.',
      },
      {
        id: '4',
        property: 'AppAlert',
        type: 'High-risk warning',
        description:
          'Warns when the publish replaces live content or broadens exposure immediately.',
      },
    ],
  },
};
