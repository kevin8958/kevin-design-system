'use client';

import { useState } from 'react';
import AppDocsPageShell from '@/pages/components/app/common/AppDocsPageShell';
import AppAvatarControllerGuide from '@/pages/components/app/avatar/AppAvatarControllerGuide';
import AppAvatarStateGuide from '@/pages/components/app/avatar/AppAvatarStateGuide';
import AppAvatarTypeGuide from '@/pages/components/app/avatar/AppAvatarTypeGuide';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'Avatar', href: '/components/app/avatar' },
];

const propsData = [
  { id: '1', property: 'src', type: 'string', default: 'undefined', description: 'Image URL used when an avatar image is available.' },
  { id: '2', property: 'name', type: 'string', default: "''", description: 'Name used for initials fallback and accessibility labeling.' },
  { id: '3', property: 'size', type: ['sm', 'md', 'lg'], default: 'md', description: 'Controls avatar dimensions and initials scale.' },
  { id: '4', property: 'status', type: ['online', 'offline', 'busy'], default: 'undefined', description: 'Adds a presence indicator to the avatar.' },
  { id: '5', property: 'onPress', type: '() => void', default: 'undefined', description: 'Optional press handler for profile or detail actions.' },
];

export default function ComponentAppAvatarPage() {
  const [size, setSize] = useState<App.AppAvatarSize>('md');

  return (
    <AppDocsPageShell
      breadcrumbItems={breadcrumbItems}
      description="A React Native avatar for people, assignees, and compact presence indicators."
      propsData={propsData}
      title="App Avatar"
    >
      <AppAvatarControllerGuide onSizeChange={setSize} size={size} />
      <AppAvatarTypeGuide size={size} />
      <AppAvatarStateGuide size={size} />
    </AppDocsPageShell>
  );
}
