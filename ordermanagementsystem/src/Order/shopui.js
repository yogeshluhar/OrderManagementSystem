import axios from "axios";
import { useEffect, useState } from "react";

const ShopUI = () => {
  const styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      padding: "20px",
    },
    card: {
      background: "#fefefe",
      borderRadius: "2rem",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      padding: "20px",
      textAlign: "center",
      transition: "transform 0.2s ease",
    },
    name: {
      fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
      fontWeight: "600",
      marginBottom: "0.5rem",
      color: "#2c3e50",
    },
    location: {
      fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
      color: "#555",
      marginTop: "5px",
    },
  };

  const [shops, setShops] = useState([]);

  useEffect(() => {
    axios
      .get("https://violently-internal-filly.ngrok-free.app/shops/", {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((res) => {
        setShops(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div style={styles.grid}>
      {shops.map((shop) => (
        <div key={shop.id} style={styles.card}>
          <h3 style={styles.name}>{shop.name.toUpperCase()}</h3>
          <p style={styles.location}>📍 {shop.location}</p>
        </div>
      ))}
    </div>
  );
};

export default ShopUI;
