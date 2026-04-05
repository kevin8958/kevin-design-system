import type { Meta, StoryObj } from '@storybook/react-vite';
import Tooltip from './Tooltip';
import Button from '@/components/action/Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Data Display/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'Helpful supporting text.',
    position: 'top',
    children: <Button variant="outline" color="neutral">Hover me</Button>,
  },
};
