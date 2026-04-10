import Button from '@/components/action/Button';
import Popover from '@/components/action/Popover';
import Typography from '@/components/foundation/Typography';
import GuideSection from '@/components/layout/GuideSection';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import { LuFolderKanban, LuLink2, LuUsers } from 'react-icons/lu';

type PopoverPreviewControls = Pick<Action.PopoverProps, 'side' | 'align'>;

const PopoverContentExample = ({ side, align }: PopoverPreviewControls) => {
  const exampleCode = `<Popover
  side="${side}"
  align="${align}"
  title="Workspace quick view"
  description="Stay close to the current workflow."
>
  ...
</Popover>`;

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-[340px]">
      <div className="relative flex w-full min-h-[220px] items-center justify-center">
        <Popover
          side={side}
          align={align}
          title="Workspace quick view"
          description="Stay close to the current workflow while keeping extra details one click away."
          trigger={
            <Button variant="outline" color="neutral">
              Popover
            </Button>
          }
        >
          <FlexWrapper direction="col" items="start" gap={3} classes="w-full">
            <div className="flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-neutral-50">
              <LuFolderKanban className="text-neutral-500 dark:text-neutral-400" />
              Project roadmap
            </div>
            <div className="flex items-center gap-2 text-sm">
              <LuUsers className="text-neutral-500 dark:text-neutral-400" />
              12 teammates have access
            </div>
            <div className="flex items-center gap-2 text-sm">
              <LuLink2 className="text-neutral-500 dark:text-neutral-400" />
              Shared with product and support
            </div>
            <Typography variant="C1">Open the full view for permissions and audit history.</Typography>
          </FlexWrapper>
        </Popover>
      </div>
    </CodeExample>
  );
};

const PopoverContentGuide = (props: PopoverPreviewControls) => {
  return (
    <GuideSection
      title="Content"
      description="Popover works well for quick details, secondary actions, and lightweight summaries around a trigger."
      example={<PopoverContentExample {...props} />}
    />
  );
};

export default PopoverContentGuide;
