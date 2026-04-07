import Badge from '@/components/data/Badge';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type BadgePreviewControls = Pick<Data.BadgeProps, 'size'>;

const ContentExample = ({ size = 'md' }: BadgePreviewControls) => {
  const exampleCode = `<Badge label="Beta" size="${size}" />
<Badge label="128" size="${size}" />
<Badge label="In Review" size="${size}" />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper classes="w-full flex-wrap p-4" items="center" gap={4}>
        <FlexWrapper direction="col" items="center" gap={3}>
          <Badge label="Beta" size={size} />
          <Typography variant="C1">Short Label</Typography>
        </FlexWrapper>
        <FlexWrapper direction="col" items="center" gap={3}>
          <Badge label="128" size={size} />
          <Typography variant="C1">Count</Typography>
        </FlexWrapper>
        <FlexWrapper direction="col" items="center" gap={3}>
          <Badge label="In Review" size={size} />
          <Typography variant="C1">Longer Label</Typography>
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const BadgeContentGuide = (props: BadgePreviewControls) => {
  return (
    <GuideSection
      title="Content"
      description="Use badges for short metadata, counts, or lightweight status labels that need quick recognition."
      example={<ContentExample {...props} />}
    />
  );
};

export default BadgeContentGuide;
