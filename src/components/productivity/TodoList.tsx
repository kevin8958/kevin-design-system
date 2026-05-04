import { useMemo, useState } from 'react';
import dayjs from 'dayjs';
import classNames from 'classnames';
import {
  LuCalendarDays,
  LuCheckCheck,
  LuChevronLeft,
  LuChevronRight,
  LuClipboardList,
  LuListTodo,
  LuPencilLine,
  LuPlus,
  LuTrash2,
} from 'react-icons/lu';
import Button from '@/components/action/Button';
import Drawer from '@/components/action/Drawer';
import Avatar from '@/components/data/Avatar';
import Badge from '@/components/data/Badge';
import EmptyState from '@/components/data/EmptyState';
import Tag from '@/components/data/Tag';
import Skeleton from '@/components/feedback/Skeleton';
import Checkbox from '@/components/input/Checkbox';
import Select from '@/components/input/Select';
import TextInput from '@/components/input/TextInput';
import Textarea from '@/components/input/Textarea';
import FlexWrapper from '@/components/layout/FlexWrapper';
import { cn } from '@/libs/utils';

const DEFAULT_COLUMNS: Productivity.TodoColumn[] = [
  { id: 'backlog', label: 'Backlog', color: 'neutral' },
  { id: 'todo', label: 'Todo', color: 'primary' },
  { id: 'inProgress', label: 'In Progress', color: 'info' },
  { id: 'review', label: 'Review', color: 'warning' },
  { id: 'done', label: 'Done', color: 'success' },
];

const priorityVariantMap: Record<Productivity.TodoPriority, Data.BadgeVariant> =
  {
    low: 'neutral',
    medium: 'warning',
    high: 'danger',
  };

const statusVariantMap: Record<Productivity.TodoStatus, Data.BadgeVariant> = {
  backlog: 'neutral',
  todo: 'primary',
  inProgress: 'primary',
  review: 'warning',
  done: 'success',
};

type TodoDraft = {
  id: string | null;
  title: string;
  description: string;
  status: Productivity.TodoStatus;
  priority: Productivity.TodoPriority;
  assignee: string;
  dueDate: string;
  tags: string;
};

const createDraft = (
  status: Productivity.TodoStatus,
  task?: Productivity.TodoTask,
): TodoDraft => ({
  id: task?.id ?? null,
  title: task?.title ?? '',
  description: task?.description ?? '',
  status: task?.status ?? status,
  priority: task?.priority ?? 'medium',
  assignee: task?.assignee ?? '',
  dueDate:
    task?.dueDate ?? dayjs().add(3, 'day').format('YYYY-MM-DD'),
  tags: task?.tags?.join(', ') ?? '',
});

