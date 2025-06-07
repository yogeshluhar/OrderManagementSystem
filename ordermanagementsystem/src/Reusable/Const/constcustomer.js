import React, { useState, useContext, createContext, useEffect } from "react";
import {
  useNavigate,
  useLocation,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

// ----------- CartContext -------------
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const cartItem = {
      name: item.name || item.title || "Unnamed Item",
      price: item.price,
      image: item.image,
    };

    const existing = cartItems.find((i) => i.name === cartItem.name);

    if (existing) {
      setCartItems(
        cartItems.map((i) =>
          i.name === cartItem.name ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCartItems([...cartItems, { ...cartItem, quantity: 1 }]);
    }
  };

  const incrementQuantity = (name) => {
    setCartItems(
      cartItems.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (name) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, incrementQuantity, decrementQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

// ----------- TopBar with Cart Icon -------------
const TopBar = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div style={styles.topBar}>
      <div style={styles.title}>FoodOrder</div>
      <div
        style={styles.cartIconWrapper}
        onClick={() => navigate("/cart")}
        title="Go to Cart"
      >
        <FontAwesomeIcon icon={faShoppingCart} size="lg" style={styles.icon} />
        {cartItems.length > 0 && (
          <span style={styles.badge}>{cartItems.length}</span>
        )}
      </div>
    </div>
  );
};

// ----------- Cart Page -------------
const CartPage = () => {
  const { cartItems, incrementQuantity, decrementQuantity } =
    useContext(CartContext);
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  const gst = subtotal * 0.18;
  const grandTotal = subtotal + gst;

  return (
    <div style={styles.cartPage}>
      <div
        style={{
          display: "flex",
          alignContent: "stretch",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          marginBottom: "10px",
        }}>
        <button
          onClick={() => navigate(-1)}
          style={styles.backButton}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#0056b3")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#007bff")
          }
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        <h2 style={{...styles.title, margin:0}}>🛒 Your Cart</h2>
      </div>

      {cartItems.length === 0 ? (
        <p style={{ fontSize: "1.1rem", textAlign: "center", color: "#555" }}>
          Your cart is empty.
        </p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0, marginBottom: "20px" }}>
            {cartItems.map((item, index) => (
              <li key={index} style={styles.cartItem}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={styles.cartItemImage}
                />
                <div style={{ flex: 1 }}>
                  <strong
                    title={item.name}
                    style={{
                      display: "block",
                      fontSize: "1.1rem",
                      marginBottom: "6px",
                      color: "#333",
                    }}
                  >
                    {item.name.length > 30
                      ? item.name.slice(0, 30) + "..."
                      : item.name}
                  </strong>

                  <div style={{ fontSize: "0.95rem", color: "#555" }}>
                    ₹{item.price.toFixed(2)} × {item.quantity} = ₹
                    {(item.price * item.quantity).toFixed(2)}
                  </div>

                  <div style={styles.quantityControls}>
                    <button
                      onClick={() => decrementQuantity(item.name)}
                      style={styles.quantityButton}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#0056b3")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "#007bff")
                      }
                    >
                      −
                    </button>

                    <span style={styles.quantityNumber}>{item.quantity}</span>

                    <button
                      onClick={() => incrementQuantity(item.name)}
                      style={styles.quantityButton}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#0056b3")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "#007bff")
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <hr style={{ borderColor: "#ccc",    }} />

          <div style={styles.totalDetails}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Subtotal:</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>GST (18%):</span>
              <span>₹{gst.toFixed(2)}</span>
            </div>
            <div style={styles.grandTotal}>
              <span>Grand Total:</span>
              <span>₹{grandTotal.toFixed(2)}</span>
            </div>
          </div>

          <button type="button" style={styles.addToCartButton}>Buy Now</button>
        </>
      )}
    </div>
  );
};

// ----------- Available Orders (API) -------------

const ItemList = () => {
  const { cartItems, addToCart, incrementQuantity, decrementQuantity } =
    useContext(CartContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://mammoth-arriving-heartily.ngrok-free.app/products",{headers:{"ngrok-skip-browser-warning": "69420"}})
      .then((res) => {
        console.log("API Response:", res.data);
        const fetchedItems = Array.isArray(res.data)
          ? res.data
          : res.data.products || [];

        setItems(fetchedItems);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching items:", err);
        setLoading(false);
      });
  }, []);

  const getQuantity = (name) => {
    const item = cartItems.find((i) => i.name === name || i.title === name);
    return item ? item.quantity : 0;
  };

  if (loading) return <p>Loading items...</p>;

  return (
    <div style={styles.list}>
      {items.map((item) => {
        const name = item.name || item.title;
        const quantity = getQuantity(name);

        return (
          <div key={item.id} style={styles.card}>
            <img src={item.image} alt={name} style={styles.cardImg} />
            <h3>{name.slice(0, 18)}...</h3>
            <p>Price: ₹{item.price}</p>

            {quantity === 0 ? (
              <button
                style={styles.addToCartButton}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor =
                    styles.addToCartButtonHover.backgroundColor)
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor =
                    styles.addToCartButton.backgroundColor)
                }
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            ) : (
              <div style={styles.quantityControls}>
                <button
                  style={styles.quantityButton}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor =
                      styles.quantityButtonHover.backgroundColor)
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor =
                      styles.quantityButton.backgroundColor)
                  }
                  onClick={() => decrementQuantity(name)}
                >
                  -
                </button>
                <span style={styles.quantityNumber}>{quantity}</span>
                <button
                  style={styles.quantityButton}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor =
                      styles.quantityButtonHover.backgroundColor)
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor =
                      styles.quantityButton.backgroundColor)
                  }
                  onClick={() => incrementQuantity(name)}
                >
                  +
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

