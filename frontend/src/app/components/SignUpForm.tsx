"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your sign-up logic here
    console.log('Signing up with:', email, password, confirmPassword);
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-sm animate-fadeIn">
      <h2 className="text-2xl mb-6 text-center text-primary">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email or Mobile
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="mt-4 text-center">
        <Link href="/login">
          <span className="text-primary hover:underline cursor-pointer">Login</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
