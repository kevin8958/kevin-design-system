import type { Meta, StoryObj } from '@storybook/react-vite';
import Modal from './Modal';
import Button from '@/components/action/Button';
import Typography from '@/components/foundation/Typography';
import { useModal } from '@/hooks/useModal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Action/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', 'full'],
    },
    state: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'danger'],
    },
    position: {
      control: 'radio',
      options: ['top', 'center', 'bottom'],
    },
    hideCancel: { control: 'boolean' },
    hideBottom: { control: 'boolean' },
    loading: { control: 'boolean' },
    onConfirm: { action: 'confirmed' },
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args) => {
    const { open, close, ModalWrapper } = useModal();

    // 훅의 상태와 스토리북의 액션을 함께 처리
    const handleClose = () => {
      close();
      args.onClose?.();
    };

    return (
      <>
        <Button onClick={open}>Open Standard Modal</Button>
        <ModalWrapper {...args} onClose={handleClose}>
          <Typography variant="B2">
            This is a standard modal. Now it will close correctly when you click
            the backdrop or buttons.
          </Typography>
        </ModalWrapper>
      </>
    );
  },
  args: {
    title: 'Standard Modal',
    maxWidth: 'md',
    position: 'center',
    state: 'default',
  },
};

export const States: Story = {
  render: (args) => {
    const info = useModal();
    const success = useModal();
    const warning = useModal();
    const danger = useModal();

    return (
      <div className="flex gap-4">
        <Button color="info" onClick={info.open}>
          Info
        </Button>
        <Button color="success" onClick={success.open}>
          Success
        </Button>
        <Button color="warning" onClick={warning.open}>
          Warning
        </Button>
        <Button color="danger" onClick={danger.open}>
          Danger
        </Button>

        <info.ModalWrapper
          {...args}
          state="info"
          title="Info Modal"
          onClose={() => {
            info.close();
            args.onClose?.();
          }}
        >
          Information message goes here.
        </info.ModalWrapper>
        <success.ModalWrapper
          {...args}
          state="success"
          title="Success Modal"
          onClose={() => {
            success.close();
            args.onClose?.();
          }}
        >
          Operation completed successfully!
        </success.ModalWrapper>
        <warning.ModalWrapper
          {...args}
          state="warning"
          title="Warning Modal"
          onClose={() => {
            warning.close();
            args.onClose?.();
          }}
        >
          Are you sure you want to proceed?
        </warning.ModalWrapper>
        <danger.ModalWrapper
          {...args}
          state="danger"
          title="Danger Modal"
          onClose={() => {
            danger.close();
            args.onClose?.();
          }}
        >
          This action is irreversible.
        </danger.ModalWrapper>
      </div>
    );
  },
};

export const Positions: Story = {
  render: (args) => {
    const top = useModal();
    const center = useModal();
    const bottom = useModal();

    return (
      <div className="flex gap-4">
        <Button variant="outline" onClick={top.open}>
          Top
        </Button>
        <Button variant="outline" onClick={center.open}>
          Center
        </Button>
        <Button variant="outline" onClick={bottom.open}>
          Bottom
        </Button>

        <top.ModalWrapper
          {...args}
          position="top"
          title="Top Position"
          onClose={() => {
            top.close();
            args.onClose?.();
          }}
        >
          Anchored to the top of the viewport.
        </top.ModalWrapper>
        <center.ModalWrapper
          {...args}
          position="center"
          title="Center Position"
          onClose={() => {
            center.close();
            args.onClose?.();
          }}
        >
          Default center alignment.
        </center.ModalWrapper>
        <bottom.ModalWrapper
          {...args}
          position="bottom"
          title="Bottom Position"
          onClose={() => {
            bottom.close();
            args.onClose?.();
          }}
        >
          Anchored to the bottom.
        </bottom.ModalWrapper>
      </div>
    );
  },
};

export const ActionControls: Story = {
  render: (args) => {
    const hideCancel = useModal();
    const hideBottom = useModal();

    return (
      <div className="flex gap-4">
        <Button variant="outline" onClick={hideCancel.open}>
          Hide Cancel
        </Button>
        <Button variant="outline" onClick={hideBottom.open}>
          Hide Bottom
        </Button>

        <hideCancel.ModalWrapper
          {...args}
          hideCancel
          title="X Button instead of Cancel"
          onClose={() => {
            hideCancel.close();
            args.onClose?.();
          }}
        >
          The cancel button is removed.
        </hideCancel.ModalWrapper>
        <hideBottom.ModalWrapper
          {...args}
          hideBottom
          title="No Action Buttons"
          onClose={() => {
            hideBottom.close();
            args.onClose?.();
          }}
        >
          The entire footer is hidden.
        </hideBottom.ModalWrapper>
      </div>
    );
  },
};
