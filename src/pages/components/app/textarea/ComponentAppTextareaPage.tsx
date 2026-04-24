'use client';

import { useState } from 'react';
import AppDocsPageShell from '@/pages/components/app/common/AppDocsPageShell';
import AppTextareaContentGuide from '@/pages/components/app/textarea/AppTextareaContentGuide';
import AppTextareaControllerGuide from '@/pages/components/app/textarea/AppTextareaControllerGuide';
import AppTextareaStateGuide from '@/pages/components/app/textarea/AppTextareaStateGuide';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'Textarea', href: '/components/app/textarea' },
];

const propsData = [
  { id: '1', property: 'label', type: 'ReactNode', default: 'undefined', description: 'Optional field label rendered above the textarea.' },
  { id: '2', property: 'value / defaultValue', type: 'string', default: "''", description: 'Controlled or uncontrolled textarea content.' },
  { id: '3', property: 'size', type: ['sm', 'md', 'lg'], default: 'md', description: 'Changes font size, padding, and base height.' },
  { id: '4', property: 'minRows', type: 'number', default: '4', description: 'Sets the minimum visible row count.' },
  { id: '5', property: 'error / errorMsg', type: 'boolean / ReactNode', default: 'false / undefined', description: 'Shows validation styling and supporting copy.' },
  { id: '6', property: 'disabled', type: 'boolean', default: 'false', description: 'Locks editing and uses muted styling.' },
];

export default function ComponentAppTextareaPage() {
  const [size, setSize] = useState<App.AppInputSize>('md');

  return (
    <AppDocsPageShell
      breadcrumbItems={breadcrumbItems}
      description="A multiline React Native input for descriptions, notes, and longer freeform content."
      propsData={propsData}
      title="App Textarea"
    >
      <AppTextareaControllerGuide onSizeChange={setSize} size={size} />
      <AppTextareaContentGuide size={size} />
      <AppTextareaStateGuide size={size} />
    </AppDocsPageShell>
  );
}
