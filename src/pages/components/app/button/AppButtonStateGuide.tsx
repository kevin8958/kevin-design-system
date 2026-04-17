import AppButton from '@/components/app/AppButton';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppButtonPreviewFrame from '@/pages/components/app/button/AppButtonPreviewFrame';

type AppButtonStateGuideProps = Pick<
  App.ButtonProps,
  'size' | 'variant' | 'color'
>;

const AppButtonStateGuide = ({
  size = 'md',
  variant = 'contain',
  color = 'neutral',
}: AppButtonStateGuideProps) => {
  const exampleCode = `<AppButton label="Continue" size="${size}" variant="${variant}" color="${color}" />
<AppButton label="Continue" size="${size}" variant="${variant}" color="${color}" disabled />
<AppButton label="Continue" size="${size}" variant="${variant}" color="${color}" loading />`;

  return (
    <GuideSection
      title="State"
      description="Represent the default, disabled, and loading states so app flows feel responsive and predictable."
      example={
        <CodeExample code={exampleCode} className="flex-1 min-w-[320px]">
          <AppButtonPreviewFrame>
            <AppButton
              label="Continue"
              size={size}
              variant={variant}
              color={color}
            />
            <AppButton
              label="Continue"
              size={size}
              variant={variant}
              color={color}
              disabled
            />
            <AppButton
              label="Continue"
              size={size}
              variant={variant}
              color={color}
              loading
            />
          </AppButtonPreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppButtonStateGuide;
