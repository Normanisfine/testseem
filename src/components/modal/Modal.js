import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modalOverlay">
      <div className='modalContent'>
        {/* <button className="closeButton" onClick={onClose}>
          &times;
        </button> */}
        {children}
      </div>
    </div>
  );
};

export default Modal;