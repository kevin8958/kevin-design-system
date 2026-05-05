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
        group: 'Productivity',
        items: [
          {
            id: 'todoList',
            label: 'TodoList',
            href: '/components/productivity/todoList',
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

export type PatternItem = Layout.NavItem & {
  description: string;
  status?: 'ready' | 'working';
  keywords?: string[];
};

export type PatternCategory = {
  id: string;
  label: string;
  href: string;
  description: string;
  items: PatternItem[];
};

export const patternPlatforms = ['web', 'app'] as const;

export type PatternPlatform = (typeof patternPlatforms)[number];

type PatternSeedItem = Omit<PatternItem, 'href'>;
type PatternSeedCategory = Omit<PatternCategory, 'href' | 'items'> & {
  items: PatternSeedItem[];
};

const buildPatternCategories = (
  platform: PatternPlatform,
  categories: PatternSeedCategory[],
): PatternCategory[] =>
  categories.map((category) => ({
    ...category,
    href: `/patterns/${platform}/${category.id}`,
    items: category.items.map((item) => ({
      ...item,
      href: `/patterns/${platform}/${category.id}/${item.id}`,
    })),
  }));

const patternCategorySeeds: Record<PatternPlatform, PatternSeedCategory[]> = {
  web: [
    {
      id: 'onboarding',
      label: 'Onboarding',
      description:
        'Activation flows for creating a workspace, accepting invites, completing first-run setup, and teaching permissions before friction appears.',
      items: [
        {
          id: 'workspace-creation',
          label: 'Workspace Creation',
          description:
            'First-touch flow for naming a workspace, claiming its URL, and optionally choosing starter structure.',
          status: 'ready',
          keywords: ['workspace', 'create', 'setup', 'activation', 'web'],
        },
        {
          id: 'invite-acceptance',
          label: 'Invite Acceptance',
          description:
            'Join flow that confirms inviter, role, and workspace context before the person accepts access.',
          status: 'ready',
          keywords: ['invite', 'acceptance', 'join workspace', 'web'],
        },
        {
          id: 'first-run-setup',
          label: 'First-Run Setup',
          description:
            'Checklist-driven activation flow that guides the first important workspace setup steps.',
          status: 'ready',
          keywords: ['first run', 'setup', 'checklist', 'activation', 'web'],
        },
        {
          id: 'permission-education',
          label: 'Permission Education',
          description:
            'Pre-permission framing that explains why access is requested and what happens if it is skipped.',
          status: 'ready',
          keywords: ['permission', 'education', 'notifications', 'access', 'web'],
        },
      ],
    },
    {
      id: 'settings-admin',
      label: 'Settings / Admin',
      description:
        'Administrative flows for members, roles, billing, and destructive actions where policy clarity and operational safety matter most.',
      items: [
        {
          id: 'member-management',
          label: 'Member Management',
          description:
            'Review members, invite health, and access state while keeping admin actions close to the list itself.',
          status: 'ready',
          keywords: ['members', 'access', 'invites', 'admin', 'web'],
        },
        {
          id: 'role-change',
          label: 'Role Change',
          description:
            'Compare current and next permissions before promoting or demoting a member.',
          status: 'ready',
          keywords: ['role', 'permissions', 'admin', 'web'],
        },
        {
          id: 'billing-settings',
          label: 'Billing Settings',
          description:
            'Manage plan state, payment recovery, invoice details, and seat drivers.',
          status: 'ready',
          keywords: ['billing', 'plan', 'invoice', 'seats', 'web'],
        },
        {
          id: 'destructive-confirmations',
          label: 'Destructive Confirmations',
          description:
            'Handle irreversible admin actions with explicit risk framing and appropriately scaled safeguards.',
          status: 'ready',
          keywords: ['delete', 'destructive', 'confirmation', 'admin', 'web'],
        },
      ],
    },
    {
      id: 'commerce-plans',
      label: 'Commerce / Plans',
      description:
        'Pricing, checkout, subscription, and invoice flows that help buyers understand money, timing, and plan impact before they commit.',
      items: [
        {
          id: 'pricing-selection',
          label: 'Pricing Selection',
          description:
            'Plan comparison pattern for pricing tiers, recommendation cues, and billing context before checkout begins.',
          status: 'ready',
          keywords: ['pricing', 'plans', 'subscription', 'checkout', 'web'],
        },
        {
          id: 'checkout-summary',
          label: 'Checkout Summary',
          description:
            'Order summary pattern for plan, seat, discount, and total review while payment is completed.',
          status: 'ready',
          keywords: ['checkout', 'summary', 'payment', 'billing', 'web'],
        },
        {
          id: 'subscription-change',
          label: 'Subscription Change',
          description:
            'Upgrade and downgrade pattern with proration, timing, and entitlement impact explained clearly.',
          status: 'ready',
          keywords: ['subscription', 'upgrade', 'downgrade', 'billing', 'web'],
        },
        {
          id: 'invoice-flows',
          label: 'Invoice Flows',
          description:
            'Invoice review and recovery pattern for open, paid, and overdue documents in billing workflows.',
          status: 'ready',
          keywords: ['invoice', 'billing', 'finance', 'payment', 'web'],
        },
      ],
    },
    {
      id: 'collaboration',
      label: 'Collaboration',
      description:
        'Shared-work patterns for feedback, approvals, access, mentions, and activity history where team coordination needs to stay visible.',
      items: [
        {
          id: 'comments',
          label: 'Comments',
          description:
            'Threaded discussion pattern for contextual feedback, reply flow, and resolution tracking around shared work.',
          status: 'ready',
          keywords: ['comments', 'thread', 'feedback', 'review', 'web'],
        },
        {
          id: 'approvals',
          label: 'Approvals',
          description:
            'Review and sign-off pattern for approval criteria, reviewer coverage, and blocked decisions.',
          status: 'ready',
          keywords: ['approval', 'review', 'sign off', 'workflow', 'web'],
        },
        {
          id: 'sharing',
          label: 'Sharing',
          description:
            'Invite and access pattern for collaborator entry, permission scope, and public-link safeguards.',
          status: 'ready',
          keywords: ['sharing', 'invite', 'permissions', 'access', 'web'],
        },
        {
          id: 'mentions',
          label: 'Mentions',
          description:
            'Mention composer pattern for notification-aware writing and contextual suggestion lists.',
          status: 'ready',
          keywords: ['mentions', 'notify', 'comment', 'composer', 'web'],
        },
        {
          id: 'activity-flows',
          label: 'Activity Flows',
          description:
            'Timeline pattern for collaboration history, filters, and recovery when the feed is delayed.',
          status: 'ready',
          keywords: ['activity', 'feed', 'timeline', 'history', 'web'],
        },
      ],
    },
    {
      id: 'creation-publishing',
      label: 'Creation / Publishing',
      description:
        'Authoring-to-publish patterns for creating drafts, preserving work, routing review, and confirming live changes safely.',
      items: [
        {
          id: 'editor-flow',
          label: 'Editor Flow',
          description:
            'Structured authoring pattern for draft editing, readiness cues, and next-step actions.',
          status: 'ready',
          keywords: ['editor', 'authoring', 'draft', 'creation', 'web'],
        },
        {
          id: 'draft-save',
          label: 'Draft Save',
          description:
            'Save-confidence pattern for autosave, version awareness, and conflict recovery.',
          status: 'ready',
          keywords: ['draft save', 'autosave', 'sync', 'version', 'web'],
        },
        {
          id: 'review-handoff',
          label: 'Review Handoff',
          description:
            'Creation handoff pattern for packaging drafts and sending them into the right review lane.',
          status: 'ready',
          keywords: ['review', 'handoff', 'approval', 'draft', 'web'],
        },
        {
          id: 'publish-confirmation',
          label: 'Publish Confirmation',
          description:
            'Final publish pattern for destination review, audience scope, and live-change confirmation.',
          status: 'ready',
          keywords: ['publish', 'go live', 'schedule', 'audience', 'web'],
        },
      ],
    },
    {
      id: 'notifications-inbox',
      label: 'Notifications / Inbox',
      description:
        'Alert and inbox patterns for browsing updates, processing action queues, managing delivery rules, and escalating urgent incidents.',
      items: [
        {
          id: 'notification-center',
          label: 'Notification Center',
          description:
            'Unread-update pattern for browsing alerts, grouped categories, and critical backlog states.',
          status: 'ready',
          keywords: ['notifications', 'center', 'alerts', 'unread', 'web'],
        },
        {
          id: 'inbox-triage',
          label: 'Inbox Triage',
          description:
            'Action-queue pattern for processing replies, reviews, and follow-up items from one inbox.',
          status: 'ready',
          keywords: ['inbox', 'triage', 'queue', 'tasks', 'web'],
        },
        {
          id: 'digest-settings',
          label: 'Digest Settings',
          description:
            'Preference pattern for cadence, quiet hours, and notification delivery exceptions.',
          status: 'ready',
          keywords: ['digest', 'settings', 'preferences', 'notifications', 'web'],
        },
        {
          id: 'alert-escalation',
          label: 'Alert Escalation',
          description:
            'Urgent-alert routing pattern for acknowledgment state, backup paths, and incident escalation.',
          status: 'ready',
          keywords: ['alert', 'escalation', 'incident', 'acknowledgment', 'web'],
        },
      ],
    },
    {
      id: 'auth',
      label: 'Auth',
      description:
        'Browser-first authentication flows for sign in, sign up, and recovery across responsive layouts.',
      items: [
        {
          id: 'sign-in',
          label: 'Sign In',
          description:
            'Email and password entry with recovery links, social login, and browser-friendly validation.',
          status: 'ready',
          keywords: ['login', 'auth', 'email', 'password', 'web'],
        },
        {
          id: 'sign-up',
          label: 'Sign Up',
          description:
            'Account creation form with consent, inline errors, and progressive disclosure for desktop and mobile web.',
          status: 'ready',
          keywords: ['register', 'signup', 'onboarding', 'form', 'web'],
        },
        {
          id: 'password-reset',
          label: 'Password Reset',
          description:
            'Recovery flow for verification, code entry, and new password setup in a browser context.',
          status: 'ready',
          keywords: ['forgot password', 'recovery', 'reset', 'web'],
        },
      ],
    },
    {
      id: 'forms',
      label: 'Forms',
      description:
        'Structured web forms that combine validation, helper content, section grouping, and submission states.',
      items: [
        {
          id: 'profile-edit',
          label: 'Profile Edit',
          description:
            'Editable account form with grouped fields, inline validation, and sticky save actions.',
          status: 'ready',
          keywords: ['profile', 'edit', 'account settings', 'web'],
        },
        {
          id: 'address-entry',
          label: 'Address Entry',
          description:
            'Shipping and billing address flow with clear field grouping and desktop-friendly form rhythm.',
          status: 'ready',
          keywords: ['address', 'shipping', 'billing', 'web'],
        },
        {
          id: 'payment-method',
          label: 'Payment Method',
          description:
            'Card and payment detail collection with helper messaging, security cues, and completion states.',
          status: 'ready',
          keywords: ['payment', 'card', 'checkout', 'web'],
        },
      ],
    },
    {
      id: 'search-filter',
      label: 'Search & Filter',
      description:
        'Patterns for finding, sorting, and narrowing large result sets in toolbar, drawer, and result layouts.',
      items: [
        {
          id: 'sort-filter-bar',
          label: 'Sort & Filter Bar',
          description:
            'Persistent toolbar for sorting, filtering, and quick refinement actions above result lists.',
          status: 'ready',
          keywords: ['filter', 'sort', 'toolbar', 'web'],
        },
        {
          id: 'filter-sheet',
          label: 'Filter Sheet',
          description:
            'Drawer or modal-based filter composition for denser criteria sets on the web.',
          status: 'ready',
          keywords: ['filter sheet', 'drawer', 'modal', 'web'],
        },
        {
          id: 'search-results',
          label: 'Search Results',
          description:
            'Results layout that combines query input, empty/loading states, and responsive result cards.',
          status: 'ready',
          keywords: ['results', 'search', 'listing', 'web'],
        },
      ],
    },
    {
      id: 'states',
      label: 'States',
      description:
        'Higher-level empty, loading, and recovery moments built for dashboards, lists, and browser workflows.',
      items: [
        {
          id: 'empty-results',
          label: 'Empty Results',
          description:
            'Search and list empty state with guidance, fallback actions, and reset affordances.',
          status: 'ready',
          keywords: ['empty', 'no results', 'empty state', 'web'],
        },
        {
          id: 'loading-panel',
          label: 'Loading Panel',
          description:
            'Structured loading container that combines skeletons, headings, and content spacing.',
          status: 'ready',
          keywords: ['loading', 'skeleton', 'panel', 'web'],
        },
        {
          id: 'error-recovery',
          label: 'Error Recovery',
          description:
            'Retry, support, and fallback actions after failed requests in page-level browser flows.',
          status: 'ready',
          keywords: ['error', 'retry', 'fallback', 'web'],
        },
      ],
    },
  ],
  app: [
    {
      id: 'onboarding',
      label: 'Onboarding',
      description:
        'Native activation flows for creating workspaces, accepting invites, completing setup, and teaching permissions in a touch-first layout.',
      items: [
        {
          id: 'workspace-creation',
          label: 'Workspace Creation',
          description:
            'Mobile flow for setting up a workspace with clear identity fields and lightweight starter options.',
          status: 'ready',
          keywords: ['workspace', 'create', 'setup', 'activation', 'app', 'react native'],
        },
        {
          id: 'invite-acceptance',
          label: 'Invite Acceptance',
          description:
            'Touch-first invite flow that confirms workspace context, granted access, and the correct account.',
          status: 'ready',
          keywords: ['invite', 'acceptance', 'join workspace', 'app', 'react native'],
        },
        {
          id: 'first-run-setup',
          label: 'First-Run Setup',
          description:
            'Checklist-based activation flow for finishing the setup tasks that unblock team launch on mobile.',
          status: 'ready',
          keywords: ['first run', 'setup', 'checklist', 'activation', 'app', 'react native'],
        },
        {
          id: 'permission-education',
          label: 'Permission Education',
          description:
            'Native pre-permission guidance that explains platform access before the system prompt appears.',
          status: 'ready',
          keywords: ['permission', 'education', 'notifications', 'access', 'app', 'react native'],
        },
      ],
    },
    {
      id: 'settings-admin',
      label: 'Settings / Admin',
      description:
        'Native administrative flows for members, roles, billing, and high-risk actions that need compact clarity and safe confirmation.',
      items: [
        {
          id: 'member-management',
          label: 'Member Management',
          description:
            'Touch-first member management pattern for access review, invites, and admin coverage.',
          status: 'ready',
          keywords: ['members', 'access', 'invites', 'admin', 'app', 'react native'],
        },
        {
          id: 'role-change',
          label: 'Role Change',
          description:
            'Mobile role update pattern with clear capability comparison and elevated-risk confirmation.',
          status: 'ready',
          keywords: ['role', 'permissions', 'admin', 'app', 'react native'],
        },
        {
          id: 'billing-settings',
          label: 'Billing Settings',
          description:
            'Native billing settings pattern for plan state, invoice details, and payment recovery.',
          status: 'ready',
          keywords: ['billing', 'plan', 'invoice', 'app', 'react native'],
        },
        {
          id: 'destructive-confirmations',
          label: 'Destructive Confirmations',
          description:
            'Irreversible admin action pattern for mobile with explicit blast-radius communication and safer acknowledgement.',
          status: 'ready',
          keywords: ['delete', 'destructive', 'confirmation', 'app', 'react native'],
        },
      ],
    },
    {
      id: 'commerce-plans',
      label: 'Commerce / Plans',
      description:
        'Mobile pricing, checkout, subscription, and invoice flows that keep billing context legible in touch-first screens.',
      items: [
        {
          id: 'pricing-selection',
          label: 'Pricing Selection',
          description:
            'Native pricing comparison pattern with tier recommendation and billing guidance before checkout starts.',
          status: 'ready',
          keywords: ['pricing', 'plans', 'subscription', 'checkout', 'app', 'react native'],
        },
        {
          id: 'checkout-summary',
          label: 'Checkout Summary',
          description:
            'Touch-first checkout summary for plan, total, promo, and payment recovery in a narrow layout.',
          status: 'ready',
          keywords: ['checkout', 'summary', 'payment', 'billing', 'app', 'react native'],
        },
        {
          id: 'subscription-change',
          label: 'Subscription Change',
          description:
            'Mobile upgrade and downgrade pattern that explains proration, timing, and seat impact before confirmation.',
          status: 'ready',
          keywords: ['subscription', 'upgrade', 'downgrade', 'billing', 'app', 'react native'],
        },
        {
          id: 'invoice-flows',
          label: 'Invoice Flows',
          description:
            'Native invoice pattern for status review, accounting metadata, and overdue recovery.',
          status: 'ready',
          keywords: ['invoice', 'billing', 'finance', 'payment', 'app', 'react native'],
        },
      ],
    },
    {
      id: 'collaboration',
      label: 'Collaboration',
      description:
        'Touch-first collaboration patterns for comments, approvals, sharing, mentions, and activity history inside native apps.',
      items: [
        {
          id: 'comments',
          label: 'Comments',
          description:
            'Mobile threaded feedback pattern for contextual discussion, replies, and resolution states.',
          status: 'ready',
          keywords: ['comments', 'thread', 'feedback', 'review', 'app', 'react native'],
        },
        {
          id: 'approvals',
          label: 'Approvals',
          description:
            'Native sign-off pattern for review criteria, approval actions, and blocked decisions.',
          status: 'ready',
          keywords: ['approval', 'review', 'sign off', 'workflow', 'app', 'react native'],
        },
        {
          id: 'sharing',
          label: 'Sharing',
          description:
            'Touch-first sharing pattern for collaborator invites, access scope, and public-link safeguards.',
          status: 'ready',
          keywords: ['sharing', 'invite', 'permissions', 'access', 'app', 'react native'],
        },
        {
          id: 'mentions',
          label: 'Mentions',
          description:
            'Native mention pattern for notification-aware writing and suggestion context.',
          status: 'ready',
          keywords: ['mentions', 'notify', 'comment', 'composer', 'app', 'react native'],
        },
        {
          id: 'activity-flows',
          label: 'Activity Flows',
          description:
            'Mobile activity-feed pattern for collaboration history, filters, and sync recovery.',
          status: 'ready',
          keywords: ['activity', 'feed', 'timeline', 'history', 'app', 'react native'],
        },
      ],
    },
    {
      id: 'creation-publishing',
      label: 'Creation / Publishing',
      description:
        'Mobile authoring and publishing patterns for editing drafts, preserving work, routing review, and confirming go-live actions.',
      items: [
        {
          id: 'editor-flow',
          label: 'Editor Flow',
          description:
            'Touch-first authoring pattern for editing drafts, seeing progress, and moving creation forward.',
          status: 'ready',
          keywords: ['editor', 'authoring', 'draft', 'creation', 'app', 'react native'],
        },
        {
          id: 'draft-save',
          label: 'Draft Save',
          description:
            'Mobile save-confidence pattern for autosave, sync state, and recovery from interrupted sessions.',
          status: 'ready',
          keywords: ['draft save', 'autosave', 'sync', 'version', 'app', 'react native'],
        },
        {
          id: 'review-handoff',
          label: 'Review Handoff',
          description:
            'Native handoff pattern for packaging drafts and sending them to reviewers with clear scope.',
          status: 'ready',
          keywords: ['review', 'handoff', 'approval', 'draft', 'app', 'react native'],
        },
        {
          id: 'publish-confirmation',
          label: 'Publish Confirmation',
          description:
            'Go-live confirmation pattern for destination, audience, and high-risk publish actions on mobile.',
          status: 'ready',
          keywords: ['publish', 'go live', 'schedule', 'audience', 'app', 'react native'],
        },
      ],
    },
    {
      id: 'notifications-inbox',
      label: 'Notifications / Inbox',
      description:
        'Mobile alert and inbox patterns for scanning updates, triaging action items, managing delivery preferences, and escalating urgent incidents.',
      items: [
        {
          id: 'notification-center',
          label: 'Notification Center',
          description:
            'Native unread-update pattern for grouped alerts, critical backlog states, and bulk acknowledgment.',
          status: 'ready',
          keywords: ['notifications', 'center', 'alerts', 'unread', 'app', 'react native'],
        },
        {
          id: 'inbox-triage',
          label: 'Inbox Triage',
          description:
            'Mobile action-queue pattern for replies, reviews, and follow-up work in one inbox.',
          status: 'ready',
          keywords: ['inbox', 'triage', 'queue', 'tasks', 'app', 'react native'],
        },
        {
          id: 'digest-settings',
          label: 'Digest Settings',
          description:
            'Native preference pattern for cadence, quiet hours, and notification exceptions.',
          status: 'ready',
          keywords: ['digest', 'settings', 'preferences', 'notifications', 'app', 'react native'],
        },
        {
          id: 'alert-escalation',
          label: 'Alert Escalation',
          description:
            'Mobile escalation pattern for urgent alerts, backup routing, and missed acknowledgment recovery.',
          status: 'ready',
          keywords: ['alert', 'escalation', 'incident', 'acknowledgment', 'app', 'react native'],
        },
      ],
    },
    {
      id: 'auth',
      label: 'Auth',
      description:
        'Native authentication flows tuned for stacked layouts, keyboard-safe spacing, and touch-first actions.',
      items: [
        {
          id: 'sign-in',
          label: 'Sign In',
          description:
            'Mobile sign-in flow with keyboard-aware spacing, social auth entry points, and recovery actions.',
          status: 'ready',
          keywords: ['login', 'auth', 'email', 'password', 'app', 'react native'],
        },
        {
          id: 'sign-up',
          label: 'Sign Up',
          description:
            'Account creation flow for app onboarding with stacked inputs, consent, and validation messaging.',
          status: 'ready',
          keywords: ['register', 'signup', 'onboarding', 'form', 'app', 'react native'],
        },
        {
          id: 'password-reset',
          label: 'Password Reset',
          description:
            'Recovery sequence for code verification and new password entry in a native app context.',
          status: 'ready',
          keywords: ['forgot password', 'recovery', 'reset', 'app', 'react native'],
        },
      ],
    },
    {
      id: 'forms',
      label: 'Forms',
      description:
        'Mobile-first form patterns with stacked fields, helper text, validation, and fixed bottom actions.',
      items: [
        {
          id: 'profile-edit',
          label: 'Profile Edit',
          description:
            'Editable profile form with grouped sections, keyboard-safe layout, and save actions.',
          status: 'ready',
          keywords: ['profile', 'edit', 'account settings', 'app', 'react native'],
        },
        {
          id: 'address-entry',
          label: 'Address Entry',
          description:
            'Address entry flow with stacked inputs, region pickers, and touch-friendly validation.',
          status: 'ready',
          keywords: ['address', 'shipping', 'billing', 'app', 'react native'],
        },
        {
          id: 'payment-method',
          label: 'Payment Method',
          description:
            'Native payment detail entry with secure field grouping and completion feedback.',
          status: 'ready',
          keywords: ['payment', 'card', 'checkout', 'app', 'react native'],
        },
      ],
    },
    {
      id: 'search-filter',
      label: 'Search & Filter',
      description:
        'Touch-first search and filter flows for app headers, bottom sheets, chips, and result lists.',
      items: [
        {
          id: 'sort-filter-bar',
          label: 'Sort & Filter Bar',
          description:
            'Compact top bar for sorting, filtering, and quick refinements inside native list screens.',
          status: 'ready',
          keywords: ['filter', 'sort', 'toolbar', 'app', 'react native'],
        },
        {
          id: 'filter-sheet',
          label: 'Filter Sheet',
          description:
            'Bottom-sheet based filter composition for denser criteria sets on mobile.',
          status: 'ready',
          keywords: ['filter sheet', 'bottom sheet', 'drawer', 'app', 'react native'],
        },
        {
          id: 'search-results',
          label: 'Search Results',
          description:
            'Search results screen that combines query input, chips, and loading or empty feedback.',
          status: 'ready',
          keywords: ['results', 'search', 'listing', 'app', 'react native'],
        },
      ],
    },
    {
      id: 'states',
      label: 'States',
      description:
        'Empty, loading, and recovery states designed for full-screen app views and interrupted mobile sessions.',
      items: [
        {
          id: 'empty-results',
          label: 'Empty Results',
          description:
            'Touch-friendly empty state with helpful guidance and next actions after no matches are found.',
          status: 'ready',
          keywords: ['empty', 'no results', 'empty state', 'app', 'react native'],
        },
        {
          id: 'loading-panel',
          label: 'Loading Panel',
          description:
            'Structured loading container with skeletons and spacing tuned for mobile surfaces.',
          status: 'ready',
          keywords: ['loading', 'skeleton', 'panel', 'app', 'react native'],
        },
        {
          id: 'error-recovery',
          label: 'Error Recovery',
          description:
            'Retry, support, and fallback actions after failures in native app flows.',
          status: 'ready',
          keywords: ['error', 'retry', 'fallback', 'app', 'react native'],
        },
      ],
    },
  ],
};

export const patternCategoriesByPlatform: Record<
  PatternPlatform,
  PatternCategory[]
> = {
  web: buildPatternCategories('web', patternCategorySeeds.web),
  app: buildPatternCategories('app', patternCategorySeeds.app),
};

export const isPatternPlatform = (
  value?: string,
): value is PatternPlatform => value === 'web' || value === 'app';

export const getPatternCategories = (platform: PatternPlatform) =>
  patternCategoriesByPlatform[platform];

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
    id: 'patterns-root',
    label: 'Patterns',
    href: '/patterns/web',
    group: 'Overview',
    keywords: ['patterns', 'flows', 'templates', 'examples'],
  },
  {
    id: 'patterns-web-root',
    label: 'Web Patterns',
    href: '/patterns/web',
    group: 'Pattern Platform',
    keywords: ['patterns', 'web', 'browser', 'desktop'],
  },
  {
    id: 'patterns-app-root',
    label: 'App Patterns',
    href: '/patterns/app',
    group: 'Pattern Platform',
    keywords: ['patterns', 'app', 'mobile', 'react native'],
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
    id: 'productivity-root',
    label: 'Productivity',
    href: '/components/productivity',
    group: 'Category',
    keywords: ['productivity', 'tasks', 'board', 'todo'],
  },
  {
    id: 'todo-list',
    label: 'TodoList',
    href: '/components/productivity/todoList',
    group: 'Productivity',
    keywords: ['todo list', 'task board', 'kanban', 'workflow'],
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
  ...patternPlatforms.flatMap((platform) =>
    getPatternCategories(platform).flatMap((category) => [
      {
        id: `pattern-${platform}-${category.id}-root`,
        label: `${platform === 'web' ? 'Web' : 'App'} ${category.label}`,
        href: category.href,
        group: `Pattern Category / ${platform.toUpperCase()}`,
        keywords: [
          'pattern',
          platform,
          category.id,
          category.label.toLowerCase(),
        ],
      },
      ...category.items.map((item) => ({
        id: `pattern-${platform}-${item.id}`,
        label: `${platform === 'web' ? 'Web' : 'App'} ${item.label}`,
        href: item.href,
        group: `Pattern / ${platform.toUpperCase()} / ${category.label}`,
        keywords: [
          'pattern',
          platform,
          category.label.toLowerCase(),
          ...(item.keywords ?? []),
        ],
      })),
    ]),
  ),
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
  {
    id: 'app-pagination',
    label: 'App Pagination',
    href: '/components/app/pagination',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'pagination'],
  },
  {
    id: 'app-stepper',
    label: 'App Stepper',
    href: '/components/app/stepper',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'stepper', 'steps'],
  },
  {
    id: 'app-tabs',
    label: 'App Tabs',
    href: '/components/app/tabs',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'tabs'],
  },
  {
    id: 'app-breadcrumb',
    label: 'App Breadcrumb',
    href: '/components/app/breadcrumb',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'breadcrumb'],
  },
  {
    id: 'app-avatar',
    label: 'App Avatar',
    href: '/components/app/avatar',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'avatar'],
  },
  {
    id: 'app-badge',
    label: 'App Badge',
    href: '/components/app/badge',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'badge'],
  },
  {
    id: 'app-description-list',
    label: 'App DescriptionList',
    href: '/components/app/descriptionList',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'description list'],
  },
  {
    id: 'app-empty-state',
    label: 'App EmptyState',
    href: '/components/app/emptyState',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'empty state'],
  },
  {
    id: 'app-metric-card',
    label: 'App MetricCard',
    href: '/components/app/metricCard',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'metric card', 'kpi'],
  },
  {
    id: 'app-table',
    label: 'App Table',
    href: '/components/app/table',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'table'],
  },
  {
    id: 'app-tag',
    label: 'App Tag',
    href: '/components/app/tag',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'tag'],
  },
  {
    id: 'app-tooltip',
    label: 'App Tooltip',
    href: '/components/app/tooltip',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'tooltip'],
  },
  {
    id: 'app-alert',
    label: 'App Alert',
    href: '/components/app/alert',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'alert', 'feedback'],
  },
  {
    id: 'app-progress',
    label: 'App Progress',
    href: '/components/app/progress',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'progress', 'loader'],
  },
  {
    id: 'app-skeleton',
    label: 'App Skeleton',
    href: '/components/app/skeleton',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'skeleton', 'placeholder'],
  },
  {
    id: 'app-toast',
    label: 'App Toast',
    href: '/components/app/toast',
    group: 'App',
    keywords: ['app', 'react native', 'native', 'toast', 'notification'],
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
