import { useState, useRef } from "react";
import axios from "axios";
import Button from "../Reusable/Const/button";
import Swal from "sweetalert2";
import "../Reusable/StyleSheet/style.css";

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
    padding: "30px 20px",
    width: "90%",
    maxWidth: "500px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
    animation: "fadeIn 0.3s ease",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    width: "100%",
    outline: "none",
  },
  textarea: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    resize: "vertical",
    width: "100%",
    outline: "none",
  },
  buttonsRow: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "10px",
  },
  imageCircle: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    border: "2px dashed #aaa",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    cursor: "pointer",
    backgroundColor: "#f0f0f0",
    position: "relative",
  },
  plusIcon: {
    fontSize: "40px",
    color: "#bbb",
  },
  imageTag: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

const EditProductModal = ({ productData, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: productData?.name || "",
    category: productData?.category || "",
    price: productData?.price || "",
    shop_id: productData?.shop_id || "1",
  });
  const [previewUrl, setPreviewUrl] = useState(productData?.image || "");
  const fileInputRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewUrl(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://violently-internal-filly.ngrok-free.app/products/${productData.id}`,
        {
          ...formData,
          price: parseFloat(formData.price),
        },
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );

      await Swal.fire({
        title: "Success!",
        text: "Product updated successfully!",
        icon: "success",
        confirmButtonColor: "#28a745",
        timer: 2000,
        showConfirmButton: false,
      });

      onSuccess();
      onClose();
    } catch (err) {
      console.error("Error updating:", err);
      Swal.fire({
        title: "Error!",
        text: "Failed to update product.",
        icon: "error",
        confirmButtonColor: "#dc3545",
      });
    }
  };

  return (
    <div style={modalStyle.overlay}>
      <form style={modalStyle.content} onSubmit={handleSubmit}>
        <h3>Edit Product</h3>

        <div style={modalStyle.imageCircle} onClick={() => fileInputRef.current.click()}>
          {previewUrl ? (
            <img src={previewUrl} alt="Preview" style={modalStyle.imageTag} />
          ) : (
            <span style={modalStyle.plusIcon}>+</span>
          )}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </div>

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
          placeholder="Category / Description"
          rows="3"
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
          min="0"
          required
        />

        <div style={modalStyle.buttonsRow}>
          <Button
            type="button"
            onClick={onClose}
            backgroundColor="#dc3545"
            color="#fff"
            width="48%"
            height="45px"
            fontSize="15px"
            fontWeight="700"
            borderRadius="2rem"
          >
            Cancel
          </Button>

          <Button
            type="submit"
            backgroundColor="#28a745"
            color="#fff"
            width="48%"
            height="45px"
            fontSize="15px"
            fontWeight="700"
            borderRadius="2rem"
          >
            Update
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditProductModal;
