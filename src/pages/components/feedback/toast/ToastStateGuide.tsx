import Toast from '@/components/feedback/Toast';
import FlexWrapper from '@/components/layout/FlexWrapper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const StateExample = () => {
  const exampleCode = `<Toast title="Saved" description="Your changes have been saved." />
<Toast title="Dismissible" description="Users can close this toast." closable onClose={() => {}} />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper direction="col" items="start" gap={4} classes="w-full p-4">
        <Toast
          title="Saved"
          description="Your changes have been saved."
          variant="success"
        />
        <Toast
          title="Dismissible"
          description="Users can close this toast."
          variant="info"
          closable
          onClose={() => {}}
        />
      </FlexWrapper>
    </CodeExample>
  );
};

const ToastStateGuide = () => {
  return (
    <GuideSection
      title="State"
      description="Use static previews to document persistent and dismissible toast layouts before wiring them into an app-level toast system."
      example={<StateExample />}
    />
  );
};

export default ToastStateGuide;
