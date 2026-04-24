'use client';

import { useState } from 'react';
import AppDocsPageShell from '@/pages/components/app/common/AppDocsPageShell';
import AppTextInputControllerGuide from '@/pages/components/app/textInput/AppTextInputControllerGuide';
import AppTextInputPrefixGuide from '@/pages/components/app/textInput/AppTextInputPrefixGuide';
import AppTextInputStateGuide from '@/pages/components/app/textInput/AppTextInputStateGuide';
import AppTextInputSuffixGuide from '@/pages/components/app/textInput/AppTextInputSuffixGuide';
import AppTextInputTypeGuide from '@/pages/components/app/textInput/AppTextInputTypeGuide';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'TextInput', href: '/components/app/textInput' },
];

const propsData = [
  { id: '1', property: 'label', type: 'ReactNode', default: 'undefined', description: 'Optional label displayed above the field.' },
  { id: '2', property: 'value / defaultValue', type: 'string', default: "''", description: 'Controlled or uncontrolled field value.' },
  { id: '3', property: 'onChangeText', type: '(value: string) => void', default: 'undefined', description: 'Called whenever the text changes.' },
  { id: '4', property: 'type', type: ['text', 'password', 'email', 'number'], default: 'text', description: 'Maps to keyboard behavior and secure entry handling.' },
  { id: '5', property: 'size', type: ['sm', 'md', 'lg'], default: 'md', description: 'Controls field height, padding, and text scale.' },
  { id: '6', property: 'prefix / suffix', type: 'ReactNode', default: 'undefined', description: 'Optional leading or trailing content inside the field.' },
  { id: '7', property: 'error / errorMsg', type: 'boolean / ReactNode', default: 'false / undefined', description: 'Applies validation styling and supporting text.' },
  { id: '8', property: 'disabled', type: 'boolean', default: 'false', description: 'Prevents editing and lowers emphasis.' },
  { id: '9', property: 'helperText', type: 'ReactNode', default: 'undefined', description: 'Secondary helper content shown below the field.' },
];

export default function ComponentAppTextInputPage() {
  const [size, setSize] = useState<App.AppInputSize>('md');

  return (
    <AppDocsPageShell
      breadcrumbItems={breadcrumbItems}
      description="A React Native text field for compact app forms, with sizing, affixes, and state coverage matched to the web docs rhythm."
      propsData={propsData}
      title="App TextInput"
    >
      <AppTextInputControllerGuide onSizeChange={setSize} size={size} />
      <AppTextInputPrefixGuide size={size} />
      <AppTextInputStateGuide size={size} />
      <AppTextInputSuffixGuide size={size} />
      <AppTextInputTypeGuide size={size} />
    </AppDocsPageShell>
  );
}
