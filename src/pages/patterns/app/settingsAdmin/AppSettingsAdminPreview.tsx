'use client';

import AppAlert from '@/components/app/AppAlert';
import AppAvatar from '@/components/app/AppAvatar';
import AppBadge from '@/components/app/AppBadge';
import AppButton from '@/components/app/AppButton';
import AppTag from '@/components/app/AppTag';
import AppTextInput from '@/components/app/AppTextInput';
import { StyleSheet, Text, View } from 'react-native';
import type {
  SettingsAdminPatternId,
  SettingsAdminPreviewMode,
  SettingsAdminPreviewState,
} from '@/pages/patterns/common/settingsAdminPatternConfigs';

type AppSettingsAdminPreviewProps = {
  patternId: SettingsAdminPatternId;
  state?: SettingsAdminPreviewState;
  mode?: SettingsAdminPreviewMode;
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

const MemberRow = ({
  name,
  role,
  variant,
}: {
  name: string;
  role: string;
  variant: App.BadgeProps['variant'];
}) => (
  <View style={styles.rowCard}>
    <View style={styles.memberIdentity}>
      <AppAvatar name={name} size="sm" />
      <View style={styles.rowBody}>
        <Text style={styles.rowLabel}>{name}</Text>
        <Text style={styles.rowDetail}>{role}</Text>
      </View>
    </View>
    <AppBadge
      label={variant === 'warning' ? 'Pending' : role}
      size="sm"
      variant={variant}
    />
  </View>
);

function MemberManagementPreview({
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
    <View style={styles.screen}>
      <Hero
        eyebrow="Settings / Admin"
        title="Manage members"
        description="Review access, resend invites, and keep role coverage healthy without losing track of the team state."
      />

      {isAttention ? (
        <AppAlert
          variant="warning"
          title="You are out of active seats"
          description="Remove an inactive member or add a seat before sending more invitations."
        />
      ) : null}

      <Card>
        <View style={styles.inlineBetween}>
          <View style={styles.rowBody}>
            <Text style={styles.cardTitle}>18 members, 2 pending invites</Text>
            <Text style={styles.cardDescription}>
              Keep admin coverage healthy while monitoring inactive members.
            </Text>
          </View>
          <AppButton
            size="sm"
            color="primary"
            loading={isLoading}
            label="Invite"
          />
        </View>
      </Card>

      {guided ? (
        <View style={styles.tagRow}>
          <AppTag label="Admins" size="sm" variant="primary" />
          <AppTag label="Pending invite" size="sm" />
          <AppTag label="Suspended" size="sm" />
        </View>
      ) : null}

      <View style={styles.stack}>
        <MemberRow name="Mina Park" role="Admin" variant="primary" />
        <MemberRow name="Jordan Lee" role="Editor" variant="neutral" />
        <MemberRow name="Noah Chen" role="Pending invite" variant="warning" />
      </View>
    </View>
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
    <View style={styles.screen}>
      <Hero
        eyebrow="Permission change"
        title="Update member role"
        description="Compare the current role with the next one and make the capability impact obvious before confirmation."
      />

      {isAttention ? (
        <AppAlert
          variant="danger"
          title="This change grants billing and member management access"
          description="Promoting this member to admin expands deletion, billing, and invite authority."
        />
      ) : null}

      <View style={styles.stack}>
        <Card>
          <Text style={styles.cardEyebrow}>Current</Text>
          <Text style={styles.cardTitle}>Editor</Text>
        </Card>
        <Card>
          <Text style={styles.cardEyebrow}>Next</Text>
          <Text style={styles.cardTitle}>Admin</Text>
        </Card>
      </View>

      {guided ? (
        <View style={styles.tagRow}>
          <AppTag label="Can manage billing" size="sm" variant="primary" />
          <AppTag label="Can invite admins" size="sm" variant="primary" />
          <AppTag label="Can delete projects" size="sm" />
        </View>
      ) : null}

      <AppButton
        fullWidth
        color="primary"
        loading={isLoading}
        label="Save role change"
      />
    </View>
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
    <View style={styles.screen}>
      <Hero
        eyebrow="Billing"
        title="Billing settings"
        description="Review plan health, renewal timing, and invoice settings before making payment or seat changes."
      />

      {isAttention ? (
        <AppAlert
          variant="warning"
          title="Your payment method needs attention"
          description="Update the card before renewal to avoid interrupted access."
        />
      ) : null}

      <Card>
        <View style={styles.inlineBetween}>
          <View style={styles.rowBody}>
            <Text style={styles.cardTitle}>Growth plan</Text>
            <Text style={styles.cardDescription}>24 active seats, annual billing</Text>
          </View>
          <AppBadge label="Renews May 28" size="sm" variant="success" />
        </View>
      </Card>

      {guided ? (
        <View style={styles.stack}>
          <AppTextInput
            label="Invoice email"
            defaultValue="billing@kevin.studio"
            placeholder="billing@company.com"
          />
          <AppTextInput
            label="Purchase order"
            defaultValue="PO-2048"
            placeholder="Optional"
          />
        </View>
      ) : null}

      <AppButton
        fullWidth
        color="primary"
        loading={isLoading}
        label="Update payment method"
      />
    </View>
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
    <View style={styles.screen}>
      <Hero
        eyebrow="High risk action"
        title="Delete workspace"
        description="Make the blast radius explicit and add just enough friction to prevent accidental irreversible admin actions."
      />

      <AppAlert
        variant={isAttention ? 'danger' : 'warning'}
        title="Deleting this workspace permanently removes projects and approvals"
        description="Export data and transfer ownership before continuing. This action cannot be undone."
      />

      {guided ? (
        <AppTextInput
          label="Type DELETE to continue"
          defaultValue={isAttention ? 'DELETE' : ''}
          placeholder="DELETE"
        />
      ) : null}

      <View style={styles.dangerCard}>
        <View style={styles.inlineBetween}>
          <View style={styles.rowBody}>
            <Text style={styles.dangerTitle}>Includes 42 projects and 186 approvals</Text>
            <Text style={styles.dangerDescription}>
              Workspace domains, comments, and audit history are removed too.
            </Text>
          </View>
          <AppBadge label="Permanent" size="sm" variant="danger" />
        </View>
      </View>

      <View style={styles.stack}>
        <AppButton fullWidth variant="outline" color="neutral" label="Cancel" />
        <AppButton
          fullWidth
          color="danger"
          loading={isLoading}
          label="Delete workspace"
        />
      </View>
    </View>
  );
}

export default function AppSettingsAdminPreview({
  patternId,
  state = 'default',
  mode = 'standard',
}: AppSettingsAdminPreviewProps) {
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
    backgroundColor: '#E7F0FF',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  eyebrowText: {
    color: '#1D4ED8',
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
  memberIdentity: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    gap: 12,
    minWidth: 0,
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
  inlineBetween: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
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
  cardEyebrow: {
    color: '#737373',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  dangerCard: {
    backgroundColor: '#FFF1F1',
    borderColor: '#FCA5A5',
    borderRadius: 20,
    borderWidth: 1,
    padding: 14,
  },
  dangerTitle: {
    color: '#B91C1C',
    fontSize: 14,
    fontWeight: '700',
  },
  dangerDescription: {
    color: '#B91C1C',
    fontSize: 13,
    lineHeight: 19,
  },
});
