import Tag from '@/components/data/Tag';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type TagPreviewControls = Pick<Data.TagProps, 'size'>;

const ContentExample = ({ size = 'md' }: TagPreviewControls) => {
  const exampleCode = `<Tag label="API" size="${size}" />
<Tag label="Design System" size="${size}" />
<Tag label="Experimental" size="${size}" />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper classes="w-full flex-wrap p-4" items="center" gap={4}>
        <FlexWrapper direction="col" items="center" gap={3}>
          <Tag label="API" size={size} />
          <Typography variant="C1">Short Label</Typography>
        </FlexWrapper>
        <FlexWrapper direction="col" items="center" gap={3}>
          <Tag label="Design System" size={size} />
          <Typography variant="C1">Longer Label</Typography>
        </FlexWrapper>
        <FlexWrapper direction="col" items="center" gap={3}>
          <Tag label="Experimental" size={size} />
          <Typography variant="C1">Filter Label</Typography>
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const TagContentGuide = (props: TagPreviewControls) => {
  return (
    <GuideSection
      title="Content"
      description="Use tags for lightweight categorization, filter labels, or compact metadata that still needs structure."
      example={<ContentExample {...props} />}
    />
  );
};

export default TagContentGuide;
