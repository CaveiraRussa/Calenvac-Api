"use strict";

const User = use("App/Models/User");

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use("Hash");

class UserController {
  async create({ request }) {
    const data = request.only([
      "cellphone",
      "password",
      "name",
      "age",
      "address",
      "gender",
      "profession",
    ]);

    const user = await User.create(data);

    return user;
  }

  async verify({ request }) {
    const { cellphone } = request.all();

    const User = use("App/Models/User");

    return await User.findBy("cellphone", cellphone);
  }

  async profile({ request }) {
    const { cellphone } = request.all();

    const user = await User.query().where("cellphone", cellphone).fetch();

    return user;
  }

  async update({ request }) {
    const { cellphone, password } = request.all();

    return await User.query()
      .where("cellphone", cellphone)
      .update({ password: await Hash.make(password) });
  }
}

module.exports = UserController;
