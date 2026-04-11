import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from '@/components/action/Button';
import FlexWrapper from '@/components/layout/FlexWrapper';
import ToastProvider, { useToast } from './ToastProvider';

const meta = {
  title: 'Components/Feedback/ToastProvider',
  component: ToastProvider,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ToastProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

const TriggerButtons = () => {
  const toast = useToast();

  return (
    <FlexWrapper gap={3}>
      <Button
        size="sm"
        onClick={() =>
          toast.info({
            title: 'Toast',
            description: 'Queued from the provider.',
            autoClose: 3000,
          })
        }
      >
        Info
      </Button>
      <Button
        size="sm"
        color="success"
        onClick={() =>
          toast.success({
            title: 'Toast',
            description: 'Queued from the provider.',
            autoClose: 3000,
          })
        }
      >
        Success
      </Button>
    </FlexWrapper>
  );
};

export const Default: Story = {
  args: {
    children: null,
    placement: 'top-right',
  },
  render: (args) => (
    <div className="relative min-h-[420px] bg-neutral-50 p-8 dark:bg-neutral-950">
      <ToastProvider {...args}>
        <TriggerButtons />
      </ToastProvider>
    </div>
  ),
};
