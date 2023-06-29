import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

class Modal extends React.Component<ModalProps> {
  render() {
    const { isOpen, onClose, children } = this.props;

    if (!isOpen) {
      return null;
    }

    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          {children}
        </div>
      </div>
    );
  }
}

export default Modal;
