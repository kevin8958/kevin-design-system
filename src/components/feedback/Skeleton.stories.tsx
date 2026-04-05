import type { Meta, StoryObj } from '@storybook/react-vite';
import Skeleton from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['line', 'rect', 'circle'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    variant: 'line',
    width: 240,
    height: 16,
  },
};

export const Shapes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Skeleton variant="line" width={160} height={16} />
      <Skeleton variant="rect" width={120} height={72} />
      <Skeleton variant="circle" width={56} height={56} />
    </div>
  ),
};
