import FlexWrapper from '@/components/layout/FlexWrapper';
import TextInput from '@/components/input/TextInput';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import Button from '@/components/action/Button';
import { useState } from 'react';

const SuffixExample = () => {
  const [showPassword, setShowPassword] = useState(false);
  const exampleCode = `<TextInput 
  placeholder="Weight" 
  suffix={<span className="text-sm text-neutral-400">kg</span>} 
/>
<TextInput 
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
          placeholder="Weight"
          suffix={<span className="text-sm text-neutral-400 mr-2">kg</span>}
        />
        <TextInput
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

const TextInputSuffixGuide = () => {
  return (
    <GuideSection
      title="Suffix"
      description="Add icons, text, or interactive elements to the right side of the input."
      example={<SuffixExample />}
    />
  );
};

export default TextInputSuffixGuide;
