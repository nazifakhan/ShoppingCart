// src/components/LoginSignUp.jsx
import { useState } from "react";
import "./LoginSignUp.css";
import { useNavigate } from "react-router-dom";

function LoginSignUp() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const toggleForm = () => setIsLogin(!isLogin);


  const handleSubmit = async (e) =>{
    e.preventDefault();
    let payload;
  if (isLogin) {
    payload = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
  } else {
    payload = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      phone: e.target.phone.value,
    };
  }

  console.log("Payload being sent:", payload);
  const endpoint = isLogin ? "/login" : "/signup";

 
  try{
    const res = await fetch(`http://localhost:5000${endpoint}` , {
      method:"POST",
       headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });
    const data = await res.json();

    if(res.ok){
       localStorage.setItem("auth", "true");
        navigate('./Home');
    }else{
      
    alert(data.message|| data.error);
    }
  }catch(err){
    console.log("Request Fails" , err)
  }

  } 

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="Enter your name" />
            </div>
          )}

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter your password" />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label>Phone</label>
              <input type="text" name="phone" placeholder="Enter your phone number" />
            </div>
          )}

          <button type="submit" className="auth-btn" >
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
