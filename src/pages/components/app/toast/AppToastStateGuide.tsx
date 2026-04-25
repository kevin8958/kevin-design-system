import { useState } from 'react';
import AppToast from '@/components/app/AppToast';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

const LoopingAutoClosePreview = ({
  variant,
}: {
  variant: App.AppFeedbackVariant;
}) => {
  const [cycle, setCycle] = useState(0);

  return (
    <AppToast
      autoClose={3000}
      description="This toast closes after 3 seconds."
      key={`auto-close-${variant}-${cycle}`}
      onClose={() => setCycle((prev) => prev + 1)}
      placement="top-left"
      title="Auto Close"
      variant={variant}
    />
  );
};

const AppToastStateGuide = ({
  variant,
}: {
  variant: App.AppFeedbackVariant;
}) => {
  const code = `<AppToast
  title="Dismissible"
  description="Users can close this toast."
  variant="${variant}"
  placement="top-left"
  closable
  onClose={() => {}}
/>

const [cycle, setCycle] = useState(0);

<AppToast
  key={cycle}
  title="Auto Close"
  description="This toast closes after 3 seconds."
  variant="${variant}"
  placement="top-left"
  autoClose={3000}
  onClose={() => setCycle((prev) => prev + 1)}
/>`;

  return (
    <GuideSection
      title="State"
      description="Document how toasts behave when users dismiss them manually or let them close automatically over time."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={380}>
          <AppDevicePreviewFrame minHeight={240}>
            <div className="flex w-full flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Typography variant="C1">Dismissible</Typography>
                <AppToast
                  closable
                  description="Users can close this toast."
                  key={`dismissible-${variant}`}
                  onClose={() => {}}
                  placement="top-left"
                  title="Dismissible"
                  variant={variant}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Typography variant="C1">Auto Close</Typography>
                <LoopingAutoClosePreview variant={variant} />
              </div>
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppToastStateGuide;
