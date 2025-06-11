import { useState } from "react";
import Button from "../Reusable/Const/button";

const ProductStatusButtons = () => {
    const [isAvailable, setIsAvailable] = useState(true);

    const toggleAvailability = () => {
        setIsAvailable((prev) => !prev);
    };

    const handleEdit = () => {
        console.log("Edit clicked");
    };

    return (
        <div style={{ display: "flex", gap: "10px" }}>
            <Button
                onClick={toggleAvailability}
                backgroundColor={isAvailable ? "#28a745" : "#dc3545"}
                color="#fff"
                width="100px"
                height="40px"
                fontSize="14px"
                fontWeight="600"
                borderRadius="20px"
            >
                {isAvailable ? "Available" : "Unavailable"}
            </Button>
            <Button
                onClick={handleEdit}
                backgroundColor="#007bff"
                color="#fff"
                width="100px"
                height="40px"
                fontSize="14px"
                fontWeight="600"
                borderRadius="20px"
            >
                Edit
            </Button>
        </div>
    );
};

export default ProductStatusButtons;
