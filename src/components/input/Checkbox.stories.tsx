import type { Meta, StoryObj } from '@storybook/react-vite';
import Checkbox from './Checkbox';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Input/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    label: { control: 'text' },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// 1. 기본형
export const Default: Story = {
  args: {
    id: 'default-checkbox',
    label: 'Agree to terms and conditions',
    size: 'sm',
  },
};

// 2. 모든 크기 비교
export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6">
      <Checkbox
        {...args}
        id="size-sm"
        size="sm"
        label="Small Checkbox (20px)"
        checked
      />
      <Checkbox
        {...args}
        id="size-md"
        size="md"
        label="Medium Checkbox (24px)"
        checked
      />
      <Checkbox
        {...args}
        id="size-lg"
        size="lg"
        label="Large Checkbox (32px)"
        checked
      />
    </div>
  ),
};

// 3. 상태별 (Disabled, Invalid)
export const States: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6">
      <Checkbox {...args} id="state-default" label="Default State" />
      <Checkbox {...args} id="state-invalid" label="Invalid State" invalid />
      <Checkbox {...args} id="state-disabled" label="Disabled State" disabled />
      <Checkbox
        {...args}
        id="state-disabled-checked"
        label="Disabled Checked"
        disabled
        checked
      />
    </div>
  ),
};

// 4. 인터랙티브 (실제 상태 변경 확인)
export const Interactive: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);

    return (
      <div className="flex flex-col gap-4 p-4 border border-neutral-700 rounded-lg">
        <Checkbox
          {...args}
          id="interactive-checkbox"
          label={checked ? 'Checked!' : 'Unchecked'}
          checked={checked}
          onChange={(data) => {
            setChecked(data.checked);
            args.onChange?.(data);
          }}
        />
        <p className="text-xs text-neutral-400">
          Current State:{' '}
          <span className="text-primary-100 font-mono">
            {checked.toString()}
          </span>
        </p>
      </div>
    );
  },
  args: {
    label: 'Click me to toggle',
  },
};
