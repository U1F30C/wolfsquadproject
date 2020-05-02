'use strict';
const Database = use('Database');
const View = use('View');
const Validator = use('Validator');

class TeacherController {
  async index({ request, response, params }) {
    const teacher_code = request.input('teacher_code');

    const rules = {
      teacher_code: 'required',
    };

    const validate = await Validator.validate(teacher_code, rules);

    if (validate.fails()) {
      var error = {
        msg: 'Clave requerida',
      };
      response.status(400).send(error);
    }

    const group = await Database.table('groups')
      .where('teachersAccessKey', teacher_code)
      .first();

    if (group) {
      return View.render('professor-index');
    } else {
      var error = {
        msg: 'Registo no encontrado',
      };
      response.status(400).send(error);
    }
  }
}

module.exports = TeacherController;
