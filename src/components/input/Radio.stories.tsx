import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import Radio from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Input/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    title: { control: 'text' },
    errorMsg: { control: 'text' },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

const defaultOptions = [
  {
    id: '1',
    label: 'Option One',
    desc: 'Detailed description for the first option.',
  },
  { id: '2', label: 'Option Two', desc: 'Slightly shorter description.' },
  { id: '3', label: 'Option Three (Disabled)', disabled: true },
];

// 1. 기본형
export const Default: Story = {
  args: {
    title: 'Select an Option',
    options: defaultOptions,
    value: '1',
    size: 'md',
  },
};

// 2. 사이즈 비교
export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-10 w-[400px]">
      <Radio {...args} size="sm" title="Small Scale" value="1" />
      <Radio {...args} size="md" title="Medium Scale (Default)" value="1" />
      <Radio {...args} size="lg" title="Large Scale" value="1" />
    </div>
  ),
  args: {
    options: defaultOptions.slice(0, 2),
  },
};

// 3. 상태별 (Disabled, Invalid)
export const States: Story = {
  render: (args) => (
    <div className="flex flex-col gap-10 w-[400px]">
      <Radio {...args} title="Disabled Group" disabled value="1" />
      <Radio
        {...args}
        title="Invalid State"
        invalid
        errorMsg="Please select a valid payment method."
        value="1"
      />
    </div>
  ),
  args: {
    options: defaultOptions.slice(0, 2),
  },
};

// 4. 인터랙티브 (실제 선택 변경 확인)
export const Interactive: Story = {
  render: (args) => {
    const [value, setValue] = useState('1');

    return (
      <div className="flex flex-col gap-4 p-6 border border-neutral-200 dark:border-neutral-700 rounded-xl w-[400px]">
        <Radio
          {...args}
          value={value}
          onChange={(id) => {
            setValue(id);
            args.onChange?.(id);
          }}
          invalid={value === '3'}
          errorMsg={
            value === '3' ? 'This plan is currently unavailable.' : undefined
          }
        />
        <div className="mt-4 p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Selected ID:{' '}
            <span className="text-secondary-600 dark:text-primary-100 font-mono font-bold">
              {value}
            </span>
          </p>
        </div>
      </div>
    );
  },
  args: {
    title: 'Choose your plan',
    options: [
      { id: '1', label: 'Basic', desc: 'Free forever with limited features' },
      { id: '2', label: 'Pro', desc: 'Most popular choice for professionals' },
      {
        id: '3',
        label: 'Enterprise',
        desc: 'Custom solutions for large teams',
      },
    ],
  },
};
