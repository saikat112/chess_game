"use client";

import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import NavBar from '../components/NavBar';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-hero-pattern bg-cover">
      <div className="flex flex-1 justify-center items-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
