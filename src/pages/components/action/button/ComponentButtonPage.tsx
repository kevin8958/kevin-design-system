'use client';

import { useState } from 'react';
import Button from '@/components/action/Button';
import ButtonControllerGuide from '@/pages/components/action/button/ButtonControllerGuide';
import ButtonStateGuide from '@/pages/components/action/button/ButtonStateGuide';
import ButtonShapeGuide from '@/pages/components/action/button/ButtonShapeGuide';
import ButtonIconGuide from '@/pages/components/action/button/ButtonIconGuide';
import ButtonWidthGuide from '@/pages/components/action/button/ButtonWidthGuide';
import ButtonAlignmentGuide from '@/pages/components/action/button/ButtonAlignmentGuide';
import ButtonLinkGuide from '@/pages/components/action/button/ButtonLinkGuide';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';

export default function ComponentButtonPage() {
  const [size, setSize] = useState<Action.ButtonSize>('md');
  const [variant, setVariant] = useState<Action.ButtonVariant>('contain');
  const [color, setColor] = useState<Action.ButtonColor>('neutral');

  const breadcrumbItems = [
    { label: 'Components', href: '/components' },
    { label: 'Action', href: '/components/action' },
    { label: 'Button', href: '/components/action/button' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-action-button--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">Button</Typography>
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

          <ButtonControllerGuide
            size={size}
            variant={variant}
            color={color}
            onSizeChange={setSize}
            onVariantChange={setVariant}
            onColorChange={setColor}
          />
          <ButtonAlignmentGuide size={size} variant={variant} color={color} />
          <ButtonIconGuide size={size} variant={variant} color={color} />
          <ButtonLinkGuide size={size} variant={variant} color={color} />
          <ButtonShapeGuide size={size} variant={variant} color={color} />
          <ButtonStateGuide size={size} variant={variant} color={color} />
          <ButtonWidthGuide size={size} variant={variant} color={color} />

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
    type: ['button', 'submit', 'reset'],
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
    type: ['primary', 'neutral', 'info', 'success', 'warning', 'danger'],
    default: 'neutral',
    description: 'The color of the button.',
  },
  {
    id: '6',
    property: 'justify',
    type: ['start', 'center'],
    default: 'center',
    description: 'Aligns button content when the button spans a wider area.',
  },
  {
    id: '7',
    property: 'fullWidth',
    type: 'boolean',
    default: 'false',
    description: 'If true, the button expands to fill the width of its container.',
  },
  {
    id: '8',
    property: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'If true, the button will be disabled.',
  },
  {
    id: '9',
    property: 'loading',
    type: 'boolean',
    default: 'false',
    description: 'If true, the button will show a loading spinner.',
  },
  {
    id: '10',
    property: 'prompted',
    type: 'boolean',
    default: 'false',
    description: 'If true, the button will show a pulse animation.',
  },
  {
    id: '11',
    property: 'icon',
    type: 'ReactNode',
    default: '',
    description: 'The icon to be displayed in the button.',
  },
  {
    id: '12',
    property: 'iconPosition',
    type: ['left', 'right'],
    default: 'left',
    description: 'The position of the icon.',
  },
  {
    id: '13',
    property: 'shape',
    type: ['rect', 'circle'],
    default: 'rect',
    description: 'The shape of the button.',
  },
  {
    id: '14',
    property: 'href',
    type: 'string',
    default: '',
    description: 'If provided, renders the button as a link and adds a right arrow icon by default.',
  },
  {
    id: '15',
    property: 'target',
    type: 'string',
    default: '',
    description: 'Sets the target attribute when the button is rendered as a link.',
  },
  {
    id: '16',
    property: 'rel',
    type: 'string',
    default: '',
    description: 'Sets the rel attribute when the button is rendered as a link.',
  },
  {
    id: '17',
    property: 'onClick',
    type: '(e: React.MouseEvent<HTMLElement>) => void',
    default: '',
    description: 'Click event handler.',
  },
];
