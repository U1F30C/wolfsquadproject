'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AreaSchema extends Schema {
  up() {
    this.create('areas', (table) => {
      table.increments();
      table.string('name', 80).notNullable();
      table.timestamps(true, true);
    });
  }

  down() {
    this.hasTable('areas_questions').then((exists) => {
      if (exists) {
        this.alter('areas_questions', function (table) {
          table.dropColumn('area_id');
        });
      }
    });
    this.drop('areas');
  }
}

module.exports = AreaSchema;
