'use client';

import { useState } from 'react';
import AppDocsPageShell from '@/pages/components/app/common/AppDocsPageShell';
import AppRadioControllerGuide from '@/pages/components/app/radio/AppRadioControllerGuide';
import AppRadioStateGuide from '@/pages/components/app/radio/AppRadioStateGuide';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'Radio', href: '/components/app/radio' },
];

const propsData = [
  { id: '1', property: 'title', type: 'ReactNode', default: 'undefined', description: 'Heading rendered above the radio group.' },
  { id: '2', property: 'options', type: 'AppRadioOption[]', default: '[]', description: 'Radio options with id, label, and optional description.' },
  { id: '3', property: 'value / defaultValue', type: 'string', default: 'undefined', description: 'Controlled or uncontrolled selected option id.' },
  { id: '4', property: 'size', type: ['sm', 'md', 'lg'], default: 'md', description: 'Adjusts the circle size and label rhythm.' },
  { id: '5', property: 'invalid / errorMsg', type: 'boolean / ReactNode', default: 'false / undefined', description: 'Highlights required selection errors.' },
];

export default function ComponentAppRadioPage() {
  const [size, setSize] = useState<App.AppInputSize>('md');

  return (
    <AppDocsPageShell
      breadcrumbItems={breadcrumbItems}
      description="A React Native radio group for mutually exclusive choices inside forms and settings."
      propsData={propsData}
      title="App Radio"
    >
      <AppRadioControllerGuide onSizeChange={setSize} size={size} />
      <AppRadioStateGuide size={size} />
    </AppDocsPageShell>
  );
}
