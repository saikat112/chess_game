'use client';

import React, { useEffect } from 'react';
import '../../app/css/LoginSignUp.css';


const LoginForm: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/components/toggleForm.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="auth-container" id="auth-container">
      <div className="form-container login-container">
        <form>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fab fa-github"></i></a>
            <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot Your Password?</a>
          <button type="button" id="login">Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className="hidden" id="login">Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            <button className="hidden" id="register">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
