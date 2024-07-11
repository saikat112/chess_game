const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.post('/', gameController.createGame);
router.post('/:gameId/join', gameController.joinGame);
router.post('/:gameId/move', gameController.makeMove);
router.get('/:gameId', gameController.getGameHistory);

module.exports = router;
