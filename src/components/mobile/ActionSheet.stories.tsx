import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { LuBell, LuShare2, LuTrash2 } from 'react-icons/lu';
import Button from '@/components/action/Button';
import ActionSheet from './ActionSheet';

const meta = {
  title: 'Components/Action/ActionSheet',
  component: ActionSheet,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ActionSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

const items: Action.ActionSheetItem[] = [
  { id: 'share', label: 'Share', description: 'Send this item to another app', icon: <LuShare2 /> },
  { id: 'notify', label: 'Notify me', description: 'Create a reminder for later', icon: <LuBell /> },
  { id: 'delete', label: 'Delete', description: 'Remove this item permanently', icon: <LuTrash2 />, tone: 'danger' },
];

export const Default: Story = {
  args: {
    isOpen: true,
    items,
  },
  render: () => {
    const [open, setOpen] = useState(true);

    return (
      <div className="relative h-[640px] w-[320px] overflow-hidden rounded-[28px] border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="p-4">
          <Button onClick={() => setOpen(true)}>Open ActionSheet</Button>
        </div>
        <ActionSheet
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Quick actions"
          description="Choose the next action without leaving the current screen."
          items={items}
          contained
        />
      </div>
    );
  },
};
