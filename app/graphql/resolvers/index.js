const { productQueries } = require('./product');

const resolvers = {
   product: { ...productQueries }
}

module.exports = resolvers;