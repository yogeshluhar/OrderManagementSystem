import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Consumer from "./Component/Consumer/consumer";
import Customer from "./Component/Customer/customer";
import IsDrawer from "./Component/Header/drawer";
import ShopList from "./Reusable/Const/ApiExample";
import ConstCustomer from "./Reusable/Const/constcustomer";
import SearchBtn from "./Reusable/Const/searchbtn";
import Searchbtnmakebyown from "./Reusable/Const/searchbtnmakebyown";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <IsDrawer />
      </BrowserRouter>
      < SearchBtn />
      < Searchbtnmakebyown/>
    </div>
  );
}

export default App;
