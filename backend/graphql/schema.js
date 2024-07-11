const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Move {
    from: String!
    to: String!
    piece: String!
  }

  type Game {
    id: ID!
    players: [String!]!
    moves: [Move!]!
    status: String!
    result: String!
  }

  type Query {
    game(id: ID!): Game
  }
`;

module.exports = typeDefs;
