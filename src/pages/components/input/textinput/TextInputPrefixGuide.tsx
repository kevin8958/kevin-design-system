import FlexWrapper from '@/components/layout/FlexWrapper';
import TextInput from '@/components/input/TextInput';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import { LuSearch } from 'react-icons/lu';

const PrefixExample = () => {
  const exampleCode = `<TextInput 
  placeholder="Search for something..." 
  prefix={<LuSearch className="text-neutral-400" />} 
/>
<TextInput 
  type="number"
  placeholder="0.00" 
  prefix={<span className="text-sm font-medium text-neutral-400">$</span>} 
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
          placeholder="Search for something..."
          prefix={<LuSearch className="text-neutral-400" />}
        />
        <TextInput
          type="number"
          placeholder="0.00"
          prefix={
            <span className="text-sm font-medium text-neutral-400">$</span>
          }
        />
      </FlexWrapper>
    </CodeExample>
  );
};

const TextInputPrefixGuide = () => {
  return (
    <GuideSection
      title="Prefix"
      description="Add icons or indicators to the left side of the input to provide context."
      example={<PrefixExample />}
    />
  );
};

export default TextInputPrefixGuide;
