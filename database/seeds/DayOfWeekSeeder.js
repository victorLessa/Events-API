'use strict'

/*
|--------------------------------------------------------------------------
| DayOfWeekSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')
class DayOfWeekSeeder {
  async run() {
    await Database.from('day_of_weeks').insert([
      { name: 'Monday' },
      { name: 'Tuesday' },
      { name: 'Wednesday' },
      { name: 'Thursday' },
      { name: 'Friday' },
      { name: 'Saturday' },
      { name: 'Sunday' },
    ])
  }
}

module.exports = DayOfWeekSeeder
