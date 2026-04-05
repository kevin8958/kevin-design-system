import type { Meta, StoryObj } from '@storybook/react-vite';
import Divider from './Divider';
import FlexWrapper from './FlexWrapper';

const meta: Meta<typeof Divider> = {
  title: 'Components/Layout/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  render: (args) => (
    <div className="w-[520px]">
      <Divider {...args} orientation="horizontal" />
    </div>
  ),
};

export const Vertical: Story = {
  render: (args) => (
    <FlexWrapper classes="h-16" items="stretch" gap={4}>
      <div>Left</div>
      <Divider {...args} orientation="vertical" />
      <div>Right</div>
    </FlexWrapper>
  ),
};
