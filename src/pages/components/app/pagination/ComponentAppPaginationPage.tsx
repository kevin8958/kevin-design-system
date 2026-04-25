'use client';

import { useState } from 'react';
import AppDocsPageShell from '@/pages/components/app/common/AppDocsPageShell';
import AppPaginationControllerGuide from '@/pages/components/app/pagination/AppPaginationControllerGuide';
import AppPaginationStateGuide from '@/pages/components/app/pagination/AppPaginationStateGuide';
import AppPaginationTypeGuide from '@/pages/components/app/pagination/AppPaginationTypeGuide';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'Pagination', href: '/components/app/pagination' },
];

const propsData = [
  { id: '1', property: 'currentPage', type: 'number', default: '1', description: 'Currently selected page number.' },
  { id: '2', property: 'totalPages', type: 'number', default: '1', description: 'Total number of pages available.' },
  { id: '3', property: 'siblingCount', type: 'number', default: '1', description: 'Number of adjacent pages visible on each side.' },
  { id: '4', property: 'disabled', type: 'boolean', default: 'false', description: 'Disables all pagination controls.' },
  { id: '5', property: 'onPageChange', type: '(page: number) => void', default: 'undefined', description: 'Called when a new page is selected.' },
];

export default function ComponentAppPaginationPage() {
  const [siblingCount, setSiblingCount] = useState(1);

  return (
    <AppDocsPageShell
      breadcrumbItems={breadcrumbItems}
      description="A React Native pagination control for dense lists and browsable result views."
      propsData={propsData}
      title="App Pagination"
    >
      <AppPaginationControllerGuide
        onSiblingCountChange={setSiblingCount}
        siblingCount={siblingCount}
      />
      <AppPaginationTypeGuide siblingCount={siblingCount} />
      <AppPaginationStateGuide siblingCount={siblingCount} />
    </AppDocsPageShell>
  );
}
