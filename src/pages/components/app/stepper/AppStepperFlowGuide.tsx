import { useState } from 'react';
import AppStepper from '@/components/app/AppStepper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';
import { appStepperItems } from '@/pages/components/app/common/appNavigationSamples';

const AppStepperFlowGuide = ({
  size,
  orientation,
}: {
  size: App.AppNavigationSize;
  orientation: App.AppStepperOrientation;
}) => {
  const [value, setValue] = useState('billing');
  const code = `<AppStepper
  size="${size}"
  orientation="${orientation}"
  items={items}
  value={value}
  onChange={setValue}
/>`;

  return (
    <GuideSection
      title="Flow"
      description="Make multistep tasks readable before the person commits to the next stage."
      example={
        <CodeExample code={code} className="flex-1 min-w-[340px]" maxHeight={820}>
          <AppDevicePreviewFrame minHeight={orientation === 'vertical' ? 420 : 280}>
            <div className="flex w-full">
              <AppStepper
                items={appStepperItems}
                onChange={setValue}
                orientation={orientation}
                size={size}
                value={value}
              />
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppStepperFlowGuide;
