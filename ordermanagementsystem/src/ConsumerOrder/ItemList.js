import ItemCard from "./itemCard";

const products = [
  { id: 1, title: "Product A", desc: "A cool product", price: 10 },
  { id: 2, title: "Product B", desc: "Even cooler", price: 15 },
  { id: 3, title: "Product C", desc: "The coolest", price: 20 },
  { id: 4, title: "Product D", desc: "Not bad", price: 12 },
  { id: 5, title: "Product E", desc: "Top tier", price: 18 },
];

const ItemList = () => {
  return (
    <div style={styles.grid}>
      {products.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

const styles = {
   grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "16px",
    // padding: "15px 5px",
    // backgroundColor: "#f9f9f9",
    width: "100%",
    alignItems: 'start',
    justifyItems: 'center'
  },
};

export default ItemList;
