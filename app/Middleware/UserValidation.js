'use strict'
const { validate } = use('Validator')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class UserValidation {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response }, next) {
    // call next to advance the request
    const rules = {
      email: 'required|email|unique:users,email',
      username: 'required|min:3',
      password: 'required|min:3'
    }

    const validation = await validate(request.all(), rules)

    if (validation.fails()) {
      return response.send(validation.messages())
    }
    await next()
  }
}

module.exports = UserValidation
