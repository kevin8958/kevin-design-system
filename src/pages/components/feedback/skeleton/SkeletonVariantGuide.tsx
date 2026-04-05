import Skeleton from '@/components/feedback/Skeleton';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const VariantExample = () => {
  const exampleCode = `<Skeleton variant="line" width={180} height={16} />
<Skeleton variant="rect" width={120} height={72} />
<Skeleton variant="circle" width={56} height={56} />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper classes="w-full p-4" items="center" gap={6}>
        <FlexWrapper direction="col" items="center" gap={3}>
          <Skeleton variant="line" width={180} height={16} />
          <Typography variant="C1">Line</Typography>
        </FlexWrapper>
        <FlexWrapper direction="col" items="center" gap={3}>
          <Skeleton variant="rect" width={120} height={72} />
          <Typography variant="C1">Rect</Typography>
        </FlexWrapper>
        <FlexWrapper direction="col" items="center" gap={3}>
          <Skeleton variant="circle" width={56} height={56} />
          <Typography variant="C1">Circle</Typography>
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const SkeletonVariantGuide = () => {
  return (
    <GuideSection
      title="Variant"
      description="Use line, rectangular, and circular placeholders to match the layout of content that is still loading."
      example={<VariantExample />}
    />
  );
};

export default SkeletonVariantGuide;
