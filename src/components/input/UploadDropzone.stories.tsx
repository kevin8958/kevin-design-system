import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import UploadDropzone from './UploadDropzone';

const meta: Meta<typeof UploadDropzone> = {
  title: 'Components/Input/UploadDropzone',
  component: UploadDropzone,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    multiple: { control: 'boolean' },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    accept: { control: 'text' },
    label: { control: 'text' },
    description: { control: 'text' },
    helperText: { control: 'text' },
    errorMsg: { control: 'text' },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof UploadDropzone>;

const InteractiveUploadDropzone = (args: Input.UploadDropzoneProps) => {
  const [files, setFiles] = useState<File[]>(args.files || []);

  return (
    <div className="w-[520px]">
      <UploadDropzone
        {...args}
        files={files}
        onChange={(nextFiles) => {
          setFiles(nextFiles);
          args.onChange?.(nextFiles);
        }}
      />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <InteractiveUploadDropzone {...args} />,
  args: {
    label: 'Project Files',
    description: 'Upload the files needed for review.',
    helperText: 'Drag files here or click the browse button.',
    multiple: true,
  },
};

export const States: Story = {
  render: () => (
    <div className="flex w-[520px] flex-col gap-6">
      <InteractiveUploadDropzone
        label="Invalid State"
        invalid
        errorMsg="Please upload an image file."
        accept="image/*"
      />
      <InteractiveUploadDropzone
        label="Disabled State"
        disabled
        helperText="This upload area is temporarily unavailable."
      />
    </div>
  ),
};

export const SingleFile: Story = {
  render: (args) => <InteractiveUploadDropzone {...args} />,
  args: {
    label: 'Profile Image',
    helperText: 'Only one file can be attached.',
    multiple: false,
    accept: 'image/*',
  },
};
