import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { UserCircle02Icon } from "@hugeicons/core-free-icons/index";

const styles = {
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: '60px',
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
    background: "rgb(37, 82, 255)",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: 'flex',
    alignItems: 'center'
  },
  subMenu: {
    position: "absolute",
    top: "120%",
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

  const menuItems = ["Profile", "Logout"];

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
              transform: "scale(1.05)",
            }),
          }}
        >
          <HugeiconsIcon
            icon={UserCircle02Icon}
            size={36}
            color="#fff"
            strokeWidth={2}
          />
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
