'use strict';

const Question = use('App/Models/Question');
const Database = use('Database');
const Validator = use('Validator');
const Student = use('App/Models/Student');
const { areas } = require('./../../../database/data');

class QuestionnaireController {
  async questionnaire({ params, view }) {
    const page = params.page || 1;
    const questions = await Question.query().paginate(page, 10);
    const pagination = questions.toJSON();
    pagination.offset = (pagination.page - 1) * pagination.perPage;
    pagination.pages = Array(pagination.lastPage)
      .fill(null)
      .map((x, i) => i + 1);
    const data = {
      questions,
    };
    return view.render('questionnaire', { questions: pagination });
  }

  async access({ request, response, session }) {
    const parameters = request.all();

    const rules = {
      student_code: 'required|code',
      name: 'required',
      gender: 'required',
      age: 'required',
      schedule: 'required',
    };

    const messages = {
      'student_code.required':
        '¡Error! Por favor llena toda la información para continuar.',
      'student_code.code': '¡Error! El código que ingresaste no es válido.',
    };

    const validate = await Validator.validate(parameters, rules, messages);

    const { name, gender, age, schedule, student_code } = parameters;

    if (validate.fails()) {
      session.flash({
        type: 'warning',
        message: validate.messages()[0].message,
      });
      response.route('student', {});
    } else {
      const group = await Database.table('groups')
        .where({
          studentsAccessKey: student_code.slice(-4),
          id: student_code.slice(0, -4),
        })
        .first();

      if (group) {
        const student = new Student();
        student.name = name;
        student.gender = gender;
        student.age = age;
        student.schedule = schedule;
        student.group_id = group.id;

        await student.save();
        session.put('studentId', student.id);
        response.route('questionnaire', { page: 1 });
      } else {
        session.flash({
          type: 'error',
          message: '¡Error! No encontramos la clave, confirma tu información.',
        });
        response.route('student', {});
      }
    }
  }

  async saveAnswers({ request, response, params, view, session }) {
    const page = parseInt(request.input('page'));
    const answers = Object.entries(
      Object.values(request.only(['chBoxNo_']))[0]
    );
    session.put(page, answers);

    if (page == 9) {
      //End of the questionnaire
      let IdStudent = session.pull('studentId');
      const Answer = use('App/Models/Answer');
      for (let pageIndex = 1; pageIndex < 10; pageIndex++) {
        const pageAnswers = session.pull(pageIndex);
        const answersData = [];
        pageAnswers.forEach((element) => {
          Answer.create({
            question_id: element[0],
            student_id: IdStudent,
            answer: element[1],
          });
          answersData.push(Answer);
        });
        Database.table('answers').insert(answersData);
      }
      session.flash({
        message: '¡Gracias por responder! Estamos a tu servicio ,contáctanos.',
      });
      response.route('done', {});
      return;
    } else {
      let nextPage = page + 1;
      response.route('questionnaire', { page: nextPage });
      return;
    }
  }

  async showResults({ request, response, params, view, session }) {
    let results = await Promise.all(
      [...Array(7)]
        .map((_e, index) => index + 1)
        .map(async (area_id) => ({
          name: areas[area_id - 1].name,
          ...(await this.getRisk({
            area_id,
            questionsQuantity: areas[area_id - 1].questions,
          })),
        }))
    );

    return view.render('school-info', { results });
  }

  async getRisk({
    area_id,
    questionsQuantity,
    school,
    grade,
    groupLetter,
    schedule,
    gender,
  }) {
    let answers = await Database.table('answers')
      .innerJoin(
        Database.table('areas_questions')
          .where({ area_id })
          .select()
          .as('filtered_questions'),
        'filtered_questions.question_id',
        'answers.question_id'
      )
      .select('answer', 'positiveIsRisk', 'student_id');
    const rawRisks = answers.reduce((acc, answer) => {
      return acc + (answer.positiveIsRisk ? +answer.answer : +!answer.answer);
    }, 0);
    let totalAnswers = 0;
    let uniqueUsers = new Set();
    answers.forEach((answer) => {
      uniqueUsers.add(answer.student_id);
    });
    totalAnswers = uniqueUsers.size;
    const risk = (rawRisks * 100) / (totalAnswers * questionsQuantity);

    return { risk, totalAnswers };
  }
}

module.exports = QuestionnaireController;
