'use client';

import { useState } from 'react';
import { LuExternalLink } from 'react-icons/lu';
import Button from '@/components/action/Button';
import ButtonGroup from '@/components/action/ButtonGroup';
import TodoList from '@/components/productivity/TodoList';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Select from '@/components/input/Select';
import SimpleTable from '@/components/data/SimpleTable';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import {
  todoListDemoTasks,
  todoListPreviewColumns,
  todoListPreviewTasks,
} from './todoListDemo';

const defaultValues = {
  Density: 'comfortable',
  Summary: 'on',
  Editing: 'enabled',
} as const;

type DensityValue = 'comfortable' | 'compact';
type SummaryValue = 'on' | 'off';
type EditingValue = 'enabled' | 'readonly';

const renderControlRow = <T extends string>(
  label: keyof typeof defaultValues,
  options: T[],
  value: T,
  onChange: (next: T) => void,
) => (
  <FlexWrapper
    items="start"
    gap={3}
    classes="w-full flex-col md:flex-row md:items-center"
  >
    <Typography
      variant="C1"
      classes="uppercase font-mono opacity-60 md:w-[88px] md:shrink-0 md:pt-0.5"
    >
      {label}
    </Typography>
    <div className="hidden md:block">
      <ButtonGroup
        size="sm"
        color="neutral"
        items={options.map((option) => ({
          label:
            option === defaultValues[label]
              ? `${formatOptionLabel(option)} *`
              : formatOptionLabel(option),
          value: option,
        }))}
        value={value}
        onChange={(next) => onChange(next as T)}
      />
    </div>
    <div className="w-full md:hidden">
      <Select
        size="sm"
        options={options.map((option) => ({
          label:
            option === defaultValues[label]
              ? `${formatOptionLabel(option)} *`
              : formatOptionLabel(option),
          value: option,
        }))}
        value={value}
        onChange={(next) => onChange(next as T)}
      />
    </div>
  </FlexWrapper>
);

const formatOptionLabel = (value: string) =>
  value
    .split(/(?=[A-Z])|-/)
    .join(' ')
    .replace(/\b\w/g, (character) => character.toUpperCase());

const TodoListPreviewShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[1080px]">{children}</div>
    </div>
  );
};

const TodoListControllerGuide = ({
  density,
  summary,
  editing,
  onDensityChange,
  onSummaryChange,
  onEditingChange,
}: {
  density: DensityValue;
  summary: SummaryValue;
  editing: EditingValue;
  onDensityChange: (next: DensityValue) => void;
  onSummaryChange: (next: SummaryValue) => void;
  onEditingChange: (next: EditingValue) => void;
}) => {
  return (
    <FlexWrapper direction="col" items="start" gap={5}>
      <Typography variant="C1">* : Default</Typography>
      {renderControlRow(
        'Density',
        ['comfortable', 'compact'],
        density,
        onDensityChange,
      )}
      {renderControlRow('Summary', ['on', 'off'], summary, onSummaryChange)}
      {renderControlRow(
        'Editing',
        ['enabled', 'readonly'],
        editing,
        onEditingChange,
      )}
    </FlexWrapper>
  );
};

const TodoListLayoutGuide = ({
  density,
  summary,
  editing,
}: {
  density: DensityValue;
  summary: SummaryValue;
  editing: EditingValue;
}) => {
  const compact = density === 'compact';
  const showSummary = summary === 'on';
  const allowEdit = editing === 'enabled';

  const exampleCode = `const tasks = [
  {
    id: 'task-1',
    title: 'Review launch copy with marketing',
    status: 'backlog',
    priority: 'medium',
    assignee: 'Avery Kim',
    dueDate: '2026-04-30',
    tags: ['Copy', 'Launch'],
  },
  // ...
];

<TodoList
  title="Release prep board"
  description="Coordinate launch work across design, QA, and support."
  defaultTasks={tasks}
  compact={${compact}}
  showSummary={${showSummary}}
  allowCreate={${allowEdit}}
  allowEdit={${allowEdit}}
/>`;

  return (
    <GuideSection
      title="Board Layout"
      description="TodoList turns the original task-board idea into a reusable design-system surface with status columns, lightweight task cards, and inline movement between stages."
      example={
        <CodeExample code={exampleCode} className="flex-1" maxHeight={980}>
          <TodoListPreviewShell>
            <TodoList
              title="Release prep board"
              description="Coordinate launch work across design, QA, and support."
              defaultTasks={todoListDemoTasks}
              compact={compact}
              showSummary={showSummary}
              allowCreate={allowEdit}
              allowEdit={allowEdit}
            />
          </TodoListPreviewShell>
        </CodeExample>
      }
    />
  );
};

