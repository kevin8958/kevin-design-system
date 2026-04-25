'use client';

import { useState } from 'react';
import AppDocsPageShell from '@/pages/components/app/common/AppDocsPageShell';
import AppDescriptionListContentGuide from '@/pages/components/app/descriptionList/AppDescriptionListContentGuide';
import AppDescriptionListControllerGuide from '@/pages/components/app/descriptionList/AppDescriptionListControllerGuide';
import AppDescriptionListLayoutGuide from '@/pages/components/app/descriptionList/AppDescriptionListLayoutGuide';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'DescriptionList', href: '/components/app/descriptionList' },
];

const propsData = [
  { id: '1', property: 'items', type: 'AppDescriptionListItem[]', default: '[]', description: 'Label-value rows with optional hints.' },
  { id: '2', property: 'size', type: ['sm', 'md', 'lg'], default: 'md', description: 'Controls padding and typography for each card.' },
  { id: '3', property: 'columns', type: ['1', '2'], default: '1', description: 'Switches between stacked and two-column layouts.' },
];

export default function ComponentAppDescriptionListPage() {
  const [size, setSize] = useState<App.AppCardSize>('md');
  const [columns, setColumns] = useState<App.AppDescriptionListColumns>(1);

  return (
    <AppDocsPageShell
      breadcrumbItems={breadcrumbItems}
      description="A React Native description list for summarized account, project, or profile details."
      propsData={propsData}
      title="App DescriptionList"
    >
      <AppDescriptionListControllerGuide
        columns={columns}
        onColumnsChange={setColumns}
        onSizeChange={setSize}
        size={size}
      />
      <AppDescriptionListContentGuide columns={columns} size={size} />
      <AppDescriptionListLayoutGuide size={size} />
    </AppDocsPageShell>
  );
}
