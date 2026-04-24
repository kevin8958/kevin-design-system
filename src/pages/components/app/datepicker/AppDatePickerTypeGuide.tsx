import AppDatePicker from '@/components/app/AppDatePicker';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

const AppDatePickerTypeGuide = ({ size = 'md' }: { size?: App.AppInputSize }) => {
  const code = `<AppDatePicker label="Publish date" size="${size}" defaultOpen />
<AppDatePicker label="Campaign range" size="${size}" isRange defaultOpen />`;

  return (
    <GuideSection
      title="Type"
      description="Document both single-date and range picking flows without leaving the current screen context."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={980}>
          <AppDevicePreviewFrame minHeight={700}>
            <div className="flex w-full flex-col gap-6">
              <AppDatePicker defaultOpen label="Publish date" size={size} />
              <AppDatePicker defaultOpen isRange label="Campaign range" size={size} />
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppDatePickerTypeGuide;
