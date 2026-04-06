import Button from '@/components/action/Button';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type ButtonPreviewControls = Pick<
  Action.ButtonProps,
  'size' | 'variant' | 'color'
>;

const AttachedExample = ({ size }: ButtonPreviewControls) => {
  const exampleCode = `<div className="inline-flex">
  <Button size="${size}" variant="outline" color="neutral" classes="rounded-r-none border-r-0">
    Previous
  </Button>
  <Button size="${size}" variant="outline" color="neutral" classes="rounded-l-none">
    Next
  </Button>
</div>`;

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-[320px]" maxHeight={220}>
      <FlexWrapper items="center" justify="center" classes="w-full">
        <div className="inline-flex">
          <Button
            size={size}
            variant="outline"
            color="neutral"
            classes="rounded-r-none border-r-0"
          >
            Previous
          </Button>
          <Button
            size={size}
            variant="outline"
            color="neutral"
            classes="rounded-l-none"
          >
            Next
          </Button>
        </div>
      </FlexWrapper>
    </CodeExample>
  );
};

const ButtonAttachedGuide = (props: ButtonPreviewControls) => {
  return (
    <GuideSection
      title="Attached"
      description="Attach adjacent buttons to create stepped navigation or paired utility actions."
      example={<AttachedExample {...props} />}
    />
  );
};

export default ButtonAttachedGuide;
