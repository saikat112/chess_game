#ifndef BOARD_H
#define BOARD_H

#include <vector>
#include "Piece.h"

class Board {
public:
    Board();
    ~Board();
    void initializeBoard();
    bool movePiece(int startX, int startY, int endX, int endY);

private:
    std::vector<std::vector<Piece*>> squares;
    void clearBoard();
    void initializePawns();
    void initializeBackRow(Color color, int row);
};

#endif // BOARD_H
