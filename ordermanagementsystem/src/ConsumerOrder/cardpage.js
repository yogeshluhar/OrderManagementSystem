import React, { useContext } from "react";
import { CartContext } from "./cardcontext";
import Button from "../Reusable/Const/button";
import "../Reusable/StyleSheet/style.css";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";
import { useNavigate } from "react-router-dom";
const CardPage = () => {
  const { cartItems, incrementQuantity, decrementQuantity } =
    useContext(CartContext);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const gst = (subtotal * 0.18).toFixed(2);
  const total = (subtotal + parseFloat(gst)).toFixed(2);

  const navigate = useNavigate();

  return (
    <div style={styles.wrapper}>
      
      <div style={styles.container} className="cardcontainer">
      <div onClick={() => navigate(-1)}>
        <HugeiconsIcon
          icon={ArrowLeft02Icon}
          size={24}
          color="#000000"
          strokeWidth={2}
          style={styles.backIcon}
        />
      </div>
        {/* Left - Cart Items */}
        <div style={styles.cartSection}>
          <h2 style={styles.sectionTitle}>My Cart</h2>
          {cartItems.length === 0 ? (
            <div style={styles.empty}>🛒 Your cart is empty.</div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} style={styles.card}>
                <div style={styles.details}>
                  <h3 style={styles.title}>{item.name}</h3>
                  <p style={styles.desc}>{item.category}</p>
                  <div style={styles.priceBlock} className="priceBlock">
                    <span>₹{item.price}</span>
                    <span style={{fontWeight: 'bold'}}>Subtotal: ₹{item.price * item.quantity}</span>
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

        {/* Right - Billing Section */}
        <div style={styles.billSection}>
          <h2 style={styles.sectionTitle}>Price Details</h2>
          <div style={styles.billRow}>
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div style={styles.billRow}>
            <span>GST (18%)</span>
            <span>₹{gst}</span>
          </div>
          <div style={styles.totalRow}>
            <strong>Total</strong>
            <strong>₹{total}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    boxSizing: "border-box",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    width: "100%",
    maxWidth: "1200px",
    boxSizing: "border-box",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
  },
  backIcon: {
    cursor: "pointer",
    padding: "8px",
    borderRadius: "50%",
    backgroundColor: "#f2f2f2",
    transition: "background-color 0.3s ease",
  },
  cartSection: {
    flex: 2,
  },
  billSection: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: "16px",
    borderRadius: "6px",
    boxSizing: "border-box",
    height: "fit-content",
  },
  sectionTitle: {
    margin: "0",
    fontSize: "22px",
    fontWeight: "700",
    borderBottom: "2px solid #007bff",
    marginBottom: "16px",
    paddingBottom: "8px",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    marginBottom: "12px",
    background: "#f9fbff",
    border: "1px solid #e0e0e0",
    borderRadius: "6px",
  },
  details: {
    flex: 1,
    paddingRight: "10px",
  },
  title: {
    fontSize: "16px",
    fontWeight: "700",
    marginBottom: "4px",
    color: "#333",
  },
  desc: {
    fontSize: "13px",
    color: "#555",
    marginBottom: "6px",
  },
  priceBlock: {
    fontSize: "13px",
    display: "flex",
    justifyContent: "space-between",
    color: "#666",
  },
  controls: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  qty: {
    padding: "4px 10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontWeight: "600",
  },
  billRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "12px",
    fontSize: "15px",
    color: "#444",
  },
  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    borderTop: "2px solid #007bff",
    paddingTop: "12px",
    fontSize: "18px",
    fontWeight: "700",
  },
  empty: {
    fontSize: "16px",
    textAlign: "center",
    color: "#999",
    padding: "60px 0",
  },
};

export default CardPage;
