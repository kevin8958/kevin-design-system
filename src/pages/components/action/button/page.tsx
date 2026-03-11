'use client';

import ButtonSizeGuide from '@/pages/components/action/button/ButtonSizeGuide';
import ButtonVariantGuide from '@/pages/components/action/button/ButtonVariantGuide';
import ButtonStateGuide from '@/pages/components/action/button/ButtonStateGuide';
import ButtonShapeGuide from '@/pages/components/action/button/ButtonShapeGuide';
import ButtonIconGuide from '@/pages/components/action/button/ButtonIconGuide';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import { propsColumn } from '@/constants/common';

export default function ComponentButtonPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Button', href: '/components/action/button' },
  ];

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="H1">Button</Typography>
          <ButtonSizeGuide />
          <ButtonVariantGuide />
          <ButtonStateGuide />
          <ButtonIconGuide />
          <ButtonShapeGuide />
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
    property: 'classes',
    type: 'string',
    default: '',
    description: 'Custom classes for the button.',
  },
  {
    id: '2',
    property: 'type',
    type: ['button', 'submit'],
    default: 'button',
    description: 'The type of the button.',
  },
  {
    id: '3',
    property: 'size',
    type: ['lg', 'md', 'sm'],
    default: 'md',
    description: 'The size of the button.',
  },
  {
    id: '4',
    property: 'variant',
    type: ['contain', 'outline', 'clear'],
    default: 'contain',
    description: 'The variant of the button.',
  },
  {
    id: '5',
    property: 'color',
    type: ['primary', 'info', 'success', 'warning', 'danger'],
    default: 'primary',
    description: 'The color of the button.',
  },
  {
    id: '6',
    property: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'If true, the button will be disabled.',
  },
  {
    id: '7',
    property: 'loading',
    type: 'boolean',
    default: 'false',
    description: 'If true, the button will show a loading spinner.',
  },
  {
    id: '8',
    property: 'prompted',
    type: 'boolean',
    default: 'false',
    description: 'If true, the button will show a prompt state.',
  },
  {
    id: '9',
    property: 'icon',
    type: 'ReactNode',
    default: '',
    description: 'The icon to be displayed in the button.',
  },
  {
    id: '10',
    property: 'iconPosition',
    type: ['left', 'right'],
    default: 'left',
    description:
      'The position of the icon in the button. Can be "left" or "right".',
  },
  {
    id: '11',
    property: 'shape',
    type: ['rect', 'circle'],
    default: 'rect',
    description: 'The shape of the button.',
  },
  {
    id: '12',
    property: 'onClick',
    type: '(e) => void',
    default: '',
    description: 'Function to be called when the button is clicked.',
  },
];
