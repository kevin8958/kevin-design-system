import { useState } from 'react';
import ButtonGroup from '@/components/action/ButtonGroup';
import CodeExample from '@/components/interaction/CodeExample';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import GuideSection from '@/components/layout/GuideSection';

const items: Action.ButtonGroupItem[] = [
  { label: 'Contain', value: 'contain' },
  { label: 'Outline', value: 'outline' },
  { label: 'Clear', value: 'clear' },
];

const SelectionExample = () => {
  const [value, setValue] = useState('contain');

  const exampleCode = `const [value, setValue] = useState('contain');

<ButtonGroup
  items={[
    { label: 'Contain', value: 'contain' },
    { label: 'Outline', value: 'outline' },
    { label: 'Clear', value: 'clear' },
  ]}
  value={value}
  onChange={setValue}
/>`;

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-[320px]" maxHeight={260}>
      <FlexWrapper
        direction="col"
        items="center"
        justify="center"
        gap={4}
        classes="w-full"
      >
        <ButtonGroup items={items} value={value} onChange={setValue} />
        <Typography
          variant="C1"
          classes="uppercase font-mono text-neutral-500 dark:text-neutral-400"
        >
          selected: {value}
        </Typography>
      </FlexWrapper>
    </CodeExample>
  );
};

const ButtonGroupSelectionGuide = () => {
  return (
    <GuideSection
      title="Selection"
      description="Use ButtonGroup to switch between a small set of equal-priority options."
      example={<SelectionExample />}
    />
  );
};

export default ButtonGroupSelectionGuide;
