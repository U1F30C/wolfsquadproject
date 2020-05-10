'use strict';

/*
|--------------------------------------------------------------------------
| AreasQuestionsSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
var chance = new (require('chance'))();

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Database = use('Database');
class AnswersSeeder {
  async run() {
    let students = await Factory.model('App/Models/Student').createMany(100);

    let answers = [...Array(81)]
      .map((_e, index) => index + 1)
      .reduce(
        (acc, question_id) => [
          ...acc,
          ...students.map((student) => ({
            student_id: student.id,
            answer: chance.bool(),
            question_id,
          })),
        ],
        []
      );
    console.log(answers);
    await Database.table('answers').insert(answers);
  }
}

module.exports = AnswersSeeder;
