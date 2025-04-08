import React, { useState, useEffect } from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, customer, onSave }) {
  if (!isOpen) return null;

  const [editedCustomer, setEditedCustomer] = useState({});

  useEffect(() => {
    if (customer) {
      setEditedCustomer({ ...customer });
    }
  }, [customer]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCustomer((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    onSave(editedCustomer);
    onClose();
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          ×
        </button>
        <h2 className="modal-title">Edit Customer</h2>
        {customer ? (
          <div className="modal-body">
            <div className="info-row">
              <span className="info-label">ID:</span>
              <span className="info-value">{editedCustomer.id}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Name:</span>
              <input
                type="text"
                name="name"
                value={editedCustomer.name || ''}
                onChange={handleInputChange}
                className="modal-input"
              />
            </div>
            <div className="info-row">
              <span className="info-label">Company:</span>
              <input
                type="text"
                name="company"
                value={editedCustomer.company || ''}
                onChange={handleInputChange}
                className="modal-input"
              />
            </div>
            <div className="info-row">
              <span className="info-label">Value:</span>
              <input
                type="number"
                name="orderValue"
                value={editedCustomer.orderValue || ''}
                onChange={handleInputChange}
                className="modal-input"
              />
            </div>
            <div className="info-row">
              <span className="info-label">Date:</span>
              <input
                type="date"
                name="orderDate"
                value={editedCustomer.orderDate || ''}
                onChange={handleInputChange}
                className="modal-input"
              />
            </div>
            <div className="info-row">
              <span className="info-label">Status:</span>
              <select
                name="status"
                value={editedCustomer.status || ''}
                onChange={handleInputChange}
                className="modal-select"
              >
                <option value="New">New</option>
                <option value="In-progress">In-progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>
        ) : (
          <p>Loading customer details...</p>
        )}
        <div className="modal-actions">
          <button
            onClick={onClose}
            type="button"
            className="modal-button modal-button-cancel"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveChanges}
            type="button"
            className="modal-button modal-button-save"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
