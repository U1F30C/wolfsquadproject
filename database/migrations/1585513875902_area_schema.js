'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AreaSchema extends Schema {
  up () {
    this.create('areas', (table) => {
      table.increments()
      table.string('name',80).notNullable()
      table.timestamps()
    });
    this.alter('questions', (table) => {
      table.integer('area_id').unsigned().references('id').inTable('areas')
    });
  }

  down () {
    this.drop('areas')
  }
}

module.exports = AreaSchema
