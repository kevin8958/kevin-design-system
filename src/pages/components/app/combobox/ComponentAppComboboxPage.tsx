'use client';

import { useState } from 'react';
import AppDocsPageShell from '@/pages/components/app/common/AppDocsPageShell';
import AppComboboxContentGuide from '@/pages/components/app/combobox/AppComboboxContentGuide';
import AppComboboxControllerGuide from '@/pages/components/app/combobox/AppComboboxControllerGuide';
import AppComboboxStateGuide from '@/pages/components/app/combobox/AppComboboxStateGuide';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'Combobox', href: '/components/app/combobox' },
];

const propsData = [
  { id: '1', property: 'options', type: 'AppSelectOption[]', default: '[]', description: 'Searchable options rendered in the results list.' },
  { id: '2', property: 'queryPlaceholder', type: 'string', default: "'Search'", description: 'Placeholder shown in the search field.' },
  { id: '3', property: 'emptyText', type: 'ReactNode', default: "'No matching options'", description: 'Fallback content for an empty result set.' },
  { id: '4', property: 'value / defaultValue', type: 'string', default: 'undefined', description: 'Controlled or uncontrolled selected value.' },
  { id: '5', property: 'invalid / errorMsg', type: 'boolean / ReactNode', default: 'false / undefined', description: 'Validation styling for the trigger and helper line.' },
];

export default function ComponentAppComboboxPage() {
  const [size, setSize] = useState<App.AppInputSize>('md');

  return (
    <AppDocsPageShell
      breadcrumbItems={breadcrumbItems}
      description="A React Native combobox for searchable lists where the option set is still compact enough to stay in context."
      propsData={propsData}
      title="App Combobox"
    >
      <AppComboboxControllerGuide onSizeChange={setSize} size={size} />
      <AppComboboxContentGuide size={size} />
      <AppComboboxStateGuide size={size} />
    </AppDocsPageShell>
  );
}
