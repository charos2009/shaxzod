// import React from "react";
// import "./Page.css"; // CSS faylingni alohida qilishni tavsiya qilaman
// Login.js ichida shunday yozing:
// import './Page.css';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p className="signup-text">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
