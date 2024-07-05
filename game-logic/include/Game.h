#ifndef GAME_H
#define GAME_H

#include "Board.h"

class Game {
public:
    Game();
    void start();

private:
    Board board;
    Color currentTurn;

    void switchTurn();
};

#endif // GAME_H
