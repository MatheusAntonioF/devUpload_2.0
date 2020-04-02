'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArchiveSchema extends Schema {
  up () {
    this.table('archives', (table) => {

      table.string('key')
      table.string('url')
      table.string('content-type')
    })
  }

  down () {
    this.table('archives', (table) => {

      table.dropColumn('key')
      table.dropColumn('url')
      table.dropColumn('content-type')
    })
  }
}

module.exports = ArchiveSchema
