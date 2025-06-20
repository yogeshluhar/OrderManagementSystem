import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Consumer from "./Component/Consumer/consumer";
import Header from "./Reusable/Const/header";
import CardPage from './ConsumerOrder/cardpage';
import { CartProvider } from "./ConsumerOrder/cardcontext";
import Customer from "./Component/Customer/customer";

function App() {
  return (
    <div className="App">
      <CartProvider>   
        <Router>
        <Customer />
          {/* <Header userType="consumer" /> */}
          <Routes>
            {/* <Route path="/" element={<Consumer />} /> */}
            <Route path="/cart" element={<CardPage />} />
          </Routes>
        </Router>
      </CartProvider>
  
    </div>
  );
}

export default App;
