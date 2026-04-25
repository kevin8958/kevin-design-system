'use client';

import AppDocsPageShell from '@/pages/components/app/common/AppDocsPageShell';
import AppTableStateGuide from '@/pages/components/app/table/AppTableStateGuide';
import AppTableTypeGuide from '@/pages/components/app/table/AppTableTypeGuide';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'Table', href: '/components/app/table' },
];

const propsData = [
  { id: '1', property: 'columns', type: 'AppTableColumn[]', default: '[]', description: 'Column definitions for headers and cell layout.' },
  { id: '2', property: 'data', type: 'AppTableRow[]', default: '[]', description: 'Row data rendered in the table body.' },
  { id: '3', property: 'emptyState', type: 'ReactNode', default: "'No rows available.'", description: 'Fallback content when the table has no rows.' },
];

export default function ComponentAppTablePage() {
  return (
    <AppDocsPageShell
      breadcrumbItems={breadcrumbItems}
      description="A React Native-friendly table for wider operational datasets rendered inside a horizontally scrollable shell."
      propsData={propsData}
      title="App Table"
    >
      <AppTableTypeGuide />
      <AppTableStateGuide />
    </AppDocsPageShell>
  );
}
