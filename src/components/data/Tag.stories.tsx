import type { Meta, StoryObj } from '@storybook/react-vite';
import Tag from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Data Display/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['neutral', 'primary'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    label: 'Design Token',
    variant: 'primary',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Tag label="Small" size="sm" />
      <Tag label="Medium" size="md" />
      <Tag label="Large" size="lg" />
    </div>
  ),
};
