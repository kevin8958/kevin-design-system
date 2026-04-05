import type { Meta, StoryObj } from '@storybook/react-vite';
import SplitText from './SplitText';

const meta: Meta<typeof SplitText> = {
  title: 'Components/Interaction/SplitText',
  component: SplitText,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  decorators: [
    (Story) => (
      <div className="rounded-2xl bg-neutral-900 p-10">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['H1', 'H2', 'H3', 'B1', 'B2', 'C1'],
    },
    delay: {
      control: { type: 'number', min: 10, step: 10 },
    },
    repeat: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof SplitText>;

export const Default: Story = {
  args: {
    text: 'Animate each character with a subtle reveal.',
    variant: 'B1',
    delay: 40,
  },
};

export const Headline: Story = {
  args: {
    text: 'Build expressive moments with motion.',
    variant: 'H2',
    delay: 35,
  },
};
