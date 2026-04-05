'use client';

import TabsTypeGuide from '@/pages/components/navigation/tabs/TabsTypeGuide';
import TabsSizeGuide from '@/pages/components/navigation/tabs/TabsSizeGuide';
import TabsStateGuide from '@/pages/components/navigation/tabs/TabsStateGuide';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';

export default function ComponentTabsPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Navigation', href: '/components/navigation' },
    { label: 'Tabs', href: '/components/navigation/tabs' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-navigation-tabs--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">Tabs</Typography>
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

          <TabsTypeGuide />
          <TabsSizeGuide />
          <TabsStateGuide />

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
    property: 'items',
    type: 'TabsItem[]',
    default: '[]',
    description: 'Array of tab definitions including label and optional content.',
  },
  {
    id: '2',
    property: 'value',
    type: 'string',
    default: "''",
    description: 'Identifier of the currently selected tab.',
  },
  {
    id: '3',
    property: 'onChange',
    type: '(id: string) => void',
    default: 'undefined',
    description: 'Called when the selected tab changes.',
  },
  {
    id: '4',
    property: 'size',
    type: ["'sm'", "'md'", "'lg'"],
    default: "'md'",
    description: 'Controls tab button height and panel spacing.',
  },
  {
    id: '5',
    property: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables all tab interactions.',
  },
  {
    id: '6',
    property: 'classes',
    type: 'string',
    default: "''",
    description: 'Additional classes for the root wrapper.',
  },
];
