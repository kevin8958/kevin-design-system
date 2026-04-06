import Button from '@/components/action/Button';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type ButtonPreviewControls = Pick<
  Action.ButtonProps,
  'size' | 'variant' | 'color'
>;

const LinkExample = ({ size, variant, color }: ButtonPreviewControls) => {
  const exampleCode = `<Button
  size="${size}"
  variant="${variant}"
  color="${color}"
  href="/components"
>
  Button
</Button>`;

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-[320px]" maxHeight={220}>
      <FlexWrapper direction="col" items="center" justify="center" gap={3} classes="w-full">
        <Button
          size={size}
          variant={variant}
          color={color}
          href="/components"
          onClick={(event) => event.preventDefault()}
        >
          Button
        </Button>
        <Typography variant="C1">
          Link
        </Typography>
      </FlexWrapper>
    </CodeExample>
  );
};

const ButtonLinkGuide = (props: ButtonPreviewControls) => {
  return (
    <GuideSection
      title="Link"
      description="Use href when the button should navigate. Link buttons automatically add a right-aligned arrow for directional affordance."
      example={<LinkExample {...props} />}
    />
  );
};

export default ButtonLinkGuide;
