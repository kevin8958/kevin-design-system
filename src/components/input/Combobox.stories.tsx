import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import Combobox from './Combobox';

const options: Input.ComboboxOption[] = [
  {
    label: 'Design',
    value: 'design',
    description: 'Visual language, motion, and UX direction',
  },
  {
    label: 'Engineering',
    value: 'engineering',
    description: 'Frontend, backend, and infrastructure',
  },
  {
    label: 'Support',
    value: 'support',
    description: 'Customer escalations and feedback loops',
  },
];

const meta: Meta<typeof Combobox> = {
  title: 'Components/Input/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Combobox>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <Combobox {...args} value={value} onChange={setValue} options={options} />;
  },
  args: {
    label: 'Team',
    placeholder: 'Search team',
    size: 'md',
  },
};

export const WithSelection: Story = {
  render: (args) => {
    const [value, setValue] = useState('engineering');
    return <Combobox {...args} value={value} onChange={setValue} options={options} />;
  },
  args: {
    label: 'Owner',
    size: 'md',
  },
};

export const States: Story = {
  render: () => (
    <div className="flex w-[420px] flex-col gap-4">
      <Combobox
        label="Disabled"
        placeholder="Search team"
        options={options}
        value=""
        disabled
      />
      <Combobox
        label="Invalid"
        placeholder="Search team"
        options={options}
        value=""
        invalid
        errorMsg="Please select a valid team."
      />
    </div>
  ),
};
