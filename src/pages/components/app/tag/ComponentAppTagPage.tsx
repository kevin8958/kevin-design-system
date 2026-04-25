'use client';

import { useState } from 'react';
import AppDocsPageShell from '@/pages/components/app/common/AppDocsPageShell';
import AppTagContentGuide from '@/pages/components/app/tag/AppTagContentGuide';
import AppTagControllerGuide from '@/pages/components/app/tag/AppTagControllerGuide';
import AppTagVariantGuide from '@/pages/components/app/tag/AppTagVariantGuide';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'Tag', href: '/components/app/tag' },
];

const propsData = [
  { id: '1', property: 'label', type: 'string', default: "''", description: 'Text displayed inside the tag.' },
  { id: '2', property: 'size', type: ['sm', 'md', 'lg'], default: 'md', description: 'Controls tag padding and text size.' },
  { id: '3', property: 'variant', type: ['neutral', 'primary'], default: 'neutral', description: 'Determines the visual emphasis of the tag.' },
];

export default function ComponentAppTagPage() {
  const [size, setSize] = useState<App.AppLabelSize>('md');

  return (
    <AppDocsPageShell
      breadcrumbItems={breadcrumbItems}
      description="A React Native tag for lightweight categorization and contextual filtering."
      propsData={propsData}
      title="App Tag"
    >
      <AppTagControllerGuide onSizeChange={setSize} size={size} />
      <AppTagContentGuide size={size} />
      <AppTagVariantGuide size={size} />
    </AppDocsPageShell>
  );
}
