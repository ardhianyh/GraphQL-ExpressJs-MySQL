module.exports = {
   development: {
      client: 'mysql',
      connection: {
         host: '127.0.0.1',
         port: 3306,
         user: 'root',
         password: 'alhamdulillah',
         database: 'express_graphql_mysql'
      },
      migrations: {
         directory: __dirname + "/app/database/migrations"
      },
      seeds: {
         directory: __dirname + "/app/database/seeds"
      }
   },
   staging: {
      client: 'postgresql',
      connection: {
         database: 'my_db',
         user: 'username',
         password: 'password'
      },
      pool: {
         min: 2,
         max: 10
      },
      migrations: {
         tableName: 'knex_migrations'
      }
   },
   production: {
      client: 'postgresql',
      connection: {
         database: 'my_db',
         user: 'username',
         password: 'password'
      },
      pool: {
         min: 2,
         max: 10
      },
      migrations: {
         tableName: 'knex_migrations'
      }
   }
};