'use client';
import Button from '@/components/action/Button';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';
import ModalSizeGuide from '@/pages/components/action/modal/ModalSizeGuide';
import ModalStateGuide from '@/pages/components/action/modal/ModalStateGuide';
import ModalActionGuide from './ModalActionGuide';
import ModalPositionGuide from './ModalPositionGuide';

export default function ComponentModalPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Modal', href: '/components/action/modal' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-action-modal--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">Modal</Typography>
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

          <ModalSizeGuide />
          <ModalStateGuide />
          <ModalActionGuide />
          <ModalPositionGuide />

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
    description: 'Controls whether the modal is visible or not.',
  },
  {
    id: '2',
    property: 'onClose',
    type: '() => void',
    default: '-',
    description:
      'Triggered when the modal needs to be closed (backdrop click, ESC, or close buttons).',
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
    default: '',
    description: 'Header text displayed at the top of the modal.',
  },
  {
    id: '5',
    property: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'The main content area of the modal.',
  },
  {
    id: '6',
    property: 'maxWidth',
    type: ["'sm'", "'md'", "'lg'", "'xl'", "'2xl'", "'full'"],
    default: 'md',
    description: 'The maximum width constraint of the modal panel.',
  },
  {
    id: '7',
    property: 'state',
    type: ["'default'", "'info'", "'success'", "'warning'", "'danger'"],
    default: 'default',
    description:
      'Visual theme of the modal, affecting borders and button colors.',
  },
  {
    id: '8',
    property: 'position',
    type: ["'top'", "'center'", "'bottom'"],
    default: 'center',
    description: 'Vertical alignment of the modal within the viewport.',
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
    description: 'Label text for the secondary (cancel) button.',
  },
  {
    id: '11',
    property: 'hideCancel',
    type: 'boolean',
    default: 'false',
    description:
      'If true, hides the bottom cancel button and shows the top-right close icon.',
  },
  {
    id: '12',
    property: 'hideBottom',
    type: 'boolean',
    default: 'false',
    description:
      'If true, hides the entire action button section at the bottom.',
  },
  {
    id: '13',
    property: 'loading',
    type: 'boolean',
    default: 'false',
    description: 'If true, shows a loading spinner on the confirm button.',
  },
];
