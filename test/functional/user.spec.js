const { test, trait } = use('Test/Suite')('User')
const User = use('App/Models/User')
const ace = require('@adonisjs/ace')
const Suite = use('Test/Suite')('User')

const { before, beforeEach, after, afterEach } = Suite

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
})

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
})
