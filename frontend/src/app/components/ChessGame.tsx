'use client';

import React, { useState } from 'react';
import Chessboard from 'chessboardjsx';
import { Chess, Move } from 'chess.js';

const ChessGame = () => {
  const [game] = useState(new Chess());
  const [fen, setFen] = useState('start'); // FEN represents the board position
  const [moveHistory, setMoveHistory] = useState<string[]>([]);

  const handleMove = (move: { sourceSquare: string; targetSquare: string }) => {
    const newMove: Move | null = game.move({
      from: move.sourceSquare,
      to: move.targetSquare,
      promotion: 'q', // Always promote to a queen for simplicity
    });

    if (newMove === null) return; // Illegal move
    setFen(game.fen());
    setMoveHistory([...moveHistory, game.history({ verbose: true }).pop()!.san]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl mb-4">Chess Game</h1>
      <div className="bg-white shadow-lg rounded-lg p-4 flex">
        <div className="flex flex-col items-center">
          <div className="flex justify-between w-full mb-4">
            <div className="text-xl">Player 1</div>
            <div className="text-xl">Timer</div>
            <div className="text-xl">Player 2</div>
          </div>
          <Chessboard
            width={600}
            position={fen}
            onDrop={({ sourceSquare, targetSquare }) =>
              handleMove({ sourceSquare, targetSquare })
            }
          />
        </div>
        <div className="ml-4">
          <h2 className="text-2xl mb-2">Move History</h2>
          <div className="h-64 overflow-y-scroll border p-2">
            {moveHistory.map((move, index) => (
              <div key={index}>{index + 1}. {move}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChessGame;
