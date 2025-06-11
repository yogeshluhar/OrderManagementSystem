import { useState, useRef } from "react";
import Button from "../Reusable/Const/button";

const modalStyle = {
  overlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
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
    padding: "10px",
    fontSize: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    width: "100%",
  },
  textarea: {
    padding: "10px",
    fontSize: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    resize: "vertical",
    width: "100%",
  },
  buttonsRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
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
    title: "",
    desc: "",
    price: "",
    image: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const fileInputRef = useRef();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setImageFile(null);
    setPreviewUrl("");
    setFormData({ title: "", desc: "", price: "", image: "" });
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
      image: uploadedImageUrl,
    };

    try {
      const response = await fetch("http://longhorn-rested-widely.ngrok-free.app/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      if (!response.ok) throw new Error("Something went wrong");

      const result = await response.json();
      console.log("Posted successfully:", result);
      closeModal();
    } catch (err) {
      console.error("Error:", err);
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

            {/* Circular Image Upload */}
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

            {/* Other Inputs */}
            <input
              style={modalStyle.input}
              type="text"
              name="title"
              placeholder="Product Name"
              value={formData.title}
              onChange={handleChange}
              required
            />

            <textarea
              style={modalStyle.textarea}
              name="desc"
              placeholder="Description"
              rows="3"
              value={formData.desc}
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
                width="120px"
                height="36px"
                fontSize="14px"
                fontWeight="500"
                borderRadius="5px"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                backgroundColor="#28a745"
                color="#fff"
                width="120px"
                height="36px"
                fontSize="14px"
                fontWeight="500"
                borderRadius="5px"
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
