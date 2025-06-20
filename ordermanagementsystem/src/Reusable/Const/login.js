import axios from "axios";
import "../StyleSheet/login.css";
import { ShoppingCart } from "lucide-react";
import { useState} from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    
//   const [data, setdata] = useState([]);



//   const navigate = useNavigate();

//   function checkdetails(){
//     if (username === password) {

//         axios.get('https://cat-talented-haddock.ngrok-free.app/shops',{headers:{
//                     "ngrok-skip-browser-warning": "69420",
//         }})
//         .then((response) => {  
//             console.log(response.data);
//             const user = response.data.find((item)=> item.name === username);
//             console.log(user);

//             if (user) {
//                 alert("successful");
//             }
//             else alert("password and username does not match");
            
//         })
//         .catch((error) => {
//             console.log("error:", error);
//         })
        
//     }
//     else {
//         navigate('/warning');
//     }
//   }

  return (
    <div className="main-container">
      <div className="login-box">
        <div className="box-title">
          <ShoppingCart />
          <h3 className="login-name"> Order Management System</h3>
        </div>

        <div className="login-details">
          <div className="userpass-container">
            <label className="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={(e) => setusername(e.target.value)}
              className="userinput no-outline"
              required
            />
          </div>

          <div className="userpass-container">
            <label className="password">Password</label>
            <input
              type="text"
              id="password"
              onChange={(e) => setpassword(e.target.value)}
              className="passinput  no-outline"
              required
            />
          </div>
        </div>

        <div className="submit" id="submit">
          <button className="submit-btn" >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}