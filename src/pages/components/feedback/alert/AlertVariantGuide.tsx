import Alert from '@/components/feedback/Alert';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const VariantExample = () => {
  const exampleCode = `<Alert title="Info" description="General information." variant="info" />
<Alert title="Success" description="Action completed successfully." variant="success" />
<Alert title="Warning" description="Something may need attention." variant="warning" />
<Alert title="Danger" description="A critical issue occurred." variant="danger" />`;

  return (
    <CodeExample code={exampleCode} className="flex-1" maxHeight={900}>
      <FlexWrapper direction="col" items="start" gap={4} classes="w-full p-4">
        <Alert title="Info" description="General information." variant="info" />
        <Alert
          title="Success"
          description="Action completed successfully."
          variant="success"
        />
        <Alert
          title="Warning"
          description="Something may need attention."
          variant="warning"
        />
        <Alert
          title="Danger"
          description="A critical issue occurred."
          variant="danger"
        />
      </FlexWrapper>
    </CodeExample>
  );
};

const AlertVariantGuide = () => {
  return (
    <GuideSection
      title="Variant"
      description="Choose a semantic alert tone that matches the severity and intent of the message."
      example={<VariantExample />}
    />
  );
};

export default AlertVariantGuide;
