import Alert from '@/components/feedback/Alert';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type AlertPreviewControls = Pick<Feedback.AlertProps, 'variant'>;

const TypeExample = ({ variant = 'info' }: AlertPreviewControls) => {
  const exampleCode = `<Alert title="Alert" variant="${variant}" />
<Alert title="Alert" description="Supporting message for the current status." variant="${variant}" />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper direction="col" items="start" gap={5} classes="w-full p-4">
        <FlexWrapper direction="col" gap={3} classes="w-full">
          <Typography variant="C1">Title Only</Typography>
          <Alert title="Alert" variant={variant} />
        </FlexWrapper>
        <FlexWrapper direction="col" gap={3} classes="w-full">
          <Typography variant="C1">Title + Description</Typography>
          <Alert
            title="Alert"
            description="Supporting message for the current status."
            variant={variant}
          />
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const AlertTypeGuide = (props: AlertPreviewControls) => {
  return (
    <GuideSection
      title="Type"
      description="Use shorter alerts for quick status updates and add supporting text when the user needs more context."
      example={<TypeExample {...props} />}
    />
  );
};

export default AlertTypeGuide;
