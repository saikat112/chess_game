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

bool Pawn::isValidMove(int startX, int startY, int endX, int endY) const {
    int direction = (color == WHITE) ? -1 : 1;
    if (endX == startX + direction && startY == endY) {
        return true; // Move forward
    }
    return false; // Add more rules (e.g., capture, initial double move)
}

Knight::Knight(Color color) : Piece(color, KNIGHT) {}

bool Knight::isValidMove(int startX, int startY, int endX, int endY) const {
    int dx = abs(startX - endX);
    int dy = abs(startY - endY);
    return (dx == 2 && dy == 1) || (dx == 1 && dy == 2);
}

Bishop::Bishop(Color color) : Piece(color, BISHOP) {}

bool Bishop::isValidMove(int startX, int startY, int endX, int endY) const {
    return abs(startX - endX) == abs(startY - endY);
}

Rook::Rook(Color color) : Piece(color, ROOK) {}

bool Rook::isValidMove(int startX, int startY, int endX, int endY) const {
    return startX == endX || startY == endY;
}

Queen::Queen(Color color) : Piece(color, QUEEN) {}

bool Queen::isValidMove(int startX, int startY, int endX, int endY) const {
    return abs(startX - endX) == abs(startY - endY) || startX == endX || startY == endY;
}

King::King(Color color) : Piece(color, KING) {}

bool King::isValidMove(int startX, int startY, int endX, int endY) const {
    int dx = abs(startX - endX);
    int dy = abs(startY - endY);
    return dx <= 1 && dy <= 1;
}
