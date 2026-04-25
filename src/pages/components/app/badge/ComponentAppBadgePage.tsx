'use client';

import { useState } from 'react';
import AppDocsPageShell from '@/pages/components/app/common/AppDocsPageShell';
import AppBadgeContentGuide from '@/pages/components/app/badge/AppBadgeContentGuide';
import AppBadgeControllerGuide from '@/pages/components/app/badge/AppBadgeControllerGuide';
import AppBadgeVariantGuide from '@/pages/components/app/badge/AppBadgeVariantGuide';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'Badge', href: '/components/app/badge' },
];

const propsData = [
  { id: '1', property: 'label', type: 'string', default: "''", description: 'Text displayed inside the badge.' },
  { id: '2', property: 'size', type: ['sm', 'md', 'lg'], default: 'md', description: 'Controls badge padding and text size.' },
  { id: '3', property: 'variant', type: ['neutral', 'primary', 'info', 'success', 'warning', 'danger'], default: 'neutral', description: 'Semantic color treatment of the badge.' },
];

export default function ComponentAppBadgePage() {
  const [size, setSize] = useState<App.AppLabelSize>('md');

  return (
    <AppDocsPageShell
      breadcrumbItems={breadcrumbItems}
      description="A compact React Native badge for counts, short statuses, and lightweight emphasis."
      propsData={propsData}
      title="App Badge"
    >
      <AppBadgeControllerGuide onSizeChange={setSize} size={size} />
      <AppBadgeContentGuide size={size} />
      <AppBadgeVariantGuide size={size} />
    </AppDocsPageShell>
  );
}
