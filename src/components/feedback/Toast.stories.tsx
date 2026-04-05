import type { Meta, StoryObj } from '@storybook/react-vite';
import Toast from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Feedback/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger'],
    },
    closable: { control: 'boolean' },
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    title: 'Saved',
    description: 'Your changes have been saved successfully.',
    variant: 'success',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Toast title="Info" description="General information." variant="info" />
      <Toast title="Success" description="Saved successfully." variant="success" />
      <Toast title="Warning" description="Something needs attention." variant="warning" />
      <Toast title="Danger" description="Request failed." variant="danger" />
    </div>
  ),
};
