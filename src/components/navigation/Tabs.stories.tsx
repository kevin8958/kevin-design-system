import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import Tabs from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
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
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const defaultItems: Navigation.TabsItem[] = [
  {
    id: 'overview',
    label: 'Overview',
    content: 'Overview content for the selected section.',
  },
  {
    id: 'activity',
    label: 'Activity',
    content: 'Recent activity and timeline updates appear here.',
  },
  {
    id: 'settings',
    label: 'Settings',
    content: 'Tab-specific settings can be shown in this panel.',
  },
];

const InteractiveTabs = (args: Navigation.TabsProps) => {
  const [value, setValue] = useState(args.value);

  return (
    <div className="w-[560px]">
      <Tabs
        {...args}
        value={value}
        onChange={(nextValue) => {
          setValue(nextValue);
          args.onChange?.(nextValue);
        }}
      />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <InteractiveTabs {...args} />,
  args: {
    items: defaultItems,
    value: 'overview',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex w-[560px] flex-col gap-6">
      <InteractiveTabs items={defaultItems} value="overview" size="sm" />
      <InteractiveTabs items={defaultItems} value="overview" size="md" />
      <InteractiveTabs items={defaultItems} value="overview" size="lg" />
    </div>
  ),
};

export const WithDisabledTab: Story = {
  render: (args) => <InteractiveTabs {...args} />,
  args: {
    items: [
      ...defaultItems.slice(0, 2),
      {
        id: 'billing',
        label: 'Billing',
        disabled: true,
        content: 'Billing content',
      },
    ],
    value: 'overview',
  },
};

export const Disabled: Story = {
  args: {
    items: defaultItems,
    value: 'activity',
    disabled: true,
  },
};
