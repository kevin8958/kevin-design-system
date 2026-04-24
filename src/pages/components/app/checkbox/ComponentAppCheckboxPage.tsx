'use client';

import AppDocsPageShell from '@/pages/components/app/common/AppDocsPageShell';
import AppCheckboxStateGuide from '@/pages/components/app/checkbox/AppCheckboxStateGuide';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'Checkbox', href: '/components/app/checkbox' },
];

const propsData = [
  { id: '1', property: 'label', type: 'ReactNode', default: 'undefined', description: 'Primary label placed beside the checkbox.' },
  { id: '2', property: 'description', type: 'ReactNode', default: 'undefined', description: 'Secondary copy shown below the label.' },
  { id: '3', property: 'checked / defaultChecked', type: 'boolean', default: 'false', description: 'Controlled or uncontrolled checked state.' },
  { id: '4', property: 'onChange', type: '(checked: boolean) => void', default: 'undefined', description: 'Called when the value toggles.' },
  { id: '5', property: 'invalid / errorMsg', type: 'boolean / ReactNode', default: 'false / undefined', description: 'Validation treatment for required checkboxes.' },
];

export default function ComponentAppCheckboxPage() {
  return (
    <AppDocsPageShell
      breadcrumbItems={breadcrumbItems}
      description="A React Native checkbox for compact acknowledgements and preference toggles."
      propsData={propsData}
      title="App Checkbox"
    >
      <AppCheckboxStateGuide />
    </AppDocsPageShell>
  );
}
