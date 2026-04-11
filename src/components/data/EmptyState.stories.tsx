import type { Meta, StoryObj } from '@storybook/react-vite';
import { LuFolderSearch } from 'react-icons/lu';
import Button from '@/components/action/Button';
import EmptyState from './EmptyState';

const meta: Meta<typeof EmptyState> = {
  title: 'Components/Data Display/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: 'No saved segments yet',
    description: 'Create your first customer segment to start tracking campaign performance.',
    icon: <LuFolderSearch size={24} />,
    size: 'md',
    primaryAction: <Button size="sm">Create Segment</Button>,
    secondaryAction: (
      <Button variant="outline" color="neutral" size="sm">
        Learn More
      </Button>
    ),
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex w-full max-w-[720px] flex-col gap-6">
      <EmptyState title="Small State" description="Compact inline message." size="sm" />
      <EmptyState title="Medium State" description="Balanced default layout." size="md" />
      <EmptyState title="Large State" description="Roomier layout for full-page empty states." size="lg" />
    </div>
  ),
};
