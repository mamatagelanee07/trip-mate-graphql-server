const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const TripAPI = require('./datasources/trip-api');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      tripAPI: new TripAPI(),
    };
  },
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }).then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port at ${url}
    📭  Query at https://studio.apollographql.com/dev
  `);
}));
