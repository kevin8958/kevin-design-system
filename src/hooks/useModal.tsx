import React, { useState, useCallback } from 'react';
import Modal from '@/components/action/Modal';

type ModalWrapperProps = Omit<Action.ModalProps, 'isOpen' | 'onClose'>;

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const ModalWrapper = ({ children, ...props }: ModalWrapperProps) => (
    <Modal isOpen={isOpen} onClose={close} {...props}>
      {children}
    </Modal>
  );

  return { open, close, ModalWrapper };
}
