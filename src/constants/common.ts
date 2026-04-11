export const propsColumn = [
  { label: 'Property', key: 'property' },
  { label: 'Type', key: 'type' },
  { label: 'Default', key: 'default' },
  { label: 'Description', key: 'description' },
];

export const STORYBOOK_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:6006'
    : '/storybook/index.html';

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
            id: 'accordion',
            label: 'Accordion',
            href: '/components/action/accordion',
          },
          {
            id: 'button',
            label: 'Button',
            href: '/components/action/button',
          },
          {
            id: 'buttonGroup',
            label: 'ButtonGroup',
            href: '/components/action/buttonGroup',
          },
          {
            id: 'dropdown',
            label: 'Dropdown',
            href: '/components/action/dropdown',
          },
          {
            id: 'popover',
            label: 'Popover',
            href: '/components/action/popover',
          },
          {
            id: 'actionSheet',
            label: 'ActionSheet',
            href: '/components/action/actionSheet',
          },
          {
            id: 'modal',
            label: 'Modal',
            href: '/components/action/modal',
          },
          {
            id: 'drawer',
            label: 'Drawer',
            href: '/components/action/drawer',
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
            id: 'textarea',
            label: 'Textarea',
            href: '/components/input/textarea',
          },
          {
            id: 'select',
            label: 'Select',
            href: '/components/input/select',
          },
          {
            id: 'combobox',
            label: 'Combobox',
            href: '/components/input/combobox',
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
            id: 'pagination',
            label: 'Pagination',
            href: '/components/navigation/pagination',
          },
          {
            id: 'stepper',
            label: 'Stepper',
            href: '/components/navigation/stepper',
          },
          { id: 'tabs', label: 'Tabs', href: '/components/navigation/tabs' },
          {
            id: 'breadcrumb',
            label: 'Breadcrumb',
            href: '/components/navigation/breadcrumb',
          },
          // {
          //   id: 'gnb',
          //   label: 'Global Navigation',
          //   href: '/components/navigation/gnb',
          // },
          // {
          //   id: 'snb',
          //   label: 'Side Navigation',
          //   href: '/components/navigation/snb',
          // },
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
            id: 'descriptionList',
            label: 'DescriptionList',
            href: '/components/dataDisplay/descriptionList',
          },
          {
            id: 'emptyState',
            label: 'EmptyState',
            href: '/components/dataDisplay/emptyState',
          },
          {
            id: 'metricCard',
            label: 'MetricCard',
            href: '/components/dataDisplay/metricCard',
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
    id: 'mobile',
    label: 'Mobile',
    href: null,
    items: [
      {
        id: 'bottomNavigation',
        label: 'BottomNavigation',
        href: '/components/mobile/bottomNavigation',
      },
      {
        id: 'topAppBar',
        label: 'TopAppBar',
        href: '/components/mobile/topAppBar',
      },
      {
        id: 'bottomSheet',
        label: 'BottomSheet',
        href: '/components/mobile/bottomSheet',
      },
      {
        id: 'navDrawer',
        label: 'NavDrawer',
        href: '/components/mobile/navDrawer',
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
