import { useState } from "react";
import ProductStatusButtons from "./statusbtn";

const CardItemStyle = {
  wrapper: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    padding: "10px",
    width: "100%",
    maxWidth: "1400px",
  },
  scrollableGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "10px",
    justifyItems: 'center'
  },
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: "2rem",
    display: "flex",
    flexDirection: "column  ",
    gap: "16px",
    padding: "12px",
    alignItems: "center",
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box",
  },
  imageBox: {
    width: "100px",
    height: "100px",
    backgroundColor: "#ccc",
    borderRadius: "1rem",
    overflow: "hidden",
    flexShrink: 0,
  },
  textBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "8px",
    flex: 1,
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    margin: 0,
  },
  desc: {
    fontSize: "14px",
    color: "#555",
    margin: 0,
  },
  price: {
    fontSize: "16px",
    fontWeight: "500",
    margin: 0,
  },
};

const products = [
  { id: 1, title: "Product A", desc: "A cool product", price: 10 },
  { id: 2, title: "Product B", desc: "Even cooler", price: 15 },
  { id: 3, title: "Product C", desc: "The coolest", price: 20 },
  { id: 4, title: "Product D", desc: "Not bad", price: 12 },
  { id: 5, title: "Product E", desc: "Top tier", price: 18 },
];

const CardItem = () => {
  return (
    <div style={CardItemStyle.wrapper}>
      <div style={CardItemStyle.scrollableGrid}>
        {products.map((item) => (
          <div key={item.id} style={CardItemStyle.cardContainer}>
            {/* Image + Text */}
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <div style={CardItemStyle.imageBox}>
                <img
                  src="https://www.wholeheartedeats.com/wp-content/uploads/2023/12/Baked-Samosas.jpg"
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={CardItemStyle.textBox}>
                <h4 style={CardItemStyle.title}>{item.title}</h4>
                <p style={CardItemStyle.desc}>{item.desc}</p>
                <p style={CardItemStyle.price}>
                  <strong>Price:</strong> ₹{item.price}
                </p>
              </div>
            </div>

            {/* Status Buttons below */}
            <div style={{ width: "100%" }}>
              <div style={{display:'flex',justifyContent: 'space-around'}}>
                <ProductStatusButtons />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardItem;
