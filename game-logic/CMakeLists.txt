cmake_minimum_required(VERSION 3.10)
project(ChessGame)

set(CMAKE_CXX_STANDARD 14)

include_directories(include)

add_executable(ChessGame main.cpp src/Board.cpp src/Piece.cpp src/Game.cpp)
