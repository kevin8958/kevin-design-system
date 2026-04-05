import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import Pagination from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    totalPages: { control: 'number' },
    currentPage: { control: 'number' },
    siblingCount: { control: 'number' },
    disabled: { control: 'boolean' },
    onPageChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

const InteractivePagination = (args: Navigation.PaginationProps) => {
  const [page, setPage] = useState(args.currentPage);

  return (
    <Pagination
      {...args}
      currentPage={page}
      onPageChange={(nextPage) => {
        setPage(nextPage);
        args.onPageChange?.(nextPage);
      }}
    />
  );
};

export const Default: Story = {
  render: (args) => <InteractivePagination {...args} />,
  args: {
    currentPage: 3,
    totalPages: 8,
    siblingCount: 1,
  },
};

export const LongRange: Story = {
  render: (args) => <InteractivePagination {...args} />,
  args: {
    currentPage: 10,
    totalPages: 20,
    siblingCount: 1,
  },
};

export const Disabled: Story = {
  args: {
    currentPage: 2,
    totalPages: 5,
    disabled: true,
  },
};
