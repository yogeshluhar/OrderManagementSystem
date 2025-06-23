import { useEffect, useState } from "react";
import ProductStatusButtons from "./statusbtn";
import axios from "axios";
import DeleteProductButton from "../API/deleteproductItem";
import "../Reusable/StyleSheet/style.css";
const CardItemStyle = {
  wrapper: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    // padding: "10px ",
    width: "100%",
    maxWidth: "1400px",
    overflowY: "auto",
    borderRadius: "2rem",
    flexGrow: 1,
    maxHeight: "100vh", 
    paddingBottom: '40vh'
  },
  scrollableGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gridAutoRows: "160px",
    gap: "10px",
    justifyItems: "center",
    // maxHeight: "500px", // scroll height
    // overflowY: "auto",
    // borderRadius: "2rem",
    // flexGrow: 1,
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
    position: "relative",
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
    flex: 1,
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

// const products = [
//   { id: 1, title: "Product A", desc: "A cool product", price: 10 },
//   { id: 2, title: "Product B", desc: "Even cooler", price: 15 },
//   { id: 3, title: "Product C", desc: "The coolest", price: 20 },
//   { id: 4, title: "Product D", desc: "Not bad", price: 12 },
//   { id: 5, title: "Product E", desc: "Top tier", price: 18 },
// ];

const CardItem = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://violently-internal-filly.ngrok-free.app/products/", {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div style={CardItemStyle.wrapper} className="hide-scrollbar">
      <div style={CardItemStyle.scrollableGrid} >
        {products?.map((item) => (
          <div key={item.id} style={CardItemStyle.cardContainer}>
            {/* Image + Text */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
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
                    alignContent: "center",
                  }}
                >
                  <h4 style={CardItemStyle.title}>{item.name}</h4>
                  <div>
                    <DeleteProductButton
                      productId={item.id}
                      onDeleteSuccess={(id) =>
                        setProducts((prev) => prev.filter((p) => p.id !== id))
                      }
                    />
                    {/* <button
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                      title="Delete"
                    >
                      <HugeiconsIcon
                        icon={CancelCircleIcon}
                        size={20}
                        color="red"
                        strokeWidth={2}
                      />
                    </button> */}
                  </div>
                </div>
                <p style={CardItemStyle.desc}>{item.category}</p>
                <p style={CardItemStyle.price}>
                  <strong>Price:</strong> ₹{item.price}
                </p>
              </div>
            </div>

            {/* Status Buttons below */}
            <div style={{ width: "100%" }}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
