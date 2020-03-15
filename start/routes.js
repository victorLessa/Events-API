'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.resource('users', 'UserController').middleware(
  new Map([
    [['store'], ['userValidation']],
    [['destroy'], ['auth']],
  ])
)
Route.patch('users', 'UserController.update').middleware(['auth'])
Route.post('signIn', 'UserController.signIn').middleware(['signIn'])
Route.get('users/details', 'UserController.show').middleware(['auth'])
Route.delete('users', 'UserController.destroy').middleware(['auth'])
Route.get('university/:name', 'UniversityController.show').middleware(['auth'])

Route.group(() => {
  Route.get('/user', 'EventController.index').middleware(['auth'])
  Route.post('', 'EventController.store').middleware(['auth'])
  Route.post('/interest', 'EventController.interest').middleware(['auth'])
  Route.put('/:id', 'EventController.update').middleware(['auth'])
  Route.get('/:id/delete', 'EventController.destroy').middleware(['auth'])
  Route.get(
    '/getEventByDay/:date',
    'EventController.getEventsByCurrentDay'
  ).middleware(['auth'])
}).prefix('events')
