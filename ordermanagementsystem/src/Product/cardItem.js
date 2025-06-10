import { useState } from "react";
import Button from "../Reusable/Const/button";

const CardItemStyle = {
  wrapper: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    paddingBottom: "80px",
  },
  scrollableGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "10px",
  },
  cardContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: "2rem",
    display: "flex",
    flexDirection: "row",
    gap: "16px",
    padding: "12px",
    alignItems: "center",
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
  fixedButtonContainer: {
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "80%",
    zIndex: 1000,
    display: "flex",
    justifyContent: "center",
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
    marginTop: "8px",
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
  // initialize available status per product
  const [availability, setAvailability] = useState(
    products.reduce((acc, item) => {
      acc[item.id] = true; // default is available
      return acc;
    }, {})
  );

  const toggleAvailability = (id) => {
    setAvailability((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div style={CardItemStyle.wrapper}>
      <div style={CardItemStyle.scrollableGrid}>
        {products.map((item) => {
          const isAvailable = availability[item.id];
          return (
            <div key={item.id} style={CardItemStyle.cardContainer}>
              <div style={CardItemStyle.imageBox}>
                <img
                  src="https://www.wholeheartedeats.com/wp-content/uploads/2023/12/Baked-Samosas.jpg"
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={CardItemStyle.textBox}>
                <div>
                  <h4 style={CardItemStyle.title}>{item.title}</h4>
                  <p style={CardItemStyle.desc}>{item.desc}</p>
                  <p style={CardItemStyle.price}>
                    <strong>Price:</strong> ₹{item.price}
                  </p>
                </div>
                <div style={CardItemStyle.buttonGroup}>
                  <Button
                    onClick={() => toggleAvailability(item.id)}
                    backgroundColor={isAvailable ? "#28a745" : "#dc3545"} // green or red
                    color="#fff"
                    width="100px"
                    height="36px"
                    fontSize="14px"
                    fontWeight="500"
                    borderRadius="12px"
                  >
                    {isAvailable ? "Available" : "Unavailable"}
                  </Button>
                  <Button
                    onClick={() => console.log("Edit clicked", item.id)}
                    backgroundColor="#007bff"
                    color="#fff"
                    width="100px"
                    height="36px"
                    fontSize="14px"
                    fontWeight="500"
                    borderRadius="12px"
                  >
                    Edit
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={CardItemStyle.fixedButtonContainer}>
        <Button
          width="80%"
          height="40px"
          fontSize="16px"
          fontWeight="600"
          borderRadius="3rem"
        >
          Add Product
        </Button>
      </div>
    </div>
  );
};

export default CardItem;
