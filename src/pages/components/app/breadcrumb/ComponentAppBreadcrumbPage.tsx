'use client';

import AppBreadcrumbStateGuide from '@/pages/components/app/breadcrumb/AppBreadcrumbStateGuide';
import AppBreadcrumbTypeGuide from '@/pages/components/app/breadcrumb/AppBreadcrumbTypeGuide';
import AppDocsPageShell from '@/pages/components/app/common/AppDocsPageShell';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'Breadcrumb', href: '/components/app/breadcrumb' },
];

const propsData = [
  { id: '1', property: 'items', type: 'AppBreadcrumbItem[]', default: '[]', description: 'Ordered breadcrumb items used to build the path.' },
  { id: '2', property: 'separator', type: 'ReactNode', default: 'undefined', description: 'Optional custom separator content between items.' },
  { id: '3', property: 'style', type: 'StyleProp<ViewStyle>', default: 'undefined', description: 'Additional wrapper styles for layout adjustments.' },
];

export default function ComponentAppBreadcrumbPage() {
  return (
    <AppDocsPageShell
      breadcrumbItems={breadcrumbItems}
      description="A React Native breadcrumb for deeper app information hierarchies and drill-in flows."
      propsData={propsData}
      title="App Breadcrumb"
    >
      <AppBreadcrumbTypeGuide />
      <AppBreadcrumbStateGuide />
    </AppDocsPageShell>
  );
}
