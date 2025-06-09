import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Consumer from "./Component/Consumer/consumer";
import Customer from "./Component/Customer/customer";
import IsDrawer from "./Component/Header/drawer";
import ShopList from "./Reusable/Const/ApiExample";
import ConstCustomer, {
  IntakeList,
  ItemList,
} from "./Reusable/Const/constcustomer";
import SearchBtn from "./Reusable/Const/searchbtn";
import SwitchBtn, { AccordionOrderList } from "./Reusable/Const/switchbtn";
import { useState } from "react";
import dummyOrders from "./dummydata/dummydata";
import OrderCard from "./Reusable/Const/orderdetails";
import PostApi from "./Reusable/API/postapi";
import PostAndFetchShops from "./Reusable/API/postapi";
import ProductApp from "./Reusable/API/inputcustomerapi";
import ProductsApp from "./Reusable/API/inputcustomerapi";
import Button from "./Reusable/Const/button";
function App() {
  return (
    <div className="App">
      <ProductsApp />
      {/* <ShopList/> */}
      {/* <PostAndFetchShops /> */}
      {/* <BrowserRouter>
        <IsDrawer />

        <Routes>
          <Route path="/" element={<SwitchBtn />} />
          <Route path="/product" element={<Consumer />} />
          <Route path="/orders" element={<SwitchBtn />} />
          <Route path="/order-details" element={<OrderCard />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
