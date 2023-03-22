const { GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLID } = require("graphql");
const resolvers = require("./resolvers");
const productType = require("./typedefs/product");


const queryType = new GraphQLObjectType({
   name: 'QueryType',
   description: 'The root of query',
   fields: {
      products: {
         type: new GraphQLList(productType),
         resolve: () => {
            return resolvers.product.findAll();
         }
      },
      product: {
         type: productType,
         args: {
            id: {
               type: new GraphQLNonNull(GraphQLID),
               description: 'ID of Product'
            }
         },
         resolve: (_, args) => {
            return resolvers.product.findById(args.id);
         }
      }
   }
})

module.exports = queryType;