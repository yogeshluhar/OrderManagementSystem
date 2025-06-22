import React, { useState } from "react";
import axios from "axios";

const ShopForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const response = await axios.post(
        "https://violently-internal-filly.ngrok-free.app/shops/",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      setMessage("Shop added successfully!");
      setFormData({ name: "", location: "" });
    } catch (error) {
      setMessage("Error: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div style={styles.wrapper}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Add Shop</h2>

        <input
          type="text"
          name="name"
          placeholder="Shop Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>Submit</button>

        {message && <p style={styles.message}>{message}</p>}
      </form>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(90deg, #e2e2e2, #c9d6ff)",
    padding: "20px",
    boxSizing: "border-box",
  },
  form: {
    background: "#fff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 0 30px rgba(0,0,0,0.2)",
    maxWidth: "400px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    boxSizing: "border-box",
  },
  heading: {
    marginBottom: "10px",
    textAlign: "center",
    color: "#333",
  },
  input: {
    padding: "12px 15px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    boxSizing: "border-box",
  },
  button: {
    backgroundColor: "#7494ec",
    color: "#fff",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },
  message: {
    marginTop: "10px",
    textAlign: "center",
    color: "green",
  },
};

export default ShopForm;
