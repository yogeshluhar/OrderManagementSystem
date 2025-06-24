import HistoryCard from "./historycard";
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
        {/* <HistoryCard/> */}
      </div>
      {/* <div style={{ height: "20vh" }}></div> */}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "15px",
    alignItems: "start",
    gridAutoRows: "min-content", 
    width: "100%",
  },

  gridContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    // maxWidth: "1400px",
    overflowY: "auto",
    borderRadius: "2rem",
    flexGrow: 1,
    maxHeight: "100vh",
    paddingBottom: '30vh' 
  },
};
