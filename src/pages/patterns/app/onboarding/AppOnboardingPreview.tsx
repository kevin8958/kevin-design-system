'use client';

import AppAlert from '@/components/app/AppAlert';
import AppAvatar from '@/components/app/AppAvatar';
import AppBadge from '@/components/app/AppBadge';
import AppButton from '@/components/app/AppButton';
import AppTag from '@/components/app/AppTag';
import AppTextInput from '@/components/app/AppTextInput';
import { StyleSheet, Text, View } from 'react-native';
import type {
  OnboardingPatternId,
  OnboardingPreviewMode,
  OnboardingPreviewState,
} from '@/pages/patterns/common/onboardingPatternConfigs';

type AppOnboardingPreviewProps = {
  patternId: OnboardingPatternId;
  state?: OnboardingPreviewState;
  mode?: OnboardingPreviewMode;
};

const Card = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.card}>{children}</View>
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
  <View style={styles.hero}>
    <View style={styles.eyebrowChip}>
      <Text style={styles.eyebrowText}>{eyebrow}</Text>
    </View>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

const RowCard = ({
  label,
  detail,
  badge,
  variant,
}: {
  label: string;
  detail: string;
  badge: string;
  variant: App.BadgeProps['variant'];
}) => (
  <View style={styles.rowCard}>
    <View style={styles.rowBody}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowDetail}>{detail}</Text>
    </View>
    <AppBadge label={badge} size="sm" variant={variant} />
  </View>
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
    <View style={styles.screen}>
      <Hero
        eyebrow={guided ? 'Step 1 of 3' : 'Onboarding'}
        title="Create your workspace"
        description="Set the team name, claim the workspace URL, and optionally start from a template or invite your first teammates."
      />

      {isAttention ? (
        <AppAlert
          variant="warning"
          title="This workspace URL is already in use"
          description="Pick a unique URL before continuing."
        />
      ) : null}

      <View style={styles.stack}>
        <AppTextInput
          label="Workspace name"
          defaultValue="Kevin Studio"
          placeholder="Kevin Studio"
        />
        <AppTextInput
          label="Workspace URL"
          defaultValue="kevin-product"
          placeholder="kevin-studio"
          error={isAttention}
          errorMsg="Choose a unique workspace URL."
        />
      </View>

      {guided ? (
        <>
          <Card>
            <Text style={styles.cardTitle}>Starter template</Text>
            <View style={styles.tagRow}>
              <AppTag label="Design system" size="sm" variant="primary" />
              <AppTag label="Product roadmap" size="sm" />
              <AppTag label="Marketing launch" size="sm" />
            </View>
          </Card>

          <View style={styles.highlightCard}>
            <Text style={styles.highlightTitle}>Invite teammates now or later</Text>
            <Text style={styles.highlightDescription}>
              Seed the workspace with a few members so setup continues in the
              right shared context.
            </Text>
          </View>
        </>
      ) : null}

      <Card>
        <View style={styles.inlineBetween}>
          <View style={styles.rowBody}>
            <Text style={styles.cardTitle}>Billing starts after the trial</Text>
            <Text style={styles.cardDescription}>
              Rename the workspace later without changing account ownership.
            </Text>
          </View>
          <AppBadge label="14-day trial" size="sm" variant="success" />
        </View>
      </Card>

      <AppButton
        fullWidth
        color="primary"
        loading={isLoading}
        label="Create workspace"
      />
    </View>
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
    <View style={styles.screen}>
      <Hero
        eyebrow="Invitation"
        title="Join Kevin Product"
        description="Mina Park invited you to the Kevin Product workspace. Review the role and workspace context before you accept."
      />

      {isAttention ? (
        <AppAlert
          variant="danger"
          title="The invite was opened with another account"
          description="Sign in with the invited email or ask the owner to resend the invitation."
        />
      ) : null}

      <Card>
        <View style={styles.inlineBetween}>
          <View style={styles.rowBody}>
            <Text style={styles.cardTitle}>Kevin Product workspace</Text>
            <Text style={styles.cardDescription}>
              Shared planning, design review, and launch coordination.
            </Text>
          </View>
          <AppBadge label="Editor" size="sm" variant="primary" />
        </View>
      </Card>

      {guided ? (
        <Card>
          <View style={styles.inlineBetween}>
            <Text style={styles.cardTitle}>You&apos;ll join this team</Text>
            <View style={styles.avatarRow}>
              <AppAvatar name="Mina Park" size="sm" />
              <AppAvatar name="Jordan Lee" size="sm" />
              <AppAvatar name="Noah Chen" size="sm" />
            </View>
          </View>
          <View style={styles.tagRow}>
            <AppTag label="Can comment" size="sm" variant="primary" />
            <AppTag label="Can edit shared pages" size="sm" />
            <AppTag label="No billing access" size="sm" />
          </View>
        </Card>
      ) : null}

      <View style={styles.stack}>
        <AppButton
          fullWidth
          color="primary"
          loading={isLoading}
          label="Accept invite"
        />
        <AppButton
          fullWidth
          variant="outline"
          color="neutral"
          label="Ask for another email"
        />
      </View>
    </View>
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
    <View style={styles.screen}>
      <Hero
        eyebrow="First run"
        title="Finish your workspace setup"
        description="A few focused steps will make the workspace ready for teammates, review requests, and launch work."
      />

      {isAttention ? (
        <AppAlert
          variant="warning"
          title="Security review still needs attention"
          description="Finish SSO and recovery settings before inviting the full team."
        />
      ) : null}

      <View style={styles.highlightCard}>
        <View style={styles.inlineBetween}>
          <View style={styles.rowBody}>
            <Text style={styles.highlightTitle}>Setup progress</Text>
            <Text style={styles.highlightDescription}>
              2 of 4 launch steps completed
            </Text>
          </View>
          <AppBadge label="50%" size="sm" variant="primary" />
        </View>
      </View>

      <View style={styles.stack}>
        <RowCard
          label="Invite teammates"
          detail="Share the workspace with the people who need access first."
          badge="Recommended"
          variant="primary"
        />
        <RowCard
          label="Review security settings"
          detail="Confirm SSO, recovery contacts, and owner coverage."
          badge="Required"
          variant="warning"
        />
        <RowCard
          label="Create your first project"
          detail="Seed the workspace with one active planning surface."
          badge="Done"
          variant="success"
        />
      </View>

      {guided ? (
        <View style={styles.stack}>
          <Card>
            <Text style={styles.cardTitle}>Recommended next</Text>
            <Text style={styles.cardDescription}>
              Finish the security review before expanding team access.
            </Text>
          </Card>
          <Card>
            <Text style={styles.cardTitle}>Quick launch tip</Text>
            <Text style={styles.cardDescription}>
              Keep optional setup after the first real project so momentum stays high.
            </Text>
          </Card>
        </View>
      ) : null}

      <AppButton
        fullWidth
        color="primary"
        loading={isLoading}
        label="Continue setup"
      />
    </View>
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
    <View style={styles.screen}>
      <Hero
        eyebrow="Permissions"
        title="Help us unlock the full workflow"
        description="A few permissions make approvals, uploads, and reminders feel seamless. You can still continue if you are not ready to grant everything yet."
      />

      {isAttention ? (
        <AppAlert
          variant="info"
          title="Notifications are off for now"
          description="You can continue, then enable alerts later from device settings."
        />
      ) : null}

      <View style={styles.stack}>
        <RowCard
          label="Notifications"
          detail="Send approval reminders and due-date nudges at the right time."
          badge="Recommended"
          variant="primary"
        />
        <RowCard
          label="File access"
          detail="Attach briefs, assets, and reference files directly from your device."
          badge="Recommended"
          variant="primary"
        />
        <RowCard
          label="Camera"
          detail="Optional: capture receipts or whiteboard notes without leaving the flow."
          badge="Optional"
          variant="success"
        />
      </View>

      {guided ? (
        <Card>
          <Text style={styles.cardTitle}>Why we ask</Text>
          <Text style={styles.cardDescription}>
            Notifications keep approvals moving, file access supports uploads,
            and camera access only powers capture-based workflows.
          </Text>
          <View style={styles.tagRow}>
            <AppTag label="Notifications" size="sm" variant="primary" />
            <AppTag label="Files" size="sm" variant="primary" />
            <AppTag label="Camera optional" size="sm" />
          </View>
        </Card>
      ) : null}

      <View style={styles.stack}>
        <AppButton
          fullWidth
          color="primary"
          loading={isLoading}
          label="Enable permissions"
        />
        <AppButton
          fullWidth
          variant="outline"
          color="neutral"
          label="Ask later"
        />
      </View>
    </View>
  );
}

