import AppButton from '@/components/app/AppButton';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppButtonPreviewFrame from '@/pages/components/app/button/AppButtonPreviewFrame';

type AppButtonPreviewControls = Pick<App.ButtonProps, 'size' | 'variant' | 'color'>;

const GuideIcon = () => <span className="text-base leading-none">♡</span>;

const AppButtonShapeGuide = ({
  size = 'md',
  variant = 'contain',
  color = 'neutral',
}: AppButtonPreviewControls) => {
  const exampleCode = `<AppButton
  label="Button"
  size="${size}"
  variant="${variant}"
  color="${color}"
  shape="rect"
/>

<AppButton
  size="${size}"
  variant="${variant}"
  color="${color}"
  shape="circle"
  icon={<YourIcon />}
/>`;

  return (
    <GuideSection
      title="Shape"
      description="Define button geometry for different visual hierarchies."
      example={
        <CodeExample code={exampleCode} className="flex-1 min-w-[320px]" maxHeight={220}>
          <AppButtonPreviewFrame>
            <div className="flex items-center justify-center">
              <AppButton
                label="Button"
                size={size}
                variant={variant}
                color={color}
                shape="rect"
              />
            </div>
            <div className="flex items-center justify-center">
              <AppButton
                size={size}
                variant={variant}
                color={color}
                shape="circle"
                icon={<GuideIcon />}
              />
            </div>
          </AppButtonPreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppButtonShapeGuide;
