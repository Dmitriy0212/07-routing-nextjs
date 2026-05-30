'use client';

import css from './Modal.module.css';
import React from 'react';

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div onClick={onClose} className={css.backdrop}>
      <div className={css.modal} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
