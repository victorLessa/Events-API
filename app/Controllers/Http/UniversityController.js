'use strict'
const University = use('App/Models/University')
class UniversityController {
  async show({ params, response }) {
    const university = await University.query()
      .select('id', 'name')
      .where('name', 'like', `%${params.name}%`)
      .fetch()
    return response.send(university.toJSON())
  }
}

module.exports = UniversityController
