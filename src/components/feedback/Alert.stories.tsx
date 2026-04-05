import type { Meta, StoryObj } from '@storybook/react-vite';
import Alert from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Feedback/Alert',
  component: Alert,
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
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    title: 'Heads up',
    description: 'This alert provides contextual information for the current screen.',
    variant: 'info',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex w-[640px] flex-col gap-4">
      <Alert title="Info" description="General information." variant="info" />
      <Alert title="Success" description="Action completed successfully." variant="success" />
      <Alert title="Warning" description="Something may need attention." variant="warning" />
      <Alert title="Danger" description="A critical issue occurred." variant="danger" />
    </div>
  ),
};

export const Closable: Story = {
  args: {
    title: 'Dismissible',
    description: 'This alert can be dismissed by the user.',
    variant: 'warning',
    closable: true,
  },
};
