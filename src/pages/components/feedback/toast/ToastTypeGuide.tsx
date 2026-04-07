import Toast from '@/components/feedback/Toast';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type ToastPreviewControls = Pick<Feedback.ToastProps, 'variant'>;

const TypeExample = ({ variant = 'info' }: ToastPreviewControls) => {
  const exampleCode = `<Toast title="Toast" variant="${variant}" />
<Toast title="Toast" description="Supporting message for the latest update." variant="${variant}" />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper direction="col" items="start" gap={5} classes="w-full p-4">
        <FlexWrapper direction="col" gap={3} classes="w-full">
          <Typography variant="C1">Title Only</Typography>
          <Toast title="Toast" variant={variant} />
        </FlexWrapper>
        <FlexWrapper direction="col" gap={3} classes="w-full">
          <Typography variant="C1">Title + Description</Typography>
          <Toast
            title="Toast"
            description="Supporting message for the latest update."
            variant={variant}
          />
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const ToastTypeGuide = (props: ToastPreviewControls) => {
  return (
    <GuideSection
      title="Type"
      description="Keep toasts brief, and add a second line only when the update needs extra clarification."
      example={<TypeExample {...props} />}
    />
  );
};

export default ToastTypeGuide;
