'use client';

import DividerOrientationGuide from '@/pages/components/layout/divider/DividerOrientationGuide';
import DividerStateGuide from '@/pages/components/layout/divider/DividerStateGuide';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';

export default function ComponentDividerPage() {
  const breadcrumbItems = [
    { label: 'Components', href: '/components' },
    { label: 'Layout', href: '/components/layout' },
    { label: 'Divider', href: '/components/layout/divider' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-layout-divider--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">Divider</Typography>
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

          <DividerOrientationGuide />
          <DividerStateGuide />

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
    property: 'orientation',
    type: ["'horizontal'", "'vertical'"],
    default: "'vertical'",
    description: 'Controls whether the divider is rendered horizontally or vertically.',
  },
  {
    id: '2',
    property: 'classes',
    type: 'string',
    default: "''",
    description: 'Additional classes for spacing or size adjustments.',
  },
];
