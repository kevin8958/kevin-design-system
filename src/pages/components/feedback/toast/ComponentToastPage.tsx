'use client';

import { useState } from 'react';
import ToastStateGuide from '@/pages/components/feedback/toast/ToastStateGuide';
import ToastControllerGuide from '@/pages/components/feedback/toast/ToastControllerGuide';
import ToastTypeGuide from '@/pages/components/feedback/toast/ToastTypeGuide';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';

export default function ComponentToastPage() {
  const [variant, setVariant] = useState<Feedback.ToastVariant>('info');
  const breadcrumbItems = [
    { label: 'Components', href: '/components' },
    { label: 'Feedback', href: '/components/feedback' },
    { label: 'Toast', href: '/components/feedback/toast' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-feedback-toast--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">Toast</Typography>
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

          <ToastControllerGuide variant={variant} onVariantChange={setVariant} />
          <ToastTypeGuide variant={variant} />
          <ToastStateGuide variant={variant} />

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
    property: 'title',
    type: 'string',
    default: "''",
    description: 'Short toast heading.',
  },
  {
    id: '2',
    property: 'description',
    type: 'string',
    default: "''",
    description: 'Supporting toast body copy.',
  },
  {
    id: '3',
    property: 'variant',
    type: ["'info'", "'success'", "'warning'", "'danger'"],
    default: "'info'",
    description: 'Semantic tone used for the toast icon and border.',
  },
  {
    id: '4',
    property: 'placement',
    type: [
      "'top-left'",
      "'top-center'",
      "'top-right'",
      "'bottom-left'",
      "'bottom-center'",
      "'bottom-right'",
    ],
    default: 'undefined',
    description:
      'Absolutely positions the toast inside the nearest positioned container.',
  },
  {
    id: '5',
    property: 'autoClose',
    type: 'number',
    default: 'undefined',
    description:
      'Automatically dismisses the toast after the given number of milliseconds.',
  },
  {
    id: '6',
    property: 'stackIndex',
    type: 'number',
    default: '0',
    description:
      'Offsets placed toasts vertically so multiple messages can stack without overlap.',
  },
  {
    id: '7',
    property: 'closable',
    type: 'boolean',
    default: 'false',
    description: 'Shows a dismiss button when true.',
  },
  {
    id: '8',
    property: 'onClose',
    type: '() => void',
    default: 'undefined',
    description: 'Called when the dismiss button is clicked.',
  },
  {
    id: '9',
    property: 'classes',
    type: 'string',
    default: "''",
    description: 'Additional classes for custom styling overrides.',
  },
];
