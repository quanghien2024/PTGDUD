import React, { useState } from 'react';
import Board from "../components/Board/Board";
import Table from "../components/Table/Table";
import Modal from "../components/Table/Modal";
import Overview from '../assets/Squares four 1.png';
import Detailedreport from '../assets/Filetext1.png';
import Download from '../assets/Download.png';
import Export from '../assets/Moveup.png';
import './AdminPage.css';

function OverviewPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customerToEdit, setCustomerToEdit] = useState(null);

  const handleEditClick = (customer) => {
    setCustomerToEdit(customer);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCustomerToEdit(null);
  };

  const handleSaveChanges = async (updatedCustomer) => {
    const response = await fetch(`http://localhost:3001/customers/${updatedCustomer.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCustomer),
    });

    if (response.ok) {
      alert("Customer updated successfully!");
      // Refresh or update state here if needed
      // For example, call fetchData again to update the table
    } else {
      alert("Error updating customer.");
    }

    handleCloseModal();
  };

  return (
    <div className="content-padding">
      <div className="view">
        <img src={Overview} alt="Overview Icon" />
        <p>Overview</p>
      </div>

      <div className="dash-board">
        <Board title="Turnover" />
        <Board title="Profit" />
        <Board title="New customer" />
      </div>

      <div className="report">
        <div className="left">
          <img src={Detailedreport} alt="Detailed Report Icon" />
          <p>Detailed report</p>
        </div>
        <div className="right">
          <button className="import-button">
            <img src={Download} alt="Download" className="button-icon" />
            <span>Import</span>
          </button>
          <button className="import-button">
            <img src={Export} alt="Export" className="button-icon" />
            <span>Export</span>
          </button>
        </div>
      </div>

      <Table onEdit={handleEditClick} />

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        customer={customerToEdit}
        onSave={handleSaveChanges}
      />
    </div>
  );
}

export default OverviewPage;
