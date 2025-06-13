import React, { useContext } from "react";
import { CartContext } from "./cardcontext";
import Button from "../Reusable/Const/button";

const AddToCartButton = ({ item }) => {
  console.log("Adding to cart:", item);
  const { addToCart, cartItems, incrementQuantity, decrementQuantity } =
    useContext(CartContext);

  const cartItem = cartItems.find((i) => i.id === item.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return quantity === 0 ? (
    <Button
      onClick={() => addToCart(item)}
      backgroundColor="#007bff"
      color="#fff"
      borderRadius="25px"
      fontSize="14px"
      fontWeight="800"
      height="36px"
      flex={1}
      boxShadow="none"
    >
      Add to Cart
    </Button>
  ) : (
    <div style={styles.quantityControls}>
      <Button
        onClick={() => decrementQuantity(item.id)}
        backgroundColor="#007bff"
        color="#fff"
        borderRadius="50%"
        width="30px"
        height="30px"
        fontSize="18px"
        fontWeight="600"
        boxShadow="none"
      >
        −
      </Button>
      <span style={styles.quantityNumber}>{quantity}</span>
      <Button
        onClick={() => incrementQuantity(item.id)}
        backgroundColor="#007bff"
        color="#fff"
        borderRadius="50%"
        width="30px"
        height="30px"
        fontSize="18px"
        fontWeight="600"
        boxShadow="none"
      >
        +
      </Button>
    </div>
  );
};

const styles = {
  quantityControls: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  quantityNumber: {
    fontWeight: "600",
    fontSize: "16px",
    color: "#333",
  },
};

export default AddToCartButton;
