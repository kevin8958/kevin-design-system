import Tooltip from '@/components/data/Tooltip';
import Button from '@/components/action/Button';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type TooltipPreviewControls = Pick<Data.TooltipProps, 'color'>;

const TypeExample = ({ color = 'neutral' }: TooltipPreviewControls) => {
  const exampleCode = `<Tooltip content="Helpful supporting text." color="${color}">
  <Button variant="outline" color="neutral">Hover me</Button>
</Tooltip>`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper classes="w-full p-8" justify="center">
        <Tooltip content="Helpful supporting text." color={color}>
          <Button variant="outline" color="neutral">
            Hover me
          </Button>
        </Tooltip>
      </FlexWrapper>
    </CodeExample>
  );
};

const TooltipTypeGuide = (props: TooltipPreviewControls) => {
  return (
    <GuideSection
      title="Type"
      description="Use tooltips for brief contextual guidance that appears on hover or focus."
      example={<TypeExample {...props} />}
    />
  );
};

export default TooltipTypeGuide;
