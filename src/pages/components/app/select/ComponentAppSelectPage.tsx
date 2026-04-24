'use client';

import { useState } from 'react';
import AppDocsPageShell from '@/pages/components/app/common/AppDocsPageShell';
import AppSelectControllerGuide from '@/pages/components/app/select/AppSelectControllerGuide';
import AppSelectStateGuide from '@/pages/components/app/select/AppSelectStateGuide';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'Select', href: '/components/app/select' },
];

const propsData = [
  { id: '1', property: 'options', type: 'AppSelectOption[]', default: '[]', description: 'Options rendered inside the popover list.' },
  { id: '2', property: 'value / defaultValue', type: 'string', default: 'undefined', description: 'Controlled or uncontrolled selected value.' },
  { id: '3', property: 'onChange', type: '(value: string) => void', default: 'undefined', description: 'Triggered when a new option is chosen.' },
  { id: '4', property: 'placeholder', type: 'string', default: "'Select option'", description: 'Fallback text before a value is selected.' },
  { id: '5', property: 'size', type: ['sm', 'md', 'lg'], default: 'md', description: 'Controls trigger height and type scale.' },
  { id: '6', property: 'invalid / errorMsg', type: 'boolean / ReactNode', default: 'false / undefined', description: 'Applies validation state to the trigger.' },
  { id: '7', property: 'open / defaultOpen', type: 'boolean', default: 'false', description: 'Controls the floating list visibility.' },
];

export default function ComponentAppSelectPage() {
  const [size, setSize] = useState<App.AppInputSize>('md');

  return (
    <AppDocsPageShell
      breadcrumbItems={breadcrumbItems}
      description="A React Native select field built with a lightweight floating list for docs preview and app reuse."
      propsData={propsData}
      title="App Select"
    >
      <AppSelectControllerGuide onSizeChange={setSize} size={size} />
      <AppSelectStateGuide size={size} />
    </AppDocsPageShell>
  );
}
