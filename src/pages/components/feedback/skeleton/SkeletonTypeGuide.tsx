import Skeleton from '@/components/feedback/Skeleton';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type SkeletonPreviewControls = Pick<Feedback.SkeletonProps, 'variant'>;

const skeletonPropsByVariant = {
  line: { width: 200, height: 16 },
  rect: { width: 140, height: 84 },
  circle: { width: 56, height: 56 },
} as const;

const TypeExample = ({ variant = 'line' }: SkeletonPreviewControls) => {
  const shapeProps = skeletonPropsByVariant[variant];
  const exampleCode = `<Skeleton variant="${variant}" width={${shapeProps.width}} height={${shapeProps.height}} />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper classes="w-full p-8" justify="center">
        <FlexWrapper direction="col" items="center" gap={3}>
          <Skeleton
            variant={variant}
            width={shapeProps.width}
            height={shapeProps.height}
          />
          <Typography variant="C1">Base Placeholder</Typography>
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const SkeletonTypeGuide = (props: SkeletonPreviewControls) => {
  return (
    <GuideSection
      title="Type"
      description="Match the placeholder shape to the content that is still loading so the layout feels predictable."
      example={<TypeExample {...props} />}
    />
  );
};

export default SkeletonTypeGuide;
