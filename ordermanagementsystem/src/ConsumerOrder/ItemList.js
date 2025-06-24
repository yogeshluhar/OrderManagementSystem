import ItemCard from "./itemCard";
import { useEffect, useState } from "react";
import axios from "axios";
// const products = [
//   { id: 1, title: "Product A", desc: "A cool product", price: 10 },
//   { id: 2, title: "Product B", desc: "Even cooler", price: 15 },
//   { id: 3, title: "Product C", desc: "The coolest", price: 20 },
//   { id: 4, title: "Product D", desc: "Not bad", price: 12 },
//   { id: 5, title: "Product E", desc: "Top tier", price: 18 },
// ];

const ItemList = () => {
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
    <>
      <div style={styles.gridContainer} className="hide-scrollbar">
        <div style={styles.grid}>
          {products.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gridTemplateRows: "",
    gap: "16px",
    // padding: "15px 5px",
    // backgroundColor: "#f9f9f9",
    width: "100%",
    alignItems: "start",
    justifyItems: "center",
    gridAutoRows: "min-content",
  },
  gridContainer: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    // padding: "10px ",
    width: "100%",
    // maxWidth: "1400px",
    overflowY: "auto",
    borderRadius: "2rem",
    flexGrow: 1,
    maxHeight: "100vh",
    paddingBottom: "40vh",
  },
};

export default ItemList;
