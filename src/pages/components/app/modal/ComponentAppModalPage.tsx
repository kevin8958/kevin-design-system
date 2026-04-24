'use client';

import { useState } from 'react';
import SimpleTable from '@/components/data/SimpleTable';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import { propsColumn } from '@/constants/common';
import AppModalActionGuide from '@/pages/components/app/modal/AppModalActionGuide';
import AppModalControllerGuide from '@/pages/components/app/modal/AppModalControllerGuide';
import AppModalLoadingGuide from '@/pages/components/app/modal/AppModalLoadingGuide';
import AppModalStateGuide from '@/pages/components/app/modal/AppModalStateGuide';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'Modal', href: '/components/app/modal' },
];

const propsData = [
  {
    id: '1',
    property: 'isOpen',
    type: 'boolean',
    default: 'false',
    description: 'Controls whether the modal is visible.',
  },
  {
    id: '2',
    property: 'onClose',
    type: '() => void',
    default: '-',
    description: 'Triggered when the modal should be dismissed.',
  },
  {
    id: '3',
    property: 'onConfirm',
    type: '() => void',
    default: 'undefined',
    description: 'Triggered when the primary action is confirmed.',
  },
  {
    id: '4',
    property: 'title',
    type: 'ReactNode',
    default: 'undefined',
    description: 'Header text displayed at the top of the modal.',
  },
  {
    id: '5',
    property: 'children',
    type: 'ReactNode',
    default: 'undefined',
    description: 'The main content area of the modal.',
  },
  {
    id: '6',
    property: 'maxWidth',
    type: ['sm', 'md', 'lg', 'xl', '2xl', 'full'],
    default: 'md',
    description: 'The maximum width constraint of the modal panel.',
  },
  {
    id: '7',
    property: 'state',
    type: ['default', 'info', 'success', 'warning', 'danger'],
    default: 'default',
    description: 'Visual theme of the modal, affecting border emphasis and button color.',
  },
  {
    id: '8',
    property: 'position',
    type: ['top', 'center', 'bottom'],
    default: 'center',
    description: 'Vertical alignment of the modal within its container.',
  },
  {
    id: '9',
    property: 'confirmText',
    type: 'string',
    default: 'Confirm',
    description: 'Label text for the primary action button.',
  },
  {
    id: '10',
    property: 'cancelText',
    type: 'string',
    default: 'Cancel',
    description: 'Label text for the secondary action button.',
  },
  {
    id: '11',
    property: 'hideCancel',
    type: 'boolean',
    default: 'false',
    description: 'Hides the cancel button while keeping the primary action visible.',
  },
  {
    id: '12',
    property: 'hideBottom',
    type: 'boolean',
    default: 'false',
    description: 'Hides the footer actions entirely.',
  },
  {
    id: '13',
    property: 'loading',
    type: 'boolean',
    default: 'false',
    description: 'Shows a loading spinner on the confirm button.',
  },
];

export default function ComponentAppModalPage() {
  const [maxWidth, setMaxWidth] = useState<App.AppModalSize>('md');
  const [state, setState] = useState<App.AppModalState>('default');
  const [position, setPosition] = useState<App.AppModalPosition>('center');

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper direction="col" items="start" gap={3} classes="w-full">
            <Typography variant="H1">App Modal</Typography>
            <Typography
              variant="B1"
              classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
            >
              A React Native-first dialog surface for focused decisions,
              confirmations, and in-place status feedback.
            </Typography>
          </FlexWrapper>

          <AppModalControllerGuide
            maxWidth={maxWidth}
            state={state}
            position={position}
            onSizeChange={setMaxWidth}
            onStateChange={setState}
            onPositionChange={setPosition}
          />
          <AppModalActionGuide
            maxWidth={maxWidth}
            state={state}
            position={position}
          />
          <AppModalLoadingGuide
            maxWidth={maxWidth}
            state={state}
            position={position}
          />
          <AppModalStateGuide
            maxWidth={maxWidth}
            state={state}
            position={position}
          />

          <FlexWrapper classes="w-full" items="start" direction="col">
            <Typography variant="H3">Props</Typography>
            <SimpleTable columns={propsColumn} data={propsData} />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
}
