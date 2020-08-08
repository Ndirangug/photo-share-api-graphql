// 1. Require 'apollo-server'
const { ApolloServer } = require("apollo-server");

const typeDefs = `
input photoInput{
  name: String!
  description: String
}

type Photo{
  
    name: String!
    description: String
  
}

type Query {
  totalPhotos: Int!
}

type Mutation{
  postPhoto(input: photoInput): Boolean!
}
`;

var photos = []

const resolvers = {
  Query: {
    totalPhotos: () => 42,
  },
  Mutation: {
    postPhoto(parent, args) {
      photos.push(args.input)
      return true
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen()
  .then(({ url }) => console.log(`GraphQL Service running on ${url}`));
