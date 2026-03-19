import React, { useState, useCallback } from 'react';
import Modal from '@/components/action/Modal';

type ModalWrapperProps = Omit<Action.ModalProps, 'isOpen' | 'onClose'> & {
  onClose?: () => void;
};

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const ModalWrapper = useCallback(
    ({ children, onClose, ...props }: ModalWrapperProps) => {
      const handleClose = () => {
        close();
        onClose?.();
      };

      return (
        <Modal isOpen={isOpen} onClose={handleClose} {...props}>
          {children}
        </Modal>
      );
    },
    [isOpen, close],
  );

  return { open, close, ModalWrapper };
}
