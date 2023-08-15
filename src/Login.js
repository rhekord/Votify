import React from "react";
import "./Login.css";
import LoginContainer from "./LoginContainer";

function Login() {
  return (
    <div className="login">
      <div className="logo">
      <img src={require('./icon.png')} alt="Votify logo" />
      </div>
      <h1>VOTIFY</h1>
      <LoginContainer />
    </div>
  );
}

export default Login;
