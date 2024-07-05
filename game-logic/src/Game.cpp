#include "Game.h"
#include <iostream>

Game::Game() : currentTurn(WHITE) {
    board.initializeBoard();
}

void Game::start() {
    int startX, startY, endX, endY;
    while (true) {
        std::cout << "Enter move (startX startY endX endY): ";
        std::cin >> startX >> startY >> endX >> endY;
        if (board.movePiece(startX, startY, endX, endY)) {
            switchTurn();
        } else {
            std::cout << "Invalid move" << std::endl;
        }
    }
}

void Game::switchTurn() {
    currentTurn = (currentTurn == WHITE) ? BLACK : WHITE;
}
