import React, { useState, useEffect } from "react";
import Button from "../Reusable/Const/button";
import Swal from "sweetalert2";
import axios from "axios";
import '../Reusable/StyleSheet/style.css'
const modalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10000,
  },
  content: {
    backgroundColor: "#fff",
    borderRadius: "1rem",
    padding: "20px",
    width: "80%",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    alignItems: "center",
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
  textarea: {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    boxSizing: "border-box",
    outline: "none",
    resize: "vertical",
  },
  buttonsRow: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "10px",
    gap: "10px",
    width: "100%",
  },
};

const EditProductModal = ({
  isOpen,
  onClose,
  initialData,
  onUpdateSuccess,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        category: initialData.category || "",
        price: initialData.price || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedProduct = {
      name: formData.name,
      category: formData.category,
      price: parseFloat(formData.price),
      quantity: initialData.quantity, // keep original quantity
      shop_id: initialData.shop_id,
    };
    console.log("Sending PATCH to API with:", updatedProduct);
    try {
      const response = await axios.put(
        `https://violently-internal-filly.ngrok-free.app/products/${initialData.id}/`,
        updatedProduct,
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );

      Swal.fire({
        title: "Updated!",
        text: "✅ Product updated successfully.",
        icon: "success",
        confirmButtonColor: "#28a745",
        timer: 1500,
        showConfirmButton: false,
        background: "#ffffff",
        color: "#333",
        customClass: {
          popup: "swal2-custom-popup",
          title: "swal2-custom-title",
          content: "swal2-custom-text",
          icon: "swal2-custom-icon",
        },
        buttonsStyling: false,
      });
      if (typeof onUpdateSuccess === "function") {
        onUpdateSuccess(response.data);
      }

      onClose();
    } catch (err) {
      console.error("Update error:", err);
      Swal.fire({
        title: "Error!",
        text: "❌ Failed to update product.",
        icon: "error",
        confirmButtonColor: "#dc3545",
        background: "#ffffff",
        color: "#333",
        customClass: {
          popup: "swal2-custom-popup",
          title: "swal2-custom-title",
          content: "swal2-custom-text",
          icon: "swal2-custom-icon",
          confirmButton: "swal2-custom-confirm-btn",
        },
        buttonsStyling: false,
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div style={modalStyle.overlay}>
      <form style={modalStyle.content} onSubmit={handleSubmit}>
        <h3>Edit Product</h3>

        <input
          style={modalStyle.input}
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <textarea
          style={modalStyle.textarea}
          name="category"
          placeholder="Description"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <input
          style={modalStyle.input}
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <div style={modalStyle.buttonsRow}>
          <Button
            type="button"
            onClick={onClose}
            backgroundColor="#dc3545"
            color="#fff"
            width="160px"
            height="50px"
            fontSize="16px"
            fontWeight="700"
            borderRadius="3rem"
          >
            Cancel
          </Button>

          <Button
            type="submit"
            backgroundColor="#28a745"
            color="#fff"
            width="160px"
            height="50px"
            fontSize="16px"
            fontWeight="700"
            borderRadius="3rem"
          >
            Update
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditProductModal;
