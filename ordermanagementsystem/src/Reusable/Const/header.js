import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const styles = {
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 16px",
    background: "rgb(37, 82, 255)",
    color: "white",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "clamp(20px, 2vw, 30px)",
    fontWeight: 600,
    margin: 0,
  },
  userMenu: {
    position: "relative",
  },
  userButton: {
    backgroundColor: "#ffffff", // white background
    border: "none",
    padding: "8px",
    borderRadius: "6rem",
    cursor: "pointer",
    color: "rgb(37, 82, 255)",   
    fontSize: "16px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
    transition: "all 0.3s ease",
  }, 
  subMenu: {
    position: "absolute",
    top: "100%",
    right: 0,
    backgroundColor: "white",
    listStyle: "none",
    padding: "5px 0",
    borderRadius: "6px",
    border: "1px solid #ddd",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
    zIndex: 10,
    minWidth: "150px",
  },
  subMenuItem: {
    padding: "10px 20px",
    cursor: "pointer",
    color: "#333",
    whiteSpace: "nowrap",
  },
  subMenuItemHover: {
    backgroundColor: "#f5f5f5",
  },
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = ["Profile", "Settings", "Logout"];

  return (
    <div style={styles.topBar}>
      <h2 style={styles.title}>Header</h2>

      <div style={styles.userMenu}>
        <button
          onClick={toggleMenu}
          onMouseEnter={() => setHoveredItem("button")}
          onMouseLeave={() => setHoveredItem(null)}
          style={{
            ...styles.userButton,
            ...(hoveredItem === "button" && {
              backgroundColor: "#f0f0ff",
              transform: "scale(1.05)",
            }),
          }}
        >
          <FontAwesomeIcon icon={faUser} />
        </button>

        {isMenuOpen && (
          <ul style={styles.subMenu}>
            {menuItems.map((item, index) => (
              <li
                key={index}
                style={{
                  ...styles.subMenuItem,
                  ...(hoveredItem === index ? styles.subMenuItemHover : {}),
                }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
