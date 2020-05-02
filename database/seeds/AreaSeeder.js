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

class AreaSeeder {
  async run() {
    const areas = await Database.table('areas');
    console.log(areas);

    const area_1 = await Factory.model('App/Models/Area').create({
      name: 'Uso/abuso de sustancias',
    });
    Database.table('areas').insert(area_1);

    const area_2 = await Factory.model('App/Models/Area').create({
      name: 'Salud mental',
    });
    Database.table('areas').insert(area_2);

    const area_3 = await Factory.model('App/Models/Area').create({
      name: 'Relaciones Familiares',
    });
    Database.table('areas').insert(area_3);

    const area_4 = await Factory.model('App/Models/Area').create({
      name: 'Relaciones con amigos',
    });
    Database.table('areas').insert(area_4);

    const area_5 = await Factory.model('App/Models/Area').create({
      name: 'Nivel educativo',
    });
    Database.table('areas').insert(area_5);

    const area_6 = await Factory.model('App/Models/Area').create({
      name: 'Interés laboral',
    });
    Database.table('areas').insert(area_6);

    const area_7 = await Factory.model('App/Models/Area').create({
      name: 'Conducta agresiva/delictiva',
    });
    Database.table('areas').insert(area_7);
  }
}

module.exports = AreaSeeder;
