import Swal from "sweetalert2";
import { HugeiconsIcon } from "@hugeicons/react";
import { CancelCircleIcon } from "@hugeicons/core-free-icons";
import axios from "axios";
import "../Reusable/StyleSheet/style.css";
const DeleteProductButton = ({ productId, onDeleteSuccess }) => {
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action will permanently remove the order from the system.",
      icon: "warning",
      iconColor: "#f27474", // nice warning red
      showCancelButton: true,
      confirmButtonColor: "#e74c3c", // bright red
      cancelButtonColor: "#95a5a6", // muted gray
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
      background: "#ffffff", // or "#1e1e2f" for dark theme
      color: "#333", // text color
      customClass: {
        popup: "custom-swal-popup",
        title: "custom-swal-title",
        confirmButton: "custom-swal-confirm",
        cancelButton: "custom-swal-cancel",
      },
      buttonsStyling: false, // let custom classes control buttons
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://violently-internal-filly.ngrok-free.app/products/${productId}`
          )
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Product has been successfully deleted.",
              icon: "success",
              iconColor: "#2ecc71", // green
              background: "#ffffff",
              color: "#333",
              timer: 2000, // auto-close after 2 sec
              showConfirmButton: false, // no need for OK button
              customClass: {
                popup: "custom-swal-popup",
                title: "custom-swal-title",
                icon: "custom-swal-icon",
              },
            });

            onDeleteSuccess(productId);
          })
          .catch((err) => {
            console.error("Error deleting product:", err);
            Swal.fire({
              title: "Error",
              text: "Could not delete the product. Please try again.",
              icon: "error",
              iconColor: "#e74c3c", // rich red
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
          });
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
