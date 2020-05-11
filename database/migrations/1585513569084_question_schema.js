'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class QuestionSchema extends Schema {
  up() {
    this.create('questions', (table) => {
      table.increments();
      table.string('description', 300).notNullable();
      table.timestamps(true, true);
    });
  }

  down() {
    this.hasTable('areas_questions').then((exists) => {
      if (exists) {
        this.alter('areas_questions', function (table) {
          table.dropColumn('question_id');
        });
      }
    });
    this.drop('questions');
  }
}

module.exports = QuestionSchema;
