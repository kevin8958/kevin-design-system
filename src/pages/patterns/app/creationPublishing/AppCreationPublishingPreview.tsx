'use client';

import AppAlert from '@/components/app/AppAlert';
import AppBadge from '@/components/app/AppBadge';
import AppButton from '@/components/app/AppButton';
import AppTag from '@/components/app/AppTag';
import AppTextInput from '@/components/app/AppTextInput';
import { StyleSheet, Text, View } from 'react-native';
import type {
  CreationPublishingPatternId,
  CreationPublishingPreviewMode,
  CreationPublishingPreviewState,
} from '@/pages/patterns/common/creationPublishingPatternConfigs';

type AppCreationPublishingPreviewProps = {
  patternId: CreationPublishingPatternId;
  state?: CreationPublishingPreviewState;
  mode?: CreationPublishingPreviewMode;
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
    <View style={styles.screen}>
      <Hero
        eyebrow="Creation"
        title="Keep authoring focused and stateful"
        description="Make draft identity, completion state, and next-step actions visible without crowding the editor."
      />

      {isAttention ? (
        <AppAlert
          variant="warning"
          title="This draft is missing a primary CTA"
          description="Add the publish destination link before sending this draft to review."
        />
      ) : null}

      <AppTextInput
        label="Draft title"
        defaultValue="Spring launch email"
        placeholder="Spring launch email"
      />

      <Card>
        <View style={styles.rowBody}>
          <Text style={styles.cardEyebrow}>Section</Text>
          <Text style={styles.cardTitle}>Hero message</Text>
          <Text style={styles.cardDescription}>
            A concise launch message with supporting copy and CTA destination.
          </Text>
        </View>
        <View style={styles.cardBadge}>
          <AppBadge label="Draft" size="sm" variant="neutral" />
        </View>
      </Card>

      {guided ? (
        <View style={styles.tagRow}>
          <AppTag label="Headline ready" size="sm" variant="primary" />
          <AppTag label="CTA missing" size="sm" />
          <AppTag label="Legal note pending" size="sm" />
        </View>
      ) : null}

      <AppButton fullWidth color="primary" loading={isLoading} label="Save draft" />
    </View>
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
    <View style={styles.screen}>
      <Hero
        eyebrow="Draft save"
        title="Reassure the author that work is safe"
        description="Show save confidence, preservation state, and recovery when sync or save fails."
      />

      {isAttention ? (
        <AppAlert
          variant="danger"
          title="We couldn't save the latest changes"
          description="Retry the save or restore the last synced version before closing this editor."
        />
      ) : null}

      <Card>
        <View style={styles.rowBody}>
          <Text style={styles.cardEyebrow}>Save status</Text>
          <Text style={styles.cardTitle}>
            {isLoading ? 'Saving changes...' : 'Saved 2 minutes ago'}
          </Text>
          <Text style={styles.cardDescription}>
            Autosave keeps the latest version in sync while you continue editing.
          </Text>
        </View>
        <View style={styles.cardBadge}>
          <AppBadge
            label={isLoading ? 'Syncing' : 'Saved'}
            size="sm"
            variant={isLoading ? 'warning' : 'success'}
          />
        </View>
      </Card>

      {guided ? (
        <View style={styles.tagRow}>
          <AppTag label="Autosave enabled" size="sm" variant="primary" />
          <AppTag label="Cloud synced" size="sm" />
          <AppTag label="Version history available" size="sm" />
        </View>
      ) : null}

      <AppButton fullWidth color="primary" loading={isLoading} label="Retry save" />
    </View>
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
    <View style={styles.screen}>
      <Hero
        eyebrow="Review handoff"
        title="Package the draft for the next reviewer"
        description="Explain what is being reviewed, who needs to look at it, and whether the handoff is complete enough to send."
      />

      {isAttention ? (
        <AppAlert
          variant="warning"
          title="Review handoff is incomplete"
          description="Attach the final hero image and confirm owner notes before sending this draft."
        />
      ) : null}

      <Card>
        <View style={styles.rowBody}>
          <Text style={styles.cardEyebrow}>Ready for review</Text>
          <Text style={styles.cardTitle}>Spring campaign hero</Text>
          <Text style={styles.cardDescription}>
            Landing page hero update for the May product launch.
          </Text>
        </View>
        <View style={styles.cardBadge}>
          <AppBadge label="Pending handoff" size="sm" variant="primary" />
        </View>
      </Card>

      {guided ? (
        <View style={styles.tagRow}>
          <AppTag label="Content review" size="sm" variant="primary" />
          <AppTag label="Design sign-off" size="sm" />
          <AppTag label="Legal check" size="sm" />
        </View>
      ) : null}

      <AppButton
        fullWidth
        color="primary"
        loading={isLoading}
        label="Send to reviewers"
      />
    </View>
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
    <View style={styles.screen}>
      <Hero
        eyebrow="Publish"
        title="Confirm what goes live and where"
        description="Summarize destination, timing, and audience before the final publish action changes visibility."
      />

      {isAttention ? (
        <AppAlert
          variant="danger"
          title="This replaces the live homepage banner"
          description="Publishing now updates the experience for all signed-out visitors immediately."
        />
      ) : null}

      <Card>
        <View style={styles.rowBody}>
          <Text style={styles.cardEyebrow}>Publish target</Text>
          <Text style={styles.cardTitle}>Homepage spring banner</Text>
          <Text style={styles.cardDescription}>
            Will replace the current signed-out hero and campaign CTA.
          </Text>
        </View>
        <View style={styles.cardBadge}>
          <AppBadge label="Publishes today" size="sm" variant="success" />
        </View>
      </Card>

      {guided ? (
        <View style={styles.tagRow}>
          <AppTag label="Homepage banner" size="sm" variant="primary" />
          <AppTag label="US audience" size="sm" />
          <AppTag label="Scheduled 9:00 AM" size="sm" />
        </View>
      ) : null}

      <AppButton fullWidth color="primary" loading={isLoading} label="Publish now" />
    </View>
  );
}

export default function AppCreationPublishingPreview({
  patternId,
  state = 'default',
  mode = 'standard',
}: AppCreationPublishingPreviewProps) {
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
  rowBody: {
    flex: 1,
    gap: 4,
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
