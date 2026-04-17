import AppButton from '@/components/app/AppButton';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppButtonPreviewFrame from '@/pages/components/app/button/AppButtonPreviewFrame';

type AppButtonPreviewControls = Pick<App.ButtonProps, 'size' | 'variant' | 'color'>;

const AppButtonAlignmentGuide = ({
  size = 'md',
  variant = 'contain',
  color = 'neutral',
}: AppButtonPreviewControls) => {
  const exampleCode = `<AppButton
  label="Button"
  size="${size}"
  variant="${variant}"
  color="${color}"
  fullWidth
  justify="center"
/>

<AppButton
  label="Button"
  size="${size}"
  variant="${variant}"
  color="${color}"
  fullWidth
  justify="start"
/>`;

  return (
    <GuideSection
      title="Alignment"
      description="Adjust content alignment inside wide buttons to support centered calls to action or left-aligned utility actions."
      example={
        <CodeExample code={exampleCode} className="flex-1 min-w-[320px]" maxHeight={320}>
          <AppButtonPreviewFrame>
            <AppButton
              label="Button"
              size={size}
              variant={variant}
              color={color}
              fullWidth
              justify="center"
            />
            <AppButton
              label="Button"
              size={size}
              variant={variant}
              color={color}
              fullWidth
              justify="start"
            />
          </AppButtonPreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppButtonAlignmentGuide;
