'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserEvent extends Model {
  interest() {
    return this.belongsTo('App/Models/Interest')
  }
  users() {
    return this.belongsTo('App/Models/User')
  }
  event() {
    return this.belongsTo('App/Models/Event')
  }
}

module.exports = UserEvent
