'use client';

import { useState } from 'react';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import BottomSheetControllerGuide from '@/pages/components/mobile/bottomSheet/BottomSheetControllerGuide';
import BottomSheetContentGuide from '@/pages/components/mobile/bottomSheet/BottomSheetContentGuide';
import BottomSheetStateGuide from '@/pages/components/mobile/bottomSheet/BottomSheetStateGuide';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'Mobile', href: '/components/mobile' },
  { label: 'BottomSheet', href: '/components/mobile/bottomSheet' },
];

const propsData = [
  { id: '1', property: 'isOpen', type: 'boolean', default: 'false', description: 'Controls sheet visibility.' },
  { id: '2', property: 'onClose', type: '() => void', default: 'undefined', description: 'Called when the overlay or escape key closes the sheet.' },
  { id: '3', property: 'title', type: 'string', default: 'undefined', description: 'Optional header title.' },
  { id: '4', property: 'description', type: 'string', default: 'undefined', description: 'Supporting description shown below the title.' },
  { id: '5', property: 'size', type: ["'sm'", "'md'", "'lg'", "'full'"], default: "'md'", description: 'Controls the maximum visible height of the sheet.' },
  { id: '6', property: 'footer', type: 'ReactNode', default: 'undefined', description: 'Optional action row anchored at the bottom of the panel.' },
  { id: '7', property: 'showDragHandle', type: 'boolean', default: 'true', description: 'Shows the mobile drag affordance above the header.' },
  { id: '8', property: 'contained', type: 'boolean', default: 'false', description: 'Renders the overlay inside the nearest relative parent instead of the viewport.' },
  { id: '9', property: 'classes / overlayClasses', type: 'string', default: "''", description: 'Additional classes for the panel and overlay.' },
];

export default function ComponentBottomSheetPage() {
  const [size, setSize] = useState<Mobile.BottomSheetSize>('md');

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">BottomSheet</Typography>
            <Button
              classes="mb-2"
              variant="outline"
              color="neutral"
              size="sm"
              icon={<LuExternalLink size={14} />}
              iconPosition="right"
              onClick={() =>
                window.open(
                  `${STORYBOOK_URL}?path=/docs/components-mobile-bottomsheet--docs`,
                  '_blank',
                )
              }
            >
              Storybook
            </Button>
          </FlexWrapper>

          <BottomSheetControllerGuide size={size} onSizeChange={setSize} />
          <BottomSheetContentGuide size={size} />
          <BottomSheetStateGuide size={size} />

          <FlexWrapper classes="w-full" items="start" direction="col">
            <Typography variant="H3">Props</Typography>
            <SimpleTable columns={propsColumn} data={propsData} />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
}
