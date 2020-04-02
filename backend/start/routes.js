
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

// Routes of  USERS
Route.post('users', 'UserController.store')

// Routes of  SESSION
Route.post('session', 'SessionController.store')


Route.group(() => {
  // Routes of  USERS
  Route.get('users/:id', 'UserController.show')
  Route.get('users', 'UserController.index')
  Route.put('users/:id', 'UserController.update')
  Route.delete('users/:id', 'UserController.destroy')

  // Routes of FOLDERS
  Route.get('folders/:id', 'FolderController.show')
  Route.get('users/:user_id/folders', 'FolderController.index')
  Route.post('folders/:user_id', 'FolderController.store')
  Route.put('folders/:id', 'FolderController.update')
  Route.delete('folders/:id', 'FolderController.destroy')

  // Routes of ARCHIVES
  Route.post('files', 'ArchiveController.store')
  Route.get('files/:id', 'ArchiveController.show')
  Route.get('folders/:folder_id/files', 'ArchiveController.index')
  Route.delete('files/:key', 'ArchiveController.destroy')

}).middleware(['auth'])



