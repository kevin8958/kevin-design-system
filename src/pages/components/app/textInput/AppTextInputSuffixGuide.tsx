import AppTextInput from '@/components/app/AppTextInput';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

const AppTextInputSuffixGuide = ({ size = 'md' }: { size?: App.AppInputSize }) => {
  const code = `<AppTextInput label="Weight" size="${size}" suffix="kg" placeholder="0" />
<AppTextInput label="Bio" size="${size}" suffix="0/160" placeholder="Add a short intro" />`;

  return (
    <GuideSection
      title="Suffix"
      description="Use suffix slots for compact units, counters, and inline hints without breaking the field rhythm."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]">
          <AppDevicePreviewFrame minHeight={220}>
            <div className="flex w-full flex-col gap-4">
              <AppTextInput label="Weight" placeholder="0" size={size} suffix="kg" />
              <AppTextInput
                label="Bio"
                placeholder="Add a short intro"
                size={size}
                suffix="0/160"
              />
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppTextInputSuffixGuide;
