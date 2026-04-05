import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const items = [
  { label: 'Home', href: '/' },
  { label: 'Navigation', href: '/components/navigation' },
  { label: 'Breadcrumb', href: '/components/navigation/breadcrumb' },
];

const TypeExample = () => {
  const exampleCode = `<BreadCrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Navigation', href: '/components/navigation' },
    { label: 'Breadcrumb', href: '/components/navigation/breadcrumb' },
  ]}
/>`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper direction="col" items="start" gap={4} classes="w-full p-4">
        <Typography variant="C1">Default Breadcrumb</Typography>
        <BreadCrumb items={items} />
      </FlexWrapper>
    </CodeExample>
  );
};

const BreadcrumbTypeGuide = () => {
  return (
    <GuideSection
      title="Type"
      description="Use breadcrumb trails to show the current location within a multi-level navigation structure."
      example={<TypeExample />}
    />
  );
};

export default BreadcrumbTypeGuide;
