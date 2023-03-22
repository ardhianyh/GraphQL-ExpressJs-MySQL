const { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLInt, GraphQLNonNull, GraphQLID } = require("graphql");
const resolvers = require("./resolvers");
const productType = require("./typedefs/product");

const mutationType = new GraphQLObjectType({
   name: 'MutationType',
   description: 'The root of mutation',
   fields: {
      storeProduct: {
         type: productType,
         args: {
            title: {
               type: GraphQLString,
               description: 'The Title of Product mutation'
            },
            price: {
               type: GraphQLFloat,
               description: 'The Price of Product mutation'
            },
            quantity: {
               type: GraphQLInt,
               description: 'The Quantity of Product mutation',
            },
            category: {
               type: GraphQLString,
               description: 'The Category of Product mutation'
            },
            description: {
               type: GraphQLString,
               description: 'The Description of Product mutation'
            },
            image: {
               type: GraphQLString,
               description: 'The Image of Product mutation'
            }
         },
         resolve: (_, args) => {
            return resolvers.product.store(args);
         }
      },
      updateProduct: {
         type: productType,
         args: {
            id: {
               type: new GraphQLNonNull(GraphQLID),
               description: 'The ID of Product mutation'
            },
            title: {
               type: GraphQLString,
               description: 'The Title of Product mutation'
            },
            price: {
               type: GraphQLFloat,
               description: 'The Price of Product mutation'
            },
            quantity: {
               type: GraphQLInt,
               description: 'The Quantity of Product mutation',
            },
            category: {
               type: GraphQLString,
               description: 'The Category of Product mutation'
            },
            description: {
               type: GraphQLString,
               description: 'The Description of Product mutation'
            },
            image: {
               type: GraphQLString,
               description: 'The Image of Product mutation'
            }
         },
         resolve: (_, args) => {
            return resolvers.product.update(args.id, { title: args.title, price: args.price, quantity: args.quantity, category: args.category, description: args.description, image: args.image, });
         }
      },
      deleteProduct: {
         type: productType,
         args: {
            id: {
               type: new GraphQLNonNull(GraphQLID),
               description: 'The ID of Product mutation'
            }
         },
         resolve: (_, args) => {
            return resolvers.product.delete(args.id)
         }
      }
   }
})

module.exports = mutationType;