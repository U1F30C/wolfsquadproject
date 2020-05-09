'use strict';

/*
|--------------------------------------------------------------------------
| AreaQuestionSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Database = use('Database');


const AreaQuestionsValues = {
  1:{area_id: '1', question_id: '2', positiveIsRisk:'1'},
  2:{area_id: '1', question_id: '17', positiveIsRisk:'1'},
  3:{area_id: '1', question_id: '21', positiveIsRisk:'1'},
  4:{area_id: '1', question_id: '25', positiveIsRisk:'1'},
  5:{area_id: '1', question_id: '33', positiveIsRisk:'1'},
  6:{area_id: '1', question_id: '38', positiveIsRisk:'1'},
  7:{area_id: '1', question_id: '41', positiveIsRisk:'1'},
  8:{area_id: '1', question_id: '46', positiveIsRisk:'1'},
  9:{area_id: '1', question_id: '47', positiveIsRisk:'1'},
  10:{area_id: '1', question_id: '48', positiveIsRisk:'1'},
  11:{area_id: '1', question_id: '54', positiveIsRisk:'1'},
  12:{area_id: '1', question_id: '56', positiveIsRisk:'1'},
  13:{area_id: '1', question_id: '57', positiveIsRisk:'1'},
  14:{area_id: '1', question_id: '58', positiveIsRisk:'1'},
  15:{area_id: '1', question_id: '62', positiveIsRisk:'1'},
  16:{area_id: '1', question_id: '65', positiveIsRisk:'1'},
  17:{area_id: '1', question_id: '68', positiveIsRisk:'1'},

  18:{area_id: '2', question_id: '5', positiveIsRisk:'0'},
  19:{area_id: '2', question_id: '6', positiveIsRisk:'1'},
  20:{area_id: '2', question_id: '8', positiveIsRisk:'0'},
  21:{area_id: '2', question_id: '10', positiveIsRisk:'0'},
  22:{area_id: '2', question_id: '15', positiveIsRisk:'0'},
  23:{area_id: '2', question_id: '23', positiveIsRisk:'0'},
  24:{area_id: '2', question_id: '28', positiveIsRisk:'1'},
  25:{area_id: '2', question_id: '40', positiveIsRisk:'0'},
  26:{area_id: '2', question_id: '43', positiveIsRisk:'0'},
  27:{area_id: '2', question_id: '55', positiveIsRisk:'1'},
  28:{area_id: '2', question_id: '60', positiveIsRisk:'0'},
  29:{area_id: '2', question_id: '63', positiveIsRisk:'0'},
  30:{area_id: '2', question_id: '66', positiveIsRisk:'0'},
  31:{area_id: '2', question_id: '75', positiveIsRisk:'1'},
  32:{area_id: '2', question_id: '76', positiveIsRisk:'1'},
  33:{area_id: '2', question_id: '80', positiveIsRisk:'0'},

  34:{area_id: '3', question_id: '4', positiveIsRisk:'0'},
  35:{area_id: '3', question_id: '14', positiveIsRisk:'0'},
  36:{area_id: '3', question_id: '20', positiveIsRisk:'1'},
  37:{area_id: '3', question_id: '22', positiveIsRisk:'0'},
  38:{area_id: '3', question_id: '32', positiveIsRisk:'0'},
  39:{area_id: '3', question_id: '39', positiveIsRisk:'0'},
  40:{area_id: '3', question_id: '45', positiveIsRisk:'1'},
  41:{area_id: '3', question_id: '52', positiveIsRisk:'1'},
  42:{area_id: '3', question_id: '70', positiveIsRisk:'0'},
  43:{area_id: '3', question_id: '71', positiveIsRisk:'0'},

  44:{area_id: '4', question_id: '3', positiveIsRisk:'1'},
  45:{area_id: '4', question_id: '13', positiveIsRisk:'1'},
  46:{area_id: '4', question_id: '19', positiveIsRisk:'1'},
  47:{area_id: '4', question_id: '29', positiveIsRisk:'1'},
  48:{area_id: '4', question_id: '67', positiveIsRisk:'1'},
  49:{area_id: '4', question_id: '73', positiveIsRisk:'1'},
  50:{area_id: '4', question_id: '77', positiveIsRisk:'1'},

  51:{area_id: '5', question_id: '7', positiveIsRisk:'0'},
  52:{area_id: '5', question_id: '8', positiveIsRisk:'0'},
  53:{area_id: '5', question_id: '12', positiveIsRisk:'0'},
  54:{area_id: '5', question_id: '15', positiveIsRisk:'0'},
  55:{area_id: '5', question_id: '18', positiveIsRisk:'0'},
  56:{area_id: '5', question_id: '26', positiveIsRisk:'1'},
  57:{area_id: '5', question_id: '34', positiveIsRisk:'0'},
  58:{area_id: '5', question_id: '40', positiveIsRisk:'0'},
  59:{area_id: '5', question_id: '42', positiveIsRisk:'1'},
  60:{area_id: '5', question_id: '61', positiveIsRisk:'0'},
  61:{area_id: '5', question_id: '66', positiveIsRisk:'1'},
  62:{area_id: '5', question_id: '69', positiveIsRisk:'1'},
  63:{area_id: '5', question_id: '72', positiveIsRisk:'1'},
  64:{area_id: '5', question_id: '74', positiveIsRisk:'0'},
  65:{area_id: '5', question_id: '79', positiveIsRisk:'0'},
  66:{area_id: '5', question_id: '80', positiveIsRisk:'1'},

  67:{area_id: '6', question_id: '16', positiveIsRisk:'1'},
  68:{area_id: '6', question_id: '27', positiveIsRisk:'0'},
  69:{area_id: '6', question_id: '36', positiveIsRisk:'0'},
  70:{area_id: '6', question_id: '44', positiveIsRisk:'1'},
  71:{area_id: '6', question_id: '51', positiveIsRisk:'0'},
  72:{area_id: '6', question_id: '78', positiveIsRisk:'0'},

  73:{area_id: '7', question_id: '1', positiveIsRisk:'0'},
  74:{area_id: '7', question_id: '9', positiveIsRisk:'0'},
  75:{area_id: '7', question_id: '11', positiveIsRisk:'0'},
  76:{area_id: '7', question_id: '24', positiveIsRisk:'1'},
  77:{area_id: '7', question_id: '30', positiveIsRisk:'0'},
  78:{area_id: '7', question_id: '31', positiveIsRisk:'0'},
  79:{area_id: '7', question_id: '35', positiveIsRisk:'0'},
  80:{area_id: '7', question_id: '37', positiveIsRisk:'0'},
  81:{area_id: '7', question_id: '49', positiveIsRisk:'0'},
  82:{area_id: '7', question_id: '50', positiveIsRisk:'1'},
  83:{area_id: '7', question_id: '53', positiveIsRisk:'0'},
  84:{area_id: '7', question_id: '59', positiveIsRisk:'0'},
  85:{area_id: '7', question_id: '64', positiveIsRisk:'0'},
  86:{area_id: '7', question_id: '81', positiveIsRisk:'0'},
};

class AreaQuestionSeeder {
  async run() {
    let areaQuestions = Object.values(AreaQuestionsValues).map(
      async (Relation) =>
        await Factory.model('App/Models/AreasQuestion').create(
          Relation,
        )
    );
    Database.table('areas_questions').insert(areaQuestions);
  }
}

module.exports = AreaQuestionSeeder;
