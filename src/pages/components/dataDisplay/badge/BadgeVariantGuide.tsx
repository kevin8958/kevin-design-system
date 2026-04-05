import Badge from '@/components/data/Badge';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const VariantExample = () => {
  const exampleCode = `<Badge label="Neutral" variant="neutral" />
<Badge label="Primary" variant="primary" />
<Badge label="Success" variant="success" />
<Badge label="Warning" variant="warning" />
<Badge label="Danger" variant="danger" />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper classes="w-full p-4" gap={4} items="center">
        <Badge label="Neutral" variant="neutral" />
        <Badge label="Primary" variant="primary" />
        <Badge label="Success" variant="success" />
        <Badge label="Warning" variant="warning" />
        <Badge label="Danger" variant="danger" />
      </FlexWrapper>
    </CodeExample>
  );
};

const BadgeVariantGuide = () => {
  return (
    <GuideSection
      title="Variant"
      description="Apply semantic color variants to represent status, emphasis, or metadata categories."
      example={<VariantExample />}
    />
  );
};

export default BadgeVariantGuide;
