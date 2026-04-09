'use client';

import { useState } from 'react';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import MobileNavDrawerControllerGuide from '@/pages/components/mobile/mobileNavDrawer/MobileNavDrawerControllerGuide';
import MobileNavDrawerContentGuide from '@/pages/components/mobile/mobileNavDrawer/MobileNavDrawerContentGuide';
import MobileNavDrawerStateGuide from '@/pages/components/mobile/mobileNavDrawer/MobileNavDrawerStateGuide';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'Mobile', href: '/components/mobile' },
  { label: 'NavDrawer', href: '/components/mobile/navDrawer' },
];

const propsData = [
  { id: '1', property: 'isOpen', type: 'boolean', default: 'false', description: 'Controls drawer visibility.' },
  { id: '2', property: 'onClose', type: '() => void', default: 'undefined', description: 'Called when the drawer closes.' },
  { id: '3', property: 'onChange', type: '(id: string) => void', default: 'undefined', description: 'Called when a navigation item is selected.' },
  { id: '4', property: 'title / subtitle', type: 'string', default: 'undefined', description: 'Optional heading content at the top of the drawer.' },
  { id: '5', property: 'items', type: 'Mobile.MobileItem[]', default: '[]', description: 'Navigation items shown inside the drawer.' },
  { id: '6', property: 'footer', type: 'ReactNode', default: 'undefined', description: 'Optional footer actions pinned below the navigation list.' },
  { id: '7', property: 'size', type: ["'sm'", "'md'"], default: "'md'", description: 'Controls drawer width.' },
  { id: '8', property: 'contained', type: 'boolean', default: 'false', description: 'Renders inside the nearest relative parent instead of the viewport.' },
  { id: '9', property: 'classes / overlayClasses', type: 'string', default: "''", description: 'Additional classes for the drawer panel and overlay.' },
];

export default function ComponentMobileNavDrawerPage() {
  const [size, setSize] = useState<Mobile.NavDrawerSize>('md');

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">NavDrawer</Typography>
            <Button
              classes="mb-2"
              variant="outline"
              color="neutral"
              size="sm"
              icon={<LuExternalLink size={14} />}
              iconPosition="right"
              onClick={() =>
                window.open(
                  `${STORYBOOK_URL}?path=/docs/components-mobile-navdrawer--docs`,
                  '_blank',
                )
              }
            >
              Storybook
            </Button>
          </FlexWrapper>

          <MobileNavDrawerControllerGuide size={size} onSizeChange={setSize} />
          <MobileNavDrawerContentGuide size={size} />
          <MobileNavDrawerStateGuide size={size} />

          <FlexWrapper classes="w-full" items="start" direction="col">
            <Typography variant="H3">Props</Typography>
            <SimpleTable columns={propsColumn} data={propsData} />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
}
