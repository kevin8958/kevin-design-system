import AppToast from '@/components/app/AppToast';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

const AppToastTypeGuide = ({
  variant,
}: {
  variant: App.AppFeedbackVariant;
}) => {
  const code = `<AppToast title="Toast" variant="${variant}" placement="top-left" />
<AppToast
  title="Toast"
  description="Supporting message for the latest update."
  variant="${variant}"
  placement="top-left"
/>`;

  return (
    <GuideSection
      title="Type"
      description="Keep toasts brief, and add a second line only when the update needs extra clarification."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={360}>
          <AppDevicePreviewFrame minHeight={210}>
            <div className="flex w-full flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Typography variant="C1">Title Only</Typography>
                <AppToast placement="top-left" title="Toast" variant={variant} />
              </div>
              <div className="flex flex-col gap-2">
                <Typography variant="C1">Title + Description</Typography>
                <AppToast
                  description="Supporting message for the latest update."
                  placement="top-left"
                  title="Toast"
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

export default AppToastTypeGuide;
