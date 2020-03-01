'use strict'
const User = use('App/Models/User')
const Hash = use('Hash')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with users
 */
class UserController {
  /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const user = await User.all()
    response.send(user.toJSON())
  }

  /**
   * Render a form to be used for creating a new user.
   * GET users/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new user.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ auth, request, response }) {
    const userData = request.only(['username', 'email', 'password'])
    const user = await User.create(userData)

    const { token } = await auth.generate(user, true)
    user.token = token
    response.send(user.toJSON())
  }

  /**
   * Display a single user.
   * GET users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ auth, request, response }) {
    const { id } = await auth.getUser()

    const user = await User.query()
      .select('university', 'username', 'email', 'created_at')
      .where('id', id)
      .fetch()

    if (!user) return response.status(404).json({ message: 'User not found' })
    return response.send(user.toJSON()[0])
  }

  /**
   * Render a form to update an existing user.
   * GET users/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update user details.
   * PUT or PATCH users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ auth, request, response }) {
    const data = request.all()
    const { id } = await auth.getUser()
    const user = await User.find(id)

    user.fill(user.toJSON())

    user.merge(data)

    let result = await user.save()

    return response.json(result)
  }

  /**
   * Delete a user with id.
   * DELETE users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ auth, request, response }) {
    const { id } = await auth.getUser()
    const user = await User.find(id)
    if (!user)
      return response.status(404).send({ message: 'Usuário não encontrado' })
    return response.json(await user.delete())
  }

  async signIn({ auth, request, response }) {
    let { email, password } = request.all()
    const user = await User.findBy('email', email)

    if (!user)
      return response.status(404).send({ message: 'Usuário não encontrado' })

    const varify = await Hash.verify(password, user.password)

    if (!varify) return response.status(400).send({ message: 'Senha inválida' })

    const { token } = await auth.generate(user, true)

    user.token = token

    response.send(user.toJSON())
  }
}

module.exports = UserController
