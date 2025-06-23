import Swal from "sweetalert2";
import { HugeiconsIcon } from "@hugeicons/react";
import { CancelCircleIcon } from "@hugeicons/core-free-icons";
import axios from "axios";

const DeleteProductButton = ({ productId, onDeleteSuccess }) => {
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Delete this product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://violently-internal-filly.ngrok-free.app/products/${productId}`
          )
          .then(() => {
            Swal.fire("Deleted!", "Product has been deleted.", "success");
            onDeleteSuccess(productId); // callback to remove from UI
          })
          .catch((err) => {
            console.error("Error deleting product:", err);
            Swal.fire("Error", "Could not delete product.", "error");
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
