import Button from '@/components/action/Button';
import Popover from '@/components/action/Popover';
import Typography from '@/components/foundation/Typography';
import GuideSection from '@/components/layout/GuideSection';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';

type PopoverPreviewControls = Pick<Action.PopoverProps, 'side' | 'align'>;

const PopoverStateExample = ({ side, align }: PopoverPreviewControls) => {
  const exampleCode = `<Popover
  side="${side}"
  align="${align}"
  defaultOpen
  title="Ready to share"
  description="Popover can also render open by default."
/>

<Popover disabled trigger={<Button disabled>Popover</Button>} />`;

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-[340px]">
      <div className="relative flex w-full min-h-[240px] items-center justify-center">
        <FlexWrapper classes="w-full flex-wrap justify-center" gap={6}>
          <Popover
            side={side}
            align={align}
            defaultOpen
            title="Ready to share"
            description="Open states can help teach layout or highlight new details."
            trigger={
              <Button variant="outline" color="neutral">
                Popover
              </Button>
            }
          >
            <Typography variant="C1">
              Dismiss by clicking outside the surface.
            </Typography>
          </Popover>

          <Popover
            side={side}
            align={align}
            disabled
            title="Unavailable"
            description="This trigger stays inactive."
            trigger={
              <Button variant="outline" color="neutral" disabled>
                Disabled
              </Button>
            }
          >
            Hidden content
          </Popover>
        </FlexWrapper>
      </div>
    </CodeExample>
  );
};

const PopoverStateGuide = (props: PopoverPreviewControls) => {
  return (
    <GuideSection
      title="State"
      description="Default-open and disabled states help explain intent without changing the trigger pattern."
      example={<PopoverStateExample {...props} />}
    />
  );
};

export default PopoverStateGuide;
