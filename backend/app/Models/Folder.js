'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Folder extends Model {

  archives () {
    return this.hasMany('App/Models/Archive')
  }

}

module.exports = Folder
