import { useState } from "react";
import Button from "../Reusable/Const/button";

const ProductStatusButtons = ({ product, onEditClick }) => {
  const [isAvailable, setIsAvailable] = useState(true);
  const toggleAvailability = () => setIsAvailable((prev) => !prev);

  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <Button
        onClick={toggleAvailability}
        backgroundColor={isAvailable ? "#28a745" : "#dc3545"}
        color="#fff"
        width="80px"
        height="35px"
        fontSize="12px"
        fontWeight="600"
        borderRadius="20px"
        boxShadow="0"
      >
        {isAvailable ? "Available" : "Unavailable"}
      </Button>
      <Button
        onClick={onEditClick}
        backgroundColor="#007bff"
        color="#fff"
        width="80px"
        height="35px"
        fontSize="12px"
        fontWeight="600"
        boxShadow="0"
        borderRadius="20px"
      >
        Edit
      </Button>
    </div>
  );
};

export default ProductStatusButtons;
