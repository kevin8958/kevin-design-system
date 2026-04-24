'use client';

import { useState } from 'react';
import AppDocsPageShell from '@/pages/components/app/common/AppDocsPageShell';
import AppSwitchControllerGuide from '@/pages/components/app/switch/AppSwitchControllerGuide';
import AppSwitchStateGuide from '@/pages/components/app/switch/AppSwitchStateGuide';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'Switch', href: '/components/app/switch' },
];

const propsData = [
  { id: '1', property: 'label', type: 'ReactNode', default: 'undefined', description: 'Primary switch label.' },
  { id: '2', property: 'description', type: 'ReactNode', default: 'undefined', description: 'Secondary detail text under the label.' },
  { id: '3', property: 'checked / defaultChecked', type: 'boolean', default: 'false', description: 'Controlled or uncontrolled switch value.' },
  { id: '4', property: 'size', type: ['sm', 'md', 'lg'], default: 'md', description: 'Adjusts track and thumb sizing.' },
  { id: '5', property: 'invalid / errorMsg', type: 'boolean / ReactNode', default: 'false / undefined', description: 'Applies an error color treatment when needed.' },
];

export default function ComponentAppSwitchPage() {
  const [size, setSize] = useState<App.AppInputSize>('md');

  return (
    <AppDocsPageShell
      breadcrumbItems={breadcrumbItems}
      description="A React Native switch component for binary preference toggles and inline settings."
      propsData={propsData}
      title="App Switch"
    >
      <AppSwitchControllerGuide onSizeChange={setSize} size={size} />
      <AppSwitchStateGuide size={size} />
    </AppDocsPageShell>
  );
}
