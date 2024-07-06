#ifndef PIECE_H
#define PIECE_H
#include <vector>

enum Color { NONE, WHITE, BLACK };
enum Type { EMPTY, PAWN, KNIGHT, BISHOP, ROOK, QUEEN, KING };

class Piece {
public:
    Piece(Color color = NONE, Type type = EMPTY);
    virtual ~Piece() = default;

    Color getColor() const;
    Type getType() const;

    virtual bool isValidMove(int startX, int startY, int endX, int endY, const std::vector<std::vector<Piece*>>& board) const = 0;

protected:
    Color color;
    Type type;
};

class Pawn : public Piece {
public:
    Pawn(Color color);
    bool isValidMove(int startX, int startY, int endX, int endY, const std::vector<std::vector<Piece*>>& board) const override;
};

class Knight : public Piece {
public:
    Knight(Color color);
    bool isValidMove(int startX, int startY, int endX, int endY, const std::vector<std::vector<Piece*>>& board) const override;
};

class Bishop : public Piece {
public:
    Bishop(Color color);
    bool isValidMove(int startX, int startY, int endX, int endY, const std::vector<std::vector<Piece*>>& board) const override;
};

class Rook : public Piece {
public:
    Rook(Color color);
    bool isValidMove(int startX, int startY, int endX, int endY, const std::vector<std::vector<Piece*>>& board) const override;
};

class Queen : public Piece {
public:
    Queen(Color color);
    bool isValidMove(int startX, int startY, int endX, int endY, const std::vector<std::vector<Piece*>>& board) const override;
};

class King : public Piece {
public:
    King(Color color);
    bool isValidMove(int startX, int startY, int endX, int endY, const std::vector<std::vector<Piece*>>& board) const override;
};

#endif // PIECE_H
