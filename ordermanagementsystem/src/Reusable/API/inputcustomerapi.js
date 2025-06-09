import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../Const/button";

const ProductsApp = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    price: "",
    category: "",
    shop_id: "8c1bf956-d353-4aee-aef1-7a1ae4f6f838",
  });
  const [message, setMessage] = useState({ type: "", text: "" });

  const apiUrl = "https://mammoth-arriving-heartily.ngrok-free.app/products";

  // Fetch products
  const fetchProducts = async () => {
    try {
      const response = await axios.get(apiUrl, {
        headers: { "ngrok-skip-browser-warning": "69420" },
      });
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  // Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Show feedback message
  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: "", text: "" }), 3000);
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
        },
      });
      showMessage("success", "✅ Product added successfully!");
      setFormData({
        name: "",
        quantity: "",
        price: "",
        category: "",
        shop_id: "8c1bf956-d353-4aee-aef1-7a1ae4f6f838",

      });
      fetchProducts();
    } catch (err) {
      showMessage("error", "❌ Failed to add product.");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif", maxWidth: "600px", margin: "auto" }}>
      <h2 style={{ marginBottom: "20px" }}>Add New Product</h2>

      {message.text && (
        <div
          style={{
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "5px",
            color: message.type === "success" ? "#155724" : "#721c24",
            backgroundColor: message.type === "success" ? "#d4edda" : "#f8d7da",
            border: `1px solid ${message.type === "success" ? "#c3e6cb" : "#f5c6cb"}`,
          }}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <Button width="100%" height="50px" borderRaidus="2rem" fontSize="24px" fontWeight="600">Add Product</Button>
        <button type="submit " style={buttonStyle}>Add Product</button> 
      </form>

      <hr />

      <h3>Products List</h3>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "15px" }}>
          <thead>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Qty</th>
              <th style={thStyle}>Price</th>
              <th style={thStyle}>Category</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr key={prod.id}>
                <td style={tdStyle}>{prod.name}</td>
                <td style={tdStyle}>{prod.quantity}</td>
                <td style={tdStyle}>₹{prod.price}</td>
                <td style={tdStyle}>{prod.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

// Inline style objects
const inputStyle = {
  display: "block",
  width: "100%",
  padding: "10px",
  marginBottom: "12px",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const thStyle = {
  borderBottom: "2px solid #ccc",
  padding: "8px",
  textAlign: "left",
};

const tdStyle = {
  borderBottom: "1px solid #eee",
  padding: "8px",
};

export default ProductsApp;
