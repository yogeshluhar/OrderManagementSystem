import React, { useState } from "react";
import axios from "axios";
import Button from "../Reusable/Const/button";

const ShopForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            backgroundColor="#007bff"
            color="#fff"
            width="180px"
            height="50px"
            fontSize="18px"
            fontWeight="600"
            borderRadius="3rem"
          >
            Submit
          </Button>
        </div>

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

  message: {
    marginTop: "10px",
    textAlign: "center",
    color: "green",
  },
};

export default ShopForm;
