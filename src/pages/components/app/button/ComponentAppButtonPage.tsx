'use client';

import { useState } from 'react';
import AppButtonAlignmentGuide from '@/pages/components/app/button/AppButtonAlignmentGuide';
import AppButtonControllerGuide from '@/pages/components/app/button/AppButtonControllerGuide';
import AppButtonIconGuide from '@/pages/components/app/button/AppButtonIconGuide';
import AppButtonLinkGuide from '@/pages/components/app/button/AppButtonLinkGuide';
import AppButtonShapeGuide from '@/pages/components/app/button/AppButtonShapeGuide';
import AppButtonStateGuide from '@/pages/components/app/button/AppButtonStateGuide';
import AppButtonWidthGuide from '@/pages/components/app/button/AppButtonWidthGuide';
import SimpleTable from '@/components/data/SimpleTable';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import { propsColumn } from '@/constants/common';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'Button', href: '/components/app/button' },
];

const propsData = [
  {
    id: '1',
    property: 'label',
    type: 'ReactNode',
    default: 'undefined',
    description: 'Primary button label. Falls back to children when omitted.',
  },
  {
    id: '2',
    property: 'variant',
    type: ['contain', 'outline', 'clear'],
    default: 'contain',
    description: 'Controls the fill and border treatment of the button.',
  },
  {
    id: '3',
    property: 'color',
    type: ['primary', 'neutral', 'info', 'success', 'warning', 'danger'],
    default: 'neutral',
    description: 'Applies semantic color styling for the button.',
  },
  {
    id: '4',
    property: 'size',
    type: ['sm', 'md', 'lg'],
    default: 'md',
    description: 'Sets height and horizontal padding.',
  },
  {
    id: '5',
    property: 'justify',
    type: ['start', 'center'],
    default: 'center',
    description: 'Aligns button content when the button spans a wider area.',
  },
  {
    id: '6',
    property: 'fullWidth',
    type: 'boolean',
    default: 'false',
    description: 'Expands the button to fill the available width.',
  },
  {
    id: '7',
    property: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables press interaction and lowers emphasis.',
  },
  {
    id: '8',
    property: 'loading',
    type: 'boolean',
    default: 'false',
    description: 'Shows an activity indicator and blocks presses.',
  },
  {
    id: '9',
    property: 'icon',
    type: 'ReactNode',
    default: 'undefined',
    description: 'Optional icon node rendered before or after the label.',
  },
  {
    id: '10',
    property: 'iconPosition',
    type: ['left', 'right'],
    default: 'left',
    description: 'Controls whether the icon appears before or after the label.',
  },
  {
    id: '11',
    property: 'shape',
    type: ['rect', 'circle'],
    default: 'rect',
    description: 'Controls the button silhouette for standard or icon-only actions.',
  },
  {
    id: '12',
    property: 'href',
    type: 'string',
    default: 'undefined',
    description: 'Optional URL opened through React Native Linking when no custom onPress handler is provided.',
  },
  {
    id: '13',
    property: 'onPress',
    type: '(event: GestureResponderEvent) => void',
    default: 'undefined',
    description: 'Press handler used in React Native and react-native-web.',
  },
];

export default function ComponentAppButtonPage() {
  const [size, setSize] = useState<App.AppButtonSize>('md');
  const [variant, setVariant] = useState<App.AppButtonVariant>('contain');
  const [color, setColor] = useState<App.AppButtonColor>('neutral');

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper direction="col" items="start" gap={3} classes="w-full">
            <Typography variant="H1">App Button</Typography>
            <Typography
              variant="B1"
              classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
            >
              A React Native-first button documented with the same guide rhythm
              as the web components, while previewing in-browser through
              react-native-web.
            </Typography>
          </FlexWrapper>

          <AppButtonControllerGuide
            size={size}
            variant={variant}
            color={color}
            onSizeChange={setSize}
            onVariantChange={setVariant}
            onColorChange={setColor}
          />
          <AppButtonAlignmentGuide
            size={size}
            variant={variant}
            color={color}
          />
          <AppButtonIconGuide size={size} variant={variant} color={color} />
          <AppButtonLinkGuide size={size} variant={variant} color={color} />
          <AppButtonShapeGuide size={size} variant={variant} color={color} />
          <AppButtonStateGuide size={size} variant={variant} color={color} />
          <AppButtonWidthGuide size={size} variant={variant} color={color} />

          <FlexWrapper classes="w-full" items="start" direction="col">
            <Typography variant="H3">Props</Typography>
            <SimpleTable columns={propsColumn} data={propsData} />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
}
