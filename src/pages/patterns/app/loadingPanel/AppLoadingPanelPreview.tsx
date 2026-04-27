'use client';

import AppDescriptionList from '@/components/app/AppDescriptionList';
import AppMetricCard from '@/components/app/AppMetricCard';
import AppSkeleton from '@/components/app/AppSkeleton';
import { StyleSheet, Text, View } from 'react-native';

type AppLoadingPanelPreviewProps = {
  density?: 'summary' | 'detail';
  phase?: 'initial' | 'refresh';
};

export default function AppLoadingPanelPreview({
  density = 'summary',
  phase = 'initial',
}: AppLoadingPanelPreviewProps) {
  const isDetail = density === 'detail';
  const isRefresh = phase === 'refresh';

  return (
    <View style={styles.screen}>
      <View style={styles.headerRow}>
        <View style={styles.headerCopy}>
          <Text style={styles.title}>Workspace health</Text>
          <Text style={styles.description}>
            Preserve layout while content is loading so the next state feels
            stable instead of rebuilt.
          </Text>
        </View>
        {isRefresh ? (
          <View style={styles.refreshPill}>
            <Text style={styles.refreshPillText}>Refreshing</Text>
          </View>
        ) : null}
      </View>

      <View style={styles.metricGrid}>
        {[0, 1, 2].map((item) => (
          <AppMetricCard key={item} title="Metric" value={0} />
        ))}
      </View>

      <View style={styles.panel}>
        <AppSkeleton height={18} width={180} />
        <AppSkeleton height={14} width="68%" />

        <View style={styles.blockGrid}>
          {[0, 1].map((item) => (
            <View key={item} style={styles.blockCard}>
              <AppSkeleton height={14} width={110} />
              <View style={styles.blockLines}>
                <AppSkeleton height={12} width="100%" />
                <AppSkeleton height={12} width="84%" />
                <AppSkeleton height={12} width="72%" />
              </View>
            </View>
          ))}
        </View>

        {isDetail ? (
          <AppDescriptionList
            columns={2}
            items={[
              { label: 'Status', value: <AppSkeleton height={14} width={90} /> },
              { label: 'Owner', value: <AppSkeleton height={14} width={110} /> },
              { label: 'Updated', value: <AppSkeleton height={14} width={80} /> },
              { label: 'Scope', value: <AppSkeleton height={14} width={130} /> },
            ]}
          />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    gap: 16,
    width: '100%',
  },
  headerRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
  },
  headerCopy: {
    flex: 1,
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
  refreshPill: {
    backgroundColor: '#FFF1D6',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  refreshPillText: {
    color: '#A65A00',
    fontSize: 11,
    fontWeight: '700',
  },
  metricGrid: {
    gap: 10,
  },
  panel: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E5E5',
    borderRadius: 24,
    borderWidth: 1,
    gap: 14,
    padding: 14,
  },
  blockGrid: {
    gap: 10,
  },
  blockCard: {
    backgroundColor: '#FAFAFA',
    borderColor: '#E5E5E5',
    borderRadius: 18,
    borderWidth: 1,
    gap: 12,
    padding: 12,
  },
  blockLines: {
    gap: 10,
  },
});
