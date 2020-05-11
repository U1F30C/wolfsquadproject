'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Group extends Model {
  static get table() {
    return 'groups';
  }
}

module.exports = Group;
