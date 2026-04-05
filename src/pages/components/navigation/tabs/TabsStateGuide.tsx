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

const StateExample = () => {
  const exampleCode = `<Tabs items={items} value="details" />
<Tabs items={items} value="details" disabled />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper direction="col" items="start" gap={6} classes="w-full p-4">
        <FlexWrapper direction="col" gap={3} classes="w-full">
          <Typography variant="C1">With Disabled Tab</Typography>
          <Tabs items={stateItems} value="details" />
        </FlexWrapper>

        <FlexWrapper direction="col" gap={3} classes="w-full">
          <Typography variant="C1">Disabled Group</Typography>
          <Tabs items={stateItems} value="details" disabled />
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const TabsStateGuide = () => {
  return (
    <GuideSection
      title="State"
      description="Communicate selected and unavailable tab states with clear visual contrast."
      example={<StateExample />}
    />
  );
};

export default TabsStateGuide;
