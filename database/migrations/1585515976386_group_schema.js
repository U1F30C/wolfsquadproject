'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class GroupSchema extends Schema {
  up() {
    this.create('groups', (table) => {
      table.increments();
      table.integer('school_id').unsigned().references('id').inTable('schools');
      table.string('studentsAccessKey', 20).notNullable().unique();
      table.string('teachersAccessKey', 20).notNullable().unique();
      table.string('name', 5).notNullable();
      table.timestamps(true, true);
    });
  }

  down() {
    this.drop('groups');
  }
}

module.exports = GroupSchema;
