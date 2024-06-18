// src/components/ChessGame.tsx

'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Chess } from 'chess.js';

// Dynamically import Chessboardjsx to ensure it's only loaded on the client-side
const Chessboard = dynamic(() => import('chessboardjsx'), { ssr: false });

const ChessGame: React.FC = () => {
  const [game] = useState(new Chess());
  const [fen, setFen] = useState('start'); // FEN represents the board position

  const handleMove = (move: any) => {
    const newMove = game.move({
      from: move.sourceSquare,
      to: move.targetSquare,
      promotion: 'q', // Always promote to a queen for simplicity
    });

    if (newMove === null) return; // Illegal move
    setFen(game.fen());
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Chessboard
        width={600}
        position={fen}
        onDrop={handleMove}
      />
    </div>
  );
};

export default ChessGame;
