import { useState, useRef } from "react";
import axios from "axios";
import Button from "../Reusable/Const/button";
import Swal from "sweetalert2";
import '../Reusable/StyleSheet/style.css'

const modalStyle = {
  overlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
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
    gap: '10px',
    width: "100%",
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
    backgroundColor: "#f9f9f9",
    position: "relative",
  },
  plusIcon: {
    fontSize: "40px",
    color: "#aaa",
  },
  imageTag: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  fixedButtonWrapper: {
    position: "fixed",
    bottom: "20px",
    zIndex: 10000,
  },
};

const AddToProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    shop_id: "1",
  });
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const fileInputRef = useRef();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setImageFile(null);
    setPreviewUrl("");
    setFormData({ name: "", category: "", price: "", shop_id: "1" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewUrl(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleCircleClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let uploadedImageUrl = formData.image;

    if (imageFile) {
      uploadedImageUrl = previewUrl;
    }

    const productData = {
      ...formData,
      // image: uploadedImageUrl,
      ...formData,
      price: parseFloat(formData.price),
      quantity: 1,
    };

    try {
      const response = await axios.post(
        "https://violently-internal-filly.ngrok-free.app/products/",
        productData,
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );

      console.log("Product added:", response.data);
      closeModal();
      await Swal.fire({
        title: "Success!",
        text: "✅ Product added successfully!",
        icon: "success",
        confirmButtonColor: "#28a745",
        confirmButtonText: "OK",
        timer: 2000,
        showConfirmButton: false,
        customClass: {
          popup: "swal2-custom-popup",
          title: "swal2-custom-title",
          content: "swal2-custom-text",
        },
      });
      
    } catch (err) {
      console.error(" Error:", err);
      Swal.fire({
        title: "Oops!",
        text: "❌ Failed to add product.",
        icon: "error",
        confirmButtonColor: "#dc3545",
        customClass: {
          popup: "swal2-custom-popup",
          title: "swal2-custom-title",
          content: "swal2-custom-text",
        },
      });
    }
  };

  return (
    <>
      <div style={modalStyle.fixedButtonWrapper}>
        <Button
          onClick={openModal}
          backgroundColor="#007bff"
          color="#fff"
          width="180px"
          height="50px"
          fontSize="18px"
          fontWeight="800"
          borderRadius="3rem"
        >
          Add Product
        </Button>
      </div>

      {isModalOpen && (
        <div style={modalStyle.overlay}>
          
          <form style={modalStyle.content} onSubmit={handleSubmit}>
            <h3 style={{ textAlign: "center", marginBottom: "10px" }}>Add New Product</h3>

            <div style={modalStyle.imageCircle} onClick={handleCircleClick}>
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
              // style={modalStyle.input}
              type="text"
              name="category"
              placeholder="Description"
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
                onClick={closeModal}
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
                Submit
              </Button>
            </div>
          </form>
        </div>
      )}
      
    </>
  );
};

export default AddToProduct;
