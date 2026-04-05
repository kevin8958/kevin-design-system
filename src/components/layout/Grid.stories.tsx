import type { Meta, StoryObj } from '@storybook/react-vite';
import Grid from './Grid';

const Cell = ({ label }: { label: string }) => (
  <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-6 text-center text-sm font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
    {label}
  </div>
);

const meta: Meta<typeof Grid> = {
  title: 'Components/Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    cols: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
    },
    gap: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  render: (args) => (
    <Grid {...args}>
      <Cell label="Item 1" />
      <Cell label="Item 2" />
      <Cell label="Item 3" />
      <Cell label="Item 4" />
      <Cell label="Item 5" />
      <Cell label="Item 6" />
    </Grid>
  ),
  args: {
    cols: 3,
    gap: 4,
  },
};
