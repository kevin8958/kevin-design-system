'use client';

import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import BottomNavigationContentGuide from '@/pages/components/mobile/bottomNavigation/BottomNavigationContentGuide';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'Mobile', href: '/components/mobile' },
  { label: 'BottomNavigation', href: '/components/mobile/bottomNavigation' },
];

const propsData = [
  {
    id: '1',
    property: 'items',
    type: 'Mobile.MobileItem[]',
    default: '[]',
    description: 'Navigation destinations shown in the bottom bar.',
  },
  {
    id: '2',
    property: 'value',
    type: 'string',
    default: "''",
    description: 'Currently selected destination id.',
  },
  {
    id: '3',
    property: 'onChange',
    type: '(id: string) => void',
    default: 'undefined',
    description: 'Called when a different destination is selected.',
  },
  {
    id: '4',
    property: 'classes',
    type: 'string',
    default: "''",
    description: 'Additional classes for the bottom navigation wrapper.',
  },
];

export default function ComponentBottomNavigationPage() {
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">BottomNavigation</Typography>
            <Button
              classes="mb-2"
              variant="outline"
              color="neutral"
              size="sm"
              icon={<LuExternalLink size={14} />}
              iconPosition="right"
              onClick={() =>
                window.open(
                  `${STORYBOOK_URL}?path=/docs/components-mobile-bottomnavigation--docs`,
                  '_blank',
                )
              }
            >
              Storybook
            </Button>
          </FlexWrapper>

          <BottomNavigationContentGuide />

          <FlexWrapper classes="w-full" items="start" direction="col">
            <Typography variant="H3">Props</Typography>
            <SimpleTable columns={propsColumn} data={propsData} />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
}
