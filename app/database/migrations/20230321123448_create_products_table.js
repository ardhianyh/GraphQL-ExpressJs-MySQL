/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
   return knex.schema.createTable('products', function (table) {
      table.increments();
      table.string('title');
      table.float('price').defaultTo(0);
      table.integer('quantity').defaultTo(0);
      table.string('category');
      table.text('description').nullable()
      table.text('image').nullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
   })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
   return knex.schema.dropTable('products');
};
