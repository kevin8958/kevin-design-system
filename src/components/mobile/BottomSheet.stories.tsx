import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from '@/components/action/Button';
import FlexWrapper from '@/components/layout/FlexWrapper';
import BottomSheet from './BottomSheet';

const meta = {
  title: 'Components/Mobile/BottomSheet',
  component: BottomSheet,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
  },
  render: () => {
    const [open, setOpen] = useState(true);

    return (
      <div className="relative h-[640px] w-[320px] overflow-hidden rounded-[28px] border border-neutral-200 bg-neutral-50 p-0 dark:border-neutral-800 dark:bg-neutral-950">
        <FlexWrapper direction="col" classes="h-full">
          <div className="flex-1 p-4">
            <Button onClick={() => setOpen(true)}>Open sheet</Button>
          </div>
          <BottomSheet
            isOpen={open}
            onClose={() => setOpen(false)}
            title="Filter results"
            description="Adjust the list without leaving the current screen."
            contained
            footer={
              <FlexWrapper justify="between">
                <Button variant="clear" color="neutral" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setOpen(false)}>Apply</Button>
              </FlexWrapper>
            }
          >
            <div className="space-y-3 py-2 text-sm">
              <div className="rounded-2xl bg-neutral-100 p-4 dark:bg-neutral-900">
                Status
              </div>
              <div className="rounded-2xl bg-neutral-100 p-4 dark:bg-neutral-900">
                Date range
              </div>
              <div className="rounded-2xl bg-neutral-100 p-4 dark:bg-neutral-900">
                Owner
              </div>
            </div>
          </BottomSheet>
        </FlexWrapper>
      </div>
    );
  },
};

export const FullHeight: Story = {
  args: {
    isOpen: true,
    size: 'full',
  },
  render: () => (
    <div className="relative h-[640px] w-[320px] overflow-hidden rounded-[28px] border border-neutral-200 bg-neutral-50 p-0 dark:border-neutral-800 dark:bg-neutral-950">
      <BottomSheet
        isOpen
        title="Saved items"
        description="Review your collection in a full-height sheet."
        size="full"
        contained
      >
        <div className="space-y-3 py-2 text-sm">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl bg-neutral-100 p-4 dark:bg-neutral-900"
            >
              Item {index + 1}
            </div>
          ))}
        </div>
      </BottomSheet>
    </div>
  ),
};
