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
    description: 'Available after billing is confirmed',
    disabled: true,
  },
];

const StepperStateExample = ({ size, orientation }: StepperPreviewControls) => {
  const exampleCode = `<Stepper
  size="${size}"
  orientation="${orientation}"
  items={itemsWithDisabledStep}
  value="billing"
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
          value="billing"
        />
      </FlexWrapper>
    </CodeExample>
  );
};

const StepperStateGuide = (props: StepperPreviewControls) => {
  return (
    <GuideSection
      title="State"
      description="Completed, current, upcoming, and disabled steps should stay readable at a glance so the user can quickly understand what is available next."
      example={<StepperStateExample {...props} />}
    />
  );
};

export default StepperStateGuide;
