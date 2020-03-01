'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DayOfWeekSchema extends Schema {
  up() {
    this.create('day_of_weeks', table => {
      table.increments()
      table.string('name').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('day_of_weeks')
  }
}

module.exports = DayOfWeekSchema
