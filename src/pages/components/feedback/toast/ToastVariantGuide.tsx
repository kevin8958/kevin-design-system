import Toast from '@/components/feedback/Toast';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const VariantExample = () => {
  const exampleCode = `<Toast title="Info" description="General information." variant="info" />
<Toast title="Success" description="Saved successfully." variant="success" />
<Toast title="Warning" description="Something needs attention." variant="warning" />
<Toast title="Danger" description="Request failed." variant="danger" />`;

  return (
    <CodeExample code={exampleCode} className="flex-1" maxHeight={900}>
      <FlexWrapper direction="col" items="start" gap={4} classes="w-full p-4">
        <Toast title="Info" description="General information." variant="info" />
        <Toast
          title="Success"
          description="Saved successfully."
          variant="success"
        />
        <Toast
          title="Warning"
          description="Something needs attention."
          variant="warning"
        />
        <Toast title="Danger" description="Request failed." variant="danger" />
      </FlexWrapper>
    </CodeExample>
  );
};

const ToastVariantGuide = () => {
  return (
    <GuideSection
      title="Variant"
      description="Use toast variants to quickly communicate short-lived updates with an appropriate semantic tone."
      example={<VariantExample />}
    />
  );
};

export default ToastVariantGuide;
