import React from 'react';
import { LuUser, LuSettings, LuMail, LuBell } from 'react-icons/lu';

import FlexWrapper from '@/components/layout/FlexWrapper';
import Dropdown from '@/components/action/Dropdown';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type DropdownPreviewControls = Pick<
  Action.DropdownProps,
  'size' | 'buttonVariant'
>;

const GroupExample = ({ size, buttonVariant }: DropdownPreviewControls) => {
  const items: Action.DropdownItem[] = [
    {
      type: 'group',
      id: 'account-group',
      label: 'Account',
      items: [
        { type: 'item', id: 'profile', label: 'My Profile', icon: <LuUser /> },
        {
          type: 'item',
          id: 'notifications',
          label: 'Notifications',
          icon: <LuBell />,
        },
      ],
    },
    {
      type: 'group',
      id: 'settings-group',
      label: 'Settings',
      items: [
        {
          type: 'item',
          id: 'preferences',
          label: 'Preferences',
          icon: <LuSettings />,
        },
        {
          type: 'item',
          id: 'support',
          label: 'Contact Support',
          icon: <LuMail />,
        },
      ],
    },
  ];

  const exampleCode = `<Dropdown
  size="${size}"
  buttonVariant="${buttonVariant}"
  label="Dropdown"
  items={[
    {
      type: 'group',
      label: 'Account',
      items: [
        { type: 'item', id: 'profile', label: 'My Profile', icon: <LuUser /> },
        { type: 'item', id: 'notifications', label: 'Notifications', icon: <LuBell /> },
      ],
    },
    {
      type: 'group',
      label: 'Settings',
      items: [
        { type: 'item', id: 'preferences', label: 'Preferences', icon: <LuSettings /> },
      ],
    },
  ]}
/>`;

  return (
    <CodeExample
      code={exampleCode}
      className="flex-1 min-w-[320px]"
      maxHeight={200}
    >
      <FlexWrapper
        items="center"
        justify="center"
        classes="w-full min-h-[300px]"
      >
        <Dropdown
          size={size}
          buttonVariant={buttonVariant}
          label="Dropdown"
          items={items}
          dialogWidth={180}
        />
      </FlexWrapper>
    </CodeExample>
  );
};

const DropdownGroupGuide = (props: DropdownPreviewControls) => {
  return (
    <GuideSection
      title="Grouped Items"
      description="Organize related actions into labeled groups using separators to improve navigability within complex menus."
      example={<GroupExample {...props} />}
    />
  );
};

export default DropdownGroupGuide;
