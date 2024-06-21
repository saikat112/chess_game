'use client';

import React from 'react';

const NavBar = () => {
  return (
    <div className="fixed left-0 top-0 h-full bg-gray-800 text-white w-64 p-4">
      <nav className="space-y-4 mt-8">
        <a href="#" className="block py-2 px-4 hover:bg-gray-700">Play</a>
        <a href="#" className="block py-2 px-4 hover:bg-gray-700">How to Play</a>
        <a href="#" className="block py-2 px-4 hover:bg-gray-700">Log In</a>
        <a href="#" className="block py-2 px-4 hover:bg-gray-700">Sign Up</a>
      </nav>
    </div>
  );
};

export default NavBar;
