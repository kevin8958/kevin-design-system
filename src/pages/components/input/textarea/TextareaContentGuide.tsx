import Textarea from '@/components/input/Textarea';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import FlexWrapper from '@/components/layout/FlexWrapper';

type TextareaPreviewControls = Pick<Input.TextareaProps, 'size'>;

const TextareaContentExample = ({ size }: TextareaPreviewControls) => {
  const exampleCode = `<Textarea
  size="${size}"
  label="Summary"
  placeholder="Write a short summary"
/>

<Textarea
  size="${size}"
  label="Project brief"
  value="Design a new component page that explains states, spacing, and interaction details in a compact way."
/>`;

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-[340px]">
      <FlexWrapper classes="w-full max-w-[480px]" direction="col" items="start" gap={4}>
        <Textarea
          size={size}
          label="Summary"
          placeholder="Write a short summary"
        />
        <Textarea
          size={size}
          label="Project brief"
          value="Design a new component page that explains states, spacing, and interaction details in a compact way."
        />
      </FlexWrapper>
    </CodeExample>
  );
};

const TextareaContentGuide = (props: TextareaPreviewControls) => {
  return (
    <GuideSection
      title="Content"
      description="Textarea supports short notes and longer supporting copy while keeping the same input tone as text fields."
      example={<TextareaContentExample {...props} />}
    />
  );
};

export default TextareaContentGuide;
