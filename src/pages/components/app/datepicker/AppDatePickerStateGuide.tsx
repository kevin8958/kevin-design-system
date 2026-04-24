import AppDatePicker from '@/components/app/AppDatePicker';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

const selectedDate = new Date(2026, 3, 23);

const AppDatePickerStateGuide = ({ size = 'md' }: { size?: App.AppInputSize }) => {
  const code = `<AppDatePicker label="Publish date" size="${size}" />
<AppDatePicker label="Publish date" size="${size}" value={new Date(2026, 3, 23)} />
<AppDatePicker label="Publish date" size="${size}" isError errorMsg="Choose a valid date." />`;

  return (
    <GuideSection
      title="State"
      description="Keep empty, selected, and validation states readable before the calendar ever opens."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={620}>
          <AppDevicePreviewFrame minHeight={360}>
            <div className="flex w-full flex-col gap-4">
              <AppDatePicker label="Publish date" size={size} />
              <AppDatePicker label="Publish date" size={size} value={selectedDate} />
              <AppDatePicker
                errorMsg="Choose a valid date."
                isError
                label="Publish date"
                size={size}
              />
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppDatePickerStateGuide;
