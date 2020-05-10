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

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Database = use('Database');
const {
  areaNames,
  questionStrings,
  areaQuestionRelationships,
} = require('../data');

class AreasQuestionsSeeder {
  async run() {
    let areas = areaNames.map(
      async (area) =>
        await Factory.model('App/Models/Area').create({
          name: area,
        })
    );
    Database.table('areas').insert(areas);

    let questions = Object.values(questionStrings).map(
      async (question) =>
        await Factory.model('App/Models/Question').create({
          description: question,
        })
    );
    Database.table('questions').insert(questions);

    let areaQuestions = Object.values(areaQuestionRelationships).map(
      async (relation) =>
        await Factory.model('App/Models/AreasQuestions').create(relation)
    );
    Database.table('areas_questions').insert(areaQuestions);
  }
}

module.exports = AreasQuestionsSeeder;
