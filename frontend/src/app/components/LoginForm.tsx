"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-sm animate-fadeIn">
      <h2 className="text-2xl mb-6 text-center text-primary">Login</h2>
      <form onSubmit={handleLogin}>
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
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign In
          </button>
        </div>
      </form>
      <div className="mt-4 text-center">
        <Link href="/sign-up">
          <span className="text-primary hover:underline cursor-pointer">Sign Up</span>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
