// src/app/page.tsx

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ChessGame to ensure it's only loaded on the client-side
const ChessGame = dynamic(() => import('./components/ChessGame'), { ssr: false });

const Home = () => {
  return (
    <div>
      <h1 className="text-center text-4xl mt-8">Chess Game</h1>
      <ChessGame />
    </div>
  );
};

export default Home;
