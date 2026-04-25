import AppStepper from '@/components/app/AppStepper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';
import { appStepperStateItems } from '@/pages/components/app/common/appNavigationSamples';

const AppStepperStateGuide = ({
  size,
  orientation,
}: {
  size: App.AppNavigationSize;
  orientation: App.AppStepperOrientation;
}) => {
  const code = `<AppStepper
  size="${size}"
  orientation="${orientation}"
  items={itemsWithDisabledStep}
  value="billing"
/>`;

  return (
    <GuideSection
      title="State"
      description="Completed, current, upcoming, and disabled steps should stay readable at a glance."
      example={
        <CodeExample code={code} className="flex-1 min-w-[340px]" maxHeight={820}>
          <AppDevicePreviewFrame minHeight={orientation === 'vertical' ? 420 : 280}>
            <div className="flex w-full">
              <AppStepper
                items={appStepperStateItems}
                orientation={orientation}
                size={size}
                value="billing"
              />
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppStepperStateGuide;
