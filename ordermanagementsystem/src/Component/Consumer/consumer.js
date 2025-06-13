import { CartProvider } from "../../ConsumerOrder/cardcontext";
import ItemList from "../../ConsumerOrder/ItemList";
import Header from "../../Reusable/Const/header";

const Consumer = () => {
  return (
    <>
      <CartProvider>
        <Header userType="consumer" />
        <ItemList />
      </CartProvider>
    </>
  );
};

export default Consumer;
