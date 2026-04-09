import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  LuBell,
  LuHouse,
  LuSearch,
  LuUserRound,
} from 'react-icons/lu';
import BottomNavigation from './BottomNavigation';

const items = [
  { id: 'home', label: 'Home', icon: <LuHouse /> },
  { id: 'search', label: 'Search', icon: <LuSearch /> },
  { id: 'alerts', label: 'Alerts', icon: <LuBell />, badge: 3 },
  { id: 'profile', label: 'Profile', icon: <LuUserRound /> },
];

const meta = {
  title: 'Components/Mobile/BottomNavigation',
  component: BottomNavigation,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BottomNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items,
    value: 'home',
  },
  render: () => {
    const [value, setValue] = useState('home');

    return (
      <div className="w-[320px] rounded-[28px] border border-neutral-200 bg-neutral-50 p-3 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="flex h-[520px] flex-col overflow-hidden rounded-[22px] border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
          <div className="flex-1 px-4 py-5 text-sm text-neutral-500 dark:text-neutral-400">
            Mobile app content
          </div>
          <BottomNavigation items={items} value={value} onChange={setValue} />
        </div>
      </div>
    );
  },
};

export const WithDisabledItem: Story = {
  args: {
    items,
    value: 'alerts',
  },
  render: () => (
    <div className="w-[320px] rounded-[28px] border border-neutral-200 bg-neutral-50 p-3 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="flex h-[520px] flex-col overflow-hidden rounded-[22px] border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
        <div className="flex-1 px-4 py-5 text-sm text-neutral-500 dark:text-neutral-400">
          Disabled item example
        </div>
        <BottomNavigation
          items={[
            ...items.slice(0, 3),
            { ...items[3], disabled: true },
          ]}
          value="alerts"
        />
      </div>
    </div>
  ),
};
