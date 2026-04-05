import Skeleton from '@/components/feedback/Skeleton';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const StateExample = () => {
  const exampleCode = `<div className="flex flex-col gap-3">
  <Skeleton width={220} height={18} />
  <Skeleton width="100%" height={14} />
  <Skeleton width="80%" height={14} />
</div>`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper direction="col" items="start" gap={3} classes="w-full p-4">
        <Skeleton width={220} height={18} />
        <Skeleton width="100%" height={14} />
        <Skeleton width="80%" height={14} />
      </FlexWrapper>
    </CodeExample>
  );
};

const SkeletonStateGuide = () => {
  return (
    <GuideSection
      title="State"
      description="Combine multiple skeleton lines to approximate the structure of pending content and reduce layout shift."
      example={<StateExample />}
    />
  );
};

export default SkeletonStateGuide;
