import Skeleton from '@/components/feedback/Skeleton';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type SkeletonPreviewControls = Pick<Feedback.SkeletonProps, 'variant'>;

const stateCodeMap = {
  line: `<div className="flex flex-col gap-3">
  <Skeleton variant="line" width={220} height={18} />
  <Skeleton variant="line" width="100%" height={14} />
  <Skeleton variant="line" width="80%" height={14} />
</div>`,
  rect: `<div className="flex flex-col gap-3">
  <Skeleton variant="rect" width="100%" height={120} />
  <Skeleton variant="rect" width="100%" height={80} />
</div>`,
  circle: `<div className="flex gap-4">
  <Skeleton variant="circle" width={56} height={56} />
  <Skeleton variant="circle" width={56} height={56} />
  <Skeleton variant="circle" width={56} height={56} />
</div>`,
} as const;

const StateExample = ({ variant = 'line' }: SkeletonPreviewControls) => {
  const exampleCode = stateCodeMap[variant];

  return (
    <CodeExample code={exampleCode} className="flex-1">
      {variant === 'line' ? (
        <FlexWrapper direction="col" items="start" gap={3} classes="w-full p-4">
          <Skeleton variant="line" width={220} height={18} />
          <Skeleton variant="line" width="100%" height={14} />
          <Skeleton variant="line" width="80%" height={14} />
        </FlexWrapper>
      ) : variant === 'rect' ? (
        <FlexWrapper direction="col" items="start" gap={3} classes="w-full p-4">
          <Skeleton variant="rect" width="100%" height={120} />
          <Skeleton variant="rect" width="100%" height={80} />
        </FlexWrapper>
      ) : (
        <FlexWrapper items="center" gap={4} classes="w-full p-4">
          <Skeleton variant="circle" width={56} height={56} />
          <Skeleton variant="circle" width={56} height={56} />
          <Skeleton variant="circle" width={56} height={56} />
        </FlexWrapper>
      )}
    </CodeExample>
  );
};

const SkeletonStateGuide = (props: SkeletonPreviewControls) => {
  return (
    <GuideSection
      title="State"
      description="Combine multiple skeleton lines to approximate the structure of pending content and reduce layout shift."
      example={<StateExample {...props} />}
    />
  );
};

export default SkeletonStateGuide;
