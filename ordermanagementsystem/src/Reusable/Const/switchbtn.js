import React, { useState } from "react";
import Header from "./header";

const SwitchBtn = () => {
  const [activeTab, setActiveTab] = useState("order");

 const SwitchBtnStyleSheet = {
    switchcontainer: {
      display: "flex",
      justifyContent: "center",
      margin: '12px 0'
    },
    switchbtn: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      background: "rgb(37, 82, 255)",
      padding: "5px",
      borderRadius: "3rem",
    },
    orderbtn: (isActive) => ({
      height: "2.9rem",
      width: "8rem",
      borderRadius: "2rem",
      border: "none",
      outline: "none",
      fontSize: "19px",
      fontWeight: "bold",
      background: isActive ? "white" : "transparent",
      color: isActive ? "#333" : "#fff",
      transition: "all 0.3s ease",
      cursor: "pointer",
    }),
    productbtn: (isActive) => ({
      height: "2.9rem",
      width: "8rem",
      borderRadius: "2rem",
      border: "none",
      outline: "none",
      fontSize: "19px",
      fontWeight: "bold",
      background: isActive ? "white" : "transparent",
      color: isActive ? "#333" : "#fff",
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
            Orders
          </button>
          <button
            style={SwitchBtnStyleSheet.productbtn(activeTab === "product")}
            onClick={() => setActiveTab("product")}
          >
            Products
          </button>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "20px", fontSize: "18px" }}>
        {activeTab === "order" ? <></>: <Header />}
      </div>
    </>
  );
};

export default SwitchBtn;
