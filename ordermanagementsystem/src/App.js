import { useState } from "react";
import { useEffect } from "react";
import Stylesheet from "reactjs-stylesheet";
import "./App.css";
import AddToProduct from "./Product/addToProduct";
import CardItem from "./Product/cardItem";
import ProductStatusButtons from "./Product/statusbtn";
import BackgroundContainer from "./Reusable/Const/backgroundContainer";

import Header from "./Reusable/Const/header";
import SwitchBtn from "./Reusable/Const/switchbtn";
import Ordercards from "./Order/ordercard";
import HistoryCard from "./Order/historycard";
import Customer from "./Component/Customer/customer";
import Consumer from "./Component/Consumer/consumer";
import Try, { ItemList } from "./ConsumerOrder/addtocard";
function App() {

  return (
    <div className="App">
      {/* <Header />
      <SwitchBtn /> */}
        <Consumer/>
        {/* <Customer/> */}
    </div>
  );
}

export default App;
