import type { Meta, StoryObj } from '@storybook/react-vite';
import Sticker from './Sticker';

const meta: Meta<typeof Sticker> = {
  title: 'Components/Interaction/Sticker',
  component: Sticker,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof Sticker>;

export const Default: Story = {};

export const CompactBoard: Story = {
  args: {
    boardWidth: 520,
    boardHeight: 320,
  },
};
