'use client';

import { useState } from 'react';
import SimpleTable from '@/components/data/SimpleTable';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import { propsColumn } from '@/constants/common';
import AppDrawerActionGuide from '@/pages/components/app/drawer/AppDrawerActionGuide';
import AppDrawerControllerGuide from '@/pages/components/app/drawer/AppDrawerControllerGuide';
import AppDrawerLoadingGuide from '@/pages/components/app/drawer/AppDrawerLoadingGuide';
import AppDrawerStateGuide from '@/pages/components/app/drawer/AppDrawerStateGuide';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'Drawer', href: '/components/app/drawer' },
];

const propsData = [
  {
    id: '1',
    property: 'isOpen',
    type: 'boolean',
    default: 'false',
    description: 'Controls whether the drawer is visible.',
  },
  {
    id: '2',
    property: 'onClose',
    type: '() => void',
    default: '-',
    description: 'Triggered when the drawer should be dismissed.',
  },
  {
    id: '3',
    property: 'onConfirm',
    type: '() => void',
    default: 'undefined',
    description: 'Triggered when the primary footer action is confirmed.',
  },
  {
    id: '4',
    property: 'title',
    type: 'ReactNode',
    default: 'undefined',
    description: 'Header text displayed at the top of the drawer.',
  },
  {
    id: '5',
    property: 'children',
    type: 'ReactNode',
    default: 'undefined',
    description: 'The main content area of the drawer.',
  },
  {
    id: '6',
    property: 'size',
    type: ['sm', 'md', 'lg', 'xl', 'full'],
    default: 'lg',
    description: 'Determines the width of the drawer surface.',
  },
  {
    id: '7',
    property: 'confirmText',
    type: 'string',
    default: 'Confirm',
    description: 'Label text for the primary footer action.',
  },
  {
    id: '8',
    property: 'cancelText',
    type: 'string',
    default: 'Cancel',
    description: 'Label text for the secondary footer action.',
  },
  {
    id: '9',
    property: 'hideBottom',
    type: 'boolean',
    default: 'false',
    description: 'Hides the footer action section.',
  },
  {
    id: '10',
    property: 'loading',
    type: 'boolean',
    default: 'false',
    description: 'Shows a loading spinner on the confirm button.',
  },
];

export default function ComponentAppDrawerPage() {
  const [size, setSize] = useState<App.AppDrawerSize>('lg');

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper direction="col" items="start" gap={3} classes="w-full">
            <Typography variant="H1">App Drawer</Typography>
            <Typography
              variant="B1"
              classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
            >
              A React Native-first side surface for multi-step editing,
              extended forms, and review flows that should stay contextual.
            </Typography>
          </FlexWrapper>

          <AppDrawerControllerGuide size={size} onSizeChange={setSize} />
          <AppDrawerActionGuide size={size} />
          <AppDrawerLoadingGuide size={size} />
          <AppDrawerStateGuide size={size} />

          <FlexWrapper classes="w-full" items="start" direction="col">
            <Typography variant="H3">Props</Typography>
            <SimpleTable columns={propsColumn} data={propsData} />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
}
