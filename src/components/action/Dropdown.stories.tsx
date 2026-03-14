import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  LuUser,
  LuSettings,
  LuTrash2,
  LuShare2,
  LuMail,
  LuGithub,
} from 'react-icons/lu';
import Dropdown from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Action/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    buttonVariant: {
      control: 'select',
      options: ['contain', 'outline', 'clear'],
    },
    dialogPosition: {
      control: 'radio',
      options: ['left', 'right'],
    },
    dialogWidth: {
      control: 'number',
    },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

// Mock Data
const basicItems: Action.DropdownItem[] = [
  { type: 'item', id: 'profile', label: 'Profile Settings', icon: <LuUser /> },
  {
    type: 'item',
    id: 'preferences',
    label: 'Preferences',
    icon: <LuSettings />,
  },
  {
    type: 'item',
    id: 'delete',
    label: 'Delete Account',
    icon: <LuTrash2 />,
    danger: true,
  },
];

const groupedItems: Action.DropdownItem[] = [
  {
    type: 'group',
    id: 'group-1',
    label: 'Account',
    items: [
      { type: 'item', id: 'profile', label: 'Profile', icon: <LuUser /> },
      { type: 'item', id: 'billing', label: 'Billing' },
    ],
  },
  {
    type: 'group',
    id: 'group-2',
    label: 'Actions',
    items: [{ type: 'item', id: 'logout', label: 'Logout', danger: true }],
  },
];

const subMenuItems: Action.DropdownItem[] = [
  { type: 'item', id: 'copy', label: 'Copy Link' },
  {
    type: 'submenu',
    id: 'share',
    label: 'Share to...',
    icon: <LuShare2 />,
    items: [
      { type: 'item', id: 'email', label: 'Email', icon: <LuMail /> },
      { type: 'item', id: 'github', label: 'GitHub', icon: <LuGithub /> },
    ],
  },
];

export const Default: Story = {
  args: {
    label: 'Dropdown',
    items: basicItems,
    buttonVariant: 'contain',
    size: 'md',
  },
};

export const Grouped: Story = {
  args: {
    label: 'Grouped Menu',
    items: groupedItems,
    dialogWidth: 180,
  },
};

export const SubMenu: Story = {
  args: {
    label: 'Submenu Case',
    items: subMenuItems,
    dialogWidth: 160,
  },
};

export const CustomWidth: Story = {
  args: {
    label: 'Fixed Width (250px)',
    items: [
      {
        type: 'item',
        id: '1',
        label: 'This is a very long label that will be truncated',
      },
      { type: 'item', id: '2', label: 'Short label' },
    ],
    dialogWidth: 250,
  },
};

export const Positions: Story = {
  render: (args) => (
    <div className="flex gap-[200px] items-start">
      <Dropdown {...args} label="Left (Default)" dialogPosition="left" />
      <Dropdown {...args} label="Right Position" dialogPosition="right" />
    </div>
  ),
  args: {
    items: basicItems,
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-end gap-4">
      <Dropdown {...args} label="Small" size="sm" />
      <Dropdown {...args} label="Medium" size="md" />
      <Dropdown {...args} label="Large" size="lg" />
    </div>
  ),
  args: {
    items: basicItems,
  },
};
