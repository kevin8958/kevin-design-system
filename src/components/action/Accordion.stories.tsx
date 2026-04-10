import type { Meta, StoryObj } from '@storybook/react-vite';
import { LuBell, LuCreditCard, LuUsers } from 'react-icons/lu';
import Accordion from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Action/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: 'radio',
      options: ['single', 'multiple'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const items: Action.AccordionItem[] = [
  {
    id: 'account',
    title: 'Account overview',
    description: 'Profile, billing, and access control in one place.',
    icon: <LuUsers />,
    content:
      'Review plan details, permission changes, and recent activity without leaving the current page.',
  },
  {
    id: 'notifications',
    title: 'Notifications',
    description: 'Choose which updates should reach your team.',
    icon: <LuBell />,
    badge: (
      <span className="rounded-full bg-secondary-500/10 px-2 py-0.5 text-[11px] font-semibold text-secondary-600 dark:bg-primary-400/15 dark:text-primary-300">
        3
      </span>
    ),
    content:
      'Control email digests, issue alerts, and release summaries with per-channel preferences.',
  },
  {
    id: 'billing',
    title: 'Billing & invoices',
    description: 'Track renewals and download monthly statements.',
    icon: <LuCreditCard />,
    content:
      'Access current invoices, update card details, and confirm renewal schedules from a single section.',
  },
];

export const Default: Story = {
  args: {
    items,
    defaultValue: ['account'],
    size: 'md',
    type: 'single',
  },
};

export const Multiple: Story = {
  args: {
    items,
    defaultValue: ['account', 'notifications'],
    size: 'md',
    type: 'multiple',
  },
};

export const WithDisabledItem: Story = {
  args: {
    items: items.map((item) =>
      item.id === 'billing' ? { ...item, disabled: true } : item,
    ),
    defaultValue: ['account'],
    size: 'md',
    type: 'single',
  },
};
