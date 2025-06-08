import React, { useState } from "react";
import Swal from "sweetalert2";
import dummyOrders from "../../dummydata/dummydata";



const OrdersList = () => {
  
  const [orders, setOrders] = useState(dummyOrders);

  const handleStatusChange = (id, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <div className="orders-list">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} onStatusChange={handleStatusChange} />
      ))}
    </div>
  );
};

const OrderCard = ({ order, onStatusChange }) => {
  const handleCancel = () => {
    Swal.fire({
      title: "Are you sure?",
      html: `
        <b>Customer:</b> ${order.customer}<br/>
        <b>Product:</b> ${order.product}<br/>
        <b>Quantity:</b> ${order.quantity}<br/>
        <b>Payment:</b> ${order.payment}
      `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        onStatusChange(order.id, "Cancelled");
        Swal.fire("Cancelled!", "Order has been cancelled.", "success");
      }
    });
  };

  return (
    <div className="order-card">
      <h3>Order ID: {order.id}</h3>
      <p><strong>Customer:</strong> {order.customer}</p>
      <p><strong>Product:</strong> {order.product}</p>
      <p><strong>Qty:</strong> {order.quantity}</p>
      <p><strong>Address:</strong> {order.address}</p>
      <p><strong>Payment:</strong> {order.payment}</p>
      {order.status && <p><strong>Status:</strong> {order.status}</p>}

      <div className="btn-group">
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default OrdersList;