const buildTaskId = () =>
  globalThis.crypto?.randomUUID?.() ??
  `todo-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

const formatLabel = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

const formatDueLabel = (value?: string) => {
  if (!value) return 'No due date';

  const parsed = dayjs(value);

  if (!parsed.isValid()) return value;

  return parsed.format('MMM D');
};

const isOverdue = (value?: string) => {
  if (!value) return false;

  const parsed = dayjs(value);

  if (!parsed.isValid()) return false;

  return parsed.endOf('day').isBefore(dayjs());
};

const TodoListSkeleton = ({
  columns,
  compact,
}: {
  columns: Productivity.TodoColumn[];
  compact: boolean;
}) => {
  return (
    <div className="overflow-x-auto">
      <div className="flex min-w-[1040px] gap-4 pb-2">
        {columns.map((column) => (
          <div
            key={column.id}
            className="min-w-[248px] flex-1 rounded-[24px] border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950"
          >
            <FlexWrapper justify="between" items="center" classes="mb-4">
              <Skeleton width={96} height={24} classes="rounded-full" />
              <Skeleton width={28} height={28} classes="rounded-full" />
            </FlexWrapper>

            <div className="space-y-3">
              {Array.from({ length: compact ? 2 : 3 }).map((_, index) => (
                <div
                  key={`${column.id}-${index}`}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50/80 p-4 dark:border-neutral-800 dark:bg-neutral-900/70"
                >
                  <FlexWrapper justify="between" items="start" classes="mb-3">
                    <Skeleton width={24} height={24} classes="rounded-md" />
                    <Skeleton width={56} height={22} classes="rounded-full" />
                  </FlexWrapper>
                  <Skeleton width="82%" height={14} classes="mb-2" />
                  {!compact && (
                    <>
                      <Skeleton width="100%" height={12} classes="mb-2" />
                      <Skeleton width="72%" height={12} classes="mb-4" />
                    </>
                  )}
                  <FlexWrapper justify="between" items="center">
                    <Skeleton width={68} height={22} classes="rounded-full" />
                    <Skeleton width={32} height={32} classes="rounded-full" />
                  </FlexWrapper>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TodoList = ({
  title = 'Task board',
  description = 'Track work across a lightweight kanban-style todo flow.',
  tasks,
  defaultTasks = [],
  columns: columnsProp,
  loading = false,
  compact = false,
  showSummary = true,
  allowCreate = true,
  allowEdit = true,
  defaultStatus = 'todo',
  emptyTitle = 'Nothing planned yet',
  emptyDescription = 'Create the first task to start organizing work across the board.',
  classes,
  onTasksChange,
}: Productivity.TodoListProps) => {
  const columns = useMemo(
    () => (columnsProp && columnsProp.length > 0 ? columnsProp : DEFAULT_COLUMNS),
    [columnsProp],
  );
  const isControlled = tasks !== undefined;
  const [internalTasks, setInternalTasks] = useState(defaultTasks);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editorMode, setEditorMode] = useState<'create' | 'edit'>('create');
  const [draft, setDraft] = useState<TodoDraft>(() => createDraft(defaultStatus));
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const currentTasks = useMemo(
    () => (isControlled ? tasks ?? [] : internalTasks),
    [internalTasks, isControlled, tasks],
  );

  const setTasks = (
    nextTasks:
      | Productivity.TodoTask[]
      | ((previous: Productivity.TodoTask[]) => Productivity.TodoTask[]),
  ) => {
    const resolved =
      typeof nextTasks === 'function' ? nextTasks(currentTasks) : nextTasks;

    if (!isControlled) {
      setInternalTasks(resolved);
    }

    onTasksChange?.(resolved);
  };

  const tasksByColumn = useMemo(
    () =>
      columns.reduce<Record<string, Productivity.TodoTask[]>>((accumulator, column) => {
        accumulator[column.id] = currentTasks.filter(
          (task) => (task.status ?? defaultStatus) === column.id,
        );
        return accumulator;
      }, {}),
    [columns, currentTasks, defaultStatus],
  );

  const summary = useMemo(() => {
    const openCount = currentTasks.filter((task) => task.status !== 'done').length;
    const doneCount = currentTasks.filter((task) => task.status === 'done').length;
    const dueSoonCount = currentTasks.filter((task) => {
      if (!task.dueDate || task.status === 'done') return false;

      const parsed = dayjs(task.dueDate);

      if (!parsed.isValid()) return false;

      return parsed.endOf('day').isAfter(dayjs()) && parsed.diff(dayjs(), 'day') <= 3;
    }).length;

    return [
      {
        label: 'Open',
        value: openCount,
        tone: 'neutral' as const,
        icon: <LuListTodo size={16} />,
      },
      {
        label: 'Due Soon',
        value: dueSoonCount,
        tone: 'warning' as const,
        icon: <LuCalendarDays size={16} />,
      },
      {
        label: 'Done',
        value: doneCount,
        tone: 'success' as const,
        icon: <LuCheckCheck size={16} />,
      },
    ];
  }, [currentTasks]);

  const openCreate = (status = defaultStatus) => {
    setEditorMode('create');
    setSubmitAttempted(false);
    setDraft(createDraft(status));
    setIsEditorOpen(true);
  };

  const openEdit = (task: Productivity.TodoTask) => {
    setEditorMode('edit');
    setSubmitAttempted(false);
    setDraft(createDraft(task.status ?? defaultStatus, task));
    setIsEditorOpen(true);
  };

  const handleCloseEditor = () => {
    setIsEditorOpen(false);
    setSubmitAttempted(false);
  };

  const handleSaveTask = () => {
    setSubmitAttempted(true);

    if (!draft.title.trim()) return;

    const nextTask: Productivity.TodoTask = {
      id: draft.id ?? buildTaskId(),
      title: draft.title.trim(),
      description: draft.description.trim() || undefined,
      status: draft.status,
      priority: draft.priority,
      assignee: draft.assignee.trim() || undefined,
      dueDate: draft.dueDate.trim() || undefined,
      tags: draft.tags
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean),
    };

    setTasks((previous) =>
      editorMode === 'create'
        ? [...previous, nextTask]
        : previous.map((task) => (task.id === nextTask.id ? nextTask : task)),
    );
    handleCloseEditor();
  };

  const handleDeleteTask = () => {
    if (editorMode !== 'edit' || !draft.id) return;

    setTasks((previous) => previous.filter((task) => task.id !== draft.id));
    handleCloseEditor();
  };

  const handleMoveTask = (taskId: string, direction: -1 | 1) => {
    setTasks((previous) => {
      const task = previous.find((entry) => entry.id === taskId);
      const currentIndex = columns.findIndex(
        (column) => column.id === (task?.status ?? defaultStatus),
      );

      if (!task || currentIndex < 0) return previous;

      const nextColumn = columns[currentIndex + direction];

      if (!nextColumn) return previous;

      return previous.map((entry) =>
        entry.id === taskId ? { ...entry, status: nextColumn.id } : entry,
      );
    });
  };

  const handleToggleTask = (taskId: string, checked: boolean) => {
    setTasks((previous) =>
      previous.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status:
                checked
                  ? 'done'
                  : task.status === 'done'
                    ? defaultStatus
                    : task.status,
            }
          : task,
      ),
    );
  };

  return (
    <>
      <section
        className={cn(
          'w-full rounded-[32px] border border-neutral-200 bg-linear-to-br from-white via-white to-secondary-50/50 p-5 shadow-sm dark:border-neutral-800 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900',
          classes,
        )}
      >
        <FlexWrapper
          classes="w-full flex-col gap-5"
          direction="col"
          items="start"
        >
          <FlexWrapper
            justify="between"
            items="start"
            classes="w-full flex-col gap-4 md:flex-row md:items-center"
          >
            <div className="min-w-0">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                {title}
              </h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                {description}
              </p>
            </div>

            {allowCreate && (
              <Button
                variant="contain"
                color="primary"
                size="sm"
                icon={<LuPlus size={16} />}
                onClick={() => openCreate(defaultStatus)}
              >
                New Task
              </Button>
            )}
          </FlexWrapper>

          {showSummary && !loading && (
            <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3">
              {summary.map((item) => (
                <div
                  key={item.label}
                  className={classNames(
                    'rounded-2xl border px-4 py-3',
                    item.tone === 'warning' &&
                      'border-warning/20 bg-warning/10 dark:border-warning/30 dark:bg-warning/10',
                    item.tone === 'success' &&
                      'border-success/20 bg-success/10 dark:border-success/30 dark:bg-success/10',
                    item.tone === 'neutral' &&
                      'border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900/70',
                  )}
                >
                  <FlexWrapper justify="between" items="center">
                    <span className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-200">
                      {item.icon}
                      {item.label}
                    </span>
                    <span className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                      {item.value}
                    </span>
                  </FlexWrapper>
                </div>
              ))}
            </div>
          )}

          {loading ? (
            <TodoListSkeleton columns={columns} compact={compact} />
          ) : currentTasks.length === 0 ? (
            <EmptyState
              title={emptyTitle}
              description={emptyDescription}
              icon={<LuClipboardList size={24} />}
              primaryAction={
                allowCreate ? (
                  <Button
                    size="sm"
                    color="primary"
                    onClick={() => openCreate(defaultStatus)}
                  >
                    Add First Task
                  </Button>
                ) : undefined
              }
            />
          ) : (
            <div className="w-full overflow-x-auto">
              <div className="flex min-w-[1040px] gap-4 pb-2">
                {columns.map((column, columnIndex) => (
                  <section
                    key={column.id}
                    className="flex min-w-[248px] flex-1 flex-col rounded-[24px] border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950"
                  >
                    <FlexWrapper
                      justify="between"
                      items="center"
                      classes="mb-4"
                    >
                      <div className="min-w-0">
                        <FlexWrapper items="center" gap={2}>
                          <h4 className="truncate text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                            {column.label}
                          </h4>
                          <Badge
                            label={String(tasksByColumn[column.id]?.length ?? 0)}
                            size="sm"
                            variant={statusVariantMap[column.id]}
                          />
                        </FlexWrapper>
                        {column.description && (
                          <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                            {column.description}
                          </p>
                        )}
                      </div>

                      {allowCreate && (
                        <Button
                          variant="clear"
                          color="neutral"
                          size="sm"
                          classes="!p-2"
                          aria-label={`Add task to ${column.label}`}
                          onClick={() => openCreate(column.id)}
                        >
                          <LuPlus size={16} />
                        </Button>
                      )}
                    </FlexWrapper>

                    <div className="flex flex-1 flex-col gap-3">
                      {tasksByColumn[column.id]?.length ? (
                        tasksByColumn[column.id].map((task) => (
                          <article
                            key={task.id}
                            className={classNames(
                              'rounded-2xl border border-neutral-200 bg-neutral-50/80 transition-colors dark:border-neutral-800 dark:bg-neutral-900/70',
                              compact ? 'p-3' : 'p-4',
                              isOverdue(task.dueDate) &&
                                task.status !== 'done' &&
                                'border-danger/40',
                            )}
                          >
                            <FlexWrapper
                              justify="between"
                              items="start"
                              classes="mb-3"
                            >
                              <FlexWrapper items="start" gap={3} classes="min-w-0 flex-1">
                                <Checkbox
                                  id={`todo-${task.id}`}
                                  checked={task.status === 'done'}
                                  size="sm"
                                  onChange={(data) =>
                                    handleToggleTask(task.id, data.checked)
                                  }
                                />
                                <div className="min-w-0 flex-1">
                                  <p
                                    className={classNames(
                                      'line-clamp-2 font-medium text-neutral-900 dark:text-neutral-50',
                                      compact ? 'text-sm' : 'text-[15px]',
                                      task.status === 'done' &&
                                        'text-neutral-500 line-through dark:text-neutral-500',
                                    )}
                                  >
                                    {task.title}
                                  </p>
                                  {!compact && task.description && (
                                    <p className="mt-1 line-clamp-3 text-sm text-neutral-600 dark:text-neutral-300">
                                      {task.description}
                                    </p>
                                  )}
                                </div>
                              </FlexWrapper>

                              <Badge
                                label={formatLabel(task.priority ?? 'medium')}
                                size="sm"
                                variant={
                                  priorityVariantMap[task.priority ?? 'medium']
                                }
                              />
                            </FlexWrapper>

                            {task.tags && task.tags.length > 0 && !compact && (
                              <FlexWrapper
                                classes="mb-3 flex-wrap"
                                items="center"
                                gap={2}
                              >
                                {task.tags.map((tag) => (
                                  <Tag key={`${task.id}-${tag}`} label={tag} size="sm" />
                                ))}
                              </FlexWrapper>
                            )}

                            <FlexWrapper
                              justify="between"
                              items="center"
                              classes="gap-3"
                            >
                              <FlexWrapper
                                classes="min-w-0 flex-wrap"
                                items="center"
                                gap={2}
                              >
                                <span
                                  className={classNames(
                                    'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs',
                                    isOverdue(task.dueDate) && task.status !== 'done'
                                      ? 'bg-danger/10 text-danger'
                                      : 'bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300',
                                  )}
                                >
                                  <LuCalendarDays size={12} />
                                  {formatDueLabel(task.dueDate)}
                                </span>
                                {task.assignee && (
                                  <FlexWrapper items="center" gap={2}>
                                    <Avatar name={task.assignee} size="sm" />
                                    {!compact && (
                                      <span className="max-w-[92px] truncate text-xs text-neutral-500 dark:text-neutral-400">
                                        {task.assignee}
                                      </span>
                                    )}
                                  </FlexWrapper>
                                )}
                              </FlexWrapper>

                              {allowEdit && (
                                <FlexWrapper items="center" gap={1}>
                                  <Button
                                    variant="clear"
                                    color="neutral"
                                    size="sm"
                                    classes="!p-2"
                                    disabled={columnIndex === 0}
                                    aria-label={`Move ${task.title} backward`}
                                    onClick={() => handleMoveTask(task.id, -1)}
                                  >
                                    <LuChevronLeft size={14} />
                                  </Button>
                                  <Button
                                    variant="clear"
                                    color="neutral"
                                    size="sm"
                                    classes="!p-2"
                                    disabled={columnIndex === columns.length - 1}
                                    aria-label={`Move ${task.title} forward`}
                                    onClick={() => handleMoveTask(task.id, 1)}
                                  >
                                    <LuChevronRight size={14} />
                                  </Button>
                                  <Button
                                    variant="clear"
                                    color="neutral"
                                    size="sm"
                                    classes="!p-2"
                                    aria-label={`Edit ${task.title}`}
                                    onClick={() => openEdit(task)}
                                  >
                                    <LuPencilLine size={14} />
                                  </Button>
                                </FlexWrapper>
                              )}
                            </FlexWrapper>
                          </article>
                        ))
                      ) : (
                        <div className="flex flex-1 items-center justify-center rounded-2xl border border-dashed border-neutral-200 bg-neutral-50/60 px-4 py-8 text-center dark:border-neutral-800 dark:bg-neutral-900/40">
                          <p className="text-sm text-neutral-500 dark:text-neutral-400">
                            No tasks in {column.label.toLowerCase()}.
                          </p>
                        </div>
                      )}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          )}
        </FlexWrapper>
      </section>

      <Drawer
        isOpen={isEditorOpen}
        onClose={handleCloseEditor}
        onConfirm={handleSaveTask}
        title={editorMode === 'create' ? 'Create task' : 'Edit task'}
        size="lg"
        confirmText={editorMode === 'create' ? 'Create Task' : 'Save Changes'}
        cancelText="Close"
      >
        <FlexWrapper direction="col" items="start" gap={5} classes="w-full">
          {editorMode === 'edit' && (
            <FlexWrapper justify="between" items="center" classes="w-full">
              <Badge
                label="Editing existing task"
                size="sm"
                variant="neutral"
              />
              <Button
                variant="clear"
                color="danger"
                size="sm"
                icon={<LuTrash2 size={14} />}
                onClick={handleDeleteTask}
              >
                Delete
              </Button>
            </FlexWrapper>
          )}

          <TextInput
            label="Task title"
            placeholder="What needs to happen?"
            value={draft.title}
            error={submitAttempted && !draft.title.trim()}
            errorMsg="Title is required."
            onChange={(event) =>
              setDraft((previous) => ({ ...previous, title: event.target.value }))
            }
          />

          <Textarea
            label="Description"
            placeholder="Add context, links, or handoff notes."
            value={draft.description}
            rows={5}
            onChange={(event) =>
              setDraft((previous) => ({
                ...previous,
                description: event.target.value,
              }))
            }
          />

          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
            <Select
              label="Status"
              value={draft.status}
              options={columns.map((column) => ({
                label: column.label,
                value: column.id,
              }))}
              onChange={(value) =>
                setDraft((previous) => ({
                  ...previous,
                  status: value as Productivity.TodoStatus,
                }))
              }
            />
            <Select
              label="Priority"
              value={draft.priority}
              options={[
                { label: 'Low', value: 'low' },
                { label: 'Medium', value: 'medium' },
                { label: 'High', value: 'high' },
              ]}
              onChange={(value) =>
                setDraft((previous) => ({
                  ...previous,
                  priority: value as Productivity.TodoPriority,
                }))
              }
            />
            <TextInput
              label="Assignee"
              placeholder="Name or owner"
              value={draft.assignee}
              onChange={(event) =>
                setDraft((previous) => ({
                  ...previous,
                  assignee: event.target.value,
                }))
              }
            />
            <TextInput
              label="Due date"
              placeholder="YYYY-MM-DD"
              value={draft.dueDate}
              onChange={(event) =>
                setDraft((previous) => ({
                  ...previous,
                  dueDate: event.target.value,
                }))
              }
            />
          </div>

          <TextInput
            label="Tags"
            placeholder="Design, Launch, QA"
            value={draft.tags}
            onChange={(event) =>
              setDraft((previous) => ({
                ...previous,
                tags: event.target.value,
              }))
            }
          />
        </FlexWrapper>
      </Drawer>
    </>
  );
};

export default TodoList;
