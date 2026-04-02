import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import Switch from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Input/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

const InteractiveSwitch = (args: Input.SwitchProps) => {
  const [checked, setChecked] = useState(args.checked || false);
  return (
    <Switch
      {...args}
      checked={checked}
      onChange={(val) => {
        setChecked(val);
        args.onChange?.(val);
      }}
    />
  );
};

export const Default: Story = {
  render: (args) => <InteractiveSwitch {...args} />,
  args: {
    label: 'Push Notifications',
    description: 'Receive real-time alerts on your device.',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <InteractiveSwitch size="sm" label="Small Switch" />
      <InteractiveSwitch size="md" label="Medium Switch" />
      <InteractiveSwitch size="lg" label="Large Switch" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <InteractiveSwitch label="Disabled Off" disabled checked={false} />
      <InteractiveSwitch label="Disabled On" disabled checked={true} />
      <InteractiveSwitch
        label="Invalid State"
        invalid
        errorMsg="Please accept the terms to continue."
      />
    </div>
  ),
};

export const DarkModePreview: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: (args) => (
    <div className="p-10 bg-neutral-900 rounded-xl">
      <InteractiveSwitch {...args} />
    </div>
  ),
  args: {
    label: 'Dark Mode Contrast',
    description: 'Checking contrast against neutral-900.',
    checked: true,
  },
};
