import type { Meta, StoryObj } from '@storybook/react-vite';

import CustomDatePicker from './DatePicker';
import { useState } from 'react';

const meta: Meta<typeof CustomDatePicker> = {
  title: 'Components/Input/DatePicker',
  component: CustomDatePicker,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['contain', 'outline', 'clear'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export default meta;
type Story = StoryObj<typeof CustomDatePicker>;
export const Default: Story = {
  render: (args) => {
    const [date, setDate] = useState<Date | null>(new Date());

    return (
      <CustomDatePicker
        {...args}
        value={date}
        onChange={(d) => {
          if (!Array.isArray(d)) {
            setDate(d);
          }
        }}
      />
    );
  },
  args: {
    type: 'single',
    placeholder: 'Select a date',
  },
};
export const RangeSelection: Story = {
  render: (args) => {
    const [start, setStart] = useState<Date | undefined>(new Date());
    const [end, setEnd] = useState<Date | undefined>(undefined);

    return (
      <CustomDatePicker
        {...args}
        isRange
        startDate={start}
        endDate={end}
        onChange={(update) => {
          // Range 모드이므로 배열(tuple)인 경우만 처리
          if (Array.isArray(update)) {
            const [s, e] = update as [Date | null, Date | null];
            setStart(s ?? undefined);
            setEnd(e ?? undefined);
          }
        }}
      />
    );
  },
  args: {
    type: 'range',
    placeholder: 'Select range',
  },
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <CustomDatePicker
        type="single"
        value={new Date()}
        isError
        placeholder="Error State"
      />
      <CustomDatePicker
        type="single"
        value={null}
        disabled
        placeholder="Disabled State"
      />
    </div>
  ),
};
