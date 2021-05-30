"use strict"

const User = use("App/Models/User")

class UserController {
  async create ({ request }) {
    const data = request.only(["cellphone", "password","name", "age", "address", "gender", "profession"])

    const user = await User.create(data)

    return user
  }

  async verify ({ request }) {
    const { cellphone } = request.all()

    const user = await User
    .query()
    .where('cellphone', cellphone)

    return user
  }

  async update ({ request }) {
    const { cellphone, password } = request.all()

    const user = await User
    .query()
    .where('cellphone', cellphone)
    .update({ password: password })

    return user
  }
}

module.exports = UserController