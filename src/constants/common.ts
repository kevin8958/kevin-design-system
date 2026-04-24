export const propsColumn = [
  { label: 'Property', key: 'property' },
  { label: 'Type', key: 'type' },
  { label: 'Default', key: 'default' },
  { label: 'Description', key: 'description' },
];

const processEnv =
  typeof globalThis !== 'undefined' && 'process' in globalThis
    ? (globalThis as { process?: { env?: { NODE_ENV?: string } } }).process?.env
    : undefined;

const isLocalDevelopment =
  (typeof window !== 'undefined' &&
    ['localhost', '127.0.0.1'].includes(window.location.hostname)) ||
  processEnv?.NODE_ENV === 'development';

export const STORYBOOK_URL = isLocalDevelopment
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

export const searchEntries: Layout.SearchEntry[] = [
  {
    id: 'getting-started',
    label: 'Getting Started',
    href: '/getting-started',
    group: 'Overview',
    keywords: ['home', 'install', 'setup', 'npm', 'publish'],
  },
  {
    id: 'components-root',
    label: 'Components',
    href: '/components',
    group: 'Overview',
    keywords: ['docs', 'catalog', 'library'],
  },
  {
    id: 'foundation-root',
    label: 'Foundation',
    href: '/components/foundation',
    group: 'Category',
  },
  {
    id: 'action-root',
    label: 'Action',
    href: '/components/action',
    group: 'Category',
  },
  {
    id: 'input-root',
    label: 'Input',
    href: '/components/input',
    group: 'Category',
  },
  {
    id: 'navigation-root',
    label: 'Navigation',
    href: '/components/navigation',
    group: 'Category',
  },
  {
    id: 'data-display-root',
    label: 'Data Display',
    href: '/components/dataDisplay',
    group: 'Category',
    keywords: ['data display', 'display'],
  },
  {
    id: 'feedback-root',
    label: 'Feedback',
    href: '/components/feedback',
    group: 'Category',
  },
  {
    id: 'layout-root',
    label: 'Layout',
    href: '/components/layout',
    group: 'Category',
  },
  {
    id: 'mobile-root',
    label: 'Mobile',
    href: '/components/mobile',
    group: 'Category',
  },
  {
    id: 'interaction-root',
    label: 'Interaction',
    href: '/components/interaction',
    group: 'Category',
  },
  {
    id: 'app-accordion',
    label: 'App Accordion',
    href: '/components/app/accordion',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'accordion'],
  },
  {
    id: 'app-button',
    label: 'App Button',
    href: '/components/app/button',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'button'],
  },
  {
    id: 'app-button-group',
    label: 'App ButtonGroup',
    href: '/components/app/buttonGroup',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'button group', 'segmented'],
  },
  {
    id: 'app-dropdown',
    label: 'App Dropdown',
    href: '/components/app/dropdown',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'dropdown', 'menu'],
  },
  {
    id: 'app-popover',
    label: 'App Popover',
    href: '/components/app/popover',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'popover', 'floating'],
  },
  {
    id: 'app-action-sheet',
    label: 'App ActionSheet',
    href: '/components/app/actionSheet',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'action sheet', 'bottom sheet'],
  },
  {
    id: 'app-modal',
    label: 'App Modal',
    href: '/components/app/modal',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'modal', 'dialog'],
  },
  {
    id: 'app-drawer',
    label: 'App Drawer',
    href: '/components/app/drawer',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'drawer', 'side sheet'],
  },
  {
    id: 'app-text-input',
    label: 'App TextInput',
    href: '/components/app/textInput',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'text input', 'field'],
  },
  {
    id: 'app-textarea',
    label: 'App Textarea',
    href: '/components/app/textarea',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'textarea', 'multiline'],
  },
  {
    id: 'app-select',
    label: 'App Select',
    href: '/components/app/select',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'select', 'picker'],
  },
  {
    id: 'app-combobox',
    label: 'App Combobox',
    href: '/components/app/combobox',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'combobox', 'search'],
  },
  {
    id: 'app-checkbox',
    label: 'App Checkbox',
    href: '/components/app/checkbox',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'checkbox'],
  },
  {
    id: 'app-radio',
    label: 'App Radio',
    href: '/components/app/radio',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'radio'],
  },
  {
    id: 'app-switch',
    label: 'App Switch',
    href: '/components/app/switch',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'switch', 'toggle'],
  },
  {
    id: 'app-datepicker',
    label: 'App DatePicker',
    href: '/components/app/datepicker',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'datepicker', 'calendar'],
  },
  {
    id: 'app-upload-dropzone',
    label: 'App UploadDropzone',
    href: '/components/app/uploadDropzone',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'upload', 'dropzone', 'file'],
  },
  ...designSystemMenus.flatMap((menu) => {
    if (menu.id === 'components' && menu.sections) {
      return menu.sections.flatMap((section) =>
        section.items.map((item) => ({
          id: item.id,
          label: item.label,
          href: item.href,
          group: section.group,
          keywords: [section.group.toLowerCase(), item.id.toLowerCase()],
        })),
      );
    }

    return (menu.items ?? []).map((item) => ({
      id: item.id,
      label: item.label,
      href: item.href,
      group: menu.label,
      keywords: [menu.label.toLowerCase(), item.id.toLowerCase()],
    }));
  }),
];
