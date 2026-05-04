namespace Productivity {
  type TodoStatus = 'backlog' | 'todo' | 'inProgress' | 'review' | 'done';
  type TodoPriority = 'low' | 'medium' | 'high';

  type TodoTask = {
    id: string;
    title: string;
    description?: string;
    status?: TodoStatus;
    priority?: TodoPriority;
    assignee?: string;
    dueDate?: string;
    tags?: string[];
  };

  type TodoColumn = {
    id: TodoStatus;
    label: string;
    description?: string;
    color?: Action.ButtonColor;
  };

  interface TodoListProps {
    title?: string;
    description?: string;
    tasks?: TodoTask[];
    defaultTasks?: TodoTask[];
    columns?: TodoColumn[];
    loading?: boolean;
    compact?: boolean;
    showSummary?: boolean;
    allowCreate?: boolean;
    allowEdit?: boolean;
    defaultStatus?: TodoStatus;
    emptyTitle?: string;
    emptyDescription?: string;
    classes?: string;
    onTasksChange?: (tasks: TodoTask[]) => void;
  }
}
