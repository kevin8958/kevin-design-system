'use client';

import AppAlert from '@/components/app/AppAlert';
import AppButton from '@/components/app/AppButton';
import AppDescriptionList from '@/components/app/AppDescriptionList';
import { StyleSheet, Text, View } from 'react-native';

type AppErrorRecoveryPreviewProps = {
  issue?: 'network' | 'permission';
  actions?: 'retry' | 'support';
};

export default function AppErrorRecoveryPreview({
  issue = 'network',
  actions = 'retry',
}: AppErrorRecoveryPreviewProps) {
  const isNetwork = issue === 'network';

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {isNetwork ? 'Workspace analytics' : 'Restricted project panel'}
        </Text>
        <Text style={styles.description}>
          Keep failure context, likely cause, and next steps close together so
          the screen does not feel abandoned.
        </Text>
      </View>

      <AppAlert
        variant="danger"
        title={
          isNetwork
            ? 'We could not refresh this data right now'
            : 'You no longer have access to this workspace'
        }
        description={
          isNetwork
            ? 'The request timed out before the latest analytics could load. You can retry now or come back in a moment.'
            : 'Your current role cannot view this project surface. Ask an admin for access or return to a workspace you still manage.'
        }
      />

      <AppDescriptionList
        columns={2}
        items={[
          {
            label: 'Status',
            value: isNetwork ? 'Timed out' : 'Permission removed',
            hint: isNetwork ? 'Last successful sync 12m ago' : 'Role changed 3m ago',
          },
          {
            label: 'Next best step',
            value: isNetwork ? 'Retry request' : 'Request access',
            hint: isNetwork
              ? 'Keeps the current screen intact'
              : 'Returns the user to an actionable path',
          },
        ]}
      />

      <Text style={styles.note}>
        {isNetwork
          ? 'Preserve page context so the user can retry without losing their place.'
          : 'Offer a safe exit when the user cannot recover directly from the current screen.'}
      </Text>

      <View style={styles.footerRow}>
        <AppButton
          variant="outline"
          color="neutral"
          label="Back to overview"
        />
        <AppButton
          color="primary"
          label={
            actions === 'retry'
              ? 'Retry now'
              : isNetwork
                ? 'Contact support'
                : 'Request access'
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    gap: 16,
    width: '100%',
  },
  header: {
    gap: 6,
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
  note: {
    color: '#737373',
    fontSize: 13,
    lineHeight: 19,
  },
  footerRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
});
