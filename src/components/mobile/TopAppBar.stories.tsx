import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from '@/components/action/Button';
import { LuArrowLeft, LuMenu, LuSearch, LuUserRound } from 'react-icons/lu';
import TopAppBar from './TopAppBar';

const meta = {
  title: 'Components/Mobile/TopAppBar',
  component: TopAppBar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TopAppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Dashboard',
    subtitle: 'April overview',
    leading: (
      <Button variant="clear" color="neutral" size="sm" shape="circle">
        <LuArrowLeft size={18} />
      </Button>
    ),
    actions: (
      <>
        <Button variant="clear" color="neutral" size="sm" shape="circle">
          <LuSearch size={18} />
        </Button>
        <Button variant="clear" color="neutral" size="sm" shape="circle">
          <LuUserRound size={18} />
        </Button>
      </>
    ),
  },
  render: (args) => (
    <div className="w-[320px] overflow-hidden rounded-[22px] border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <TopAppBar {...args} />
    </div>
  ),
};

export const CenterAligned: Story = {
  args: {
    title: 'Explore',
    align: 'center',
    leading: (
      <Button variant="clear" color="neutral" size="sm" shape="circle">
        <LuMenu size={18} />
      </Button>
    ),
    actions: (
      <Button variant="clear" color="neutral" size="sm" shape="circle">
        <LuSearch size={18} />
      </Button>
    ),
  },
  render: (args) => (
    <div className="w-[320px] overflow-hidden rounded-[22px] border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <TopAppBar {...args} />
    </div>
  ),
};
