import { useState } from 'react';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Switch from '@/components/input/Switch';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

type SwitchPreviewControls = Pick<Input.SwitchProps, 'size'>;

const StateExample = ({ size }: SwitchPreviewControls) => {
  const [enabled, setEnabled] = useState(true);

  const exampleCode = `// Default
<Switch
  size="${size}"
  label="Enabled"
  checked={enabled}
  onChange={setEnabled}
/>

// Disabled States
<Switch size="${size}" label="Disabled Off" disabled checked={false} />
<Switch size="${size}" label="Disabled On" disabled checked={true} />

// Invalid / Error States
<Switch 
  size="${size}"
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
        <FlexWrapper direction="col" gap={4}>
          <Switch
            size={size}
            label="Default State"
            description="This switch can be toggled"
            checked={enabled}
            onChange={setEnabled}
          />
        </FlexWrapper>

        {/* Disabled States */}
        <FlexWrapper direction="col" gap={4}>
          <Switch
            size={size}
            label="Disabled Off"
            description="Unavailable and turned off"
            disabled
            checked={false}
          />
          <Switch
            size={size}
            label="Disabled On"
            description="Unavailable but already enabled"
            disabled
            checked={true}
          />
        </FlexWrapper>

        {/* Invalid State */}
        <FlexWrapper direction="col" gap={4}>
          <Switch
            size={size}
            label="Invalid State"
            description="Requires attention before saving"
            invalid
            checked={true}
            errorMsg="This configuration is mandatory"
          />
        </FlexWrapper>
      </FlexWrapper>
    </CodeExample>
  );
};

const SwitchStateGuide = (props: SwitchPreviewControls) => {
  return (
    <GuideSection
      title="States"
      description="Visual representations of the switch in various functional conditions."
      example={<StateExample {...props} />}
    />
  );
};

export default SwitchStateGuide;
