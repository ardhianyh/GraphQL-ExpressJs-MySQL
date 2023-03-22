const knex = require('../../database/knex');

const productQueries = {
   findAll: () => {
      return new Promise((resolve) => {
         knex('products').then(data => resolve(data));
      })
   },
   findById: (id) => {
      return new Promise((resolve) => {
         knex('products').where('id', id).then(data => resolve(data[0]));
      })
   },
   store: (data) => {
      return new Promise((resolve) => {
         knex('products').insert(data).then(data => {
            knex('products').where('id', data[0]).then(row => resolve(row[0]));
         });
      })
   },
   update: (id, data) => {
      return new Promise((resolve) => {
         knex('products').where('id', id).update(data).then(row => {
            knex('products').where('id', row).then(result => resolve(result[0]));
         });
      })
   },
   delete: (id) => {
      return new Promise((resolve) => {
         knex('products').where('id', id).then(data => {
            knex('products').where('id', id).del().then(() => resolve(data[0]));
         });
      })
   }
}


module.exports = {
   productQueries
}