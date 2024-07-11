const Game = require('../models/Game');

const resolvers = {
  Query: {
    game: async (_, { id }) => {
      return await Game.findById(id);
    }
  }
};

module.exports = resolvers;
