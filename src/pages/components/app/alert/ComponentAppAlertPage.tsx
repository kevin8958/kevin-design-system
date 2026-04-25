'use client';

import { useState } from 'react';
import AppAlertControllerGuide from '@/pages/components/app/alert/AppAlertControllerGuide';
import AppAlertStateGuide from '@/pages/components/app/alert/AppAlertStateGuide';
import AppAlertTypeGuide from '@/pages/components/app/alert/AppAlertTypeGuide';
import AppDocsPageShell from '@/pages/components/app/common/AppDocsPageShell';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'Alert', href: '/components/app/alert' },
];

const propsData = [
  {
    id: '1',
    property: 'title',
    type: 'ReactNode',
    default: 'undefined',
    description: 'Short alert heading shown at the top of the message.',
  },
  {
    id: '2',
    property: 'description',
    type: 'ReactNode',
    default: 'undefined',
    description: 'Supporting body copy for the alert.',
  },
  {
    id: '3',
    property: 'variant',
    type: ['info', 'success', 'warning', 'danger'],
    default: 'info',
    description: 'Semantic tone used for icon, border, and background styling.',
  },
  {
    id: '4',
    property: 'closable',
    type: 'boolean',
    default: 'false',
    description: 'Shows a dismiss button when true.',
  },
  {
    id: '5',
    property: 'onClose',
    type: '() => void',
    default: 'undefined',
    description: 'Called when the dismiss button is pressed.',
  },
];

export default function ComponentAppAlertPage() {
  const [variant, setVariant] = useState<App.AppFeedbackVariant>('info');

  return (
    <AppDocsPageShell
      breadcrumbItems={breadcrumbItems}
      description="A React Native alert for inline system messaging, warnings, and success confirmations."
      propsData={propsData}
      title="App Alert"
    >
      <AppAlertControllerGuide
        onVariantChange={setVariant}
        variant={variant}
      />
      <AppAlertTypeGuide variant={variant} />
      <AppAlertStateGuide variant={variant} />
    </AppDocsPageShell>
  );
}
