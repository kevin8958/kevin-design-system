import { useState } from 'react';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Tabs from '@/components/navigation/Tabs';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const stateItems: Navigation.TabsItem[] = [
  {
    id: 'details',
    label: 'Details',
    content: 'Details panel content.',
  },
  {
    id: 'members',
    label: 'Members',
    content: 'Members panel content.',
  },
  {
    id: 'billing',
    label: 'Billing',
    disabled: true,
    content: 'Billing panel content.',
  },
];

type TabsPreviewControls = Pick<Navigation.TabsProps, 'size'>;

const StateExample = ({ size }: TabsPreviewControls) => {
  const [value, setValue] = useState('details');

  const exampleCode = `const [value, setValue] = useState('details');

<Tabs items={items} value={value} size="${size}" onChange={setValue} />
<Tabs items={items} value="details" size="${size}" disabled />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper direction="col" items="start" gap={6} classes="w-full p-4">
        <FlexWrapper direction="col" gap={3} classes="w-full">
          <Typography variant="C1">With Disabled Tab</Typography>
          <Tabs
            items={stateItems}
            value={value}
            size={size}
            onChange={setValue}
          />
        </FlexWrapper>

        <FlexWrapper direction="col" gap={3} classes="w-full">
          <Typography variant="C1">Disabled Group</Typography>
          <Tabs items={stateItems} value="details" size={size} disabled />
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const TabsStateGuide = (props: TabsPreviewControls) => {
  return (
    <GuideSection
      title="State"
      description="Communicate selected and unavailable tab states with clear visual contrast."
      example={<StateExample {...props} />}
    />
  );
};

export default TabsStateGuide;
