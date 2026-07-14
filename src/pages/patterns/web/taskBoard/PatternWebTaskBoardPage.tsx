'use client';

import { useState } from 'react';
import ButtonGroup from '@/components/action/ButtonGroup';
import TodoList from '@/components/productivity/TodoList';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Select from '@/components/input/Select';
import SimpleTable from '@/components/data/SimpleTable';
import CodeExample from '@/components/interaction/CodeExample';
import { propsColumn } from '@/constants/common';
import PatternDocsPageShell from '@/pages/patterns/common/PatternDocsPageShell';
import PatternGuideSection from '@/pages/patterns/common/PatternGuideSection';
import {
  taskBoardDemoTasks,
  taskBoardPreviewColumns,
  taskBoardPreviewTasks,
} from './taskBoardDemo';

const defaultValues = {
  Density: 'comfortable',
  Summary: 'on',
  Editing: 'enabled',
} as const;

type DensityValue = 'comfortable' | 'compact';
type SummaryValue = 'on' | 'off';
type EditingValue = 'enabled' | 'readonly';

const formatOptionLabel = (value: string) =>
  value
    .split(/(?=[A-Z])|-/)
    .join(' ')
    .replace(/\b\w/g, (character) => character.toUpperCase());

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

const TaskBoardPreviewShell = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full overflow-x-auto">
    <div className="min-w-[1080px]">{children}</div>
  </div>
);

const compositionColumns = [
  { label: 'Component', key: 'property' },
  { label: 'Role', key: 'type' },
  { label: 'Why It Matters', key: 'description' },
];

const compositionRows = [
  {
    id: '1',
    property: 'Drawer',
    type: 'Task editor',
    description:
      'Keeps create/edit context anchored to the board instead of navigating away from in-flight work.',
  },
  {
    id: '2',
    property: 'Checkbox / Badge / Tag',
    type: 'Status signals',
    description:
      'Surfaces completion, priority, and labels at a glance so ownership stays visible across the team.',
  },
  {
    id: '3',
    property: 'Avatar',
    type: 'Ownership',
    description: 'Ties each task to a clear owner without adding another lookup step.',
  },
  {
    id: '4',
    property: 'EmptyState / Skeleton',
    type: 'Loading & empty states',
    description:
      'Keeps the board legible while data loads or before the first task exists.',
  },
];

const TaskBoardControllerGuide = ({
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
}) => (
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

const TaskBoardLayoutGuide = ({
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
    <PatternGuideSection
      title="Board Layout"
      description="A kanban-style task board for coordinating in-flight work, ownership, and status across a shared workspace. Status columns, lightweight task cards, and inline movement between stages keep the whole team looking at the same source of truth."
      example={
        <CodeExample code={exampleCode} className="flex-1" maxHeight={980}>
          <TaskBoardPreviewShell>
            <TodoList
              title="Release prep board"
              description="Coordinate launch work across design, QA, and support."
              defaultTasks={taskBoardDemoTasks}
              compact={compact}
              showSummary={showSummary}
              allowCreate={allowEdit}
              allowEdit={allowEdit}
            />
          </TaskBoardPreviewShell>
        </CodeExample>
      }
    />
  );
};

const TaskBoardStateGuide = () => {
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
    <PatternGuideSection
      title="States"
      description="Use loading, empty, and read-only variants when the board is still fetching data, has no work yet, or needs to be shared as a status surface without editing affordances."
      example={
        <CodeExample code={exampleCode} className="flex-1" maxHeight={1600}>
          <FlexWrapper direction="col" items="start" gap={6} classes="w-full">
            <TaskBoardPreviewShell>
              <TodoList title="Loading board" loading />
            </TaskBoardPreviewShell>
            <TaskBoardPreviewShell>
              <TodoList
                title="Empty board"
                defaultTasks={[]}
                emptyTitle="No launch tasks yet"
                emptyDescription="Add the first task to seed the workflow."
              />
            </TaskBoardPreviewShell>
            <TaskBoardPreviewShell>
              <TodoList
                title="Read-only board"
                description="Share delivery status without exposing task editing."
                defaultTasks={taskBoardDemoTasks}
                allowCreate={false}
                allowEdit={false}
                showSummary={false}
              />
            </TaskBoardPreviewShell>
          </FlexWrapper>
        </CodeExample>
      }
    />
  );
};

const TaskBoardCustomColumnsGuide = () => {
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
    <PatternGuideSection
      title="Custom Columns"
      description="Swap in a narrower set of columns for smaller team rituals or personal planning flows while keeping the same task-card language."
      example={
        <CodeExample code={exampleCode} className="flex-1" maxHeight={820}>
          <div className="w-full">
            <TodoList
              title="Personal sprint"
              description="Trim the board down when a simpler three-stage flow is enough."
              columns={taskBoardPreviewColumns}
              defaultTasks={taskBoardPreviewTasks}
              allowCreate={false}
              showSummary={false}
            />
          </div>
        </CodeExample>
      }
    />
  );
};

export default function PatternWebTaskBoardPage() {
  const [density, setDensity] = useState<DensityValue>('comfortable');
  const [summary, setSummary] = useState<SummaryValue>('on');
  const [editing, setEditing] = useState<EditingValue>('enabled');

  return (
    <PatternDocsPageShell
      platform="web"
      categoryId="collaboration"
      categoryLabel="Collaboration"
      patternId="task-board"
      title="Task Board"
      description="Kanban-style task board pattern for coordinating in-flight work, ownership, and status across a shared workspace."
    >
      <div className="w-full rounded-[28px] border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/70">
        <FlexWrapper direction="col" items="start" gap={4} classes="w-full">
          <Typography variant="H4">Controller</Typography>
          <Typography
            variant="B1"
            classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
          >
            Adjust density, summary visibility, and editing affordances to see
            how the board adapts to different coordination needs.
          </Typography>

          <TaskBoardControllerGuide
            density={density}
            summary={summary}
            editing={editing}
            onDensityChange={setDensity}
            onSummaryChange={setSummary}
            onEditingChange={setEditing}
          />
        </FlexWrapper>
      </div>

      <TaskBoardLayoutGuide density={density} summary={summary} editing={editing} />
      <TaskBoardStateGuide />
      <TaskBoardCustomColumnsGuide />

      <div className="w-full rounded-[28px] border border-dashed border-primary-200 bg-primary-50/50 p-6 dark:border-primary-400/20 dark:bg-primary-400/5">
        <FlexWrapper direction="col" items="start" gap={3}>
          <Typography variant="H4">Pattern Checklist</Typography>
          <Typography
            variant="B1"
            classes="!font-normal !text-neutral-700 dark:!text-neutral-300"
          >
            Keep column count small enough to scan without horizontal
            scrolling on a laptop screen, default new tasks to the stage the
            team actually starts work in, and offer a read-only mode before
            exposing full edit access to stakeholders outside the team.
          </Typography>
        </FlexWrapper>
      </div>

      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">Included Components</Typography>
        <SimpleTable columns={compositionColumns} data={compositionRows} />
      </FlexWrapper>

      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">Props</Typography>
        <SimpleTable columns={propsColumn} data={propsData} />
      </FlexWrapper>
    </PatternDocsPageShell>
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
