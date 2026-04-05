'use client';

import AvatarSizeGuide from '@/pages/components/dataDisplay/avatar/AvatarSizeGuide';
import AvatarStateGuide from '@/pages/components/dataDisplay/avatar/AvatarStateGuide';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';

export default function ComponentAvatarPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Data Display', href: '/components/dataDisplay' },
    { label: 'Avatar', href: '/components/dataDisplay/avatar' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-data-display-avatar--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">Avatar</Typography>
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

          <AvatarSizeGuide />
          <AvatarStateGuide />

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
    property: 'src',
    type: 'string',
    default: "''",
    description: 'Image source URL used when an avatar image is available.',
  },
  {
    id: '2',
    property: 'name',
    type: 'string',
    default: "''",
    description: 'Name used for alt text and initials fallback.',
  },
  {
    id: '3',
    property: 'alt',
    type: 'string',
    default: "''",
    description: 'Optional image alt text override.',
  },
  {
    id: '4',
    property: 'size',
    type: ["'sm'", "'md'", "'lg'"],
    default: "'md'",
    description: 'Controls avatar dimensions and text scale.',
  },
  {
    id: '5',
    property: 'status',
    type: ["'online'", "'offline'", "'busy'"],
    default: 'undefined',
    description: 'Adds a small presence indicator to the avatar.',
  },
  {
    id: '6',
    property: 'classes',
    type: 'string',
    default: "''",
    description: 'Additional classes for the avatar wrapper.',
  },
];
