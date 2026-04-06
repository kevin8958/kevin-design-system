import FlexWrapper from '@/components/layout/FlexWrapper';
import Button from '@/components/action/Button';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type ButtonPreviewControls = Pick<
  Action.ButtonProps,
  'size' | 'variant' | 'color'
>;

const StateExample = ({ size, variant, color }: ButtonPreviewControls) => {
  const statusOptions = [
    { id: 'disabled', label: 'Disabled' },
    { id: 'loading', label: 'Loading' },
    { id: 'prompted', label: 'Prompted' },
  ];

  const exampleCode = `<Button size="${size}" variant="${variant}" color="${color}" disabled>
  Button
</Button>
<Button size="${size}" variant="${variant}" color="${color}" loading>
  Button
</Button>
<Button size="${size}" variant="${variant}" color="${color}" prompted>
  Button
</Button>`;

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-[320px]">
      <FlexWrapper items="center" justify="center" classes="w-full" gap={6}>
        {statusOptions.map((option) => (
          <div key={option.id}>
            <FlexWrapper classes="!gap-3" direction="col" items="center">
              <Button
                size={size}
                variant={variant}
                color={color}
                disabled={option.id === 'disabled'}
                loading={option.id === 'loading'}
                prompted={option.id === 'prompted'}
                classes="min-w-[80px]"
              >
                Button
              </Button>
              <Typography variant="C1">
                {option.label}
              </Typography>
            </FlexWrapper>
          </div>
        ))}
      </FlexWrapper>
    </CodeExample>
  );
};

const ButtonStateGuide = (props: ButtonPreviewControls) => {
  return (
    <GuideSection
      title="State"
      description="Manage interactive states to provide visual feedback."
      example={<StateExample {...props} />}
    />
  );
};

export default ButtonStateGuide;
