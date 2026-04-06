import Button from '@/components/action/Button';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type ButtonPreviewControls = Pick<
  Action.ButtonProps,
  'size' | 'variant' | 'color'
>;

const WidthExample = ({ size, variant, color }: ButtonPreviewControls) => {
  const exampleCode = `<Button size="${size}" variant="${variant}" color="${color}">
  Button
</Button>

<Button size="${size}" variant="${variant}" color="${color}" fullWidth>
  Button
</Button>`;

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-[320px]" maxHeight={260}>
      <FlexWrapper direction="col" items="center" justify="center" gap={6} classes="w-full">
        <FlexWrapper direction="col" items="center" gap={3}>
          <Button size={size} variant={variant} color={color}>
            Button
          </Button>
          <Typography variant="C1">
            Auto Width
          </Typography>
        </FlexWrapper>
        <FlexWrapper direction="col" items="center" gap={3} classes="w-full max-w-lg">
          <Button size={size} variant={variant} color={color} fullWidth>
            Button
          </Button>
          <Typography variant="C1">
            Full Width
          </Typography>
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const ButtonWidthGuide = (props: ButtonPreviewControls) => {
  return (
    <GuideSection
      title="Width"
      description="Keep intrinsic width for compact actions or stretch to fill the container for full-width calls to action."
      example={<WidthExample {...props} />}
    />
  );
};

export default ButtonWidthGuide;
