'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class QuestionSchema extends Schema {
  up() {
    this.create('questions', (table) => {
      table.increments();
      table.string('description', 150).notNullable();
      table.boolean('positiveIsRisk').defaultTo(true);
      table.integer('area_id').unsigned().references('id').inTable('areas');
      table.timestamps();
    });
  }

  down() {
    this.drop('questions');
  }
}

module.exports = QuestionSchema;
