'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AnswerStudentSchema extends Schema {
  up() {
    this.create('answer_students', (table) => {
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
      table.timestamps();
    });
  }

  down() {
    this.drop('answer_students');
  }
}

module.exports = AnswerStudentSchema;
