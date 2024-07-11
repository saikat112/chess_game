const express = require('express');
const router = express.Router();
const Game = require('../models/Game');

// Create a new game
router.post('/', async (req, res) => {
  try {
    console.log('Creating new game');
    const newGame = new Game({ players: [] });
    await newGame.save();
    console.log('New game created:', newGame);
    res.status(201).json(newGame);
  } catch (error) {
    console.error('Error creating game:', error);
    res.status(500).json({ error: 'Failed to create game' });
  }
});

// Join a game
router.post('/:id/join', async (req, res) => {
  try {
    console.log('Joining game:', req.params.id);
    const gameId = req.params.id;
    const { player } = req.body;
    const game = await Game.findById(gameId);
    if (!game) {
      console.log('Game not found:', gameId);
      return res.status(404).json({ error: 'Game not found' });
    }
    game.players.push(player);
    await game.save();
    console.log('Player joined game:', game);
    res.status(200).json(game);
  } catch (error) {
    console.error('Error joining game:', error);
    res.status(500).json({ error: 'Failed to join game' });
  }
});

// Make a move
router.post('/:id/move', async (req, res) => {
  try {
    console.log('Making move:', req.params.id, req.body);
    const gameId = req.params.id;
    const { from, to, piece } = req.body;
    const game = await Game.findById(gameId);
    if (!game) {
      console.log('Game not found:', gameId);
      return res.status(404).json({ error: 'Game not found' });
    }
    game.moves.push({ from, to, piece });
    await game.save();
    console.log('Move made:', game);
    res.status(200).json(game);
  } catch (error) {
    console.error('Error making move:', error);
    res.status(500).json({ error: 'Failed to make move' });
  }
});

// Delete all games
router.delete('/delete-all', async (req, res) => {
  try {
    console.log('Deleting all games');
    await Game.deleteMany({});
    console.log('All games deleted');
    res.status(200).json({ message: 'All games deleted successfully' });
  } catch (error) {
    console.error('Error deleting games:', error);
    res.status(500).json({ error: 'Failed to delete games' });
  }
});

module.exports = router;
