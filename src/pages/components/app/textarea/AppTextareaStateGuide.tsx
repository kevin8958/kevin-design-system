import AppTextarea from '@/components/app/AppTextarea';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

const AppTextareaStateGuide = ({ size = 'md' }: { size?: App.AppInputSize }) => {
  const code = `<AppTextarea label="Summary" size="${size}" placeholder="Write a short summary" />
<AppTextarea label="Summary" size="${size}" error errorMsg="Please keep this under 240 characters." value="This summary is too long for the card layout." />
<AppTextarea label="Summary" size="${size}" value="Locked field" disabled />`;

  return (
    <GuideSection
      title="State"
      description="Apply the same state language as single-line fields so longer content areas stay consistent."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={720}>
          <AppDevicePreviewFrame minHeight={420}>
            <div className="flex w-full flex-col gap-4">
              <AppTextarea
                label="Summary"
                placeholder="Write a short summary"
                size={size}
              />
              <AppTextarea
                error
                errorMsg="Please keep this under 240 characters."
                label="Summary"
                size={size}
                value="This summary is too long for the card layout."
              />
              <AppTextarea label="Summary" size={size} value="Locked field" disabled />
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppTextareaStateGuide;
