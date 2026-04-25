'use client';

import { useState } from 'react';
import AppDocsPageShell from '@/pages/components/app/common/AppDocsPageShell';
import AppSkeletonControllerGuide from '@/pages/components/app/skeleton/AppSkeletonControllerGuide';
import AppSkeletonStateGuide from '@/pages/components/app/skeleton/AppSkeletonStateGuide';
import AppSkeletonTypeGuide from '@/pages/components/app/skeleton/AppSkeletonTypeGuide';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'Skeleton', href: '/components/app/skeleton' },
];

const propsData = [
  {
    id: '1',
    property: 'width',
    type: 'number | string',
    default: 'undefined',
    description: 'Custom width for the placeholder.',
  },
  {
    id: '2',
    property: 'height',
    type: 'number | string',
    default: 'undefined',
    description: 'Custom height for the placeholder.',
  },
  {
    id: '3',
    property: 'variant',
    type: ['line', 'rect', 'circle'],
    default: 'line',
    description: 'Determines the placeholder shape.',
  },
  {
    id: '4',
    property: 'animated',
    type: 'boolean',
    default: 'true',
    description: 'Enables the shimmer animation when true.',
  },
];

export default function ComponentAppSkeletonPage() {
  const [variant, setVariant] = useState<App.AppSkeletonVariant>('line');

  return (
    <AppDocsPageShell
      breadcrumbItems={breadcrumbItems}
      description="A React Native skeleton placeholder for loading states across cards, lists, and detail views."
      propsData={propsData}
      title="App Skeleton"
    >
      <AppSkeletonControllerGuide
        onVariantChange={setVariant}
        variant={variant}
      />
      <AppSkeletonTypeGuide variant={variant} />
      <AppSkeletonStateGuide variant={variant} />
    </AppDocsPageShell>
  );
}
