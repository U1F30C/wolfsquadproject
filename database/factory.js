'use strict';

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

const bcrypt = require('bcrypt');
/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

Factory.blueprint('App/Models/User', (faker, i, data) => {
  return {
    email: data.email || faker.email(),
    username: data.username || faker.username(),
    password: data.password || faker.password(),
  };
});

Factory.blueprint('App/Models/Area', (faker, i, data) => {
  return {
    name: data.name || faker.name(),
  };
});

Factory.blueprint('App/Models/Question', (faker, i, data) => {
  return {
    description: data.description || faker.description(),
  };
});

Factory.blueprint('App/Models/AreasQuestions', (faker, i, data) => {
  return {
    area_id: data.area_id,
    question_id: data.question_id,
    positiveIsRisk: data.positiveIsRisk,
  };
});

Factory.blueprint('App/Models/Student', (faker, i, data) => {
  return {
    name: faker.name(),
    age: faker.age({ type: 'teen' }),
    gender: faker.character({ pool: 'FM' }),
    schedule: faker.character({ pool: 'MV' }),
    group_id: data.group_id || null,
  };
});

Factory.blueprint('App/Models/Group', (faker, i, data) => {
  const { grade, groupLetter, schoolId, schoolName } = data;
  return {
    school_id: schoolId,
    studentsAccessKey: bcrypt
      .hashSync(schoolName + groupLetter + grade + schoolId, 2)
      .slice(-4),
    teachersAccessKey: bcrypt
      .hashSync(groupLetter + schoolName + grade + schoolId, 2)
      .slice(-4),
    name: grade + '-' + groupLetter,
  };
});

Factory.blueprint('App/Models/School', (faker, i, data) => {
  return {
    name: data[i].name,
  };
});
