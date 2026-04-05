import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const longPathItems = [
  { label: 'Home', href: '/' },
  { label: 'Workspace', href: '/workspace' },
  { label: 'Design System', href: '/workspace/design-system' },
  { label: 'Navigation', href: '/components/navigation' },
  { label: 'Breadcrumb', href: '/components/navigation/breadcrumb' },
];

const StateExample = () => {
  const exampleCode = `<BreadCrumb items={items} />
<BreadCrumb items={longPathItems} />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper direction="col" items="start" gap={6} classes="w-full p-4">
        <FlexWrapper direction="col" gap={3} classes="w-full">
          <Typography variant="C1">Current Page</Typography>
          <BreadCrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Navigation', href: '/components/navigation' },
              { label: 'Breadcrumb', href: '/components/navigation/breadcrumb' },
            ]}
          />
        </FlexWrapper>

        <FlexWrapper direction="col" gap={3} classes="w-full">
          <Typography variant="C1">Deeper Path</Typography>
          <BreadCrumb items={longPathItems} />
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const BreadcrumbStateGuide = () => {
  return (
    <GuideSection
      title="State"
      description="Keep previous levels navigable while highlighting the current page as the terminal item."
      example={<StateExample />}
    />
  );
};

export default BreadcrumbStateGuide;
