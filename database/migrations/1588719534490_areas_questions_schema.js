'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AreasQuestionsSchema extends Schema {
  up() {
    this.create('areas_questions', (table) => {
      table.increments();
      table.integer('area_id').unsigned().references('id').inTable('areas');
      table
        .integer('question_id')
        .unsigned()
        .references('id')
        .inTable('questions');
      table.boolean('positiveIsRisk').defaultTo(true);
      table.timestamps(true, true);
    });
  }

  down() {
    this.drop('areas_questions');
  }
}

module.exports = AreasQuestionsSchema;
