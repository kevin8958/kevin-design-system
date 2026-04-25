'use client';

import { useState } from 'react';
import SimpleTable from '@/components/data/SimpleTable';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import { propsColumn } from '@/constants/common';
import AppDocsPageShell from '@/pages/components/app/common/AppDocsPageShell';
import AppToastControllerGuide from '@/pages/components/app/toast/AppToastControllerGuide';
import AppToastProviderSystemGuide from '@/pages/components/app/toast/AppToastProviderSystemGuide';
import AppToastStateGuide from '@/pages/components/app/toast/AppToastStateGuide';
import AppToastTypeGuide from '@/pages/components/app/toast/AppToastTypeGuide';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'Toast', href: '/components/app/toast' },
];

const propsData = [
  {
    id: '1',
    property: 'title',
    type: 'string',
    default: 'undefined',
    description: 'Short toast heading.',
  },
  {
    id: '2',
    property: 'description',
    type: 'string',
    default: 'undefined',
    description: 'Supporting toast body copy.',
  },
  {
    id: '3',
    property: 'variant',
    type: ['info', 'success', 'warning', 'danger'],
    default: 'info',
    description: 'Semantic tone used for the toast icon and border.',
  },
  {
    id: '4',
    property: 'placement',
    type: [
      'top-left',
      'top-center',
      'top-right',
      'bottom-left',
      'bottom-center',
      'bottom-right',
    ],
    default: 'top-right',
    description: 'Positions the toast within the nearest positioned container.',
  },
  {
    id: '5',
    property: 'autoClose',
    type: 'number',
    default: 'undefined',
    description:
      'Automatically dismisses the toast after the given number of milliseconds.',
  },
  {
    id: '6',
    property: 'stackIndex',
    type: 'number',
    default: '0',
    description: 'Offsets stacked toasts so multiple messages do not overlap.',
  },
  {
    id: '7',
    property: 'closable',
    type: 'boolean',
    default: 'false',
    description: 'Shows a dismiss button when true.',
  },
  {
    id: '8',
    property: 'onClose',
    type: '() => void',
    default: 'undefined',
    description: 'Called when the dismiss button is pressed.',
  },
];

const providerPropsData = [
  {
    id: '1',
    property: 'placement',
    type: 'AppToastPlacement',
    default: 'top-right',
    description: 'Controls where the viewport appears on screen.',
  },
  {
    id: '2',
    property: 'maxVisible',
    type: 'number',
    default: '4',
    description: 'Limits how many toasts remain mounted at the same time.',
  },
];

export default function ComponentAppToastPage() {
  const [variant, setVariant] = useState<App.AppFeedbackVariant>('info');
  const [placement, setPlacement] =
    useState<App.AppToastPlacement>('top-right');

  return (
    <AppDocsPageShell
      breadcrumbItems={breadcrumbItems}
      description="A React Native toast system for transient confirmations, warnings, and queued status updates."
      propsData={propsData}
      title="App Toast"
    >
      <AppToastControllerGuide
        onPlacementChange={setPlacement}
        onVariantChange={setVariant}
        placement={placement}
        variant={variant}
      />
      <AppToastTypeGuide variant={variant} />
      <AppToastStateGuide variant={variant} />
      <AppToastProviderSystemGuide placement={placement} variant={variant} />

      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">Provider Props</Typography>
        <SimpleTable columns={propsColumn} data={providerPropsData} />
      </FlexWrapper>
    </AppDocsPageShell>
  );
}
