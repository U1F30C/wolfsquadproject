'use strict';

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
const Factory = use('Factory');
const Database = use('Database');

const areaNames = [
  'Uso/abuso de sustancias',
  'Salud mental',
  'Relaciones Familiares',
  'Relaciones con amigos',
  'Nivel educativo',
  'Interés laboral',
  'Conducta agresiva/delictiva',
];

class AreaSeeder {
  async run() {
    let areas = areaNames.map(
      async (area) =>
        await Factory.model('App/Models/Area').create({
          name: area,
        })
    );
    Database.table('areas').insert(areas);
  }
}

module.exports = AreaSeeder;
