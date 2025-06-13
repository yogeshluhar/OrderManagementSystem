import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ShoppingCart02Icon,
  UserCircle02Icon,
} from "@hugeicons/core-free-icons/index";
import CartIcon from "../../ConsumerOrder/cardIcon";
import CartDropdown from "../../ConsumerOrder/cardpage";

const styles = {
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "60px",
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
    display: "flex",
    alignItems: "center",
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
  sideContainer: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
};

const Header = ({ userType }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isCustomer = userType === "consumer";
    const [showCart, setShowCart] = useState(false);

  const toggleCart = () => setShowCart((prev) => !prev);


  return (
    <div style={styles.topBar}>
      <h2 style={styles.title}>Header</h2>

      <div style={styles.sideContainer}>
        {isCustomer && (
           <div style={{ position: "relative" }}>
            <CartIcon onClick={toggleCart} itemCount={3} />
            {showCart && <CartDropdown />}
          </div>
          /* <div style={{ cursor: "pointer", position: "relative", bottom: '-2px' }}>
            <HugeiconsIcon
              icon={ShoppingCart02Icon}
              size={32}
              color="#fff"
              strokeWidth={2}
            />
            <span
              style={{
                position: "absolute",
                top: "-6px",
                right: "-10px",
                backgroundColor: "red",
                color: "#fff",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "12px",
              }}
            >
              3
            </span>
          </div> */
        )}

        <div style={styles.userMenu}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={styles.userButton}
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
              <li style={styles.subMenuItem}>Profile</li>
              <li style={styles.subMenuItem}>Logout</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
