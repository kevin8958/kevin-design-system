'use client';

import AppDocsPageShell from '@/pages/components/app/common/AppDocsPageShell';
import AppUploadDropzoneSelectionGuide from '@/pages/components/app/uploadDropzone/AppUploadDropzoneSelectionGuide';
import AppUploadDropzoneStateGuide from '@/pages/components/app/uploadDropzone/AppUploadDropzoneStateGuide';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'UploadDropzone', href: '/components/app/uploadDropzone' },
];

const propsData = [
  { id: '1', property: 'files / defaultFiles', type: 'AppUploadFile[]', default: '[]', description: 'Controlled or uncontrolled selected file list.' },
  { id: '2', property: 'onPressSelect', type: '() => void', default: 'undefined', description: 'Integrates the dropzone with a native file or media picker.' },
  { id: '3', property: 'onRemoveFile', type: '(id: string) => void', default: 'undefined', description: 'Called when a file row is removed.' },
  { id: '4', property: 'multiple', type: 'boolean', default: 'true', description: 'Adjusts the messaging for multi-file flows.' },
  { id: '5', property: 'error / errorMsg', type: 'boolean / ReactNode', default: 'false / undefined', description: 'Shows required-upload validation states.' },
];

export default function ComponentAppUploadDropzonePage() {
  return (
    <AppDocsPageShell
      breadcrumbItems={breadcrumbItems}
      description="A React Native upload surface for lightweight file attachment flows, ready to connect to a host picker."
      propsData={propsData}
      title="App UploadDropzone"
    >
      <AppUploadDropzoneSelectionGuide />
      <AppUploadDropzoneStateGuide />
    </AppDocsPageShell>
  );
}
