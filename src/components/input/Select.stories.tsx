import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import Select from './Select';

const options: Input.SelectOption[] = [
  { label: 'Primary', value: 'primary' },
  { label: 'Neutral', value: 'neutral' },
  { label: 'Danger', value: 'danger' },
];

const meta: Meta<typeof Select> = {
  title: 'Components/Input/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('');

    return <Select {...args} value={value} onChange={setValue} options={options} />;
  },
  args: {
    placeholder: 'Select color',
    size: 'md',
  },
};

export const WithLabel: Story = {
  render: (args) => {
    const [value, setValue] = useState('neutral');

    return <Select {...args} value={value} onChange={setValue} options={options} />;
  },
  args: {
    label: 'Color',
    size: 'md',
  },
};

export const States: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <Select options={options} value="" placeholder="Disabled" disabled />
      <Select
        options={options}
        value=""
        placeholder="Invalid"
        invalid
        errorMsg="Please select an option."
      />
    </div>
  ),
};
