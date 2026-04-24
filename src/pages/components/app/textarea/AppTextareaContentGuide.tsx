import AppTextarea from '@/components/app/AppTextarea';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

const AppTextareaContentGuide = ({ size = 'md' }: { size?: App.AppInputSize }) => {
  const code = `<AppTextarea label="Description" size="${size}" placeholder="Describe the release..." />
<AppTextarea label="Notes" size="${size}" value="The iOS build is ready for QA and Android is waiting on screenshots." />`;

  return (
    <GuideSection
      title="Content"
      description="Support both empty drafting states and denser review content without collapsing the reading rhythm."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={620}>
          <AppDevicePreviewFrame minHeight={360}>
            <div className="flex w-full flex-col gap-4">
              <AppTextarea
                label="Description"
                placeholder="Describe the release..."
                size={size}
              />
              <AppTextarea
                label="Notes"
                size={size}
                value="The iOS build is ready for QA and Android is waiting on screenshots."
              />
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppTextareaContentGuide;
