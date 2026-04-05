import type { Meta, StoryObj } from '@storybook/react-vite';
import Progress from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'Components/Feedback/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    value: { control: 'number' },
    max: { control: 'number' },
    showValue: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 56,
    max: 100,
    size: 'md',
    showValue: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex w-[520px] flex-col gap-6">
      <Progress value={40} size="sm" />
      <Progress value={56} size="md" />
      <Progress value={72} size="lg" />
    </div>
  ),
};
