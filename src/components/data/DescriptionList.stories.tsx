import type { Meta, StoryObj } from '@storybook/react-vite';
import DescriptionList from './DescriptionList';

const meta: Meta<typeof DescriptionList> = {
  title: 'Components/Data Display/DescriptionList',
  component: DescriptionList,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    columns: {
      control: 'select',
      options: [1, 2],
    },
  },
};

export default meta;
type Story = StoryObj<typeof DescriptionList>;

const items: Data.DescriptionListItem[] = [
  {
    label: 'Workspace',
    value: 'Kevin Design System',
    hint: 'Production environment',
  },
  {
    label: 'Owner',
    value: 'Kevin Lee',
    hint: 'Primary contact',
  },
  {
    label: 'Billing Cycle',
    value: 'Annual',
    hint: 'Renews on Apr 10',
  },
  {
    label: 'Region',
    value: 'US West',
    hint: 'Vancouver edge',
  },
];

export const Default: Story = {
  args: {
    items,
    size: 'md',
    columns: 1,
  },
};

export const TwoColumns: Story = {
  args: {
    items,
    size: 'md',
    columns: 2,
  },
};
