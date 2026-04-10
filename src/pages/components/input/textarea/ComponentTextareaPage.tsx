'use client';

import { useState } from 'react';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';
import TextareaControllerGuide from './TextareaControllerGuide';
import TextareaContentGuide from './TextareaContentGuide';
import TextareaStateGuide from './TextareaStateGuide';

export default function ComponentTextareaPage() {
  const [size, setSize] = useState<Input.TextareaSize>('md');

  const breadcrumbItems = [
    { label: 'Components', href: '/components' },
    { label: 'Input', href: '/components/input' },
    { label: 'Textarea', href: '/components/input/textarea' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-input-textarea--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">Textarea</Typography>
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

          <TextareaControllerGuide size={size} onSizeChange={setSize} />
          <TextareaContentGuide size={size} />
          <TextareaStateGuide size={size} />

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
    description: 'Optional field label shown above the textarea.',
  },
  {
    id: '2',
    property: 'value',
    type: 'string',
    default: "''",
    description: 'Current textarea content.',
  },
  {
    id: '3',
    property: 'onChange',
    type: '(e: React.ChangeEvent<HTMLTextAreaElement>) => void',
    default: '',
    description: 'Called whenever the textarea content changes.',
  },
  {
    id: '4',
    property: 'placeholder',
    type: 'string',
    default: "''",
    description: 'Hint text shown before the user enters content.',
  },
  {
    id: '5',
    property: 'size',
    type: ["'sm'", "'md'", "'lg'"],
    default: "'md'",
    description: 'Controls the default height, padding, and text size.',
  },
  {
    id: '6',
    property: 'rows',
    type: 'number',
    default: '4',
    description: 'Sets the initial visible row count.',
  },
  {
    id: '7',
    property: 'resize',
    type: ["'none'", "'vertical'", "'both'"],
    default: "'vertical'",
    description: 'Controls whether the textarea can be manually resized.',
  },
  {
    id: '8',
    property: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Prevents editing and applies disabled styling.',
  },
  {
    id: '9',
    property: 'error',
    type: 'boolean',
    default: 'false',
    description: 'Applies validation styling to the textarea border.',
  },
  {
    id: '10',
    property: 'errorMsg',
    type: 'string',
    default: "''",
    description: 'Validation message shown below the field.',
  },
  {
    id: '11',
    property: 'classes',
    type: 'string',
    default: "''",
    description: 'Additional classes applied to the textarea element.',
  },
];
