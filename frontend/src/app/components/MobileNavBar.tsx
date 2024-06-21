'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const MobileNavBar = () => {
  const router = useRouter();
  const [isPlayMenuOpen, setIsPlayMenuOpen] = useState(false);

  const handleProfileClick = () => {
    router.push('/profile'); // Adjust the path based on your routing setup
  };

  const togglePlayMenu = () => {
    setIsPlayMenuOpen(!isPlayMenuOpen);
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center">
        <span>Chess Master</span>
        <button onClick={handleProfileClick}>
          <img src="/profile-icon.png" alt="Profile" className=" rounded-full w-8 h-8" />
        </button>
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-center">
        <button onClick={togglePlayMenu} className="py-2 px-4 bg-green-600 rounded-lg text-xl">
          Play
        </button>
      </div>
      {isPlayMenuOpen && (
        <div className="fixed bottom-16 left-0 w-full bg-white p-4 text-center shadow-lg">
          <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-gray-200">Play Online</a>
          <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-gray-200">Play with Friend</a>
          <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-gray-200">Play with Computer</a>
        </div>
      )}
    </div>
  );
};

export default MobileNavBar;
