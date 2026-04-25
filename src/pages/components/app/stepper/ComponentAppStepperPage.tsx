'use client';

import { useState } from 'react';
import AppDocsPageShell from '@/pages/components/app/common/AppDocsPageShell';
import AppStepperControllerGuide from '@/pages/components/app/stepper/AppStepperControllerGuide';
import AppStepperFlowGuide from '@/pages/components/app/stepper/AppStepperFlowGuide';
import AppStepperStateGuide from '@/pages/components/app/stepper/AppStepperStateGuide';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'Stepper', href: '/components/app/stepper' },
];

const propsData = [
  { id: '1', property: 'items', type: 'AppStepperItem[]', default: '[]', description: 'Ordered step data with labels and optional descriptions.' },
  { id: '2', property: 'value', type: 'string', default: "''", description: 'Identifier of the current step.' },
  { id: '3', property: 'onChange', type: '(id: string) => void', default: 'undefined', description: 'Called when a new step is selected.' },
  { id: '4', property: 'size', type: ['sm', 'md', 'lg'], default: 'md', description: 'Controls indicator scale and typography.' },
  { id: '5', property: 'orientation', type: ['horizontal', 'vertical'], default: 'horizontal', description: 'Switches between row-based and stacked layouts.' },
  { id: '6', property: 'allowStepPress', type: 'boolean', default: 'true', description: 'Allows direct tapping on steps when a handler exists.' },
];

export default function ComponentAppStepperPage() {
  const [size, setSize] = useState<App.AppNavigationSize>('md');
  const [orientation, setOrientation] = useState<App.AppStepperOrientation>('horizontal');

  return (
    <AppDocsPageShell
      breadcrumbItems={breadcrumbItems}
      description="A React Native stepper for checkout flows, onboarding, and other multi-stage tasks."
      propsData={propsData}
      title="App Stepper"
    >
      <AppStepperControllerGuide
        onOrientationChange={setOrientation}
        onSizeChange={setSize}
        orientation={orientation}
        size={size}
      />
      <AppStepperFlowGuide orientation={orientation} size={size} />
      <AppStepperStateGuide orientation={orientation} size={size} />
    </AppDocsPageShell>
  );
}
