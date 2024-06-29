"use client";

import React, { useEffect } from 'react';
import LoginContainer from '../components/LoginContainer';
import SignupContainer from '../components/SignupContainer';
import '../../app/css/LoginSignUp.css';

const LoginPage: React.FC = () => {
  useEffect(() => {
    const container = document.getElementById('login-signup-container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    registerBtn?.addEventListener('click', () => {
      container?.classList.add('active');
    });

    loginBtn?.addEventListener('click', () => {
      container?.classList.remove('active');
    });
  }, []);

  return (
    <div className="login-signup-container" id="login-signup-container">
      <SignupContainer />
      <LoginContainer />
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button id="login">Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            <button id="register">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
