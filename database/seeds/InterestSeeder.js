'use strict'
const Interest = use('App/Models/Interest')
/*
|--------------------------------------------------------------------------
| InterestSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class InterestSeeder {
  async run() {
    await Interest.createMany([
      { name: 'Interessado' },
      { name: 'Confirmado' },
      { name: 'Não sei' },
      { name: 'Não vou' },
    ])
  }
}

module.exports = InterestSeeder
