'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/users/verify', 'UserController.verify')
Route.post('/users/change', 'UserController.create')

Route.post('/sessions', 'SessionController.create')

Route.resource('properties', 'PropertyController')
  .apiOnly()
  .middleware('auth')