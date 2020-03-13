'use strict'
const Event = use('App/Models/Event')
const UserEvent = use('App/Models/UserEvent')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with events
 */
class EventController {
  /**
   * Show a list of all events.
   * GET events
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ auth, request, response }) {
    const { id } = await auth.getUser()
    const event = await UserEvent.query()
      .select(
        'title',
        'description',
        'locale',
        'interests.name as interestType',
        'date',
        'hour'
      )
      .where('user_events.user_id', id)
      .innerJoin('events', 'events.user_id', id)
      .innerJoin('interests', 'interests.id', 'user_events.interest_id')
      .innerJoin('universities', 'universities.id', 'events.university_id')
      .fetch()
    return response.send(event.toJSON())
  }

  /**
   * Render a form to be used for creating a new event.
   * GET events/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new event.
   * POST events
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ auth, request, response }) {
    const data = request.all()
    const { id } = await auth.getUser()
    const event = await Event.create({ user_id: id, ...data })
    return response.send(event)
  }

  /**
   * Display a single event.
   * GET events/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ auth, request, response }) {
    const event = await Event.findAll()
    return response.send(event.toJSON())
  }

  /**
   * Update event details.
   * PUT or PATCH events/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const event = await Event.find(params.id)
    event.merge(request.all())
    await event.save()
    return response.send(event.toJSON())
  }

  /**
   * Delete a event with id.
   * DELETE events/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const event = await Event.find(params.id)
    await event.delete()
    return response.json({ message: 'deletado(a) com sucesso!' })
  }

  async interest({ auth, request, response }) {
    const { id } = await auth.getUser()
    const userEvent = await UserEvent.create({ user_id: id, ...request.all() })
    return response.send(userEvent.toJSON())
  }
}

module.exports = EventController
