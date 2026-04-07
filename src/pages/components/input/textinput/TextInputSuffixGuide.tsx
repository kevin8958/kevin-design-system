import FlexWrapper from '@/components/layout/FlexWrapper';
import TextInput from '@/components/input/TextInput';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import Button from '@/components/action/Button';
import { useState } from 'react';

type TextInputPreviewControls = Pick<Input.TextInputProps, 'size'>;

const SuffixExample = ({ size }: TextInputPreviewControls) => {
  const [showPassword, setShowPassword] = useState(false);
  const exampleCode = `<TextInput 
  size="${size}"
  placeholder="Weight" 
  suffix={<span className="text-sm text-neutral-400">kg</span>} 
/>
<TextInput 
  size="${size}"
  type="password"
  placeholder="Password" 
  suffix={
    <Button
      type="button"
      variant="clear"
      color="neutral"
      classes="p-0!"
      onClick={() => setShowPassword(!showPassword)}
    >
      <LuEyeOff />
    </Button>
  } 
/>`;

  return (
    <CodeExample code={exampleCode} className="flex-1" maxHeight={250}>
      <FlexWrapper
        direction="col"
        items="center"
        justify="center"
        gap={6}
        classes="w-full"
      >
        <TextInput
          size={size}
          placeholder="Weight"
          suffix={<span className="text-sm text-neutral-400 mr-2">kg</span>}
        />
        <TextInput
          size={size}
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          suffix={
            <Button
              type="button"
              variant="clear"
              color="neutral"
              classes="p-2!"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <LuEye /> : <LuEyeOff />}
            </Button>
          }
        />
      </FlexWrapper>
    </CodeExample>
  );
};

const TextInputSuffixGuide = (props: TextInputPreviewControls) => {
  return (
    <GuideSection
      title="Suffix"
      description="Add icons, text, or interactive elements to the right side of the input."
      example={<SuffixExample {...props} />}
    />
  );
};

export default TextInputSuffixGuide;
