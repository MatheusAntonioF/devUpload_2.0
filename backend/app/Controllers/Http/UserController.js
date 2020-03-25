'use strict'

const User = use('App/Models/User')

class UserController {
  async index({ request }){
    const users = await User.all();

    return users
  }
  async store({ request }) {
    const data = request.only(['username', 'email', 'password'])  

    const user = await User.create(data)
    
    return user
  }

  async show({ params }) {
    const user = await User.find(params.id)

    return user
  }

  async update({ request, params }) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.find(params.id)

    // merge substitui os dados
    user.merge(data)

    await user.save()

    return user

  }
  async destroy({ params }) {
    const user = await User.find(params.id)

    await user.delete()
  }
}

module.exports = UserController

/**
 * params -> busca dados da url
 */
