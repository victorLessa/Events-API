'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Event extends Model {
  users() {
    return this.belongsTo('App/Models/User')
  }
  universities() {
    return this.belongsTo('App/Models/University')
  }
  userEvent() {
    return this.hasOne('App/Models/UserEvent')
  }
  static get dates() {
    return super.dates.concat(['date'])
  }
  static castDates(field, value) {
    if (field === 'date') {
      return value.format('DD-MM-YYYY')
    }
    return super.formatDates(field, value)
  }
}

module.exports = Event