const TodoListStateGuide = () => {
  const exampleCode = `<TodoList title="Loading board" loading />

<TodoList
  title="Empty board"
  defaultTasks={[]}
  emptyTitle="No launch tasks yet"
  emptyDescription="Add the first task to seed the workflow."
/>

<TodoList
  title="Read-only board"
  defaultTasks={tasks}
  allowCreate={false}
  allowEdit={false}
  showSummary={false}
/>`;

  return (
    <GuideSection
      title="States"
      description="Use loading, empty, and read-only variants when the board is still fetching data, has no work yet, or needs to be shared as a status surface without editing affordances."
      example={
        <CodeExample code={exampleCode} className="flex-1" maxHeight={1600}>
          <FlexWrapper direction="col" items="start" gap={6} classes="w-full">
            <TodoListPreviewShell>
              <TodoList title="Loading board" loading />
            </TodoListPreviewShell>
            <TodoListPreviewShell>
              <TodoList
                title="Empty board"
                defaultTasks={[]}
                emptyTitle="No launch tasks yet"
                emptyDescription="Add the first task to seed the workflow."
              />
            </TodoListPreviewShell>
            <TodoListPreviewShell>
              <TodoList
                title="Read-only board"
                description="Share delivery status without exposing task editing."
                defaultTasks={todoListDemoTasks}
                allowCreate={false}
                allowEdit={false}
                showSummary={false}
              />
            </TodoListPreviewShell>
          </FlexWrapper>
        </CodeExample>
      }
    />
  );
};

const TodoListCustomColumnsGuide = () => {
  const exampleCode = `const columns = [
  { id: 'todo', label: 'Todo', color: 'primary' },
  { id: 'inProgress', label: 'In Progress', color: 'info' },
  { id: 'done', label: 'Done', color: 'success' },
];

<TodoList
  title="Personal sprint"
  description="Trim the board down when a simpler three-stage flow is enough."
  columns={columns}
  defaultTasks={tasks}
  allowCreate={false}
  showSummary={false}
/>`;

  return (
    <GuideSection
      title="Custom Columns"
      description="Swap in a narrower set of columns for smaller team rituals or personal planning flows while keeping the same task-card language."
      example={
        <CodeExample code={exampleCode} className="flex-1" maxHeight={820}>
          <div className="w-full">
            <TodoList
              title="Personal sprint"
              description="Trim the board down when a simpler three-stage flow is enough."
              columns={todoListPreviewColumns}
              defaultTasks={todoListPreviewTasks}
              allowCreate={false}
              showSummary={false}
            />
          </div>
        </CodeExample>
      }
    />
  );
};

export default function ComponentTodoListPage() {
  const [density, setDensity] = useState<DensityValue>('comfortable');
  const [summary, setSummary] = useState<SummaryValue>('on');
  const [editing, setEditing] = useState<EditingValue>('enabled');

  const breadcrumbItems = [
    { label: 'Components', href: '/components' },
    { label: 'Productivity', href: '/components/productivity' },
    { label: 'TodoList', href: '/components/productivity/todoList' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-productivity-todolist--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">TodoList</Typography>
            <Button
              classes="mb-2"
              variant="outline"
              color="neutral"
              size="sm"
              icon={<LuExternalLink size={14} />}
              iconPosition="right"
              onClick={handleOpenStorybook}
            >
              Storybook
            </Button>
          </FlexWrapper>

          <TodoListControllerGuide
            density={density}
            summary={summary}
            editing={editing}
            onDensityChange={setDensity}
            onSummaryChange={setSummary}
            onEditingChange={setEditing}
          />
          <TodoListLayoutGuide
            density={density}
            summary={summary}
            editing={editing}
          />
          <TodoListStateGuide />
          <TodoListCustomColumnsGuide />

          <FlexWrapper classes="w-full" items="start" direction="col">
            <Typography variant="H3">Props</Typography>
            <SimpleTable columns={propsColumn} data={propsData} />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
}

const propsData = [
  {
    id: '1',
    property: 'title',
    type: 'string',
    default: "'Task board'",
    description: 'Heading displayed above the board.',
  },
  {
    id: '2',
    property: 'description',
    type: 'string',
    default: "'Track work across a lightweight kanban-style todo flow.'",
    description: 'Supporting copy displayed in the header area.',
  },
  {
    id: '3',
    property: 'tasks',
    type: 'TodoTask[]',
    default: '[]',
    description: 'Controlled task list for externally managed board state.',
  },
  {
    id: '4',
    property: 'defaultTasks',
    type: 'TodoTask[]',
    default: '[]',
    description: 'Initial task list when using the component in uncontrolled mode.',
  },
  {
    id: '5',
    property: 'columns',
    type: 'TodoColumn[]',
    default: '5 status columns',
    description: 'Optional column definition override for narrower or custom workflows.',
  },
  {
    id: '6',
    property: 'loading',
    type: 'boolean',
    default: 'false',
    description: 'Shows a skeleton board while task data is loading.',
  },
  {
    id: '7',
    property: 'compact',
    type: 'boolean',
    default: 'false',
    description: 'Reduces card density for tighter dashboards or embedded layouts.',
  },
  {
    id: '8',
    property: 'showSummary',
    type: 'boolean',
    default: 'true',
    description: 'Displays the summary metrics row above the board.',
  },
  {
    id: '9',
    property: 'allowCreate',
    type: 'boolean',
    default: 'true',
    description: 'Shows create affordances in the header and each column.',
  },
  {
    id: '10',
    property: 'allowEdit',
    type: 'boolean',
    default: 'true',
    description: 'Enables editing, deletion, and stage movement actions on cards.',
  },
  {
    id: '11',
    property: 'defaultStatus',
    type: "'backlog' | 'todo' | 'inProgress' | 'review' | 'done'",
    default: "'todo'",
    description: 'Fallback status used for new items and tasks without an explicit status.',
  },
  {
    id: '12',
    property: 'onTasksChange',
    type: '(tasks: TodoTask[]) => void',
    default: '',
    description: 'Called whenever tasks are created, edited, deleted, or moved.',
  },
];
