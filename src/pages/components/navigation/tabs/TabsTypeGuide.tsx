import { useState } from 'react';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Tabs from '@/components/navigation/Tabs';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const defaultItems: Navigation.TabsItem[] = [
  {
    id: 'overview',
    label: 'Overview',
    content: 'Summary information for the selected section.',
  },
  {
    id: 'metrics',
    label: 'Metrics',
    content: 'Charts and key numbers can appear in this tab panel.',
  },
  {
    id: 'history',
    label: 'History',
    content: 'Past events and records are grouped here.',
  },
];

type TabsPreviewControls = Pick<Navigation.TabsProps, 'size'>;

const TypeExample = ({ size }: TabsPreviewControls) => {
  const [value, setValue] = useState('overview');

  const exampleCode = `const [value, setValue] = useState('overview');

<Tabs
  items={items}
  value={value}
  size="${size}"
  onChange={setValue}
/>`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper direction="col" items="start" gap={4} classes="w-full p-4">
        <Typography variant="C1">Default Tabs</Typography>
        <Tabs items={defaultItems} value={value} size={size} onChange={setValue} />
      </FlexWrapper>
    </CodeExample>
  );
};

const TabsTypeGuide = (props: TabsPreviewControls) => {
  return (
    <GuideSection
      title="Type"
      description="Use tabs to switch between related views without leaving the current page."
      example={<TypeExample {...props} />}
    />
  );
};

export default TabsTypeGuide;
