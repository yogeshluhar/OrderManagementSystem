import Swal from "sweetalert2";
import { HugeiconsIcon } from "@hugeicons/react";
import { CancelCircleIcon } from "@hugeicons/core-free-icons";
import axios from "axios";
import "../Reusable/StyleSheet/style.css";
import { useDeleteProductMutation } from "../Redux/ShopsAPI/ProductAPI";

const DeleteProductButton = ({ productId }) => {
  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action will permanently remove the product.",
      icon: "warning",
      iconColor: "#f27474",
      showCancelButton: true,
      confirmButtonColor: "#e74c3c",
      cancelButtonColor: "#95a5a6",
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
      background: "#ffffff",
      color: "#333",
      customClass: {
        popup: "custom-swal-popup",
        title: "custom-swal-title",
        confirmButton: "custom-swal-confirm",
        cancelButton: "custom-swal-cancel",
      },
      buttonsStyling: false,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteProduct(productId).unwrap();
          Swal.fire({
            title: "Deleted!",
            text: "Product has been successfully deleted.",
            icon: "success",
            iconColor: "#2ecc71",
            background: "#ffffff",
            color: "#333",
            timer: 2000,
            showConfirmButton: false,
            customClass: {
              popup: "custom-swal-popup",
              title: "custom-swal-title",
              icon: "custom-swal-icon",
            },
          });
          // onDeleteSuccess(productId);
        } catch (error) {
          console.error("Error deleting product:", error);
          Swal.fire({
            title: "Error",
            text: "Could not delete the product. Please try again.",
            icon: "error",
            iconColor: "#e74c3c",
            background: "#fff",
            color: "#333",
            showConfirmButton: true,
            confirmButtonText: "Okay",
            confirmButtonColor: "#e74c3c",
            customClass: {
              popup: "custom-swal-popup",
              title: "custom-swal-title",
              confirmButton: "custom-swal-confirm",
              icon: "custom-swal-icon",
            },
            buttonsStyling: false,
          });
        }
      }
    });
  };

  return (
    <button
      onClick={handleDelete}
      style={{ background: "none", border: "none", cursor: "pointer" }}
      title="Delete"
    >
      <HugeiconsIcon
        icon={CancelCircleIcon}
        size={20}
        color="red"
        strokeWidth={2}
      />
    </button>
  );
};

export default DeleteProductButton;
