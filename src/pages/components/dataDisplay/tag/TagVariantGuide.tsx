import Tag from '@/components/data/Tag';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type TagPreviewControls = Pick<Data.TagProps, 'size'>;

const VariantExample = ({ size = 'md' }: TagPreviewControls) => {
  const exampleCode = `<Tag label="Neutral" size="${size}" variant="neutral" />
<Tag label="Primary" size="${size}" variant="primary" />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper classes="w-full p-4" items="center" gap={4}>
        <Tag label="Neutral" size={size} variant="neutral" />
        <Tag label="Primary" size={size} variant="primary" />
      </FlexWrapper>
    </CodeExample>
  );
};

const TagVariantGuide = (props: TagPreviewControls) => {
  return (
    <GuideSection
      title="Variant"
      description="Use outlined tags to label categories or lightweight filters without the heavier presence of badges."
      example={<VariantExample {...props} />}
    />
  );
};

export default TagVariantGuide;
