// src/components/LoginSignUp.jsx
import { useState } from "react";
import "./LoginSignUp.css";

function LoginSignUp() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        <form>
          {!isLogin && (
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
          )}

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label>Phone</label>
              <input type="text" placeholder="Enter your phone number" />
            </div>
          )}

          <button type="submit" className="auth-btn">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={toggleForm} className="toggle-link">
            {isLogin ? " Sign Up" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginSignUp;
