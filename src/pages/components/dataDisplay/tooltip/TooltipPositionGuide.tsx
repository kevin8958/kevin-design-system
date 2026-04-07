import Tooltip from '@/components/data/Tooltip';
import Button from '@/components/action/Button';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const positions: Data.TooltipPosition[] = ['top', 'right', 'bottom', 'left'];

type TooltipPreviewControls = Pick<Data.TooltipProps, 'color'>;

const PositionExample = ({ color = 'neutral' }: TooltipPreviewControls) => {
  const exampleCode = `<Tooltip content="Top" position="top" color="${color}"><Button>Top</Button></Tooltip>
<Tooltip content="Right" position="right" color="${color}"><Button>Right</Button></Tooltip>
<Tooltip content="Bottom" position="bottom" color="${color}"><Button>Bottom</Button></Tooltip>
<Tooltip content="Left" position="left" color="${color}"><Button>Left</Button></Tooltip>`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper direction="col" items="start" gap={4} classes="w-full p-8">
        <Typography variant="C1">Hover each trigger to compare placement.</Typography>
        <FlexWrapper gap={4} items="center">
          {positions.map((position) => (
            <Tooltip
              key={position}
              content={position}
              position={position}
              color={color}
            >
              <Button variant="outline" color="neutral" size="sm">
                {position}
              </Button>
            </Tooltip>
          ))}
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const TooltipPositionGuide = (props: TooltipPreviewControls) => {
  return (
    <GuideSection
      title="Position"
      description="Choose a placement that keeps the tooltip visible without blocking nearby content."
      example={<PositionExample {...props} />}
    />
  );
};

export default TooltipPositionGuide;
