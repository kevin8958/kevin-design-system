import type { Meta, StoryObj } from '@storybook/react-vite';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    status: {
      control: 'select',
      options: ['online', 'offline', 'busy'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: '/sticker/alice.png',
    name: 'Alice Kim',
    size: 'md',
    status: 'online',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-6">
      <Avatar name="Alice Kim" size="sm" />
      <Avatar name="Alice Kim" size="md" />
      <Avatar name="Alice Kim" size="lg" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Avatar src="/sticker/alice.png" name="Alice Kim" status="online" />
      <Avatar src="/sticker/bob.png" name="Bob Lee" status="offline" />
      <Avatar name="Charlie Park" status="busy" />
    </div>
  ),
};
