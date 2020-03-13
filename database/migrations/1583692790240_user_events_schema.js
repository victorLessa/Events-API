'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserEventsSchema extends Schema {
  up() {
    this.create('user_events', table => {
      table.increments()
      table
        .integer('user_id')
        .references('id')
        .inTable('users')
      table
        .integer('event_id')
        .references('id')
        .inTable('events')
      table
        .integer('interest_id')
        .references('id')
        .inTable('interests')
      table.timestamps()
    })
  }

  down() {
    this.drop('user_events')
  }
}

module.exports = UserEventsSchema
