import AppTextInput from '@/components/app/AppTextInput';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

const AppTextInputStateGuide = ({ size = 'md' }: { size?: App.AppInputSize }) => {
  const code = `<AppTextInput label="Display name" size="${size}" placeholder="Kevin" />
<AppTextInput label="Display name" size="${size}" value="kevin.design" error errorMsg="This handle is already taken." />
<AppTextInput label="Display name" size="${size}" value="Read only value" disabled />`;

  return (
    <GuideSection
      title="State"
      description="Cover the default, validation, and disabled states so form feedback stays predictable."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={520}>
          <AppDevicePreviewFrame minHeight={300}>
            <div className="flex w-full flex-col gap-4">
              <AppTextInput label="Display name" placeholder="Kevin" size={size} />
              <AppTextInput
                error
                errorMsg="This handle is already taken."
                label="Display name"
                size={size}
                value="kevin.design"
              />
              <AppTextInput
                disabled
                label="Display name"
                size={size}
                value="Read only value"
              />
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppTextInputStateGuide;
