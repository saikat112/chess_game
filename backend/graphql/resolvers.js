const Game = require('../models/Game');

const resolvers = {
  Query: {
    games: async () => await Game.find(),
    game: async (_, { id }) => await Game.findById(id),
  },
  Mutation: {
    createGame: async () => {
      const newGame = new Game({ players: [] });
      return await newGame.save();
    },
    joinGame: async (_, { id, player }) => {
      const game = await Game.findById(id);
      if (!game) throw new Error('Game not found');
      game.players.push(player);
      return await game.save();
    },
    makeMove: async (_, { id, from, to, piece }) => {
      const game = await Game.findById(id);
      if (!game) throw new Error('Game not found');
      game.moves.push({ from, to, piece });
      return await game.save();
    },
  },
};

module.exports = resolvers;
