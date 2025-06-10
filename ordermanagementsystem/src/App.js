import { useState } from "react";
import { useEffect } from "react";
import Stylesheet from "reactjs-stylesheet";
import "./App.css";
import AddToProduct from "./Product/addToProduct";
import CardItem from "./Product/cardItem";
import BackgroundContainer from "./Reusable/Const/backgroundContainer";

import Header from "./Reusable/Const/header";
import SwitchBtn from "./Reusable/Const/switchbtn";
function App() {

  return (
    <div className="App">
      <Header />
      <SwitchBtn />
      <BackgroundContainer>
        <CardItem/>
      </BackgroundContainer>
    </div>
  );
}

export default App;
