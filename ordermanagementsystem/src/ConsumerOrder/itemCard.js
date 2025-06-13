import { HugeiconsIcon } from "@hugeicons/react";
import { CancelCircleIcon } from "@hugeicons/core-free-icons";
import AddToCartButton from "./addtocard";

const CardItemStyle = {
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    padding: "12px",
    alignItems: "center",
    width: "250px",
    boxSizing: "border-box",
  },
  imageBox: {
    width: "80px",
    height: "80px",
    backgroundColor: "#ccc",
    borderRadius: "5rem",
    overflow: "hidden",
    flexShrink: 0,
  },
  textBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "8px",
    // flex: 1,
    textAlign: "left",
  },
  title: {
    fontSize: "15px",
    fontWeight: "600",
    margin: 0,
  },
  desc: {
    fontSize: "12px",
    color: "#555",
    margin: 0,
  },
  price: {
    fontSize: "14px",
    fontWeight: "500",
    margin: 0,
  },
};

const ItemCard = ({ item }) => {
  return (
    <div style={CardItemStyle.cardContainer}>
      {/* Image + Text */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: "16px",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div style={CardItemStyle.imageBox}>
          <img
            src="https://www.wholeheartedeats.com/wp-content/uploads/2023/12/Baked-Samosas.jpg"
            alt={item.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div style={CardItemStyle.textBox}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h4 style={CardItemStyle.title}>{item.title}</h4>
          </div>
          <p style={CardItemStyle.desc}>{item.desc}</p>
          <p style={CardItemStyle.price}>
            <strong>Price:</strong> ₹{item.price}
          </p>
        </div>
      </div>

      {/* Add to Cart Button */}
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <AddToCartButton item={item} />
      </div>
    </div>
  );
};

export default ItemCard;
