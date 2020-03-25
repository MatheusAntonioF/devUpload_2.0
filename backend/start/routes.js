
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

// USER
Route.post('users', 'UserController.store')

// SESSION
Route.post('session', 'SessionController.store')


Route.group(() => {
  // USER  
  Route.get('users/:id', 'UserController.show')
  Route.get('users', 'UserController.index')
  Route.put('users/:id', 'UserController.update')
  Route.delete('users/:id', 'UserController.destroy')

}).middleware(['auth'])



