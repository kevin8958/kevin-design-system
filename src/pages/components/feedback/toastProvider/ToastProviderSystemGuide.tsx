import Button from '@/components/action/Button';
import Typography from '@/components/foundation/Typography';
import ToastProvider, { useToast } from '@/components/feedback/ToastProvider';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import FlexWrapper from '@/components/layout/FlexWrapper';

type ToastProviderPreviewControls = {
  variant: Feedback.ToastVariant;
  placement: Feedback.ToastPlacement;
};

const TriggerArea = ({ variant }: Pick<ToastProviderPreviewControls, 'variant'>) => {
  const toast = useToast();

  return (
    <FlexWrapper gap={3} classes="w-full">
      <Button
        size="sm"
        onClick={() =>
          toast.push({
            title: 'Toast',
            description: 'Queued through the provider.',
            variant,
            autoClose: 3000,
            closable: true,
          })
        }
      >
        Push Toast
      </Button>
      <Button size="sm" variant="outline" color="neutral" onClick={() => toast.clear()}>
        Clear
      </Button>
    </FlexWrapper>
  );
};

const SystemExample = ({
  variant = 'info',
  placement = 'top-right',
}: ToastProviderPreviewControls) => {
  const exampleCode = `const toast = useToast();

toast.push({
  title: 'Toast',
  description: 'Queued through the provider.',
  variant: '${variant}',
  autoClose: 3000,
  closable: true,
});

<ToastProvider placement="${placement}">
  <App />
</ToastProvider>`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <div className="relative min-h-[320px] w-full overflow-hidden rounded-[24px] border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950">
        <ToastProvider placement={placement}>
          <FlexWrapper direction="col" items="start" gap={4} classes="w-full">
            <Typography variant="C1">Trigger</Typography>
            <TriggerArea variant={variant} />
          </FlexWrapper>
        </ToastProvider>
      </div>
    </CodeExample>
  );
};

const ToastProviderSystemGuide = (props: ToastProviderPreviewControls) => {
  return (
    <GuideSection
      title="System"
      description="ToastProvider and ToastViewport let pages trigger feedback from anywhere while the viewport handles stacking and dismissal."
      example={<SystemExample {...props} />}
    />
  );
};

export default ToastProviderSystemGuide;
