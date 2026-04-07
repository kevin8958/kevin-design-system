'use client';

import { useState } from 'react';
import BadgeContentGuide from '@/pages/components/dataDisplay/badge/BadgeContentGuide';
import BadgeControllerGuide from '@/pages/components/dataDisplay/badge/BadgeControllerGuide';
import BadgeVariantGuide from '@/pages/components/dataDisplay/badge/BadgeVariantGuide';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';

export default function ComponentBadgePage() {
  const [size, setSize] = useState<Data.BadgeSize>('md');
  const breadcrumbItems = [
    { label: 'Components', href: '/components' },
    { label: 'Data Display', href: '/components/dataDisplay' },
    { label: 'Badge', href: '/components/dataDisplay/badge' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-data-display-badge--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">Badge</Typography>
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

          <BadgeControllerGuide size={size} onSizeChange={setSize} />
          <BadgeContentGuide size={size} />
          <BadgeVariantGuide size={size} />

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
    description: 'Text displayed inside the badge.',
  },
  {
    id: '2',
    property: 'size',
    type: ["'sm'", "'md'", "'lg'"],
    default: "'md'",
    description: 'Controls badge padding and text size.',
  },
  {
    id: '3',
    property: 'variant',
    type: ["'neutral'", "'primary'", "'success'", "'warning'", "'danger'"],
    default: "'neutral'",
    description: 'Determines the visual color treatment of the badge.',
  },
  {
    id: '4',
    property: 'classes',
    type: 'string',
    default: "''",
    description: 'Additional classes for custom styling overrides.',
  },
];
