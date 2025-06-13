import React, { useContext } from "react";

import { HugeiconsIcon } from "@hugeicons/react";
import { ShoppingCart02Icon } from "@hugeicons/core-free-icons";
import { CartContext } from "./cardcontext";

const CartIcon = ({ onClick }) => {
  const { cartItems } = useContext(CartContext);

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div onClick={onClick} style={styles.container}>
      <HugeiconsIcon
        icon={ShoppingCart02Icon}
        size={32}
        color="#fff"
        strokeWidth={2}
      />
      {totalQuantity > 0 && <span style={styles.badge}>{totalQuantity}</span>}
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    cursor: "pointer",
    fontSize: "20px",
  },
  badge: {
    position: "absolute",
    top: "-8px",
    right: "-8px",
    backgroundColor: "red",
    color: "white",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "12px",
  },
};

export default CartIcon;
