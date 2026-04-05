import Tag from '@/components/data/Tag';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const VariantExample = () => {
  const exampleCode = `<Tag label="Neutral" variant="neutral" />
<Tag label="Primary" variant="primary" />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper classes="w-full p-4" items="center" gap={4}>
        <Tag label="Neutral" variant="neutral" />
        <Tag label="Primary" variant="primary" />
      </FlexWrapper>
    </CodeExample>
  );
};

const TagVariantGuide = () => {
  return (
    <GuideSection
      title="Variant"
      description="Use outlined tags to label categories or lightweight filters without the heavier presence of badges."
      example={<VariantExample />}
    />
  );
};

export default TagVariantGuide;
