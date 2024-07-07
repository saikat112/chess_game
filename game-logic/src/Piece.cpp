#include "Piece.h"
#include <cmath>

Piece::Piece(Color color, Type type) : color(color), type(type) {}

Color Piece::getColor() const {
    return color;
}

Type Piece::getType() const {
    return type;
}

Pawn::Pawn(Color color) : Piece(color, PAWN) {}

bool Pawn::isValidMove(int startX, int startY, int endX, int endY, const std::vector<std::vector<Piece*>>& board) const {
    int direction = (color == WHITE) ? -1 : 1;

    // Moving forward
    if (startY == endY) {
        // Move forward by one
        if (endX == startX + direction && board[endX][endY] == nullptr) {
            return true;
        }
        // Move forward by two from starting position
        if (endX == startX + 2 * direction && board[startX + direction][endY] == nullptr && board[endX][endY] == nullptr) {
            if ((color == WHITE && startX == 6) || (color == BLACK && startX == 1)) {
                return true;
            }
        }
    }
    // Capturing diagonally
    if (abs(startY - endY) == 1 && endX == startX + direction) {
        if (board[endX][endY] != nullptr && board[endX][endY]->getColor() != color) {
            return true;
        }
    }
    return false;
}

Knight::Knight(Color color) : Piece(color, KNIGHT) {}

bool Knight::isValidMove(int startX, int startY, int endX, int endY, const std::vector<std::vector<Piece*>>& board) const {
    int dx = abs(startX - endX);
    int dy = abs(startY - endY);
    return (dx == 2 && dy == 1) || (dx == 1 && dy == 2);
}

Bishop::Bishop(Color color) : Piece(color, BISHOP) {}

bool Bishop::isValidMove(int startX, int startY, int endX, int endY, const std::vector<std::vector<Piece*>>& board) const {
    if (abs(startX - endX) != abs(startY - endY)) return false; // Must move diagonally
    // Check if path is clear
    int xDirection = (endX - startX) / abs(endX - startX);
    int yDirection = (endY - startY) / abs(endY - startY);
    int x = startX + xDirection;
    int y = startY + yDirection;
    while (x != endX && y != endY) {
        if (board[x][y] != nullptr) return false;
        x += xDirection;
        y += yDirection;
    }
    return true;
}

Rook::Rook(Color color) : Piece(color, ROOK) {}

bool Rook::isValidMove(int startX, int startY, int endX, int endY, const std::vector<std::vector<Piece*>>& board) const {
    if (startX != endX && startY != endY) return false; // Must move in a straight line
    // Check if path is clear
    if (startX == endX) {
        int yDirection = (endY - startY) / abs(endY - startY);
        for (int y = startY + yDirection; y != endY; y += yDirection) {
            if (board[startX][y] != nullptr) return false;
        }
    } else {
        int xDirection = (endX - startX) / abs(endX - startX);
        for (int x = startX + xDirection; x != endX; x += xDirection) {
            if (board[x][startY] != nullptr) return false;
        }
    }
    return true;
}

Queen::Queen(Color color) : Piece(color, QUEEN) {}

bool Queen::isValidMove(int startX, int startY, int endX, int endY, const std::vector<std::vector<Piece*>>& board) const {
    if (startX == endX || startY == endY) {
        // Move like a rook
        return Rook(color).isValidMove(startX, startY, endX, endY, board);
    } else if (abs(startX - endX) == abs(startY - endY)) {
        // Move like a bishop
        return Bishop(color).isValidMove(startX, startY, endX, endY, board);
    }
    return false;
}

King::King(Color color) : Piece(color, KING) {}

bool King::isValidMove(int startX, int startY, int endX, int endY, const std::vector<std::vector<Piece*>>& board) const {
    int dx = abs(startX - endX);
    int dy = abs(startY - endY);
    return dx <= 1 && dy <= 1;
}
