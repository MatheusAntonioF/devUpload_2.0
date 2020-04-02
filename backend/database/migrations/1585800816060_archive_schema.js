'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArchiveSchema extends Schema {
  up () {
    this.table('archives', (table) => {
      // alter table
      table.dropColumn('content-type')

      table.string('content_type')
    })
  }

  down () {
    this.table('archives', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ArchiveSchema
