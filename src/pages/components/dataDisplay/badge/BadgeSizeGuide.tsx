import Badge from '@/components/data/Badge';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const SizeExample = () => {
  const exampleCode = `<Badge label="Small" size="sm" />
<Badge label="Medium" size="md" />
<Badge label="Large" size="lg" />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper classes="w-full p-4" items="end" gap={6}>
        <FlexWrapper direction="col" items="center" gap={3}>
          <Badge label="Small" size="sm" />
          <Typography variant="C1">Small</Typography>
        </FlexWrapper>
        <FlexWrapper direction="col" items="center" gap={3}>
          <Badge label="Medium" size="md" />
          <Typography variant="C1">Medium</Typography>
        </FlexWrapper>
        <FlexWrapper direction="col" items="center" gap={3}>
          <Badge label="Large" size="lg" />
          <Typography variant="C1">Large</Typography>
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const BadgeSizeGuide = () => {
  return (
    <GuideSection
      title="Size"
      description="Use smaller badges for tight metadata and larger ones where the label needs more presence."
      example={<SizeExample />}
    />
  );
};

export default BadgeSizeGuide;
