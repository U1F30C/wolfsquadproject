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
    let areas = areaNames.map((area) => ({
      name: area,
    }));
    await Database.table('areas').insert(areas);

    let questions = Object.values(questionStrings).map((question) => ({
      description: question,
    }));
    await Database.table('questions').insert(questions);

    let areaQuestions = Object.values(areaQuestionRelationships);
    await Database.table('areas_questions').insert(areaQuestions);
  }
}

module.exports = AreasQuestionsSeeder;
