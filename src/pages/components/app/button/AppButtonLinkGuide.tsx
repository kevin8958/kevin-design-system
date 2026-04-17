import AppButton from '@/components/app/AppButton';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppButtonPreviewFrame from '@/pages/components/app/button/AppButtonPreviewFrame';

type AppButtonPreviewControls = Pick<App.ButtonProps, 'size' | 'variant' | 'color'>;

const AppButtonLinkGuide = ({
  size = 'md',
  variant = 'contain',
  color = 'neutral',
}: AppButtonPreviewControls) => {
  const exampleCode = `<AppButton
  label="Button"
  size="${size}"
  variant="${variant}"
  color="${color}"
  href="https://example.com"
/>`;

  return (
    <GuideSection
      title="Link"
      description="Use href when the button should navigate. Link buttons automatically add a right-aligned arrow for directional affordance."
      example={
        <CodeExample code={exampleCode} className="flex-1 min-w-[320px]" maxHeight={220}>
          <AppButtonPreviewFrame>
            <AppButton
              label="Button"
              size={size}
              variant={variant}
              color={color}
              href="https://example.com"
              onPress={() => undefined}
            />
          </AppButtonPreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppButtonLinkGuide;
