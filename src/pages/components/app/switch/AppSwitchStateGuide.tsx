import AppSwitch from '@/components/app/AppSwitch';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

const AppSwitchStateGuide = ({ size = 'md' }: { size?: App.AppInputSize }) => {
  const code = `<AppSwitch label="Use Face ID" size="${size}" />
<AppSwitch label="Use Face ID" size="${size}" checked description="Unlock the app with biometrics." />
<AppSwitch label="Use Face ID" size="${size}" invalid errorMsg="Enable one secure sign-in method." />`;

  return (
    <GuideSection
      title="State"
      description="Show passive, active, and invalid switch states while keeping the label copy readable."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={560}>
          <AppDevicePreviewFrame minHeight={320}>
            <div className="flex w-full flex-col gap-4">
              <AppSwitch label="Use Face ID" size={size} />
              <AppSwitch
                checked
                description="Unlock the app with biometrics."
                label="Use Face ID"
                size={size}
              />
              <AppSwitch
                errorMsg="Enable one secure sign-in method."
                invalid
                label="Use Face ID"
                size={size}
              />
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppSwitchStateGuide;
