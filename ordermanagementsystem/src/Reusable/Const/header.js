import React from "react";

const styles = {
  topBarStyle: {
    display: "flex",
    alignItems: "center",
    padding: "16px 10px",
    
    background: "rgb(37, 82, 277)",
    color: "#fff",
    gap: "10px",
  },
  headerText: {
    margin: 0,
    fontWeight: 600,
    fontSize: "clamp(20px, 2vw, 30px)",
    
  },
};

const Header = () => {
  return (
    <div style={styles.topBarStyle}>
      <h2 style={styles.headerText}>Header</h2>
    </div>
  );
};

export default Header;
