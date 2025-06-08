import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Consumer from "./Component/Consumer/consumer";
import Customer from "./Component/Customer/customer";
import IsDrawer from "./Component/Header/drawer";
import ShopList from "./Reusable/Const/ApiExample";
import ConstCustomer, { IntakeList, ItemList } from "./Reusable/Const/constcustomer";
import SearchBtn from "./Reusable/Const/searchbtn";
import SwitchBtn, { AccordionOrderList } from "./Reusable/Const/orderswitchbtn";
import { useState } from "react";
import dummyOrders from "./dummydata/dummydata";
import OrderCard from './Reusable/Const/orderdetails'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <IsDrawer />
        {/* <SearchBtn /> */}
        {/* <SwitchBtn /> */}

        <Routes>
          <Route path="/" element={<SwitchBtn />} />
          <Route path="/product" element={<Consumer />} />
          <Route path="/orders" element={<SwitchBtn />} />
          <Route path="/inventory" element={<Consumer />} />
          <Route path="/order-details" element={<OrderCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
