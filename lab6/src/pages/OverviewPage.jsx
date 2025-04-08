import React, { useState } from 'react';
import Board from "../components/Board/Board";
import Table from "../components/Table/Table";
import Modal from "../components/Table/Modal";
import ModalAdd from "../components/Table/ModalAdd";  
import Overview from '../assets/Squares four 1.png';
import Detailedreport from '../assets/Filetext1.png';
import Download from '../assets/Download.png';
import Export from '../assets/Moveup.png';
import './AdminPage.css';

function OverviewPage() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);  
  const [customerToEdit, setCustomerToEdit] = useState(null);

  const handleEditClick = (customer) => {
    setCustomerToEdit(customer);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setCustomerToEdit(null);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
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
    } else {
      alert("Error updating customer.");
    }

    handleCloseEditModal();
  };


  const handleAddCustomer = async (newCustomer) => {
    if (!newCustomer.avatar) {
      newCustomer.avatar = '/avatarclone.png'; 
    }
  
    const response = await fetch('http://localhost:3001/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: newCustomer.name,
        company: newCustomer.company,
        orderValue: newCustomer.orderValue,
        orderDate: newCustomer.orderDate,
        status: newCustomer.status,
        avatar: newCustomer.avatar, 
      }),
    });
  
    if (response.ok) {
      alert("Customer added successfully!");
    } else {
      alert("Error adding customer.");
    }
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
          <button className="import-button" onClick={() => setIsAddModalOpen(true)}>
            <img src={Export} alt="Export" className="button-icon" />
            <span>Add</span>
          </button>
        </div>
      </div>
      <Table onEdit={handleEditClick} />
      <Modal
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        customer={customerToEdit}
        onSave={handleSaveChanges}
      />
      <ModalAdd
        isOpen={isAddModalOpen}
        onClose={handleCloseAddModal}
        onSave={handleAddCustomer}
      />
    </div>
  );
}

export default OverviewPage;
