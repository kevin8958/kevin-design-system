import { useState } from 'react';
import Toast from '@/components/feedback/Toast';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type ToastPreviewControls = Pick<Feedback.ToastProps, 'variant'>;

const LoopingAutoClosePreview = ({ variant }: ToastPreviewControls) => {
  const [cycle, setCycle] = useState(0);

  return (
    <div className="w-full">
      <Toast
        key={cycle}
        title="Auto Close"
        description="This toast closes after 3 seconds."
        variant={variant}
        autoClose={3000}
        onClose={() => {
          setCycle((prev) => prev + 1);
        }}
      />
    </div>
  );
};

const StateExample = ({ variant = 'info' }: ToastPreviewControls) => {
  const exampleCode = `<Toast title="Dismissible" description="Users can close this toast." variant="${variant}" closable onClose={() => {}} />

const [cycle, setCycle] = useState(0);

<Toast
  key={cycle}
  title="Auto Close"
  description="This toast closes after 3 seconds."
  variant="${variant}"
  autoClose={3000}
  onClose={() => setCycle((prev) => prev + 1)}
/>
`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper direction="col" items="start" gap={5} classes="w-full p-4">
        <FlexWrapper direction="col" gap={3} classes="w-full">
          <Typography variant="C1">Dismissible</Typography>
          <Toast
            title="Dismissible"
            description="Users can close this toast."
            variant={variant}
            closable
            onClose={() => {}}
          />
        </FlexWrapper>

        <FlexWrapper direction="col" gap={3} classes="w-full">
          <Typography variant="C1">Auto Close</Typography>
          <LoopingAutoClosePreview variant={variant} />
        </FlexWrapper>

      </FlexWrapper>
    </CodeExample>
  );
};

const ToastStateGuide = (props: ToastPreviewControls) => {
  return (
    <GuideSection
      title="State"
      description="Document how toasts behave when users dismiss them manually or let them close automatically over time."
      example={<StateExample {...props} />}
    />
  );
};

export default ToastStateGuide;
