'use client';

import ToastVariantGuide from '@/pages/components/feedback/toast/ToastVariantGuide';
import ToastStateGuide from '@/pages/components/feedback/toast/ToastStateGuide';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';

export default function ComponentToastPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
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

          <ToastVariantGuide />
          <ToastStateGuide />

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
    property: 'closable',
    type: 'boolean',
    default: 'false',
    description: 'Shows a dismiss button when true.',
  },
  {
    id: '5',
    property: 'onClose',
    type: '() => void',
    default: 'undefined',
    description: 'Called when the dismiss button is clicked.',
  },
  {
    id: '6',
    property: 'classes',
    type: 'string',
    default: "''",
    description: 'Additional classes for custom styling overrides.',
  },
];
