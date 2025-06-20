import Ordercards from "./ordercard";

export default function OrderItem() {
  return (
    <div style={styles.grid}>
      <Ordercards />
      <Ordercards />
      <Ordercards />
      <Ordercards />
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "16px",
    alignItems: "start",
    // justifyItems: "center",
    width: "100%",
  },
};
