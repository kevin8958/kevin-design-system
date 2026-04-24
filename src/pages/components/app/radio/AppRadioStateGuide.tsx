import AppRadio from '@/components/app/AppRadio';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';
import { appRadioOptions } from '@/pages/components/app/common/appInputSamples';

const AppRadioStateGuide = ({ size = 'md' }: { size?: App.AppInputSize }) => {
  const code = `<AppRadio title="Notify me via" size="${size}" options={radioOptions} value="push" />
<AppRadio title="Notify me via" size="${size}" options={radioOptions} invalid errorMsg="Choose one notification channel." />`;

  return (
    <GuideSection
      title="State"
      description="Use grouped radio states when only one path can be active at a time."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={760}>
          <AppDevicePreviewFrame minHeight={420}>
            <div className="flex w-full flex-col gap-4">
              <AppRadio options={appRadioOptions} size={size} title="Notify me via" value="push" />
              <AppRadio
                errorMsg="Choose one notification channel."
                invalid
                options={appRadioOptions}
                size={size}
                title="Notify me via"
              />
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppRadioStateGuide;
