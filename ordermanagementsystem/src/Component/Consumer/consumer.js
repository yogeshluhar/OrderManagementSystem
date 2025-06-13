import { CartProvider } from "../../ConsumerOrder/cardcontext";
import ItemList from "../../ConsumerOrder/ItemList";
import Header from "../../Reusable/Const/header";
import BackgroundContainer from "../../Reusable/Const/backgroundContainer";
const Consumer = () => {
  return (
    <>
      <CartProvider>
        <Header userType="consumer" />
        <BackgroundContainer>
          <ItemList />
        </BackgroundContainer>
      </CartProvider>
    </>
  );
};

export default Consumer;
