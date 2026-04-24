export const actionSheetItems: App.AppActionSheetItem[] = [
  {
    id: 'share',
    label: 'Share',
    description: 'Send this item to another app',
    icon: '↗',
  },
  {
    id: 'notify',
    label: 'Notify me',
    description: 'Create a reminder for later',
    icon: '!',
  },
  {
    id: 'delete',
    label: 'Delete',
    description: 'Remove this item permanently',
    icon: '×',
    tone: 'danger',
  },
];

export const actionSheetStateItems: App.AppActionSheetItem[] = [
  {
    id: 'share',
    label: 'Share',
    description: 'Send this item to another app',
    icon: '↗',
  },
  {
    id: 'notify',
    label: 'Notify me',
    description: 'Create a reminder for later',
    icon: '!',
    disabled: true,
  },
  {
    id: 'delete',
    label: 'Delete',
    description: 'Remove this item permanently',
    icon: '×',
    tone: 'danger',
  },
];
