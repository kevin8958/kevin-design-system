import type { Meta, StoryObj } from '@storybook/react';
import { LuSearch, LuPlus } from 'react-icons/lu';
import Button from '@/components/action/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Action/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['contain', 'outline', 'clear'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['primary', 'neutral', 'info', 'success', 'warning', 'danger'],
    },
    shape: {
      control: 'radio',
      options: ['rect', 'circle'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    prompted: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'contain',
    color: 'primary',
    size: 'md',
  },
};

export const Variants: Story = {
  render: (args: Action.ButtonProps) => (
    <div className="flex gap-4">
      <Button {...args} variant="contain">
        Contain
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="clear">
        Clear
      </Button>
    </div>
  ),
};

export const Colors: Story = {
  render: (args: Action.ButtonProps) => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button {...args} color="primary" variant="contain">
          Primary
        </Button>
        <Button {...args} color="neutral" variant="contain">
          Neutral
        </Button>
        <Button {...args} color="info" variant="contain">
          Info
        </Button>
        <Button {...args} color="success" variant="contain">
          Success
        </Button>
        <Button {...args} color="warning" variant="contain">
          Warning
        </Button>
        <Button {...args} color="danger" variant="contain">
          Danger
        </Button>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args: Action.ButtonProps) => (
    <div className="flex items-end gap-4">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  ),
};

export const States: Story = {
  render: (args: Action.ButtonProps) => (
    <div className="flex gap-4">
      <Button {...args}>Normal</Button>
      <Button {...args} disabled>
        Disabled
      </Button>
      <Button {...args} loading>
        Loading
      </Button>
      <Button {...args} prompted>
        Prompted
      </Button>
    </div>
  ),
};

export const WithIcon: Story = {
  render: (args: Action.ButtonProps) => (
    <div className="flex gap-4">
      <Button {...args} icon={<LuSearch size={16} />}>
        Search
      </Button>
      <Button {...args} icon={<LuSearch size={16} />} iconPosition="right">
        Search
      </Button>
    </div>
  ),
};

export const CircleShape: Story = {
  render: (args: Action.ButtonProps) => (
    <div className="flex gap-4 items-center">
      <Button {...args} shape="circle" size="sm" icon={<LuPlus size={16} />} />
      <Button {...args} shape="circle" size="md" icon={<LuPlus size={20} />} />
      <Button {...args} shape="circle" size="lg" icon={<LuPlus size={24} />} />
    </div>
  ),
};
