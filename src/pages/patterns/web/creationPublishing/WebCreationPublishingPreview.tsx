'use client';

import Alert from '@/components/feedback/Alert';
import Badge from '@/components/data/Badge';
import Tag from '@/components/data/Tag';
import Button from '@/components/action/Button';
import TextInput from '@/components/input/TextInput';
import type {
  CreationPublishingPatternId,
  CreationPublishingPreviewMode,
  CreationPublishingPreviewState,
} from '@/pages/patterns/common/creationPublishingPatternConfigs';

type WebCreationPublishingPreviewProps = {
  patternId: CreationPublishingPatternId;
  state?: CreationPublishingPreviewState;
  mode?: CreationPublishingPreviewMode;
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

function EditorFlowPreview({
  state,
  mode,
}: {
  state: CreationPublishingPreviewState;
  mode: CreationPublishingPreviewMode;
}) {
  const isAttention = state === 'attention';
  const guided = mode === 'guided';
  const isLoading = state === 'loading';

  return (
    <Surface>
      <Hero
        eyebrow="Creation"
        title="Keep authoring focused and stateful"
        description="Make the draft identity, completion state, and next-step actions visible without taking over the writing surface."
      />

      {isAttention ? (
        <Alert
          variant="warning"
          title="This draft is missing a primary CTA"
          description="Add the publish destination link before sending this draft to review."
        />
      ) : null}

      <TextInput
        label="Draft title"
        placeholder="Spring launch email"
        inputProps={{ defaultValue: 'Spring launch email' }}
      />

      <InfoCard
        eyebrow="Section"
        title="Hero message"
        description="A concise launch message with supporting copy and CTA destination."
        trailing={<Badge label="Draft" size="sm" variant="neutral" />}
      />

      {guided ? (
        <div className="flex flex-wrap gap-2">
          <Tag label="Headline ready" variant="primary" />
          <Tag label="CTA missing" />
          <Tag label="Legal note pending" />
        </div>
      ) : null}

      <Button color="primary" fullWidth loading={isLoading}>
        Save draft
      </Button>
    </Surface>
  );
}

function DraftSavePreview({
  state,
  mode,
}: {
  state: CreationPublishingPreviewState;
  mode: CreationPublishingPreviewMode;
}) {
  const isAttention = state === 'attention';
  const guided = mode === 'guided';
  const isLoading = state === 'loading';

  return (
    <Surface>
      <Hero
        eyebrow="Draft save"
        title="Reassure the author that work is safe"
        description="Show last-saved confidence, where the draft is preserved, and what to do if save or sync fails."
      />

      {isAttention ? (
        <Alert
          variant="danger"
          title="We couldn't save the latest changes"
          description="Retry the save or restore the last synced version before closing this editor."
        />
      ) : null}

      <InfoCard
        eyebrow="Save status"
        title={isLoading ? 'Saving changes...' : 'Saved 2 minutes ago'}
        description="Autosave keeps the latest version in sync while you continue editing."
        trailing={
          <Badge
            label={isLoading ? 'Syncing' : 'Saved'}
            size="sm"
            variant={isLoading ? 'warning' : 'success'}
          />
        }
      />

      {guided ? (
        <div className="flex flex-wrap gap-2">
          <Tag label="Autosave enabled" variant="primary" />
          <Tag label="Cloud synced" />
          <Tag label="Version history available" />
        </div>
      ) : null}

      <Button color="primary" fullWidth loading={isLoading}>
        Retry save
      </Button>
    </Surface>
  );
}

function ReviewHandoffPreview({
  state,
  mode,
}: {
  state: CreationPublishingPreviewState;
  mode: CreationPublishingPreviewMode;
}) {
  const isAttention = state === 'attention';
  const guided = mode === 'guided';
  const isLoading = state === 'loading';

  return (
    <Surface>
      <Hero
        eyebrow="Review handoff"
        title="Package the draft for the next reviewer"
        description="Explain what is being reviewed, who needs to look at it, and whether the handoff is complete enough to send."
      />

      {isAttention ? (
        <Alert
          variant="warning"
          title="Review handoff is incomplete"
          description="Attach the final hero image and confirm owner notes before sending this draft."
        />
      ) : null}

      <InfoCard
        eyebrow="Ready for review"
        title="Spring campaign hero"
        description="Landing page hero update for the May product launch."
        trailing={<Badge label="Pending handoff" size="sm" variant="primary" />}
      />

      {guided ? (
        <div className="flex flex-wrap gap-2">
          <Tag label="Content review" variant="primary" />
          <Tag label="Design sign-off" />
          <Tag label="Legal check" />
        </div>
      ) : null}

      <Button color="primary" fullWidth loading={isLoading}>
        Send to reviewers
      </Button>
    </Surface>
  );
}

function PublishConfirmationPreview({
  state,
  mode,
}: {
  state: CreationPublishingPreviewState;
  mode: CreationPublishingPreviewMode;
}) {
  const isAttention = state === 'attention';
  const guided = mode === 'guided';
  const isLoading = state === 'loading';

  return (
    <Surface>
      <Hero
        eyebrow="Publish"
        title="Confirm what goes live and where"
        description="Summarize destination, timing, and audience before the final publish action changes visibility."
      />

      {isAttention ? (
        <Alert
          variant="danger"
          title="This replaces the live homepage banner"
          description="Publishing now updates the experience for all signed-out visitors immediately."
        />
      ) : null}

      <InfoCard
        eyebrow="Publish target"
        title="Homepage spring banner"
        description="Will replace the current signed-out hero and campaign CTA."
        trailing={<Badge label="Publishes today" size="sm" variant="success" />}
      />

      {guided ? (
        <div className="flex flex-wrap gap-2">
          <Tag label="Homepage banner" variant="primary" />
          <Tag label="US audience" />
          <Tag label="Scheduled 9:00 AM" />
        </div>
      ) : null}

      <Button color="primary" fullWidth loading={isLoading}>
        Publish now
      </Button>
    </Surface>
  );
}

export default function WebCreationPublishingPreview({
  patternId,
  state = 'default',
  mode = 'standard',
}: WebCreationPublishingPreviewProps) {
  switch (patternId) {
    case 'editor-flow':
      return <EditorFlowPreview state={state} mode={mode} />;
    case 'draft-save':
      return <DraftSavePreview state={state} mode={mode} />;
    case 'review-handoff':
      return <ReviewHandoffPreview state={state} mode={mode} />;
    case 'publish-confirmation':
      return <PublishConfirmationPreview state={state} mode={mode} />;
    default:
      return null;
  }
}
