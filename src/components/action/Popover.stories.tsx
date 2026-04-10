import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from '@/components/action/Button';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Popover from './Popover';

const meta: Meta<typeof Popover> = {
  title: 'Components/Action/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    side: {
      control: 'radio',
      options: ['top', 'right', 'bottom', 'left'],
    },
    align: {
      control: 'radio',
      options: ['start', 'center', 'end'],
    },
    showArrow: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    trigger: <Button variant="outline" color="neutral">Popover</Button>,
    title: 'Popover title',
    description: 'A floating card for compact contextual details.',
    children:
      'Use popovers for extra context, shortcuts, or lightweight follow-up actions.',
    side: 'bottom',
    align: 'center',
  },
};

export const Placements: Story = {
  render: () => (
    <div className="relative flex min-h-[320px] items-center justify-center">
      <FlexWrapper classes="max-w-[420px] flex-wrap justify-center" gap={6}>
        {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
          <Popover
            key={side}
            side={side}
            title={`${side[0].toUpperCase()}${side.slice(1)} placement`}
            description="Position the floating card around the trigger."
            portal={false}
            defaultOpen
            trigger={
              <Button variant="outline" color="neutral">
                {side}
              </Button>
            }
          >
            The card stays anchored to the selected side.
          </Popover>
        ))}
      </FlexWrapper>
    </div>
  ),
};

export const DefaultOpen: Story = {
  args: {
    trigger: <Button variant="outline" color="neutral">Open by default</Button>,
    title: 'Saved filters',
    description: 'Reuse this view whenever you need the same slice of data.',
    children: 'Shared with design, product, and support.',
    defaultOpen: true,
    portal: false,
  },
};
