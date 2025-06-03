import React, { useState, useContext, createContext, useEffect } from "react";

// FontAwesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// ----------- CartContext -------------
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existing = cartItems.find((i) => i.name === item.name);
    if (existing) {
      setCartItems(cartItems.map((i) =>
        i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// ----------- TopBar with Cart Icon -------------
const TopBar = () => {
  const { cartItems } = useContext(CartContext);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div style={styles.topBar}>
      <div style={styles.title}>🍔 FoodOrder</div>
      <div style={styles.cartIconWrapper}>
        <FontAwesomeIcon
          icon={faShoppingCart}
          size="lg"
          onClick={() => setShowDropdown(!showDropdown)}
          style={styles.icon}
        />
        {cartItems.length > 0 && (
          <span style={styles.badge}>{cartItems.length}</span>
        )}
        {showDropdown && <CartDropdown />}
      </div>
    </div>
  );
};

// ----------- CartDropdown -------------
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div style={styles.dropdown}>
      <h4>🛒 Your Cart</h4>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} style={styles.item}>
              {item.name} × {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// ----------- Sample ItemList for testing -------------
const ItemList = () => {
  const { addToCart } = useContext(CartContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace this URL with your actual API endpoint
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching items:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading items...</p>;

  return (
    <div style={styles.list}>
      {items.map((item) => (
        <div key={item.id} style={styles.card}>
          <img
            src={item.image}
            alt={item.name}
            style={{ width: "100%", height: "120px", objectFit: "cover" }}
          />
          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

const ConstCustomer = () => {
  return (
    <CartProvider>
      <TopBar />
      <ItemList />
    </CartProvider>
  );
};

// ----------- Styles -------------
const styles = {
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 24px",
    backgroundColor: "#f8f9fa",
    borderBottom: "1px solid #ddd",
    position: "relative",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  cartIconWrapper: {
    position: "relative",
    cursor: "pointer",
  },
  icon: {
    color: "#333",
  },
  badge: {
    position: "absolute",
    top: -6,
    right: -10,
    backgroundColor: "red",
    color: "white",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "0.75rem",
  },
  dropdown: {
    position: "absolute",
    right: 0,
    top: "120%",
    width: "250px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    zIndex: 100,
  },
  item: {
    marginBottom: "8px",
  },
   list: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    padding: "24px",
    flexWrap: "wrap",
  },
  card: {
    border: "1px solid #ddd",
    padding: "12px",
    borderRadius: "8px",
    width: "180px",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
};

export default ConstCustomer;
