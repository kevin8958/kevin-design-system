'use client';

import { useState } from 'react';
import AppDocsPageShell from '@/pages/components/app/common/AppDocsPageShell';
import AppMetricCardContentGuide from '@/pages/components/app/metricCard/AppMetricCardContentGuide';
import AppMetricCardControllerGuide from '@/pages/components/app/metricCard/AppMetricCardControllerGuide';
import AppMetricCardTrendGuide from '@/pages/components/app/metricCard/AppMetricCardTrendGuide';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'MetricCard', href: '/components/app/metricCard' },
];

const propsData = [
  { id: '1', property: 'title', type: 'string', default: "''", description: 'Label shown at the top of the card.' },
  { id: '2', property: 'value', type: 'number', default: '0', description: 'Main metric value.' },
  { id: '3', property: 'change', type: 'number', default: 'undefined', description: 'Optional delta shown beside the value.' },
  { id: '4', property: 'trend', type: ['up', 'down', 'neutral'], default: 'inferred', description: 'Overrides the trend direction and color.' },
  { id: '5', property: 'size', type: ['sm', 'md', 'lg'], default: 'md', description: 'Controls card padding and metric scale.' },
  { id: '6', property: 'prefix / suffix', type: 'string', default: "''", description: 'Adds units or symbols around the value.' },
];

export default function ComponentAppMetricCardPage() {
  const [size, setSize] = useState<App.AppCardSize>('md');

  return (
    <AppDocsPageShell
      breadcrumbItems={breadcrumbItems}
      description="A React Native metric card for KPI snapshots, dashboard summaries, and compact analytics blocks."
      propsData={propsData}
      title="App MetricCard"
    >
      <AppMetricCardControllerGuide onSizeChange={setSize} size={size} />
      <AppMetricCardContentGuide size={size} />
      <AppMetricCardTrendGuide size={size} />
    </AppDocsPageShell>
  );
}
