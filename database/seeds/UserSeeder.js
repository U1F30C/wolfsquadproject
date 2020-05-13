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
const Env = use('Env');

class UserSeeder {
  async run() {
    const usersArray = await Factory.model('App/Models/User').createMany(2);
    const defaultUserExists = (
      await Database.table('users').where({
        email: Env.get('ADMIN_EMAIL')
      })
    ).length;
    if (!defaultUserExists) {
      const defaultUser = await Factory.model('App/Models/User').create({
        email: Env.get('ADMIN_EMAIL'),
        username: Env.get('ADMIN_NAME'),
        password: Env.get('ADMIN_PASSWORD'),
      });
    }
  }
}

module.exports = UserSeeder;
