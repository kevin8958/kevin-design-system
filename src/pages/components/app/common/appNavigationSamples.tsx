export const appStepperItems: App.AppStepperItem[] = [
  {
    id: 'details',
    label: 'Details',
    description: 'Project basics and ownership',
  },
  {
    id: 'billing',
    label: 'Billing',
    description: 'Plan and payment method',
  },
  {
    id: 'review',
    label: 'Review',
    description: 'Final check before launch',
  },
];

export const appStepperStateItems: App.AppStepperItem[] = [
  {
    id: 'details',
    label: 'Details',
    description: 'Project basics and ownership',
  },
  {
    id: 'billing',
    label: 'Billing',
    description: 'Plan and payment method',
  },
  {
    id: 'review',
    label: 'Review',
    description: 'Available after billing is confirmed',
    disabled: true,
  },
];

export const appTabsItems: App.AppTabsItem[] = [
  {
    id: 'overview',
    label: 'Overview',
    content: 'Summary information for the selected section.',
  },
  {
    id: 'metrics',
    label: 'Metrics',
    content: 'Charts and key numbers can appear in this tab panel.',
  },
  {
    id: 'history',
    label: 'History',
    content: 'Past events and records are grouped here.',
  },
];

export const appTabsStateItems: App.AppTabsItem[] = [
  {
    id: 'details',
    label: 'Details',
    content: 'Details panel content.',
  },
  {
    id: 'members',
    label: 'Members',
    content: 'Members panel content.',
  },
  {
    id: 'billing',
    label: 'Billing',
    content: 'Billing panel content.',
    disabled: true,
  },
];

export const appBreadcrumbItems: App.AppBreadcrumbItem[] = [
  { label: 'Components' },
  { label: 'Navigation' },
  { label: 'Breadcrumb', current: true },
];

export const appBreadcrumbLongItems: App.AppBreadcrumbItem[] = [
  { label: 'Home' },
  { label: 'Workspace' },
  { label: 'Design System' },
  { label: 'Navigation' },
  { label: 'Breadcrumb', current: true },
];
