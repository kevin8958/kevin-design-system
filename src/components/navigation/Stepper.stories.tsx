import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import Stepper from './Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Navigation/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    allowStepClick: {
      control: 'boolean',
    },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

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
    description: 'Double-check before launch',
  },
];

const InteractiveStepper = (args: Navigation.StepperProps) => {
  const [value, setValue] = useState(args.value);

  return (
    <div className={args.orientation === 'vertical' ? 'w-[360px]' : 'w-[720px]'}>
      <Stepper
        {...args}
        value={value}
        onChange={(next) => {
          setValue(next);
          args.onChange?.(next);
        }}
      />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <InteractiveStepper {...args} />,
  args: {
    items,
    value: 'billing',
    size: 'md',
    orientation: 'horizontal',
    allowStepClick: true,
  },
};

export const Vertical: Story = {
  render: (args) => <InteractiveStepper {...args} />,
  args: {
    items,
    value: 'billing',
    size: 'md',
    orientation: 'vertical',
    allowStepClick: true,
  },
};

export const WithDisabledStep: Story = {
  render: (args) => <InteractiveStepper {...args} />,
  args: {
    items: [
      items[0],
      { ...items[1], disabled: true },
      items[2],
    ],
    value: 'details',
    size: 'md',
    orientation: 'horizontal',
    allowStepClick: true,
  },
};
