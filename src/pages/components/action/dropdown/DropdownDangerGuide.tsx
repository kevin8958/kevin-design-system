import React from 'react';
import { LuTrash2, LuSettings, LuUser } from 'react-icons/lu';

import FlexWrapper from '@/components/layout/FlexWrapper';
import Dropdown from '@/components/action/Dropdown';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const DangerExample = () => {
  const items: Action.DropdownItem[] = [
    {
      type: 'item',
      id: 'profile',
      label: 'Profile Settings',
      icon: <LuUser />,
    },
    {
      type: 'item',
      id: 'preferences',
      label: 'Preferences',
      icon: <LuSettings />,
    },
    {
      type: 'item',
      id: 'delete',
      label: 'Delete Account',
      icon: <LuTrash2 />,
      danger: true, // 강조하고 싶은 핵심 기능
    },
  ];

  const exampleCode = `<Dropdown
  buttonItem="Dropdown"
  items={[
    { type: 'item', id: 'profile', label: 'Profile Settings', icon: <LuUser /> },
    { type: 'item', id: 'preferences', label: 'Preferences', icon: <LuSettings /> },
    { type: 'item', id: 'delete', label: 'Delete Account', icon: <LuTrash2 />, danger: true },
  ]}
  onChange={(id) => handleAction(id)}
/>`;

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-[320px]">
      <FlexWrapper
        items="center"
        justify="center"
        classes="w-full min-h-[200px]"
      >
        <Dropdown label="Dropdown" items={items} />
      </FlexWrapper>
    </CodeExample>
  );
};

const DropdownDangerGuide = () => {
  return (
    <GuideSection
      title="Danger State"
      description="Use the danger property to highlight destructive actions like deletion or account deactivation."
      example={<DangerExample />}
    />
  );
};

export default DropdownDangerGuide;
