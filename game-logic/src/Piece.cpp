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
        if (endX == startX + direction && board[endX][endY]->getType() == EMPTY) {
            return true;
        }
        // Move forward by two from starting position
        if (endX == startX + 2 * direction && board[startX + direction][endY]->getType() == EMPTY && board[endX][endY]->getType() == EMPTY) {
            if ((color == WHITE && startX == 6) || (color == BLACK && startX == 1)) {
                return true;
            }
        }
    }
    // Capturing diagonally
    if (abs(startY - endY) == 1 && endX == startX + direction) {
        if (board[endX][endY]->getType() != EMPTY && board[endX][endY]->getColor() != color) {
            return true;
        }
    }
    return false;
}

Knight::Knight(Color color) : Piece(color, KNIGHT) {}
bool Knight::isValidMove(int startX, int startY, int endX, int endY, const std::vector<std::vector<Piece*>>& board) const {
    int direction = (color == WHITE) ? -1 : 1;

    // Moving forward
    if (startY == endY) {
        // Move forward by one
        if (endX == startX + direction && board[endX][endY]->getType() == EMPTY) {
            return true;
        }
        // Move forward by two from starting position
        if (endX == startX + 2 * direction && board[startX + direction][endY]->getType() == EMPTY && board[endX][endY]->getType() == EMPTY) {
            if ((color == WHITE && startX == 6) || (color == BLACK && startX == 1)) {
                return true;
            }
        }
    }
    // Capturing diagonally
    if (abs(startY - endY) == 1 && endX == startX + direction) {
        if (board[endX][endY]->getType() != EMPTY && board[endX][endY]->getColor() != color) {
            return true;
        }
    }
    return false;
}

Bishop::Bishop(Color color) : Piece(color, BISHOP) {}
bool Bishop::isValidMove(int startX, int startY, int endX, int endY, const std::vector<std::vector<Piece*>>& board) const {
    int direction = (color == WHITE) ? -1 : 1;

    // Moving forward
    if (startY == endY) {
        // Move forward by one
        if (endX == startX + direction && board[endX][endY]->getType() == EMPTY) {
            return true;
        }
        // Move forward by two from starting position
        if (endX == startX + 2 * direction && board[startX + direction][endY]->getType() == EMPTY && board[endX][endY]->getType() == EMPTY) {
            if ((color == WHITE && startX == 6) || (color == BLACK && startX == 1)) {
                return true;
            }
        }
    }
    // Capturing diagonally
    if (abs(startY - endY) == 1 && endX == startX + direction) {
        if (board[endX][endY]->getType() != EMPTY && board[endX][endY]->getColor() != color) {
            return true;
        }
    }
    return false;
}

Rook::Rook(Color color) : Piece(color, ROOK) {}
bool Rook::isValidMove(int startX, int startY, int endX, int endY, const std::vector<std::vector<Piece*>>& board) const {
    int direction = (color == WHITE) ? -1 : 1;

    // Moving forward
    if (startY == endY) {
        // Move forward by one
        if (endX == startX + direction && board[endX][endY]->getType() == EMPTY) {
            return true;
        }
        // Move forward by two from starting position
        if (endX == startX + 2 * direction && board[startX + direction][endY]->getType() == EMPTY && board[endX][endY]->getType() == EMPTY) {
            if ((color == WHITE && startX == 6) || (color == BLACK && startX == 1)) {
                return true;
            }
        }
    }
    // Capturing diagonally
    if (abs(startY - endY) == 1 && endX == startX + direction) {
        if (board[endX][endY]->getType() != EMPTY && board[endX][endY]->getColor() != color) {
            return true;
        }
    }
    return false;
}


Queen::Queen(Color color) : Piece(color, QUEEN) {}
bool Queen::isValidMove(int startX, int startY, int endX, int endY, const std::vector<std::vector<Piece*>>& board) const {
    int direction = (color == WHITE) ? -1 : 1;

    // Moving forward
    if (startY == endY) {
        // Move forward by one
        if (endX == startX + direction && board[endX][endY]->getType() == EMPTY) {
            return true;
        }
        // Move forward by two from starting position
        if (endX == startX + 2 * direction && board[startX + direction][endY]->getType() == EMPTY && board[endX][endY]->getType() == EMPTY) {
            if ((color == WHITE && startX == 6) || (color == BLACK && startX == 1)) {
                return true;
            }
        }
    }
    // Capturing diagonally
    if (abs(startY - endY) == 1 && endX == startX + direction) {
        if (board[endX][endY]->getType() != EMPTY && board[endX][endY]->getColor() != color) {
            return true;
        }
    }
    return false;
}
King::King(Color color) : Piece(color, KING) {}
bool King::isValidMove(int startX, int startY, int endX, int endY, const std::vector<std::vector<Piece*>>& board) const {
    int direction = (color == WHITE) ? -1 : 1;

    // Moving forward
    if (startY == endY) {
        // Move forward by one
        if (endX == startX + direction && board[endX][endY]->getType() == EMPTY) {
            return true;
        }
        // Move forward by two from starting position
        if (endX == startX + 2 * direction && board[startX + direction][endY]->getType() == EMPTY && board[endX][endY]->getType() == EMPTY) {
            if ((color == WHITE && startX == 6) || (color == BLACK && startX == 1)) {
                return true;
            }
        }
    }
    // Capturing diagonally
    if (abs(startY - endY) == 1 && endX == startX + direction) {
        if (board[endX][endY]->getType() != EMPTY && board[endX][endY]->getColor() != color) {
            return true;
        }
    }
    return false;
}
