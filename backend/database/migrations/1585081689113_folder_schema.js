'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FolderSchema extends Schema {
  up () {
    this.create('folder', (table) => {
      table.increments()

      table      
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table
        .string('name')
        .notNullable()
        .unique()
        
      table.timestamps()
    })
  }

  down () {
    this.drop('folder')
  }
}

module.exports = FolderSchema
