'use strict'

class SessionController {
  async create ({ request, auth }) { 
    const { cellphone, password } = request.all()

    const token = await auth.attempt(cellphone, password)

    return token
  }
}

module.exports = SessionController