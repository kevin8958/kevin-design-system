import Button from '@/components/action/Button';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type ButtonPreviewControls = Pick<
  Action.ButtonProps,
  'size' | 'variant' | 'color'
>;

const AlignmentExample = ({ size, variant, color }: ButtonPreviewControls) => {
  const exampleCode = `<Button
  size="${size}"
  variant="${variant}"
  color="${color}"
  fullWidth
  justify="center"
>
  Button
</Button>

<Button
  size="${size}"
  variant="${variant}"
  color="${color}"
  fullWidth
  justify="start"
>
  Button
</Button>`;

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-[320px]" maxHeight={300}>
      <FlexWrapper direction="col" items="center" justify="center" gap={6} classes="w-full">
        <FlexWrapper direction="col" items="center" gap={3} classes="w-full max-w-lg">
          <Button
            size={size}
            variant={variant}
            color={color}
            fullWidth
            justify="center"
          >
            Button
          </Button>
          <Typography variant="C1">
            Center
          </Typography>
        </FlexWrapper>
        <FlexWrapper direction="col" items="center" gap={3} classes="w-full max-w-lg">
          <Button
            size={size}
            variant={variant}
            color={color}
            fullWidth
            justify="start"
          >
            Button
          </Button>
          <Typography variant="C1">
            Start
          </Typography>
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const ButtonAlignmentGuide = (props: ButtonPreviewControls) => {
  return (
    <GuideSection
      title="Alignment"
      description="Adjust content alignment inside wide buttons to support centered calls to action or left-aligned utility actions."
      example={<AlignmentExample {...props} />}
    />
  );
};

export default ButtonAlignmentGuide;
