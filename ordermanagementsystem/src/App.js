import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Consumer from "./Component/Consumer/consumer";
import Header from "./Reusable/Const/header";
import CardPage from './ConsumerOrder/cardpage';
import { CartProvider } from "./ConsumerOrder/cardcontext";
import Customer from "./Component/Customer/customer";
import LoginForm from "./Login/loginForm";
import ShopForm from "./Login/shopForm";
import ShopUI from "./Order/shopui";

function App() {
  return (
    <div className="App">

      <CartProvider>
        <Router>
          {/* <ShopForm /> */}
          {/* <ShopUI /> */}
          {/* <LoginForm /> */}
          {/* <Customer /> */}
          <Header userType="consumer" />
          <Routes>
            <Route path="/" element={<Consumer />} />
            <Route path="/cart" element={<CardPage />} />
          </Routes>
        </Router>
      </CartProvider>

    </div>
  );
}

export default App;
