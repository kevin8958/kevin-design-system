import Tag from '@/components/data/Tag';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const SizeExample = () => {
  const exampleCode = `<Tag label="Small" size="sm" />
<Tag label="Medium" size="md" />
<Tag label="Large" size="lg" />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper classes="w-full p-4" items="end" gap={6}>
        <FlexWrapper direction="col" items="center" gap={3}>
          <Tag label="Small" size="sm" />
          <Typography variant="C1">Small</Typography>
        </FlexWrapper>
        <FlexWrapper direction="col" items="center" gap={3}>
          <Tag label="Medium" size="md" />
          <Typography variant="C1">Medium</Typography>
        </FlexWrapper>
        <FlexWrapper direction="col" items="center" gap={3}>
          <Tag label="Large" size="lg" />
          <Typography variant="C1">Large</Typography>
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const TagSizeGuide = () => {
  return (
    <GuideSection
      title="Size"
      description="Choose a tag size that matches the density of filters, metadata clusters, or content labels."
      example={<SizeExample />}
    />
  );
};

export default TagSizeGuide;
