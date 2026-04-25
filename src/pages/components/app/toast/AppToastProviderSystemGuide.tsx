import AppButton from '@/components/app/AppButton';
import AppToastProvider, {
  useAppToast,
} from '@/components/app/AppToastProvider';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import AppDevicePreviewFrame from '@/pages/components/app/common/AppDevicePreviewFrame';

const TriggerArea = ({ variant }: { variant: App.AppFeedbackVariant }) => {
  const toast = useAppToast();

  return (
    <div className="flex w-full flex-wrap gap-3">
      <AppButton
        label="Push Toast"
        onPress={() =>
          toast.showToast({
            title: 'Toast',
            description: 'Queued through the provider.',
            variant,
            autoClose: 3000,
            closable: true,
          })
        }
        size="sm"
      />
      <AppButton
        label="Clear"
        onPress={() => toast.clearToasts()}
        size="sm"
        variant="outline"
      />
    </div>
  );
};

const AppToastProviderSystemGuide = ({
  variant,
  placement,
}: {
  variant: App.AppFeedbackVariant;
  placement: App.AppToastPlacement;
}) => {
  const code = `const toast = useAppToast();

toast.showToast({
  title: 'Toast',
  description: 'Queued through the provider.',
  variant: '${variant}',
  autoClose: 3000,
  closable: true,
});

<AppToastProvider placement="${placement}">
  <App />
</AppToastProvider>`;

  return (
    <GuideSection
      title="System"
      description="AppToastProvider and AppToastViewport let screens trigger feedback from anywhere while the viewport handles stacking and dismissal."
      example={
        <CodeExample code={code} className="flex-1 min-w-[320px]" maxHeight={420}>
          <AppDevicePreviewFrame minHeight={280}>
            <AppToastProvider placement={placement}>
              <div className="flex w-full flex-col items-start gap-4">
                <Typography variant="C1">Trigger</Typography>
                <TriggerArea variant={variant} />
              </div>
            </AppToastProvider>
          </AppDevicePreviewFrame>
        </CodeExample>
      }
    />
  );
};

export default AppToastProviderSystemGuide;
