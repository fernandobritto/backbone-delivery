import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return await knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('email').unique().notNullable()
    table.text('password_hash').notNullable()
    table.text('access_code').unique().notNullable()
    table.text('team').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

export async function down (knex: Knex): Promise<void> {
  return await knex.schema.dropTable('users')
}
