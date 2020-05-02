'use strict';

const Question = use('App/Models/Question');
const Database = use('Database');
const Validator = use('Validator');
const Student = use('App/Models/Student');
const View = use('View');

class QuestionnaireController {
  async questionnaire({ request, response, params }) {
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
    return View.render('questionnaire', { questions: pagination });
  }

  async access({ request, response, params }) {
    const parameters = request.all();

    const rules = {
      student_code: 'required',
      name: 'required',
      gender: 'required',
      age: 'required',
      schedule: 'required',
    };

    const validate = await Validator.validate(parameters, rules);

    const { name, gender, age, schedule, student_code } = parameters;

    if (validate.fails()) {
      var error = {
        msg: 'Datos faltantes',
      };
      response.status(400).send(error);
    } else {
      const group = await Database.table('groups')
        .where('studentsAccessKey', student_code)
        .first();

      if (group) {
        const student = new Student();
        student.name = name;
        student.gender = gender;
        student.age = age;
        student.schedule = schedule;
        student.group_id = group.id;

        student.save();
        response.redirect('/student-questionnaire/1');
      } else {
        var error = {
          msg: 'Clave no encontrada',
        };
        response.status(400).send(error);
      }
    }
  }
}
module.exports = QuestionnaireController;
