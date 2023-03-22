const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema } = require("graphql");
const mutationType = require('./mutations');
const queryType = require('./queries');

const schema = new GraphQLSchema({
   query: queryType,
   mutation: mutationType,
})

module.exports = graphqlHTTP({
   schema: schema,
   graphiql: true,
})