export default function AppOnboardingPreview({
  patternId,
  state = 'default',
  mode = 'standard',
}: AppOnboardingPreviewProps) {
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

const styles = StyleSheet.create({
  screen: {
    gap: 14,
    width: '100%',
  },
  hero: {
    gap: 8,
  },
  eyebrowChip: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFE8C2',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  eyebrowText: {
    color: '#A65A00',
    fontSize: 11,
    fontWeight: '700',
  },
  title: {
    color: '#171717',
    fontSize: 24,
    fontWeight: '800',
  },
  description: {
    color: '#525252',
    fontSize: 14,
    lineHeight: 21,
  },
  stack: {
    gap: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E5E5',
    borderRadius: 20,
    borderWidth: 1,
    gap: 10,
    padding: 14,
  },
  highlightCard: {
    backgroundColor: '#FFF6E8',
    borderColor: '#FFD48C',
    borderRadius: 20,
    borderWidth: 1,
    gap: 8,
    padding: 14,
  },
  highlightTitle: {
    color: '#A65A00',
    fontSize: 14,
    fontWeight: '700',
  },
  highlightDescription: {
    color: '#A65A00',
    fontSize: 13,
    lineHeight: 19,
  },
  cardTitle: {
    color: '#171717',
    fontSize: 14,
    fontWeight: '700',
  },
  cardDescription: {
    color: '#525252',
    fontSize: 13,
    lineHeight: 19,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  inlineBetween: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
  },
  rowCard: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E5E5',
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
    padding: 14,
  },
  rowBody: {
    flex: 1,
    gap: 3,
    minWidth: 0,
  },
  rowLabel: {
    color: '#171717',
    fontSize: 14,
    fontWeight: '700',
  },
  rowDetail: {
    color: '#525252',
    fontSize: 13,
    lineHeight: 19,
  },
  avatarRow: {
    flexDirection: 'row',
    gap: 6,
  },
});
