import { useState } from 'react';
import Alert from '@/components/feedback/Alert';
import Button from '@/components/action/Button';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type AlertPreviewControls = Pick<Feedback.AlertProps, 'variant'>;

const StateExample = ({ variant = 'info' }: AlertPreviewControls) => {
  const [dismissed, setDismissed] = useState(false);

  const exampleCode = `<Alert title="Persistent" description="Visible until the layout changes." variant="${variant}" />
<Alert
  title="Dismissible"
  description="Users can close this alert."
  variant="${variant}"
  closable
  onClose={() => setDismissed(true)}
/>`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper direction="col" items="start" gap={4} classes="w-full p-4">
        <Alert
          title="Persistent"
          description="Visible until the layout changes."
          variant={variant}
        />
        {dismissed ? (
          <Button
            size="sm"
            variant="outline"
            color="neutral"
            onClick={() => setDismissed(false)}
          >
            Show dismissible alert again
          </Button>
        ) : (
          <Alert
            title="Dismissible"
            description="Users can close this alert."
            variant={variant}
            closable
            onClose={() => setDismissed(true)}
          />
        )}
      </FlexWrapper>
    </CodeExample>
  );
};

const AlertStateGuide = (props: AlertPreviewControls) => {
  return (
    <GuideSection
      title="State"
      description="Use persistent alerts for ongoing messaging and dismissible alerts when users should be able to clear them."
      example={<StateExample {...props} />}
    />
  );
};

export default AlertStateGuide;
