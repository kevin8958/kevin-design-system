import type { Meta, StoryObj } from '@storybook/react-vite';
import TextInput from './TextInput';
import { LuSearch, LuLock, LuEye, LuEyeOff } from 'react-icons/lu';
import { useState } from 'react';
import Button from '@/components/action/Button';

const meta: Meta<typeof TextInput> = {
  title: 'Components/Input/TextInput',
  component: TextInput,
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
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
    },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    required: { control: 'boolean' },
    placeholder: { control: 'text' },
    label: { control: 'text' },
    errorMsg: { control: 'text' },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

// 1. 기본형
export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    size: 'md',
    required: true,
  },
};

// 2. 모든 크기 비교
export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6 w-[400px]">
      <TextInput
        {...args}
        size="sm"
        label="Small Size"
        placeholder="sm (36px)"
      />
      <TextInput
        {...args}
        size="md"
        label="Medium Size"
        placeholder="md (42px)"
      />
      <TextInput
        {...args}
        size="lg"
        label="Large Size"
        placeholder="lg (48px)"
      />
    </div>
  ),
};

// 3. 상태별 (Disabled, Error)
export const States: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6 w-[400px]">
      <TextInput
        {...args}
        label="Disabled State"
        disabled
        value="Fixed Value"
      />
      <TextInput
        {...args}
        label="Error State"
        error
        errorMsg="This field is required."
        placeholder="Check the error message"
      />
    </div>
  ),
};

// 4. Prefix & Suffix 활용
export const Adornments: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6 w-[400px]">
      <TextInput
        {...args}
        label="With Search Icon"
        prefix={<LuSearch className="text-neutral-400" />}
        placeholder="Search..."
      />
      <TextInput
        {...args}
        label="Currency Input"
        prefix={<span className="text-sm font-medium text-neutral-400">$</span>}
        suffix={<span className="text-sm text-neutral-400">USD</span>}
        type="number"
        placeholder="0.00"
      />
    </div>
  ),
};

// 5. 인터랙티브 (비밀번호 토글)
export const PasswordToggle: Story = {
  render: (args) => {
    const [show, setShow] = useState(false);
    return (
      <div className="w-[400px]">
        <TextInput
          {...args}
          type={show ? 'text' : 'password'}
          label="Password"
          placeholder="Enter your password"
          prefix={<LuLock className="text-neutral-400" />}
          suffix={
            <Button
              variant="clear"
              color="neutral"
              classes="p-2!"
              onClick={() => setShow(!show)}
            >
              {show ? <LuEye size={18} /> : <LuEyeOff size={18} />}
            </Button>
          }
        />
      </div>
    );
  },
};
