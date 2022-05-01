const { gql } = require("apollo-server");
// A schema which contains data types for trip mate server
const typeDefs = gql`
  type Query {
    trips: [Trip]
  }
  
  type Mutation {
    addTrip(trip: AddTripInput!): AddTripResponse
  }

  type Trip {
    id: ID!
    name: String!
    startDate: String!
    endDate: String!
  }

  input AddTripInput {
    name: String!
    startDate: String!
    endDate: String!
  }

  type AddTripResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "True if the trip is added"
    success: Boolean
    "Human readable message for the UI"
    message: String
    "Newely added trip after a successful mutation"
    trip: Trip
  }
`;

module.exports = typeDefs;
