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
const cartesian = require('fast-cartesian');

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Database = use('Database');
class AnswersSeeder {
  async run() {
    const schoolNames = [...Array(10)].map((_e, index) => ({
      name: `Escuela #${index + 1}`,
    }));
    const schools = await Factory.model('App/Models/School').createMany(
      schoolNames.length,
      schoolNames
    );
    schools.forEach(async (school) => {
      const [gradesQuantity, groupsQuantity] = [
        chance.integer({ min: 1, max: 9 }),
        chance.integer({ min: 1, max: 6 }),
      ];
      const groups = await Promise.all(
        cartesian([
          [...Array(gradesQuantity)].map((_e, index) => index + 1),
          [...Array(groupsQuantity)].map((_e, index) =>
            String.fromCharCode(index + 1 + 64)
          ),
        ]).map(async (gradeGroupCombination) => {
          let [grade, groupLetter] = gradeGroupCombination;
          return Factory.model('App/Models/Group').create({
            grade,
            groupLetter,
            schoolId: school.id,
            schoolName: school.name,
          });
        })
      );
      groups.forEach(async (group) => {
        let students = await Factory.model('App/Models/Student').createMany(
          chance.integer({ min: 7, max: 30 }),
          {
            group_id: group.id,
          }
        );
        let answers = [...Array(81)]
          .map((_e, index) => index + 1)
          .reduce(
            (acc, question_id) => [
              ...acc,
              ...students.map((student) => ({
                student_id: student.id,
                answer: chance.bool({ likelihood: 65 }),
                question_id,
              })),
            ],
            []
          );
        await Database.table('answers').insert(answers);
      });
    });
  }
}

module.exports = AnswersSeeder;
