import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import ComponenColorsPage from '@/pages/components/foundation/colors/page';

const meta: Meta<typeof ComponenColorsPage> = {
  title: 'Foundation/Colors',
  component: ComponenColorsPage,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ComponenColorsPage>;

export const Default: Story = {};
