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
}

module.exports = Event
