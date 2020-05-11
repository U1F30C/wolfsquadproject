'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AnswerSchema extends Schema {
  up() {
    this.create('answers', (table) => {
      table.increments();
      table
        .integer('question_id')
        .unsigned()
        .references('id')
        .inTable('questions');
      table
        .integer('student_id')
        .unsigned()
        .references('id')
        .inTable('students');
      table.boolean('answer').defaultTo(false);
      table.timestamps(true, true);
    });
  }

  down() {
    this.drop('answers');
  }
}

module.exports = AnswerSchema;
