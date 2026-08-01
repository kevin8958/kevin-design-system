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
    { label: 'Components', href: '/components' },
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
          <FlexWrapper justify="start" items="end" classes="w-full flex-wrap">
            <Typography
              variant="H1" responsive
              classes="w-full break-words whitespace-pre-wrap"
            >
              UploadDropzone
            </Typography>
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
    description:
      'Additional classes for the dropzone surface (the bordered/interactive drop area), not the outer label/description wrapper.',
  },
  {
    id: '13',
    property: 'simple',
    type: 'boolean',
    default: 'false',
    description:
      'Compact, language-neutral layout: drops the default English heading, helper copy, "Accepted:" line, and Browse button, keeping just the icon (and the file list once files are selected). Any helperText you pass still renders.',
  },
  {
    id: '14',
    property: 'dragText',
    type: 'string',
    default: "'Drag file(s) here or browse'",
    description: 'Overrides the heading shown when no files are selected.',
  },
  {
    id: '15',
    property: 'selectedText',
    type: '(count: number) => string',
    default: 'undefined',
    description:
      'Overrides the "{n} file(s) selected" heading. Receives the selected file count so plural forms can be localized.',
  },
  {
    id: '16',
    property: 'browseButtonText',
    type: 'string',
    default: "'Browse Files'",
    description: 'Overrides the Browse button label.',
  },
  {
    id: '17',
    property: 'acceptedText',
    type: '(accept: string) => string',
    default: 'undefined',
    description: 'Overrides the "Accepted: {accept}" caption. Receives the accept value.',
  },
  {
    id: '18',
    property: 'removeFileLabel',
    type: '(fileName: string) => string',
    default: 'undefined',
    description: "Overrides a selected file's remove button aria-label. Receives the file name.",
  },
  {
    id: '19',
    property: 'uploadAriaLabel',
    type: 'string',
    default: "'Upload files'",
    description: "Overrides the dropzone's fallback aria-label, used when label isn't provided.",
  },
];
