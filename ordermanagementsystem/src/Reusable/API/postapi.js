import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://mammoth-arriving-heartily.ngrok-free.app/shops/";

const PostAndFetchShops = () => {
  const [formData, setFormData] = useState({ name: "", location: "" });
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Fetch all shops
  const fetchShops = async () => {
    try {
      const res = await axios.get(API_URL, {
        headers: { "ngrok-skip-browser-warning": "69420" },
      });
      setShops(res.data);
    } catch (error) {
      console.error("Error fetching shops:", error);
    }
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(API_URL, formData, {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
        },
      });
      console.log("Shop created:", res.data);
      alert("Shop added successfully!");
      setFormData({ name: "", location: "" }); // Clear form
      fetchShops(); // Refresh list
    } catch (err) {
      console.error("Error submitting:", err.response?.data || err.message);
      alert("Failed to submit shop.");
    }

    setLoading(false);
  };

  // Fetch shops on component mount
  useEffect(() => {
    fetchShops();
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Create New Shop</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Shop Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: "80%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
          style={{ width: "80%", padding: "8px", marginBottom: "10px" }}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Add Shop"}
        </button>
      </form>

      <hr />

      <h3>Shop List</h3>
      {shops.length === 0 ? (
        <p>No shops available.</p>
      ) : (
        <ul>
          {shops.map((shop) => (
            <li key={shop.id}>
              <strong>{shop.name}</strong> — {shop.location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostAndFetchShops;
