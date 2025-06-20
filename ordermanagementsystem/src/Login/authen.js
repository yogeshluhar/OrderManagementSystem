// src/components/AuthForm.jsx
import React, { useState } from "react";
import "../Reusable/StyleSheet/loginForm.css";
import RegisterForm from "./registerForm";
import LoginForm from "./loginForm";

const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(false);

  const handleRegisterClick = () => setIsRegister(true);
  const handleLoginClick = () => setIsRegister(false);

  return (
    <div className={`container ${isRegister ? "active" : ""}`}>
      <div className="form-box">
        {isRegister ? <RegisterForm /> : <LoginForm />}
      </div>

      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          <h1>Hello, Welcome!</h1>
          <p>Don't have an account?</p>
          <button className="btn register-btn" onClick={handleRegisterClick}>
            Register
          </button>
        </div>

        <div className="toggle-panel toggle-right">
          <h1>Welcome Back!</h1>
          <p>Already have an account?</p>
          <button className="btn login-btn" onClick={handleLoginClick}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
