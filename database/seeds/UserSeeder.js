'use strict';

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Database = use('Database');

class UserSeeder {
  async run() {
    const usersArray = await Factory.model('App/Models/User').createMany(2);
    const defaultUserExists = (
      await Database.table('users').where({
        username: 'admin1',
      })
    ).length;
    if (!defaultUserExists) {
      const defaultUser = await Factory.model('App/Models/User').create({
        email: 'admin1@wsp.com',
        username: 'admin1',
        password: 'admin1',
      });
      await Database.table('users').insert(defaultUser);
    }
  }
}

module.exports = UserSeeder;
