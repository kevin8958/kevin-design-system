import type { Meta, StoryObj } from '@storybook/react-vite';
import CountUp from './CountUp';

const meta: Meta<typeof CountUp> = {
  title: 'Components/Interaction/CountUp',
  component: CountUp,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['up', 'down'],
    },
    separator: { control: 'text' },
    repeat: { control: 'boolean' },
    startWhen: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof CountUp>;

export const Default: Story = {
  args: {
    from: 0,
    to: 1280,
    duration: 2,
    className: 'text-4xl font-bold text-neutral-900 dark:text-neutral-50',
  },
};

export const Decimal: Story = {
  args: {
    from: 0,
    to: 98.6,
    duration: 2,
    className: 'text-4xl font-bold text-neutral-900 dark:text-neutral-50',
  },
};
