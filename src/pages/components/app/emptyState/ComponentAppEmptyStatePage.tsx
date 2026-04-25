'use client';

import { useState } from 'react';
import AppDocsPageShell from '@/pages/components/app/common/AppDocsPageShell';
import AppEmptyStateActionGuide from '@/pages/components/app/emptyState/AppEmptyStateActionGuide';
import AppEmptyStateContentGuide from '@/pages/components/app/emptyState/AppEmptyStateContentGuide';
import AppEmptyStateControllerGuide from '@/pages/components/app/emptyState/AppEmptyStateControllerGuide';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'EmptyState', href: '/components/app/emptyState' },
];

const propsData = [
  { id: '1', property: 'title', type: 'ReactNode', default: 'undefined', description: 'Primary headline explaining the empty condition.' },
  { id: '2', property: 'description', type: 'ReactNode', default: 'undefined', description: 'Optional supporting copy that clarifies the next step.' },
  { id: '3', property: 'icon', type: 'ReactNode', default: "'⌂'", description: 'Leading visual shown above the title.' },
  { id: '4', property: 'primaryAction / secondaryAction', type: 'ReactNode', default: 'undefined', description: 'Optional action area rendered below the copy.' },
  { id: '5', property: 'size', type: ['sm', 'md', 'lg'], default: 'md', description: 'Controls spacing, icon scale, and typography.' },
];

export default function ComponentAppEmptyStatePage() {
  const [size, setSize] = useState<App.AppCardSize>('md');

  return (
    <AppDocsPageShell
      breadcrumbItems={breadcrumbItems}
      description="A React Native empty state for first-run moments, no-results views, and onboarding gaps."
      propsData={propsData}
      title="App EmptyState"
    >
      <AppEmptyStateControllerGuide onSizeChange={setSize} size={size} />
      <AppEmptyStateActionGuide size={size} />
      <AppEmptyStateContentGuide size={size} />
    </AppDocsPageShell>
  );
}
