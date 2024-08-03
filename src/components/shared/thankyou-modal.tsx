import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

interface ThankYouModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const ThankYouModal: React.FC<ThankYouModalProps> = ({
  isOpen,
  onRequestClose
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)'
        }
      }}
    >
      <h2>Thank You!</h2>
      <p>Your donation was successful. We appreciate your support!</p>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default ThankYouModal;
