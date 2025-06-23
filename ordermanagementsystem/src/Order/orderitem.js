import Ordercards from "./ordercard";

export default function OrderItem() {
  return (
    <div style={styles.gridContainer}>
      
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
    paddingBottom: '20vh'
  }
  
};
