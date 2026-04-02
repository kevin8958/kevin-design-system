import FlexWrapper from '@/components/layout/FlexWrapper';
import Switch from '@/components/input/Switch';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const StateExample = () => {
  const exampleCode = `// Disabled States
<Switch label="Disabled Off" disabled checked={false} />
<Switch label="Disabled On" disabled checked={true} />

// Invalid / Error States
<Switch 
  label="Invalid State" 
  invalid 
  checked={true} 
  errorMsg="This setting is required" 
/>`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper
        direction="col"
        items="start"
        justify="center"
        gap={8}
        classes="w-full p-4"
      >
        {/* Disabled States */}
        <FlexWrapper direction="col" gap={4}>
          <Switch label="Disabled Off" disabled checked={false} />
          <Switch label="Disabled On" disabled checked={true} />
        </FlexWrapper>

        {/* Invalid State */}
        <FlexWrapper direction="col" gap={4}>
          <Switch
            label="Invalid State"
            invalid
            checked={true}
            errorMsg="This configuration is mandatory"
          />
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const SwitchStateGuide = () => {
  return (
    <GuideSection
      title="States"
      description="Visual representations of the switch in various functional conditions."
      example={<StateExample />}
    />
  );
};

export default SwitchStateGuide;
