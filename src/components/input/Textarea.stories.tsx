import type { Meta, StoryObj } from '@storybook/react-vite';
import Textarea from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Input/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    resize: { control: 'select', options: ['none', 'vertical', 'both'] },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: 'Description',
    placeholder: 'Write a short summary',
    size: 'md',
  },
};

export const Filled: Story = {
  args: {
    label: 'Project brief',
    value:
      'Design a new component page that explains states, size behavior, and motion examples in a compact way.',
    size: 'md',
  },
};

export const States: Story = {
  render: () => (
    <div className="flex w-[420px] flex-col gap-4">
      <Textarea
        label="Disabled"
        value="This content cannot be edited right now."
        disabled
      />
      <Textarea
        label="Invalid"
        placeholder="Explain the issue"
        error
        errorMsg="Please include a little more detail."
      />
    </div>
  ),
};
