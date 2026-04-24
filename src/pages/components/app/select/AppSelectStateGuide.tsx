import AppSelect from '@/components/app/AppSelect';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';
import { appCityOptions } from '@/pages/components/app/common/appInputSamples';

const AppSelectStateGuide = ({ size = 'md' }: { size?: App.AppInputSize }) => {
  const code = `<AppSelect label="Region" size="${size}" options={regionOptions} placeholder="Select a region" />
<AppSelect label="Region" size="${size}" options={regionOptions} value="seoul" defaultOpen />
<AppSelect label="Region" size="${size}" options={regionOptions} invalid errorMsg="Choose a region before continuing." />`;

  return (
    <GuideSection
      title="State"
      description="Preview selection, open, and validation states so pickers feel grounded inside mobile forms."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={760}>
          <AppDevicePreviewFrame minHeight={460}>
            <div className="flex w-full flex-col gap-4">
              <AppSelect
                label="Region"
                options={appCityOptions}
                placeholder="Select a region"
                size={size}
              />
              <AppSelect
                defaultOpen
                label="Region"
                options={appCityOptions}
                size={size}
                value="seoul"
              />
              <AppSelect
                errorMsg="Choose a region before continuing."
                invalid
                label="Region"
                options={appCityOptions}
                size={size}
              />
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppSelectStateGuide;
