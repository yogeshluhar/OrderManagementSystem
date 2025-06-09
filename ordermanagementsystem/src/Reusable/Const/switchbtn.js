import React, { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import dummyOrders from "../../dummydata/dummydata";
import '../../Reusable/StyleSheet/timepass.css'
const SwitchBtn = () => {
  const [activeTab, setActiveTab] = useState("order");

  const SwitchBtnStyleSheet = {
    switchcontainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: '10px'
    },
    switchbtn: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      background: "#f0f0f0",
      padding: "5px",
      borderRadius: "3rem",
    },
    orderbtn: (isActive) => ({
      height: "2.5rem",
      width: "8rem",
      borderRadius: "2rem",
      border: "none",
      outline: "none",
      fontSize: "15px",
      fontWeight: "500",
      background: isActive ? "rgb(37, 82, 255)" : "transparent",
      color: isActive ? "#fff" : "#333",
      transition: "all 0.3s ease",
      cursor: "pointer",
    }),
    historybtn: (isActive) => ({
      height: "2.5rem",
      width: "8rem",
      borderRadius: "2rem",
      border: "none",
      outline: "none",
      fontSize: "15px",
      fontWeight: "500",
      background: isActive ? "rgb(37, 82, 255)" : "transparent",
      color: isActive ? "#fff" : "#333",
      transition: "all 0.3s ease",
      cursor: "pointer",
    }),
  };

  return (
    <>
      <div style={SwitchBtnStyleSheet.switchcontainer}>
        <div style={SwitchBtnStyleSheet.switchbtn}>
          <button
            style={SwitchBtnStyleSheet.orderbtn(activeTab === "order")}
            onClick={() => setActiveTab("order")}
          >
            Order
          </button>
          <button
            style={SwitchBtnStyleSheet.historybtn(activeTab === "history")}
            onClick={() => setActiveTab("history")}
          >
            History
          </button>
        </div>
      </div>

      {/* Show content based on active tab */}
      <div style={{ textAlign: "center", marginTop: "20px", fontSize: "18px" }}>
        {activeTab === "order" ? (
          <>
            <AccordionOrderList />
          </>


        ) : (
          <p>📜 History Section Content</p>
        )}
      </div>
    </>
  );
};

export default SwitchBtn;



export const AccordionOrderList = () => {
  const orders = [
    {
      id: 1,
      title: "Delicious Samosa",
      description: "Crispy and spicy samosa stuffed with potatoes and peas.",
      image: "https://srmsweets.com/online/wp-content/uploads/2023/09/samosa.jpg",
    },
    {
      id: 2,
      title: "Sweet Gulab Jamun",
      description: "Soft and juicy milk-solid balls soaked in sugar syrup.",
      image: "https://img.freepik.com/premium-photo/gulab-jamun-indian-sweet-dessert_57665-2827.jpg",
    },
    {
      id: 3,
      title: "Paneer Tikka",
      description: "Grilled paneer cubes marinated with spices.",
      image: "https://static.toiimg.com/thumb/53314156.cms?width=1200&height=900",
    },
  ];

  const [activeId, setActiveId] = useState(null);
  // const navigate = useNavigate();

  const styles = {
    container: {
      borderRadius: "2rem",
      margin: "10px 15px",
      boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
      overflow: "hidden",
      cursor: "pointer",
    },
    titleBar: {
      padding: "13px 15px",
      backgroundColor: "rgb(37, 82, 255)",
      color: "#fff",
      fontWeight: "600",
      fontSize: "16px",
      textAlign: "left",
    },
    content: {
      padding: "20px",
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      alignItems: "center",
      backgroundColor: "#f9fbff",
      color: "#444",
      fontSize: "15px",
      lineHeight: 1.5,
      borderTop: "1px solid #ddd",
    },
    image: {
      width: "110px",
      height: "110px",
      borderRadius: "12px",
      objectFit: "inherit",  
      boxShadow: "0 4px 8px rgba(0,0,0,0.12)",
    },
    description: {
      margin: 0,
      textAlign: "justify",
    },
    button: {
      marginTop: "10px",
      padding: "6px 14px",
      borderRadius: "1rem",
      border: "none",
      backgroundColor: "#2552ff",
      color: "white",
      cursor: "pointer",
    },
  };

  const toggleActive = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {orders.map((order) => (
        <div
          key={order.id}  // key must be here
          style={styles.container}
          onClick={() => toggleActive(order.id)}
        >
          <div style={styles.titleBar}>{order.title}</div>

          {activeId === order.id && (
            <div style={styles.content}>
              <img src={order.image} alt={order.title} style={styles.image} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p style={styles.description}>{order.description}</p>
                <Link
                  to="/order-details"
                  state={order}
                  style={{ textDecoration: "none" }}
                  // onClick={(e) => e.stopPropagation()} 
                >
                  <button style={styles.button}>Visit</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

