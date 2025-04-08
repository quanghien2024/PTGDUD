import "./Table.css";
import { customers } from "../Data/Table";
import Pen from '../../assets/create.png';

const statusStyles = {
  New: "status new",
  "In-progress": "status in-progress",
  Completed: "status completed",
};

const Table = () => {
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
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td className="customer-name">
                <img src={customer.avatar} alt="avatar" />
                <span>{customer.name}</span>
              </td>
              <td>{customer.company}</td>
              <td>${customer.orderValue}</td>
              <td>{customer.orderDate}</td>
              <td>
                <span className={statusStyles[customer.status]}>
                  {customer.status}
                </span>
              </td>
              <td>
                <button className="edit-button">
                 <img src={Pen} alt="Biểu tượng nhỏ" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="share">
       <p className="results-count">63 results</p>
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
