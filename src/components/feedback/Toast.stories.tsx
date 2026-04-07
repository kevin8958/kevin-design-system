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
    placement: {
      control: 'select',
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
    },
    autoClose: { control: 'number' },
    stackIndex: { control: 'number' },
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

export const Floating: Story = {
  render: (args) => (
    <div className="relative h-72 rounded-2xl border border-dashed border-neutral-300 p-4 dark:border-neutral-700">
      <Toast {...args} placement="top-right" closable />
    </div>
  ),
  args: {
    title: 'Upload complete',
    description: 'Your file is ready to share.',
    variant: 'success',
  },
};

export const Stacked: Story = {
  render: () => (
    <div className="relative h-80 rounded-2xl border border-dashed border-neutral-300 p-4 dark:border-neutral-700">
      <Toast
        title="Saved"
        description="Your latest changes were stored."
        variant="success"
        placement="top-right"
        stackIndex={0}
      />
      <Toast
        title="Syncing"
        description="A background sync is running."
        variant="info"
        placement="top-right"
        stackIndex={1}
      />
      <Toast
        title="Warning"
        description="One item still needs attention."
        variant="warning"
        placement="top-right"
        stackIndex={2}
      />
    </div>
  ),
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
