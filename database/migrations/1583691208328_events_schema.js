'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventsSchema extends Schema {
  up() {
    this.create('events', table => {
      table.increments()
      table.string('title').notNullable()
      table.string('description')
      table.date('date').notNullable()
      table.string('hour').notNullable()
      table.string('locale').notNullable()
      table
        .integer('university_id')
        .references('id')
        .inTable('universities')
      table
        .integer('user_id')
        .references('id')
        .inTable('users')
      table.timestamps()
    })
  }

  down() {
    this.drop('events')
  }
}

module.exports = EventsSchema
