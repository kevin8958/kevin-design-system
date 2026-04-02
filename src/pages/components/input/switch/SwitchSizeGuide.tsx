import { useState } from 'react';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Switch from '@/components/input/Switch'; // 앞서 만든 Switch 컴포넌트 경로
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

const SizeExample = () => {
  const [states, setStates] = useState({
    sm: true,
    md: true,
    lg: true,
  });

  const toggle = (size: 'sm' | 'md' | 'lg') => {
    setStates((prev) => ({ ...prev, [size]: !prev[size] }));
  };

  const exampleCode = `<Switch size="sm" label="Small" checked={true} />
<Switch size="md" label="Medium" checked={true} />
<Switch size="lg" label="Large" checked={true} />`;

  return (
    <CodeExample code={exampleCode} className="flex-1">
      <FlexWrapper
        direction="col"
        items="start"
        justify="center"
        gap={6}
        classes="w-full p-4"
      >
        {(['sm', 'md', 'lg'] as const).map((size) => (
          <Switch
            key={size}
            size={size}
            label={size.toUpperCase()}
            description={`${size} size toggle variant`}
            checked={states[size]}
            onChange={() => toggle(size)}
          />
        ))}
      </FlexWrapper>
    </CodeExample>
  );
};

const SwitchSizeGuide = () => {
  return (
    <GuideSection
      title="Size"
      description="Adjust the toggle dimensions to fit various UI scales and densities."
      example={<SizeExample />}
    />
  );
};

export default SwitchSizeGuide;
