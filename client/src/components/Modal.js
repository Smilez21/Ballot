import React from 'react';

const Modal = ({ selections, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Results</h2>
        <p>Here are your selections:</p>
        <ul>
          {Object.keys(selections).map(categoryId => (
            <li key={categoryId}>
              <strong>{categoryId}:</strong> {selections[categoryId]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
