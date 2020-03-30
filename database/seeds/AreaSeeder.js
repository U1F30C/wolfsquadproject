'use strict'

/*
|--------------------------------------------------------------------------
| AreaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use("Database");

class AreaSeeder {
  async run () {
    const areas = await Database.table('areas')
    console.log(areas)
  }
}

module.exports = AreaSeeder
