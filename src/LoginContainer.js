import React, { useState } from "react";
import "./LoginContainer.css";

export default function LoginContainer() {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="login-container">
      <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
      <div className="form-container">
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          {isSignUp && (
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password:</label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
              />
            </div>
          )}
          <button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
        </form>
        <button onClick={handleToggle}>
          {isSignUp
            ? "Already have an account? Login"
            : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
}
