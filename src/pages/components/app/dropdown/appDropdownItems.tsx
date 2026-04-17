export const groupedItems: App.DropdownItem[] = [
  {
    type: 'group',
    id: 'views',
    label: 'Views',
    items: [
      { type: 'item', id: 'board', label: 'Board' },
      { type: 'item', id: 'list', label: 'List' },
      { type: 'item', id: 'calendar', label: 'Calendar' },
    ],
  },
  {
    type: 'group',
    id: 'actions',
    label: 'Actions',
    items: [
      { type: 'item', id: 'share', label: 'Share' },
      { type: 'item', id: 'duplicate', label: 'Duplicate' },
    ],
  },
];

export const dangerItems: App.DropdownItem[] = [
  { type: 'item', id: 'rename', label: 'Rename' },
  { type: 'item', id: 'archive', label: 'Archive' },
  { type: 'item', id: 'delete', label: 'Delete', danger: true },
];

export const submenuItems: App.DropdownItem[] = [
  { type: 'item', id: 'profile', label: 'Profile' },
  {
    type: 'submenu',
    id: 'notifications',
    label: 'Notifications',
    items: [
      { type: 'item', id: 'all', label: 'All activity' },
      { type: 'item', id: 'mentions', label: 'Mentions only' },
      { type: 'item', id: 'none', label: 'Mute thread' },
    ],
  },
  { type: 'item', id: 'settings', label: 'Settings' },
];

export const widthItems: App.DropdownItem[] = [
  { type: 'item', id: 'edit', label: 'Edit workspace' },
  { type: 'item', id: 'invite', label: 'Invite teammates' },
  { type: 'item', id: 'export', label: 'Export reports' },
];
