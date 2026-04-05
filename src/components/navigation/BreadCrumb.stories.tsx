import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';
import BreadCrumb from './BreadCrumb';

const meta: Meta<typeof BreadCrumb> = {
  title: 'Components/Navigation/Breadcrumb',
  component: BreadCrumb,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/components/navigation/breadcrumb']}>
        <div className="w-[640px]">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BreadCrumb>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Navigation', href: '/components/navigation' },
      { label: 'Breadcrumb', href: '/components/navigation/breadcrumb' },
    ],
  },
};

export const DeepPath: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Workspace', href: '/workspace' },
      { label: 'Design System', href: '/workspace/design-system' },
      { label: 'Navigation', href: '/workspace/design-system/navigation' },
      {
        label: 'Breadcrumb',
        href: '/components/navigation/breadcrumb',
      },
    ],
  },
};
