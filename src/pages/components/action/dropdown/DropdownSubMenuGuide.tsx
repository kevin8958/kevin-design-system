import React from 'react';
import { LuShare2, LuLink, LuMail, LuTwitter, LuGithub } from 'react-icons/lu';

import FlexWrapper from '@/components/layout/FlexWrapper';
import Dropdown from '@/components/action/Dropdown';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const SubMenuExample = () => {
  const items: Action.DropdownItem[] = [
    { type: 'item', id: 'copy', label: 'Copy Link', icon: <LuLink /> },
    {
      type: 'submenu',
      id: 'share',
      label: 'Share to...',
      icon: <LuShare2 />,
      items: [
        { type: 'item', id: 'email', label: 'Email', icon: <LuMail /> },
        {
          type: 'item',
          id: 'twitter',
          label: 'Twitter (X)',
          icon: <LuTwitter />,
        },
        { type: 'item', id: 'github', label: 'GitHub', icon: <LuGithub /> },
      ],
    },
  ];

  const exampleCode = `<Dropdown
  buttonItem="Menu"
  items={[
    { type: 'item', id: 'copy', label: 'Copy Link', icon: <LuLink /> },
    {
      type: 'submenu',
      id: 'share',
      label: 'Share to...',
      icon: <LuShare2 />,
      items: [
        { type: 'item', id: 'email', label: 'Email', icon: <LuMail /> },
        { type: 'item', id: 'twitter', label: 'Twitter', icon: <LuTwitter /> },
      ],
    },
  ]}
/>`;

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-[320px]">
      <FlexWrapper
        items="center"
        justify="center"
        classes="w-full min-h-[300px]"
      >
        <Dropdown label="Share Menu" items={items} dialogWidth={140} />
      </FlexWrapper>
    </CodeExample>
  );
};

const DropdownSubMenuGuide = () => {
  return (
    <GuideSection
      title="Submenus"
      description="Nest additional layers of actions within a single menu item to keep the primary interface clean while providing access to complex options."
      example={<SubMenuExample />}
    />
  );
};

export default DropdownSubMenuGuide;
