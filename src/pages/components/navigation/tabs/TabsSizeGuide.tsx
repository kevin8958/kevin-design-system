import FlexWrapper from '@/components/layout/FlexWrapper';
import Tabs from '@/components/navigation/Tabs';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const items: Navigation.TabsItem[] = [
  {
    id: 'overview',
    label: 'Overview',
    content: 'Overview panel content.',
  },
  {
    id: 'files',
    label: 'Files',
    content: 'Files panel content.',
  },
  {
    id: 'activity',
    label: 'Activity',
    content: 'Activity panel content.',
  },
];

const SizeExample = () => {
  const exampleCode = `<Tabs items={items} value="overview" size="sm" />
<Tabs items={items} value="overview" size="md" />
<Tabs items={items} value="overview" size="lg" />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper direction="col" items="start" gap={6} classes="w-full p-4">
        <FlexWrapper direction="col" gap={3} classes="w-full">
          <Typography variant="C1">Small</Typography>
          <Tabs items={items} value="overview" size="sm" />
        </FlexWrapper>

        <FlexWrapper direction="col" gap={3} classes="w-full">
          <Typography variant="C1">Medium</Typography>
          <Tabs items={items} value="overview" size="md" />
        </FlexWrapper>

        <FlexWrapper direction="col" gap={3} classes="w-full">
          <Typography variant="C1">Large</Typography>
          <Tabs items={items} value="overview" size="lg" />
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const TabsSizeGuide = () => {
  return (
    <GuideSection
      title="Size"
      description="Adjust tab height and text scale to fit dense or spacious navigation layouts."
      example={<SizeExample />}
    />
  );
};

export default TabsSizeGuide;
