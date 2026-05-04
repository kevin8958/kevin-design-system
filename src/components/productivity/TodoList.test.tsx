import { fireEvent, render, screen } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList', () => {
  it('renders tasks inside their matching columns', () => {
    render(
      <TodoList
        title="Sprint board"
        defaultTasks={[
          {
            id: 'task-1',
            title: 'Review QA notes',
            status: 'todo',
            priority: 'high',
          },
          {
            id: 'task-2',
            title: 'Ship migration guide',
            status: 'done',
            priority: 'low',
          },
        ]}
      />,
    );

    expect(screen.getByText('Review QA notes')).toBeInTheDocument();
    expect(screen.getByText('Ship migration guide')).toBeInTheDocument();
    expect(screen.getByText('Sprint board')).toBeInTheDocument();
  });

  it('creates a new task through the editor drawer', () => {
    render(<TodoList title="Launch work" defaultTasks={[]} />);

    fireEvent.click(screen.getByRole('button', { name: /new task/i }));
    fireEvent.change(screen.getByLabelText(/task title/i), {
      target: { value: 'Publish release notes' },
    });
    fireEvent.click(screen.getByRole('button', { name: /create task/i }));

    expect(screen.getByText('Publish release notes')).toBeInTheDocument();
  });
});
