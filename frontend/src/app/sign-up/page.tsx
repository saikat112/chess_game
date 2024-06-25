"use client";

import React from 'react';
import SignUpForm from '../components/SignUpForm';
import NavBar from '../components/NavBar';

const SignUpPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-hero-pattern bg-cover">
      <NavBar />
      <div className="flex flex-1 justify-center items-center">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
