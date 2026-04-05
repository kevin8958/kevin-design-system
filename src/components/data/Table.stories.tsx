import type { Meta, StoryObj } from '@storybook/react-vite';
import Table from './Table';

const columns = [
  { label: 'Name', key: 'name' },
  { label: 'Role', key: 'role' },
  { label: 'Status', key: 'status' },
];

const data = [
  {
    id: '1',
    name: 'Alice Kim',
    role: 'Designer',
    status: 'Active',
  },
  {
    id: '2',
    name: 'Bob Lee',
    role: 'Engineer',
    status: 'Review',
  },
  {
    id: '3',
    name: 'Charlie Park',
    role: 'PM',
    status: 'Offline',
  },
];

const meta: Meta<typeof Table> = {
  title: 'Components/Data Display/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    columns,
    data,
  },
};
