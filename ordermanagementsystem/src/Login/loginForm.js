import React, { useState } from "react";
import Button from "../Reusable/Const/button";
import axios from "axios";
import { HugeiconsIcon } from "@hugeicons/react";
import { ViewIcon, ViewOffSlashIcon } from "@hugeicons/core-free-icons";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
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
        "https://your-login-api-endpoint.com/login",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      setMessage("Login successful!");
      setFormData({ name: "", password: "" });
    } catch (error) {
      setMessage(
        "Login failed: " + (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <div style={styles.wrapper} >
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.heading}>Login</h1>

        <div style={styles.inputBox}>
          <input
            type="text"
            name="name"
            placeholder="Username"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={{ ...styles.inputBox, position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <div
            onClick={() => setShowPassword((prev) => !prev)}
            style={styles.iconWrapper}
          >
            <HugeiconsIcon
              icon={showPassword ? ViewIcon : ViewOffSlashIcon}
              size={24}
              color="#ccc"
              strokeWidth={2}
            />
          </div>
        </div>

        <div style={styles.forgot}>
          <a style={styles.link}>Forgot Password?</a>
        </div>

        <Button
          backgroundColor="#007bff"
          color="#fff"
          width="100%"
          height="50px"
          fontSize="16px"
          fontWeight="700"
          borderRadius="8px"
        >
          Login
        </Button>

        {message && <p style={{ color: "red", textAlign: "center" }}>{message}</p>}

      </form>
    </div>
  );
};

const styles = {
  wrapper: {
    width: "100%",
    minHeight: "100vh",
    background: "linear-gradient(90deg, #e2e2e2, #c9d6ff)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    boxSizing: "border-box",
  },
  form: {
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "30px",
    boxShadow: "0 0 30px rgba(0, 0, 0, 0.2)",
    boxSizing: "border-box",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "20px",
    textAlign: "center",
    color: "#333",
  },
  inputBox: {
    marginBottom: "18px",
    boxSizing: "border-box",
  },
  input: {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    boxSizing: "border-box",
    outline: "none",
  },
  forgot: {
    textAlign: "right",
    marginBottom: "20px",
  },
  link: {
    fontSize: "14px",
    color: "#333",
    textDecoration: "none",
  },
  iconWrapper: {
    position: "absolute",
    right: "15px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    userSelect: "none",
  },
};

export default LoginForm;
