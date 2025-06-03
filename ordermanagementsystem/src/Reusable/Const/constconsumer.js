import React, { useEffect, useState } from "react";
import axios from "axios";

export const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => setOrders(res.data))
      .catch((err) => console.error("Error:", err));
  }, []);

  const OrderListStyleSheet = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", // Fixed min width
      justifyContent: "center",
      gap: "30px",
      padding: "4% 5%",
      backgroundColor: "#f0f2f5",
      width: "90%",
      margin: "0 auto",
    },
    card: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-start",
      borderRadius: "20px",
      background: "#ffffff",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      gap: "20px",
      textAlign: "left",
      minHeight: "250px",
    },
    title: {
      fontSize: "20px",
      fontWeight: "700",
    },
    ordername: {
      fontSize: "14px",
      color: "#555",
    },
    buttonGroup: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      gap: "12px",
    },
    btn: {
      flex: 1,
      padding: "12px 0",
      fontSize: "16px",
      fontWeight: "600",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      textAlign: "center",
    },
    acceptBtn: {
      backgroundColor: "#28a745",
      color: "#fff",
    },
    rejectBtn: {
      backgroundColor: "#dc3545",
      color: "#fff",
    },
  };

  const handleAccept = (id) => {
    alert(`Order ${id} accepted`);
  };

  const handleReject = (id) => {
    alert(`Order ${id} rejected`);
  };

  return (
    <div style={OrderListStyleSheet.container}>
      {orders.map((order) => (
        <div style={OrderListStyleSheet.card} key={order.id}>
          <div style={OrderListStyleSheet.title}>{order.title}</div>
          <div style={OrderListStyleSheet.ordername}>{order.body}</div>
          <div style={OrderListStyleSheet.buttonGroup}>
            <button
              style={{
                ...OrderListStyleSheet.btn,
                ...OrderListStyleSheet.acceptBtn,
              }}
              onClick={() => handleAccept(order.id)}
            >
              Accept
            </button>
            <button
              style={{
                ...OrderListStyleSheet.btn,
                ...OrderListStyleSheet.rejectBtn,
              }}
              onClick={() => handleReject(order.id)}
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
