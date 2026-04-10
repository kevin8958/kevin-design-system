import Textarea from '@/components/input/Textarea';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import FlexWrapper from '@/components/layout/FlexWrapper';

type TextareaPreviewControls = Pick<Input.TextareaProps, 'size'>;

const TextareaStateExample = ({ size }: TextareaPreviewControls) => {
  const exampleCode = `<Textarea size="${size}" label="Default" placeholder="Textarea" />
<Textarea size="${size}" label="Disabled" value="Textarea" disabled />
<Textarea size="${size}" label="Invalid" placeholder="Textarea" error errorMsg="Please add more detail." />`;

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-[340px]">
      <FlexWrapper classes="w-full max-w-[480px]" direction="col" items="start" gap={4}>
        <Textarea size={size} label="Default" placeholder="Textarea" />
        <Textarea size={size} label="Disabled" value="Textarea" disabled />
        <Textarea
          size={size}
          label="Invalid"
          placeholder="Textarea"
          error
          errorMsg="Please add more detail."
        />
      </FlexWrapper>
    </CodeExample>
  );
};

const TextareaStateGuide = (props: TextareaPreviewControls) => {
  return (
    <GuideSection
      title="State"
      description="Validation and disabled states follow the same visual language as the rest of the Input category."
      example={<TextareaStateExample {...props} />}
    />
  );
};

export default TextareaStateGuide;
