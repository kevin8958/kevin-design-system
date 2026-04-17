import AppButton from '@/components/app/AppButton';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppButtonPreviewFrame from '@/pages/components/app/button/AppButtonPreviewFrame';

type AppButtonWidthGuideProps = Pick<
  App.ButtonProps,
  'size' | 'variant' | 'color'
>;

const AppButtonWidthGuide = ({
  size = 'md',
  variant = 'contain',
  color = 'neutral',
}: AppButtonWidthGuideProps) => {
  const exampleCode = `<AppButton label="Auto Width" size="${size}" variant="${variant}" color="${color}" />
<AppButton label="Full Width" size="${size}" variant="${variant}" color="${color}" fullWidth />`;

  return (
    <GuideSection
      title="Width"
      description="Keep intrinsic width for secondary actions, or stretch to full width for primary mobile calls to action."
      example={
        <CodeExample code={exampleCode} className="flex-1 min-w-[320px]">
          <AppButtonPreviewFrame>
            <div className="flex justify-start">
              <AppButton
                label="Auto Width"
                size={size}
                variant={variant}
                color={color}
              />
            </div>
            <AppButton
              label="Full Width"
              size={size}
              variant={variant}
              color={color}
              fullWidth
            />
          </AppButtonPreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppButtonWidthGuide;
