'use client';

import { useState } from 'react';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import ActionSheetControllerGuide from '@/pages/components/mobile/actionSheet/ActionSheetControllerGuide';
import ActionSheetContentGuide from '@/pages/components/mobile/actionSheet/ActionSheetContentGuide';
import ActionSheetStateGuide from '@/pages/components/mobile/actionSheet/ActionSheetStateGuide';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'Action', href: '/components/action' },
  { label: 'ActionSheet', href: '/components/action/actionSheet' },
];

const propsData = [
  {
    id: '1',
    property: 'items',
    type: 'Action.ActionSheetItem[]',
    default: '[]',
    description: 'Rows shown in the action sheet list.',
  },
  {
    id: '2',
    property: 'onSelect',
    type: '(id: string) => void',
    default: 'undefined',
    description: 'Called when a row is selected.',
  },
  {
    id: '3',
    property: 'size',
    type: ["'sm'", "'md'", "'lg'"],
    default: "'sm'",
    description: 'Controls the visible height of the sheet.',
  },
  {
    id: '4',
    property: 'contained',
    type: 'boolean',
    default: 'false',
    description: 'Renders the sheet inside a mobile preview instead of the full viewport.',
  },
];

export default function ComponentActionSheetPage() {
  const [size, setSize] = useState<NonNullable<Action.ActionSheetProps['size']>>('sm');

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">ActionSheet</Typography>
            <Button
              classes="mb-2"
              variant="outline"
              color="neutral"
              size="sm"
              icon={<LuExternalLink size={14} />}
              iconPosition="right"
              onClick={() =>
                window.open(
                  `${STORYBOOK_URL}?path=/docs/components-action-actionsheet--docs`,
                  '_blank',
                )
              }
            >
              Storybook
            </Button>
          </FlexWrapper>

          <ActionSheetControllerGuide size={size} onSizeChange={setSize} />
          <ActionSheetContentGuide size={size} />
          <ActionSheetStateGuide size={size} />

          <FlexWrapper classes="w-full" items="start" direction="col">
            <Typography variant="H3">Props</Typography>
            <SimpleTable columns={propsColumn} data={propsData} />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
}
