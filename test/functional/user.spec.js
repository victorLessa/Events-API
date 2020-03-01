const { test, trait } = use('Test/Suite')('User')
const User = use('App/Models/User')
const ace = require('@adonisjs/ace')
const Suite = use('Test/Suite')('User')

const { before, beforeEach, after, afterEach } = Suite
let user_id
let token
trait('Test/ApiClient')

test('SignUp User', async ({ client }) => {
  const response = await client
    .post('/users')
    .send({
      email: 'victordsgnr@gmail.com',
      username: 'Victor',
      password: '123',
    })
    .end()

  response.assertStatus(200)
}).timeout(6000)

test('SignIn User', async ({ client }) => {
  const response = await client
    .post('/signIn')
    .send({
      email: 'victordsgnr@gmail.com',
      password: '123',
    })
    .end()

  response.assertJSONSubset({
    id: 1,
    username: 'Victor',
    email: 'victordsgnr@gmail.com',
  })
  response.assertStatus(200)
  user_id = response.body.id
  token = response.body.token
}).timeout(6000)

test('Update User', async ({ client }) => {
  const response = await client
    .patch(`/users`)
    .header('Authorization', `Bearer ${token}`)
    .send({ university: 'UERJ' })
    .end()

  response.assertStatus(200)
}).timeout(6000)

test('Details User', async ({ client }) => {
  const response = await client
    .get(`/users/details`)
    .header('Authorization', `Bearer ${token}`)
    .end()

  response.assertJSONSubset({
    university: 'UERJ',
    username: 'Victor',
    email: 'victordsgnr@gmail.com',
  })
  response.assertStatus(200)
}).timeout(6000)

test('Delete User', async ({ client }) => {
  const response = await client
    .delete(`/users`)
    .header('Authorization', `Bearer ${token}`)
    .end()

  response.assertStatus(200)
}).timeout(6000)
