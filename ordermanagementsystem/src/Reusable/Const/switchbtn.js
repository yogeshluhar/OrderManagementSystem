import React, { useState } from "react";
import Header from "./header";

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

      <div style={{ textAlign: "center", marginTop: "20px", fontSize: "18px" }}>
        {activeTab === "order" ? <></>: <Header />}
      </div>
    </>
  );
};

export default SwitchBtn;
