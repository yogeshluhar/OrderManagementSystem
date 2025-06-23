import Ordercards from "./ordercard";

export default function OrderItem() {
  return (
    <div style={styles.gridContainer}  className="hide-scrollbar">
      <div style={styles.grid}>
        <Ordercards />
        <Ordercards />
        <Ordercards />
        <Ordercards />
        <Ordercards />
        <Ordercards />
        <Ordercards />
        <Ordercards />
        <Ordercards />
        <Ordercards />
        <Ordercards />
        <Ordercards />
      </div>
      {/* <div style={{ height: "20vh" }}></div> */}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "15px", // ↓ Decrease gap here (adjust as needed)
    alignItems: "start",
    gridAutoRows: "min-content", // ← important
    width: "100%",
  },

  gridContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    // padding: "10px ",
    maxWidth: "1400px",
    overflowY: "auto",
    borderRadius: "2rem",
    flexGrow: 1,
    maxHeight: "100vh",
    // marginBottom: '20vh'
    paddingBottom: '30vh' 
  },
};
