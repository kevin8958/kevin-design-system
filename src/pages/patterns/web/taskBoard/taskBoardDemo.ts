export const taskBoardDemoTasks: Productivity.TodoTask[] = [
  {
    id: 'task-1',
    title: 'Review launch copy with marketing',
    description:
      'Tighten the hero language and align the value proposition with the campaign landing page.',
    status: 'backlog',
    priority: 'medium',
    assignee: 'Avery Kim',
    dueDate: '2026-04-30',
    tags: ['Copy', 'Launch'],
  },
  {
    id: 'task-2',
    title: 'Draft release note checklist',
    description:
      'Summarize shipped improvements and note rollback steps for support.',
    status: 'todo',
    priority: 'high',
    assignee: 'Mina Park',
    dueDate: '2026-04-29',
    tags: ['Docs', 'Ops'],
  },
  {
    id: 'task-3',
    title: 'QA regression on account settings',
    description:
      'Confirm save, cancel, and validation states after the new settings layout landed.',
    status: 'inProgress',
    priority: 'high',
    assignee: 'Jordan Lee',
    dueDate: '2026-04-28',
    tags: ['QA'],
  },
  {
    id: 'task-4',
    title: 'Collect sign-off from support team',
    description: 'Share the final workflow and confirm macros are updated.',
    status: 'review',
    priority: 'medium',
    assignee: 'Noah Chen',
    dueDate: '2026-05-01',
    tags: ['Support'],
  },
  {
    id: 'task-5',
    title: 'Publish migration guide',
    description: 'Ship the final setup notes for customers upgrading this week.',
    status: 'done',
    priority: 'low',
    assignee: 'Ella Song',
    dueDate: '2026-04-25',
    tags: ['Guide'],
  },
];

export const taskBoardPreviewColumns: Productivity.TodoColumn[] = [
  { id: 'todo', label: 'Todo', color: 'primary' },
  { id: 'inProgress', label: 'In Progress', color: 'info' },
  { id: 'done', label: 'Done', color: 'success' },
];

export const taskBoardPreviewTasks: Productivity.TodoTask[] = [
  {
    id: 'preview-1',
    title: 'Write release checklist',
    status: 'todo',
    priority: 'high',
    assignee: 'MK',
    dueDate: '2026-04-29',
    tags: ['Launch'],
  },
  {
    id: 'preview-2',
    title: 'Align support handoff',
    status: 'inProgress',
    priority: 'medium',
    assignee: 'JL',
    dueDate: '2026-05-01',
    tags: ['Ops'],
  },
  {
    id: 'preview-3',
    title: 'Ship migration guide',
    status: 'done',
    priority: 'low',
    assignee: 'ES',
    dueDate: '2026-04-25',
    tags: ['Docs'],
  },
];
