#include "Board.h"
#include <iostream>

Board::Board() {
    squares.resize(8, std::vector<Piece*>(8, nullptr));
}

Board::~Board() {
    clearBoard();
}

void Board::clearBoard() {
    for (auto & row : squares) {
        for (auto & piece : row) {
            delete piece;
            piece = nullptr;
        }
    }
}

void Board::initializeBoard() {
    clearBoard();
    initializePawns();
    initializeBackRow(WHITE, 7);
    initializeBackRow(BLACK, 0);
}

void Board::initializePawns() {
    for (int i = 0; i < 8; ++i) {
        squares[1][i] = new Pawn(BLACK);
        squares[6][i] = new Pawn(WHITE);
    }
}

void Board::initializeBackRow(Color color, int row) {
    squares[row][0] = new Rook(color);
    squares[row][1] = new Knight(color);
    squares[row][2] = new Bishop(color);
    squares[row][3] = new Queen(color);
    squares[row][4] = new King(color);
    squares[row][5] = new Bishop(color);
    squares[row][6] = new Knight(color);
    squares[row][7] = new Rook(color);
}

bool Board::movePiece(int startX, int startY, int endX, int endY) {
    Piece* piece = squares[startX][startY];
    if (piece && piece->isValidMove(startX, startY, endX, endY, squares)) {
        delete squares[endX][endY]; // Capture the piece at the destination
        squares[endX][endY] = piece;
        squares[startX][startY] = nullptr;
        return true;
    }
    return false;
}
