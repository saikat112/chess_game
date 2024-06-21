'use client';

import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const initialBoard = [
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
];

const pieceImages: { [key: string]: string } = {
  r: '♜', // Black Rook
  n: '♞', // Black Knight
  b: '♝', // Black Bishop
  q: '♛', // Black Queen
  k: '♚', // Black King
  p: '♟', // Black Pawn
  R: '♖', // White Rook
  N: '♘', // White Knight
  B: '♗', // White Bishop
  Q: '♕', // White Queen
  K: '♔', // White King
  P: '♙', // White Pawn
};

const ChessGame = () => {
  const [board, setBoard] = useState(initialBoard);
  const [selectedPiece, setSelectedPiece] = useState<[number, number] | null>(null);
  const [turn, setTurn] = useState('w');
  const [lightSquareColor, setLightSquareColor] = useState('#f0d9b5'); // Default light square color
  const [darkSquareColor, setDarkSquareColor] = useState('#b58863'); // Default dark square color

  const handleClick = (x: number, y: number) => {
    if (selectedPiece) {
      const [prevX, prevY] = selectedPiece;
      const newBoard = board.map(row => [...row]);
      newBoard[x][y] = newBoard[prevX][prevY];
      newBoard[prevX][prevY] = '.';
      setBoard(newBoard);
      setSelectedPiece(null);
      setTurn(turn === 'w' ? 'b' : 'w');
    } else {
      if (board[x][y] !== '.' && (turn === 'w' ? board[x][y] === board[x][y].toUpperCase() : board[x][y] === board[x][y].toLowerCase())) {
        setSelectedPiece([x, y]);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl mb-4">Chess Game</h1>
      <div className="mb-4 flex">
        <div className="mr-4">
          <h2 className="text-xl mb-2">Light Square Color</h2>
          <SketchPicker
            color={lightSquareColor}
            onChangeComplete={color => setLightSquareColor(color.hex)}
          />
        </div>
        <div>
          <h2 className="text-xl mb-2">Dark Square Color</h2>
          <SketchPicker
            color={darkSquareColor}
            onChangeComplete={color => setDarkSquareColor(color.hex)}
          />
        </div>
      </div>
      <div className="bg-neutral-800 shadow-lg rounded-lg p-4 flex">
        <div className="grid grid-cols-8 gap-1">
          {board.map((row, x) => row.map((piece, y) => (
            <div
              key={`${x}-${y}`}
              onClick={() => handleClick(x, y)}
              className={`w-16 h-16 flex items-center justify-center cursor-pointer`}
              style={{
                backgroundColor: (x + y) % 2 === 0 ? lightSquareColor : darkSquareColor,
                border: selectedPiece && selectedPiece[0] === x && selectedPiece[1] === y ? '4px solid yellow' : 'none'
              }}
            >
              {piece !== '.' && <span className="text-3xl">{pieceImages[piece]}</span>}
            </div>
          )))}
        </div>
      </div>
    </div>
  );
};

export default ChessGame;