// ----------- Intake Orders (Local) -------------
const IntakeList = () => {
  const { addToCart } = useContext(CartContext);

  const items = [
    {
      id: 101,
      name: "Paneer Butter Masala",
      price: 180,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 102,
      name: "Chicken Biryani",
      price: 200,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 103,
      name: "Veg Thali",
      price: 150,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div style={styles.list}>
      {items.map((item) => (
        <div key={item.id} style={styles.card}>
          <img src={item.image} alt={item.name} style={styles.cardImg} />
          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

// ----------- Component with Tabs and Routes (Router inside here) -------------
const Main = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("available");

  // Sync tab with URL path
  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/available") {
      setSelectedTab("available");
    } else if (location.pathname === "/intake") {
      setSelectedTab("intake");
    }
  }, [location.pathname]);

  // On tab click, navigate and set tab
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    if (tab === "available") navigate("/available");
    else if (tab === "intake") navigate("/intake");
  };

  return (
    <>
      <TopBar />
      {/* Show tabs only if NOT on /cart */}
      {location.pathname !== "/cart" && (
        <div style={styles.tabWrapper}>
          <button
            onClick={() => handleTabClick("available")}
            style={{
              ...styles.tabButton,
              ...(selectedTab === "available" ? styles.activeTab : {}),
            }}
          >
            Available Orders
          </button>
          <button
            onClick={() => handleTabClick("intake")}
            style={{
              ...styles.tabButton,
              ...(selectedTab === "intake" ? styles.activeTab : {}),
            }}
          >
            Intake Orders
          </button>
        </div>
      )}

      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/available" element={<ItemList />} />
        <Route path="/intake" element={<IntakeList />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};

// ----------- Wrapper with Router and CartProvider -------------
const ConstCustomer = () => (
  <Router>
    <CartProvider>
      <Main />
    </CartProvider>
  </Router>
);

// ----------- Styles -------------
const styles = {
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 24px",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e0e0e0",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#333",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  cartIconWrapper: {
    position: "relative",
    cursor: "pointer",
    color: "#555",
  },
  icon: {
    color: "#555",
  },
  badge: {
    position: "absolute",
    top: -6,
    right: -10,
    backgroundColor: "#007bff", // Soft blue instead of red
    color: "white",
    borderRadius: "50%",
    padding: "3px 7px",
    fontSize: "0.75rem",
    fontWeight: "600",
    boxShadow: "0 0 3px rgba(0,0,0,0.2)",
  },
  cartList: {
    maxHeight: "250px",
    overflowY: "auto",
    padding: 0,
    listStyle: "none",
  },
  cartItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    padding: "10px",
    border: "1px solid rgb(221, 221, 221)",
    borderRadius: "8px",
    backgroundColor: "rgb(249, 249, 249)",

    // display: "flex",
    // gap: "12px",
    // marginBottom: "12px",
    // alignItems: "center",
    // borderBottom: "1px solid #eee",
    // paddingBottom: "12px",
  },
  cartImg: {
    width: "50px",
    height: "50px",
    borderRadius: "6px",
    objectFit: "cover",
  },
  quantityControls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#f9f9f9",
    borderRadius: "20px",
    padding: "6px 12px",
    gap: "8px",
    // boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },
  quantityButton: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "28px",
    height: "28px",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
  quantityButtonHover: {
    backgroundColor: "#0056b3",
  },
  quantityNumber: {
    fontWeight: "600",
    fontSize: "16px",
    minWidth: "20px",
    textAlign: "center",
    color: "#333",
  },
  totalDetails: {
    fontSize: "15px",
    lineHeight: "1.6",
    marginTop: "15px",
    color: "#444",
    fontWeight: "600",
  },
  list: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "15px 0",
    flexWrap: "wrap",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    border: "1px solid #ddd",
    padding: "16px",
    borderRadius: "10px",
    width: "190px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.07)",
    userSelect: "none",
    backgroundColor: "#fff",
    transition: "box-shadow 0.3s ease",
  },
  cardImg: {
    width: "100%",
    height: "140px",
    objectFit: "contain",
    marginBottom: "12px",
  },
  cardHover: {
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
  },
  tabWrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: "80px",
    gap: "16px",
  },
  tabButton: {
    padding: "10px 15px",
    backgroundColor: "#f0f0f0",
    color: "#333",
    border: "1px solid #ccc",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
    transition: "all 0.3s ease",
  },
  activeTab: {
    backgroundColor: "#007bff",
    borderColor: "#0056b3",
    color: "#fff",
    fontWeight: "700",
  },
  addToCartButton: {
    padding: "10px 18px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0,123,255,0.3)",
    transition: "background-color 0.3s ease",
  },
  addToCartButtonHover: {
    backgroundColor: "#0056b3",
  },
  backButton: {
    padding: "8px 18px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "background-color 0.3s ease",
  },
  cartPage: {
    padding: "20px",
    maxWidth: "800px",
    margin: "auto",
    marginTop: "50px ",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
  },
  cartItemImage: {
    width: "70px",
    height: "70px",
    objectFit: "contain",
    borderRadius: "4px",
  },
  grandTotal: {
    display: "flex",
    justifyContent: "space-between",
    fontWeight: "700",
    fontSize: "1.3rem",
    borderTop: "1px solid #ccc",
    paddingTop: "12px",
    marginTop: "12px",
    color: "#007bff",
  },
};

export default ConstCustomer;
