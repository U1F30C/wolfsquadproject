'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestionnaireAccessSchema extends Schema {
  up () {
    this.create('questionnaire_accesses', (table) => {
      table.increments()
      table.integer('school_id').unsigned().references('id').inTable('schools')
      table.date('OpenDate').notNullable()
      table.date('CloseDate').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('questionnaire_accesses')
  }
}

module.exports = QuestionnaireAccessSchema
