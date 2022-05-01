const resolvers = {
  Query: {
    trips: (_, __, { dataSources }) => {
      return dataSources.tripAPI.getTrips();
    },
  },
  Mutation: {
    addTrip: async (_, { trip }, { dataSources }) => {
      try {
        const result = await dataSources.tripAPI.addTrip({...trip});
        return {
          code: 200,
          success: true,
          message: `Successfully added trip`,
          trip: {...result},
        };
      } catch (error) {
        return {
          code: 400,
          success: false,
          message: error,
          trip: null,
        };
      }
    },
  },
};

module.exports = resolvers;
