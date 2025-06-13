import React, { useContext } from "react";
import { CartContext } from "./cardcontext";
import Button from "../Reusable/Const/button";

const CartDropdown = () => {
  const { cartItems, incrementQuantity, decrementQuantity } =
    useContext(CartContext);

  return (
    <div style={styles.dropdown}>
      <h2 style={styles.header}>Your Cart</h2>

      <div style={styles.itemsContainer}>
        {cartItems.length === 0 ? (
          <div style={styles.empty}>🛒 Your cart is empty.</div>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} style={styles.item}>
              <div style={styles.details}>
                <h4 style={styles.title}>{item.title}</h4>
                <p style={styles.desc}>{item.desc}</p>
                <div style={styles.meta}>
                  <span style={styles.price}>₹{item.price}</span>
                  <span style={styles.subtotal}>
                    Subtotal: ₹{item.price * item.quantity}
                  </span>
                </div>
              </div>

              <div style={styles.controls}>
                <Button
                  onClick={() => decrementQuantity(item.id)}
                  backgroundColor="#007bff"
                  color="#fff"
                  borderRadius="50%"
                  width="30px"
                  height="30px"
                  fontSize="18px"
                  fontWeight="600"
                  boxShadow="none"
                >
                  -
                </Button>
                <span style={styles.qty}>{item.quantity}</span>
                <Button
                  onClick={() => incrementQuantity(item.id)}
                  backgroundColor="#007bff"
                  color="#fff"
                  borderRadius="50%"
                  width="30px"
                  height="30px"
                  fontSize="18px"
                  fontWeight="600"
                  boxShadow="none"
                >
                  +
                </Button>
              </div>
            </div>
          ))
        )}
      </div>

      <div style={styles.total}>
        Total: ₹
        {cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}
      </div>
    </div>
  );
};

const styles = {
  dropdown: {
    position: "absolute",
    top: 50,
    right: -70,
    width: "380px",
    height: "100vh",
    backgroundColor: "#fefefe",
    borderLeft: "1px solid #e0e0e0",
    boxShadow: "-3px 0 10px rgba(0,0,0,0.1)",
    zIndex: 999,
    display: "flex",
    flexDirection: "column",
    padding: '10px'
  },
  header: {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "16px",
    color: "#222",
    borderBottom: "1px solid #ddd",
    paddingBottom: "8px",
  },
  itemsContainer: {
    flex: 1,
    overflowY: "auto",
    paddingRight: "6px",
  },
  item: {
    background: "#fff",
    borderRadius: "10px",
    padding: "16px",
    marginBottom: "16px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  details: {
    flex: 1,
    paddingRight: "10px",
  },
  title: {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "4px",
    color: "#333",
  },
  desc: {
    fontSize: "13px",
    color: "#666",
    marginBottom: "6px",
  },
  meta: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "13px",
    color: "#444",
  },
  price: {
    fontWeight: "500",
  },
  subtotal: {
    fontStyle: "italic",
    color: "#555",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  qty: {
    fontSize: "16px",
    fontWeight: "600",
    width: "24px",
    textAlign: "center",
    color: "#222",
  },
  total: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#000",
    borderTop: "1px solid #ccc",
    paddingTop: "16px",
    textAlign: "right",
    marginTop: "10px",
  },
  empty: {
    fontSize: "16px",
    textAlign: "center",
    color: "#999",
    padding: "60px 0",
  },
};

export default CartDropdown;
