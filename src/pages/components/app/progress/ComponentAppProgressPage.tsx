'use client';

import { useState } from 'react';
import AppDocsPageShell from '@/pages/components/app/common/AppDocsPageShell';
import AppProgressControllerGuide from '@/pages/components/app/progress/AppProgressControllerGuide';
import AppProgressTypeGuide from '@/pages/components/app/progress/AppProgressTypeGuide';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'Progress', href: '/components/app/progress' },
];

const propsData = [
  {
    id: '1',
    property: 'value',
    type: 'number',
    default: '0',
    description: 'Current progress value.',
  },
  {
    id: '2',
    property: 'max',
    type: 'number',
    default: '100',
    description: 'Maximum progress value used for percentage calculation.',
  },
  {
    id: '3',
    property: 'size',
    type: ['sm', 'md', 'lg'],
    default: 'md',
    description: 'Controls the height of the progress track.',
  },
  {
    id: '4',
    property: 'showValue',
    type: 'boolean',
    default: 'false',
    description: 'Displays the computed percentage above the bar when true.',
  },
];

export default function ComponentAppProgressPage() {
  const [size, setSize] = useState<App.AppProgressSize>('md');

  return (
    <AppDocsPageShell
      breadcrumbItems={breadcrumbItems}
      description="A React Native progress bar for onboarding, uploads, and long-running tasks."
      propsData={propsData}
      title="App Progress"
    >
      <AppProgressControllerGuide onSizeChange={setSize} size={size} />
      <AppProgressTypeGuide size={size} />
    </AppDocsPageShell>
  );
}
