'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.increments();
      table.string('username', 80).notNullable().unique();
      table.string('email', 254).notNullable().unique();
      table.string('password', 60).notNullable();
      table.timestamps(true, true);
    });
  }

  down() {
    this.hasTable('token').then((exists) => {
      if (exists) {
        this.alter('token', function (table) {
          table.dropColumn('user_id');
        });
      }
    });
    this.drop('users');
  }
}

module.exports = UserSchema;
