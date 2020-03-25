'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArchiveSchema extends Schema {
  up () {
    this.create('archives', (table) => {
      table.increments()

      table
        .integer('folder_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('folders')
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
    this.drop('archives')
  }
}

module.exports = ArchiveSchema
