import AppAlert from '@/components/app/AppAlert';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

const AppAlertStateGuide = ({
  variant,
}: {
  variant: App.AppFeedbackVariant;
}) => {
  const code = `<AppAlert
  title="Persistent"
  description="Visible until the layout changes."
  variant="${variant}"
/>
<AppAlert
  title="Dismissible"
  description="Users can close this alert."
  variant="${variant}"
  closable
  onClose={() => {}}
/>`;

  return (
    <GuideSection
      title="State"
      description="Use persistent alerts for ongoing messaging and dismissible alerts when users should be able to clear them."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={340}>
          <AppDevicePreviewFrame minHeight={200}>
            <div className="flex w-full flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Typography variant="C1">Persistent</Typography>
                <AppAlert
                  description="Visible until the layout changes."
                  title="Persistent"
                  variant={variant}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Typography variant="C1">Dismissible</Typography>
                <AppAlert
                  description="Users can close this alert."
                  key={`dismissible-${variant}`}
                  title="Dismissible"
                  variant={variant}
                  closable
                  onClose={() => {}}
                />
              </div>
            </div>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppAlertStateGuide;
