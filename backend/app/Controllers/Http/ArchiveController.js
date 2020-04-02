'use strict'

const Drive = use('Drive')

const Archive = use('App/Models/Archive')
const Folder = use('App/Models/Folder')

class ArchiveController {

  async index({ params }) {
    const folder = await Folder.find(params.folder_id)

    const files = await folder.archives().fetch()

    return files
  }


  async show({ params }) {
    const archive = await Archive.find(params.id)

    return archive
  }

  async store({ request, response }) {
    const folder_id = request.input('folder_id')

    await request.multipart
    .file('archive', {}, async file => {
      try {
        const ContentType = file.headers['content-type']
        const ACL = "public-read" // Define o acesso a qualquer usuário
        const Key = `${(Math.random() * 100).toString(32)}-${file.clientName}`

        const url = await Drive.put(Key, file.stream, {
          ContentType,
          ACL,
        })

        await Archive.create({
          folder_id,
          name: file.clientName,
          key: Key,
          url,
          content_type: ContentType,
        })

      }catch(err) {
        response.status(err.status).json({
          error: {
            message: "Não foi possível enviar o arquivo",
            err_message: err.message
          }
        })
      }
    })
    .process()
  }

  async destroy({ params, response }) {
    try {
      const archive = await Archive.findByOrFail('key', params.key)

      await Drive.delete(archive.key)

      await archive.delete()
    }catch(err) {
      return response.status(err.status).json({
        error: {
          message: "Arquivo não existe",
          err_message: err.message
        }
      })
    }
  }

}

module.exports = ArchiveController
