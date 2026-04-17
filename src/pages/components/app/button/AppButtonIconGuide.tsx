import AppButton from '@/components/app/AppButton';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppButtonPreviewFrame from '@/pages/components/app/button/AppButtonPreviewFrame';

type AppButtonPreviewControls = Pick<App.ButtonProps, 'size' | 'variant' | 'color'>;

const GuideIcon = () => <span className="text-base leading-none">♡</span>;

const AppButtonIconGuide = ({
  size = 'md',
  variant = 'contain',
  color = 'neutral',
}: AppButtonPreviewControls) => {
  const exampleCode = `<AppButton
  label="Button"
  size="${size}"
  variant="${variant}"
  color="${color}"
  icon={<YourIcon />}
  iconPosition="left"
/>

<AppButton
  label="Button"
  size="${size}"
  variant="${variant}"
  color="${color}"
  icon={<YourIcon />}
  iconPosition="right"
/>`;

  return (
    <GuideSection
      title="Icon & Placement"
      description="Configure icon properties and alignment within the button."
      example={
        <CodeExample code={exampleCode} className="flex-1 min-w-[320px]" maxHeight={220}>
          <AppButtonPreviewFrame>
            <AppButton
              label="Button"
              size={size}
              variant={variant}
              color={color}
              icon={<GuideIcon />}
              iconPosition="left"
            />
            <AppButton
              label="Button"
              size={size}
              variant={variant}
              color={color}
              icon={<GuideIcon />}
              iconPosition="right"
            />
          </AppButtonPreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppButtonIconGuide;
