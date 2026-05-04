import type { Meta, StoryObj } from '@storybook/react-vite';
import TodoList from './TodoList';
import {
  todoListDemoTasks,
  todoListPreviewColumns,
  todoListPreviewTasks,
} from '@/pages/components/productivity/todoList/todoListDemo';

const meta: Meta<typeof TodoList> = {
  title: 'Components/Productivity/TodoList',
  component: TodoList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    compact: { control: 'boolean' },
    loading: { control: 'boolean' },
    showSummary: { control: 'boolean' },
    allowCreate: { control: 'boolean' },
    allowEdit: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TodoList>;

export const Default: Story = {
  args: {
    title: 'Release prep board',
    description: 'Coordinate launch work across design, QA, and support.',
    defaultTasks: todoListDemoTasks,
  },
};

export const Compact: Story = {
  args: {
    title: 'Embedded board',
    description: 'A tighter layout for dashboards and overview pages.',
    defaultTasks: todoListDemoTasks,
    compact: true,
  },
};

export const Loading: Story = {
  args: {
    title: 'Loading board',
    loading: true,
  },
};

export const CustomColumns: Story = {
  args: {
    title: 'Personal sprint',
    description: 'Trim the board down when a simpler three-stage flow is enough.',
    columns: todoListPreviewColumns,
    defaultTasks: todoListPreviewTasks,
    allowCreate: false,
    showSummary: false,
  },
};
