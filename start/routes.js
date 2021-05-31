'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/users/verify', 'UserController.verify')
Route.post('/users/profile', 'UserController.profile')
Route.post('/users/change', 'UserController.update')

Route.post('/sessions', 'SessionController.create')

Route.resource('properties', 'PropertyController')
  .apiOnly()
  .middleware('auth')