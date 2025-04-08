import React, { useState } from 'react';
import './ModalAdd.css';

function ModalAdd({ isOpen, onClose, onSave }) {
  if (!isOpen) return null;

  const [newCustomer, setNewCustomer] = useState({
    name: '',
    company: '',
    orderValue: '',
    orderDate: '',
    status: 'New',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddCustomer = () => {
    onSave(newCustomer);
    onClose();
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>×</button>
        <h2 className="modal-title">Add New Customer</h2>
        <div className="modal-body">
          <div className="info-row">
            <span className="info-label">Name:</span>
            <input
              type="text"
              name="name"
              value={newCustomer.name}
              onChange={handleInputChange}
              className="modal-input"
            />
          </div>
          <div className="info-row">
            <span className="info-label">Company:</span>
            <input
              type="text"
              name="company"
              value={newCustomer.company}
              onChange={handleInputChange}
              className="modal-input"
            />
          </div>
          <div className="info-row">
            <span className="info-label">Value:</span>
            <input
              type="number"
              name="orderValue"
              value={newCustomer.orderValue}
              onChange={handleInputChange}
              className="modal-input"
            />
          </div>
          <div className="info-row">
            <span className="info-label">Date:</span>
            <input
              type="date"
              name="orderDate"
              value={newCustomer.orderDate}
              onChange={handleInputChange}
              className="modal-input"
            />
          </div>
          <div className="info-row">
            <span className="info-label">Status:</span>
            <select
              name="status"
              value={newCustomer.status}
              onChange={handleInputChange}
              className="modal-select"
            >
              <option value="New">New</option>
              <option value="In-progress">In-progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
        <div className="modal-actions">
          <button
            onClick={onClose}
            type="button"
            className="modal-button modal-button-cancel"
          >
            Cancel
          </button>
          <button
            onClick={handleAddCustomer}
            type="button"
            className="modal-button modal-button-save"
          >
            Add Customer
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalAdd;
