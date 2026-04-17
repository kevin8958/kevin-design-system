export const createAppAccordionContentItems = (): App.AppAccordionItem[] => [
  {
    id: 'account',
    title: 'Account overview',
    description: 'Profile, billing, and access control in one place.',
    icon: '@',
    content:
      'Review plan details, permission updates, and recent activity without leaving the current screen.',
  },
  {
    id: 'notifications',
    title: 'Notifications',
    description: 'Choose which updates should reach your team.',
    icon: '!',
    badge: '3',
    content:
      'Control email digests, issue alerts, and release summaries with per-channel preferences.',
  },
  {
    id: 'billing',
    title: 'Billing and invoices',
    description: 'Track renewals and download monthly statements.',
    icon: '$',
    content:
      'Access invoices, update card details, and confirm renewal schedules from a single section.',
  },
];

export const createAppAccordionStateItems = (): App.AppAccordionItem[] => [
  {
    id: 'security',
    title: 'Security controls',
    description: 'Audit logs, sessions, and protection defaults.',
    icon: '#',
    content:
      'Keep MFA, device trust, and session history close to your most sensitive settings.',
  },
  {
    id: 'automation',
    title: 'Automation rules',
    description: 'Rule-based cleanup and workflow triggers.',
    icon: '*',
    content:
      'Connect follow-up actions to events such as submissions, escalations, or payment retries.',
  },
  {
    id: 'advanced',
    title: 'Advanced access',
    description: 'Available on enterprise plans only.',
    icon: '+',
    disabled: true,
    content:
      'This section stays unavailable until the account reaches the required plan tier.',
  },
];
