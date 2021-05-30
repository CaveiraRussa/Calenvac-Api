'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('cellphone', 80).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('name').notNullable()
      table.decimal('age',3,0).notNullable()
      table.string('address').notNullable()
      table.decimal('gender').notNullable()
      table.string('profession').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
