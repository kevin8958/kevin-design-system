import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import Button from '@/components/action/Button';
import Typography from '@/components/foundation/Typography';
import Drawer from './Drawer';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Action/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    isOpen: { control: 'boolean' },
    loading: { control: 'boolean' },
    hideBottom: { control: 'boolean' },
    onClose: { action: 'closed' },
    onConfirm: { action: 'confirmed' },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

const DrawerTemplate = (args: Action.DrawerProps) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  return (
    <div className="p-10">
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
      <Drawer
        {...args}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          args.onClose();
        }}
      />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <DrawerTemplate {...args} />,
  args: {
    title: 'Default Drawer',
    children: (
      <Typography variant="B2">
        This is the default drawer content. It slides in from the right on
        desktop and from the bottom on mobile.
      </Typography>
    ),
  },
};

export const Sizes: Story = {
  render: (args) => {
    const [openSize, setOpenSize] = useState<string | null>(null);
    const sizes = ['sm', 'md', 'lg', 'xl', 'full'] as const;

    return (
      <div className="flex gap-2 p-10">
        {sizes.map((size) => (
          <Button key={size} onClick={() => setOpenSize(size)}>
            {size.toUpperCase()}
          </Button>
        ))}
        <Drawer
          {...args}
          isOpen={!!openSize}
          size={openSize as Action.DrawerSize}
          title={`${openSize?.toUpperCase()} Size Drawer`}
          onClose={() => setOpenSize(null)}
        />
      </div>
    );
  },
};

export const LoadingState: Story = {
  render: (args) => <DrawerTemplate {...args} />,
  args: {
    title: 'Form Submission',
    loading: true,
    confirmText: 'Saving...',
    children: (
      <Typography variant="B2">
        The confirm button shows a loading state.
      </Typography>
    ),
  },
};

export const LongContent: Story = {
  render: (args) => <DrawerTemplate {...args} />,
  args: {
    title: 'Scrollable Content',
    children: (
      <div className="space-y-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <Typography key={i} variant="B2">
            Scrolling content row {i + 1}: Highlighting the sticky header and
            footer.
          </Typography>
        ))}
      </div>
    ),
  },
};

export const NoFooter: Story = {
  render: (args) => <DrawerTemplate {...args} />,
  args: {
    title: 'Information Only',
    hideBottom: true,
    children: (
      <Typography variant="B2">
        This drawer has no footer actions. Useful for purely informational
        content.
      </Typography>
    ),
  },
};
