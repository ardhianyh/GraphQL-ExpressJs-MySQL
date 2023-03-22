const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLFloat, GraphQLInt } = require("graphql");

const productType = new GraphQLObjectType({
   name: 'Product',
   description: 'A Product for this Project',
   fields: {
      id: {
         type: GraphQLID,
         description: 'The id of Product'
      },
      title: {
         type: GraphQLString,
         description: 'The title of Product'
      },
      price: {
         type: GraphQLFloat,
         description: 'The price of Product'
      },
      quantity: {
         type: GraphQLInt,
         description: 'The quantity of Product'
      },
      category: {
         type: GraphQLString,
         description: 'The category of Product'
      },
      description: {
         type: GraphQLString,
         description: 'The description of Product'
      },
      image: {
         type: GraphQLString,
         description: 'The image of Product'
      }
   }
})

module.exports = productType;