export const propsColumn = [
  { label: 'Property', key: 'property' },
  { label: 'Type', key: 'type' },
  { label: 'Default', key: 'default' },
  { label: 'Description', key: 'description' },
];

export const designSystemMenus = [
  {
    id: 'foundation',
    label: 'Foundation',
    href: null,
    items: [
      {
        id: 'colors',
        label: 'Colors',
        href: '/components/foundation/colors',
      },
      {
        id: 'typography',
        label: 'Typography',
        href: '/components/foundation/typography',
      },
      // {
      //   id: 'shadow',
      //   label: 'Shadow',
      //   href: '/components/foundation/shadow',
      // },
      // {
      //   id: 'motion',
      //   label: 'Motion',
      //   href: '/components/foundation/motion',
      // },
      // {
      //   id: 'breakpoints',
      //   label: 'Breakpoints',
      //   href: '/components/foundation/breakpoints',
      // },
    ],
  },
  {
    id: 'components',
    label: 'Components',
    href: null,
    sections: [
      {
        group: 'Action',
        items: [
          {
            id: 'button',
            label: 'Button',
            href: '/components/action/button',
          },
          {
            id: 'buttongroup',
            label: 'ButtonGroup',
            href: '/components/action/buttonGroup',
          },
        ],
      },
      {
        group: 'Input',
        items: [
          {
            id: 'textinput',
            label: 'TextInput',
            href: '/components/input/textInput',
          },
          {
            id: 'checkbox',
            label: 'Checkbox',
            href: '/components/input/checkbox',
          },
          {
            id: 'radio',
            label: 'Radio',
            href: '/components/input/radio',
          },
          {
            id: 'switch',
            label: 'Switch',
            href: '/components/input/switch',
          },
          {
            id: 'datepicker',
            label: 'DatePicker',
            href: '/components/input/datepicker',
          },
          {
            id: 'uploadDropzone',
            label: 'UploadDropzone',
            href: '/components/input/uploadDropzone',
          },
        ],
      },
      {
        group: 'Navigation',
        items: [
          {
            id: 'dropdown',
            label: 'Dropdown',
            href: '/components/navigation/dropdown',
          },
          {
            id: 'pagination',
            label: 'Pagination',
            href: '/components/navigation/pagination',
          },
          { id: 'tabs', label: 'Tabs', href: '/components/navigation/tabs' },
          {
            id: 'breadcrumb',
            label: 'Breadcrumb',
            href: '/components/navigation/breadcrumb',
          },
          {
            id: 'gnb',
            label: 'Global Navigation',
            href: '/components/navigation/gnb',
          },
          {
            id: 'snb',
            label: 'Side Navigation',
            href: '/components/navigation/snb',
          },
        ],
      },
      {
        group: 'Data Display',
        items: [
          {
            id: 'avatar',
            label: 'Avatar',
            href: '/components/dataDisplay/avatar',
          },
          {
            id: 'badge',
            label: 'Badge',
            href: '/components/dataDisplay/badge',
          },
          {
            id: 'table',
            label: 'Table',
            href: '/components/dataDisplay/table',
          },
          { id: 'tag', label: 'Tag', href: '/components/dataDisplay/tag' },
          {
            id: 'tooltip',
            label: 'Tooltip',
            href: '/components/dataDisplay/tooltip',
          },
        ],
      },
      {
        group: 'Feedback',
        items: [
          {
            id: 'alert',
            label: 'Alert',
            href: '/components/feedback/alert',
          },
          {
            id: 'dialog',
            label: 'Dialog',
            href: '/components/feedback/dialog',
          },
          {
            id: 'drawer',
            label: 'Drawer',
            href: '/components/feedback/drawer',
          },
          {
            id: 'progress',
            label: 'Progress',
            href: '/components/feedback/progress',
          },
          {
            id: 'skeleton',
            label: 'Skeleton',
            href: '/components/feedback/skeleton',
          },
          {
            id: 'toast',
            label: 'Toast',
            href: '/components/feedback/toast',
          },
        ],
      },
      {
        group: 'Layout',
        items: [
          { id: 'grid', label: 'Grid', href: '/components/layout/grid' },
          {
            id: 'divider',
            label: 'Divider',
            href: '/components/layout/divider',
          },
        ],
      },
    ],
  },
  {
    id: 'interaction',
    label: 'Interaction',
    href: null,
    items: [
      {
        id: 'splitText',
        label: 'Split Text',
        href: '/components/interaction/splitText',
      },
      {
        id: 'sticker',
        label: 'Sticker',
        href: '/components/interaction/sticker',
      },
      {
        id: 'countUp',
        label: 'Count Up',
        href: '/components/interaction/countUp',
      },
    ],
  },
];
