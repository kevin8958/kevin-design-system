import { useState } from 'react';
import Stepper from '@/components/navigation/Stepper';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import FlexWrapper from '@/components/layout/FlexWrapper';

type StepperPreviewControls = Pick<
  Navigation.StepperProps,
  'size' | 'orientation'
>;

const items: Navigation.StepperItem[] = [
  {
    id: 'details',
    label: 'Details',
    description: 'Project basics and ownership',
  },
  {
    id: 'billing',
    label: 'Billing',
    description: 'Plan and payment method',
  },
  {
    id: 'review',
    label: 'Review',
    description: 'Final check before launch',
  },
];

const StepperFlowExample = ({ size, orientation }: StepperPreviewControls) => {
  const [value, setValue] = useState('billing');
  const exampleCode = `<Stepper
  size="${size}"
  orientation="${orientation}"
  items={items}
  value={value}
  onChange={setValue}
/>`;

  return (
    <CodeExample code={exampleCode} className="flex-1 min-w-[340px]">
      <FlexWrapper
        classes={orientation === 'vertical' ? 'w-full max-w-[360px]' : 'w-full max-w-[720px]'}
        direction="col"
        items="start"
      >
        <Stepper
          size={size}
          orientation={orientation}
          items={items}
          value={value}
          onChange={setValue}
        />
      </FlexWrapper>
    </CodeExample>
  );
};

const StepperFlowGuide = (props: StepperPreviewControls) => {
  return (
    <GuideSection
      title="Flow"
      description="Stepper turns a multi-step task into a visible sequence so people can understand progress before they commit to the next stage."
      example={<StepperFlowExample {...props} />}
    />
  );
};

export default StepperFlowGuide;
