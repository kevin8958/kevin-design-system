import { LuInbox, LuSparkles } from 'react-icons/lu';
import EmptyState from '@/components/data/EmptyState';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import FlexWrapper from '@/components/layout/FlexWrapper';

type EmptyStatePreviewControls = Pick<Data.EmptyStateProps, 'size'>;

const EmptyStateContentExample = ({ size }: EmptyStatePreviewControls) => {
  const exampleCode = `<EmptyState
  size="${size}"
  title="No activity yet"
  description="Once your team starts shipping updates, this feed will show the latest releases and milestones."
  icon={<LuSparkles /> }
/>

<EmptyState
  size="${size}"
  title="No inbox items"
  description="Everything is caught up for now."
  icon={<LuInbox /> }
/>`;

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-[340px]">
      <FlexWrapper classes="w-full max-w-[560px]" direction="col" items="start" gap={4}>
        <EmptyState
          size={size}
          title="No activity yet"
          description="Once your team starts shipping updates, this feed will show the latest releases and milestones."
          icon={<LuSparkles size={24} />}
        />
        <EmptyState
          size={size}
          title="No inbox items"
          description="Everything is caught up for now."
          icon={<LuInbox size={24} />}
        />
      </FlexWrapper>
    </CodeExample>
  );
};

const EmptyStateContentGuide = (props: EmptyStatePreviewControls) => {
  return (
    <GuideSection
      title="Content"
      description="A clear title, a short explanation, and a recognizable icon are usually enough to make the next action obvious."
      example={<EmptyStateContentExample {...props} />}
    />
  );
};

export default EmptyStateContentGuide;
