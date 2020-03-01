'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentCalendarSchema extends Schema {
  up() {
    this.create('student_calendars', table => {
      table.increments()
      table.string('matter').notNullable()
      table.string('teacher').notNullable()
      table.string('livingRoom')
      table
        .integer('dayOfWeekId')
        .references('id')
        .inTable('users')
      table.timestamps()
    })
  }

  down() {
    this.drop('student_calendars')
  }
}

module.exports = StudentCalendarSchema
