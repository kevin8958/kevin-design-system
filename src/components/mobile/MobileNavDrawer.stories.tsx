import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from '@/components/action/Button';
import FlexWrapper from '@/components/layout/FlexWrapper';
import {
  LuBell,
  LuHouse,
  LuMenu,
  LuSettings2,
  LuUserRound,
} from 'react-icons/lu';
import NavDrawer from './MobileNavDrawer';

const meta = {
  title: 'Components/Mobile/NavDrawer',
  component: NavDrawer,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof NavDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  { id: 'home', label: 'Home', description: 'Overview and highlights', icon: <LuHouse />, active: true },
  { id: 'activity', label: 'Activity', description: 'Recent actions and updates', icon: <LuBell />, badge: 8 },
  { id: 'settings', label: 'Settings', description: 'Team preferences', icon: <LuSettings2 /> },
  { id: 'profile', label: 'Profile', description: 'Account and security', icon: <LuUserRound /> },
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
          <Button
            variant="clear"
            color="neutral"
            size="sm"
            shape="circle"
            onClick={() => setOpen(true)}
          >
            <LuMenu />
          </Button>
        </div>
        <NavDrawer
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Workspace"
          subtitle="Open sections quickly"
          items={items}
          contained
          footer={
            <FlexWrapper direction="col" items="start" gap={2}>
              <Button variant="outline" color="neutral" fullWidth>
                Switch workspace
              </Button>
              <Button variant="clear" color="danger">
                Sign out
              </Button>
            </FlexWrapper>
          }
        />
      </div>
    );
  },
};
