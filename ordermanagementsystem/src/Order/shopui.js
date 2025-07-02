import React, { useState } from "react";
import { useGetShopsQuery } from "../Redux/ShopsAPI/shopAPI";


const ShopUI = () => {
  const { data: shops = [], isLoading, isError, error } = useGetShopsQuery();
  const [hoveredCard, setHoveredCard] = useState(null);

  const styles = {
    container: {
      height: "100vh",
      background: "#f8f9fa",
      padding: "16px",
      boxSizing: "border-box",
      overflowY: "auto",
      backgroundColor: "#f5f5f5",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "16px",
    },
    card: {
      background: "#ffffff",
      borderRadius: "1rem",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
      padding: "16px",
      textAlign: "center",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
      touchAction: "manipulation",
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)",
    },
    name: {
      fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
      fontWeight: "600",
      marginBottom: "6px",
      color: "#343a40",
      wordWrap: "break-word",
    },
    location: {
      fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
      color: "#6c757d",
      wordWrap: "break-word",
    },
    skeletonCard: {
      background: "#fff",
      borderRadius: "1rem",
      padding: "16px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      height: "240px",
      animation: "pulse 1.5s infinite",
    },
    skeletonLine: (width) => ({
      height: "16px",
      width: width,
      background: "#e0e0e0",
      borderRadius: "8px",
    }),
  };

  const SkeletonCard = () => (
    <div style={styles.skeletonCard}>
      <div style={styles.skeletonLine("60%")} />
      <div style={styles.skeletonLine("80%")} />
    </div>
  );

  if (isError) {
    return <div style={styles.container}>❌ Error: {error.message}</div>;
  }

  return (
    <div style={styles.container} className="hide-scrollbar">
      <div style={styles.grid}>
        {isLoading
          ? Array.from({ length: 20 }).map((_, idx) => <SkeletonCard key={idx} />)
          : shops.map((shop, index) => (
              <div
                key={shop.id}
                style={{
                  ...styles.card,
                  ...(hoveredCard === index ? styles.cardHover : {}),
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <h3 style={styles.name}>{shop.name.toUpperCase()}</h3>
                <p style={styles.location}>📍 {shop.location}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ShopUI;
