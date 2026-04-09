import type { Meta, StoryObj } from '@storybook/react-vite';
import FlexWrapper from '@/components/layout/FlexWrapper';
import MetricCard from './MetricCard';

const meta: Meta<typeof MetricCard> = {
  title: 'Components/Data Display/MetricCard',
  component: MetricCard,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    trend: {
      control: 'select',
      options: ['up', 'down', 'neutral'],
    },
    animated: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MetricCard>;

export const Default: Story = {
  args: {
    title: 'Revenue',
    value: 12430,
    prefix: '$',
    change: 12.4,
    changeSuffix: '%',
    size: 'md',
    animated: true,
  },
};

export const TrendStates: Story = {
  render: () => (
    <FlexWrapper classes="w-full flex-wrap" gap={4} items="stretch">
      <MetricCard
        title="Revenue"
        value={12430}
        prefix="$"
        change={12.4}
        changeSuffix="%"
        animated={false}
      />
      <MetricCard
        title="Churn"
        value={184}
        change={-3.1}
        changeSuffix="%"
        animated={false}
      />
      <MetricCard
        title="Active Users"
        value={18240}
        change={0}
        changeSuffix="%"
        animated={false}
      />
    </FlexWrapper>
  ),
};
