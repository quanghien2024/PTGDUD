import React, { useState, useEffect } from 'react';
import "./Table.css";
import Pen from '../../assets/create.png';

const statusStyles = {
  New: "status new",
  "In-progress": "status in-progress",
  Completed: "status completed",
};

const API_URL = 'http://localhost:3001/customers';

const Table = () => {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCustomers(data);
      } catch (e) {
        console.error("Error fetching customer data:", e);
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="table-container"><p>Loading customers...</p></div>;
  }

  if (error) {
    return <div className="table-container"><p>Error loading data: {error}</p></div>;
  }

  return (
    <div className="table-container">
      <table className="customer-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Customer Name</th>
            <th>Company</th>
            <th>Order Value</th>
            <th>Order Date</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td><input type="checkbox" /></td>
              <td className="customer-name">
                <img src={customer.avatar || '/default-avatar.png'} alt={`${customer.name}'s avatar`} />
                <span>{customer.name}</span>
              </td>
              <td>{customer.company}</td>
              <td>${customer.orderValue}</td>
              <td>{customer.orderDate}</td>
              <td>
                {customer.status && statusStyles[customer.status] ? (
                  <span className={statusStyles[customer.status]}>
                    {customer.status}
                  </span>
                ) : (
                  <span className="status">Unknown</span>
                )}
              </td>
              <td>
                <button className="edit-button">
                  <img src={Pen} alt="Edit customer" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="share">
        <p className="results-count">{customers.length} results</p>
        <div className="pagination">
          <span>«</span>
          <span className="active">1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>...</span>
          <span>11</span>
          <span>»</span>
        </div>
      </div>
    </div>
  );
};

export default Table;