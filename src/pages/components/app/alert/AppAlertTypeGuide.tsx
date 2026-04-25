import AppAlert from '@/components/app/AppAlert';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

const AppAlertTypeGuide = ({
  variant,
}: {
  variant: App.AppFeedbackVariant;
}) => {
  const code = `<AppAlert title="Alert" variant="${variant}" />
<AppAlert
  title="Alert"
  description="Supporting message for the current status."
  variant="${variant}"
/>`;

  return (
    <GuideSection
      title="Type"
      description="Use shorter alerts for quick status updates and add supporting text when the user needs more context."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={340}>
          <AppDevicePreviewFrame minHeight={190}>
            <div className="flex w-full flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Typography variant="C1">Title Only</Typography>
                <AppAlert title="Alert" variant={variant} />
              </div>
              <div className="flex flex-col gap-2">
                <Typography variant="C1">Title + Description</Typography>
                <AppAlert
                  description="Supporting message for the current status."
                  title="Alert"
                  variant={variant}
                />
              </div>
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppAlertTypeGuide;
