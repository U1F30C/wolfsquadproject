'use strict';
const Database = use('Database');
const Validator = use('Validator');

class TeacherController {
  async list({ request, response, params, session, view }) {
    const teacher_code = request.input('teacher_code');

    const rules = {
      teacher_code: 'required|code',
    };

    const messages = {
      'teacher_code.required':
        '¡Error! Por favor llena toda la información para continuar.',
      'teacher_code.code':
        '¡Error! El código que ingresaste no es válido.',
    };

    const validate = await Validator.validate(teacher_code, rules, messages);

    if (validate.fails()) {
      session.flash({
        type: 'warning',
        message: validate.messages()[0].message,
      });
      response.route('professor', {});
      return;
    }

    const group = await Database.table('groups')
      .where({
        teachersAccessKey: teacher_code.slice(-4),
        id: teacher_code.slice(0, -4),
      })
      .first();

    if (group) {
      return view.render('professor-index');
    } else {
      session.flash({
        type: 'error',
        message: '¡Error! No encontramos la clave, confirma tu información.',
      });
      response.route('professor', {});
    }
  }
}

module.exports = TeacherController;
