'use client';

import { useState } from 'react';
import AppDocsPageShell from '@/pages/components/app/common/AppDocsPageShell';
import AppTabsControllerGuide from '@/pages/components/app/tabs/AppTabsControllerGuide';
import AppTabsStateGuide from '@/pages/components/app/tabs/AppTabsStateGuide';
import AppTabsTypeGuide from '@/pages/components/app/tabs/AppTabsTypeGuide';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'Tabs', href: '/components/app/tabs' },
];

const propsData = [
  { id: '1', property: 'items', type: 'AppTabsItem[]', default: '[]', description: 'Tab definitions with labels and optional panel content.' },
  { id: '2', property: 'value', type: 'string', default: "''", description: 'Identifier of the selected tab.' },
  { id: '3', property: 'onChange', type: '(id: string) => void', default: 'undefined', description: 'Called when a tab is selected.' },
  { id: '4', property: 'size', type: ['sm', 'md', 'lg'], default: 'md', description: 'Controls tab height and panel spacing.' },
  { id: '5', property: 'disabled', type: 'boolean', default: 'false', description: 'Disables the whole tab group.' },
];

export default function ComponentAppTabsPage() {
  const [size, setSize] = useState<App.AppNavigationSize>('md');

  return (
    <AppDocsPageShell
      breadcrumbItems={breadcrumbItems}
      description="A React Native tabs component for lightweight view switching without leaving the current context."
      propsData={propsData}
      title="App Tabs"
    >
      <AppTabsControllerGuide onSizeChange={setSize} size={size} />
      <AppTabsTypeGuide size={size} />
      <AppTabsStateGuide size={size} />
    </AppDocsPageShell>
  );
}
