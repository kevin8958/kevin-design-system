import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import ButtonGroup from '@/components/action/ButtonGroup';

const items: Action.ButtonGroupItem[] = [
  { label: 'Contain', value: 'contain' },
  { label: 'Outline', value: 'outline' },
  { label: 'Clear', value: 'clear' },
];

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/Action/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    fullWidth: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('contain');

    return (
      <ButtonGroup {...args} items={items} value={value} onChange={setValue} />
    );
  },
  args: {
    size: 'sm',
  },
};

export const FullWidth: Story = {
  render: (args) => {
    const [value, setValue] = useState('primary');

    return (
      <div className="w-[420px]">
        <ButtonGroup
          {...args}
          fullWidth
          items={[
            { label: 'Primary', value: 'primary' },
            { label: 'Neutral', value: 'neutral' },
            { label: 'Danger', value: 'danger' },
          ]}
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
  args: {
    size: 'sm',
  },
};
