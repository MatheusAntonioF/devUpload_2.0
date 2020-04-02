'use strict'

const User = use('App/Models/User')

const Folder = use('App/Models/Folder')

class FolderController {

  async index({ params }) {
    const user = await User.find(params.user_id)

    const folders = await user.folders().fetch()

    return folders
  }

  async store({ request, params }) {
    const name = request.input('name')

    const folder = await Folder.create({
      name,
      user_id: params.user_id,
    })

    return folder
  }

  async show({ params }) {
    const folder = await Folder.find(params.id)

    return folder
  }

  async update({ request, params }) {
    const name = request.input('name')

    const folder = await Folder.find(params.id)

    // substitui os dados
    folder.merge({name})

    // salva os valores atualizados no banco
    await folder.save()

    return folder
  }

  async destroy({ params }) {
    const folder = await Folder.find(params.id)

    await folder.delete()
  }

}

module.exports = FolderController
