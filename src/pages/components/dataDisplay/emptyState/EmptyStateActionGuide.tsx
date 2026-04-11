import { LuFolderSearch } from 'react-icons/lu';
import Button from '@/components/action/Button';
import EmptyState from '@/components/data/EmptyState';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import FlexWrapper from '@/components/layout/FlexWrapper';

type EmptyStatePreviewControls = Pick<Data.EmptyStateProps, 'size'>;

const EmptyStateActionExample = ({ size }: EmptyStatePreviewControls) => {
  const exampleCode = `<EmptyState
  size="${size}"
  title="No saved segments yet"
  description="Create your first customer segment to start tracking campaign performance."
  icon={<LuFolderSearch />}
  primaryAction={<Button>Create Segment</Button>}
  secondaryAction={<Button variant="outline" color="neutral">Learn More</Button>}
/>`;

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-[340px]">
      <FlexWrapper classes="w-full max-w-[560px]" direction="col" items="start">
        <EmptyState
          size={size}
          title="No saved segments yet"
          description="Create your first customer segment to start tracking campaign performance."
          icon={<LuFolderSearch size={24} />}
          primaryAction={<Button size="sm">Create Segment</Button>}
          secondaryAction={
            <Button variant="outline" color="neutral" size="sm">
              Learn More
            </Button>
          }
        />
      </FlexWrapper>
    </CodeExample>
  );
};

const EmptyStateActionGuide = (props: EmptyStatePreviewControls) => {
  return (
    <GuideSection
      title="Action"
      description="Primary and secondary actions help the empty state move from a dead end into a useful next step."
      example={<EmptyStateActionExample {...props} />}
    />
  );
};

export default EmptyStateActionGuide;
