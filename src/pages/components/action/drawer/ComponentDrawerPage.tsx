'use client';
import Button from '@/components/action/Button';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';
import DrawerSizeGuide from './DrawerSizeGuide';
import { DrawerActionGuide } from './DrawerActionGuide';
import { DrawerLoadingGuide } from './DrawerLoadingGuide';

export default function ComponentDrawerPage() {
  const breadcrumbItems = [
    { label: 'Components', href: '/components' },
    { label: 'Action', href: '/components/action' },
    { label: 'Drawer', href: '/components/action/drawer' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-action-drawer--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">Drawer</Typography>
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

          <DrawerSizeGuide />
          <DrawerActionGuide />
          <DrawerLoadingGuide />

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
    property: 'isOpen',
    type: 'boolean',
    default: 'false',
    description: 'Controls whether the drawer is visible or not.',
  },
  {
    id: '2',
    property: 'onClose',
    type: '() => void',
    default: '-',
    description:
      'Triggered when the drawer needs to be closed (backdrop click, close button, or ESC).',
  },
  {
    id: '3',
    property: 'onConfirm',
    type: '() => void',
    default: '-',
    description:
      'Callback function triggered when the primary action (confirm) button is clicked.',
  },
  {
    id: '4',
    property: 'title',
    type: 'string',
    default: '-',
    description: 'Header text displayed at the top of the drawer.',
  },
  {
    id: '5',
    property: 'size',
    type: ["'sm'", "'md'", "'lg'", "'xl'", "'full'"],
    default: "'md'",
    description: 'Determines the width of the drawer on desktop screens.',
  },
  {
    id: '6',
    property: 'confirmText',
    type: 'string',
    default: "'Confirm'",
    description: 'Label text for the primary action button.',
  },
  {
    id: '7',
    property: 'cancelText',
    type: 'string',
    default: "'Cancel'",
    description: 'Label text for the secondary (cancel) button.',
  },
  {
    id: '8',
    property: 'hideBottom',
    type: 'boolean',
    default: 'false',
    description: 'If true, hides the entire footer action section.',
  },
  {
    id: '9',
    property: 'loading',
    type: 'boolean',
    default: 'false',
    description:
      'Shows a loading spinner on the confirm button and disables interaction.',
  },
  {
    id: '10',
    property: 'classes',
    type: 'string',
    default: '-',
    description:
      'Additional Tailwind CSS classes to apply to the content area.',
  },
];
