const query = require("./Query");
const mutation = require("./Mutation");
const types = require("./Types")
const subscription = require("./Subscription")


const resolvers = {
  Query: query,
  Mutation: mutation,
  Subscription: subscription,
  ...types
};









module.exports = resolvers

