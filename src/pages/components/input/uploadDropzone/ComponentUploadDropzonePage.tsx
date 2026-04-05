'use client';

import UploadDropzoneSelectionGuide from '@/pages/components/input/uploadDropzone/UploadDropzoneSelectionGuide';
import UploadDropzoneStateGuide from '@/pages/components/input/uploadDropzone/UploadDropzoneStateGuide';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';

export default function ComponentUploadDropzonePage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Input', href: '/components/input' },
    {
      label: 'UploadDropzone',
      href: '/components/input/uploadDropzone',
    },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-input-uploaddropzone--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">UploadDropzone</Typography>
            <Button
              classes="mb-2"
              variant="outline"
              color="neutral"
              size="sm"
              icon={<LuExternalLink size={14} />}
              iconPosition="right"
              onClick={handleOpenStorybook}
            >
              Storybook
            </Button>
          </FlexWrapper>

          <UploadDropzoneSelectionGuide />
          <UploadDropzoneStateGuide />

          <FlexWrapper classes="w-full" items="start" direction="col">
            <Typography variant="H3">Props</Typography>
            <SimpleTable columns={propsColumn} data={propsData} />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
}

const propsData = [
  {
    id: '1',
    property: 'label',
    type: 'string',
    default: "''",
    description: 'Text label displayed above the dropzone.',
  },
  {
    id: '2',
    property: 'description',
    type: 'string',
    default: "''",
    description: 'Optional supporting copy shown beneath the label.',
  },
  {
    id: '3',
    property: 'helperText',
    type: 'string',
    default: "''",
    description: 'Instructional text rendered inside the dropzone.',
  },
  {
    id: '4',
    property: 'files',
    type: 'File[]',
    default: '[]',
    description: 'Currently selected files displayed below the dropzone.',
  },
  {
    id: '5',
    property: 'onChange',
    type: '(files: File[]) => void',
    default: 'undefined',
    description: 'Called when files are added or removed.',
  },
  {
    id: '6',
    property: 'multiple',
    type: 'boolean',
    default: 'true',
    description: 'Allows selecting multiple files when enabled.',
  },
  {
    id: '7',
    property: 'maxFiles',
    type: 'number',
    default: 'undefined',
    description: 'Limits the number of files returned from a selection.',
  },
  {
    id: '8',
    property: 'accept',
    type: 'string',
    default: "''",
    description: 'Native file input accept string for filtering file types.',
  },
  {
    id: '9',
    property: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables drag, click, and browse interactions.',
  },
  {
    id: '10',
    property: 'invalid',
    type: 'boolean',
    default: 'false',
    description: 'Applies error styling to the dropzone.',
  },
  {
    id: '11',
    property: 'errorMsg',
    type: 'string',
    default: "''",
    description: 'Validation message displayed below the component.',
  },
  {
    id: '12',
    property: 'classes',
    type: 'string',
    default: "''",
    description: 'Additional classes for the outer wrapper.',
  },
];
