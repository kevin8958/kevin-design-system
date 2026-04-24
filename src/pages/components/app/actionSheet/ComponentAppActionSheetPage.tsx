'use client';

import { useState } from 'react';
import SimpleTable from '@/components/data/SimpleTable';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import { propsColumn } from '@/constants/common';
import AppActionSheetContentGuide from '@/pages/components/app/actionSheet/AppActionSheetContentGuide';
import AppActionSheetControllerGuide from '@/pages/components/app/actionSheet/AppActionSheetControllerGuide';
import AppActionSheetStateGuide from '@/pages/components/app/actionSheet/AppActionSheetStateGuide';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'ActionSheet', href: '/components/app/actionSheet' },
];

const propsData = [
  {
    id: '1',
    property: 'isOpen',
    type: 'boolean',
    default: 'false',
    description: 'Controls whether the sheet is visible.',
  },
  {
    id: '2',
    property: 'onClose',
    type: '() => void',
    default: 'undefined',
    description: 'Called when the backdrop is pressed or a selection completes.',
  },
  {
    id: '3',
    property: 'onSelect',
    type: '(id: string) => void',
    default: 'undefined',
    description: 'Called when a row is selected.',
  },
  {
    id: '4',
    property: 'title',
    type: 'ReactNode',
    default: 'undefined',
    description: 'Optional heading displayed above the action list.',
  },
  {
    id: '5',
    property: 'description',
    type: 'ReactNode',
    default: 'undefined',
    description: 'Optional supporting copy displayed below the title.',
  },
  {
    id: '6',
    property: 'items',
    type: 'AppActionSheetItem[]',
    default: '[]',
    description: 'Rows shown in the action sheet list.',
  },
  {
    id: '7',
    property: 'size',
    type: ['sm', 'md', 'lg'],
    default: 'sm',
    description: 'Controls the panel width and header spacing.',
  },
];

export default function ComponentAppActionSheetPage() {
  const [size, setSize] = useState<App.AppActionSheetSize>('sm');

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper direction="col" items="start" gap={3} classes="w-full">
            <Typography variant="H1">App ActionSheet</Typography>
            <Typography
              variant="B1"
              classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
            >
              A React Native-first bottom action surface for quick decisions
              without leaving the current flow.
            </Typography>
          </FlexWrapper>

          <AppActionSheetControllerGuide
            size={size}
            onSizeChange={setSize}
          />
          <AppActionSheetContentGuide size={size} />
          <AppActionSheetStateGuide size={size} />

          <FlexWrapper classes="w-full" items="start" direction="col">
            <Typography variant="H3">Props</Typography>
            <SimpleTable columns={propsColumn} data={propsData} />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
}
