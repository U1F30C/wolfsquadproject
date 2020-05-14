'use strict';
const Database = use('Database');
const Validator = use('Validator');

class TeacherController {
  async index({ request, response, auth, session }) {
    const teachersAccessKey = request.input('teacher_code');

    const rules = {
      teachersAccessKey: 'required|code',
    };

    const messages = {
      'teachersAccessKey.required':
        '¡Error! Por favor llena toda la información para continuar.',
      'teachersAccessKey.code':
        '¡Error! El código que ingresaste no es válido.',
    };

    const validate = await Validator.validate(
      teachersAccessKey,
      rules,
      messages
    );

    if (validate.fails()) {
      session.flash({
        type: 'warning',
        message: validate.messages()[0].message,
      });
      response.route('professor', {});
      return;
    }

    const group = await this.getGroup(teachersAccessKey);

    if (group) {
      response.route('TeacherController.show', {
        code: teachersAccessKey,
      });
    } else {
      session.flash({
        type: 'error',
        message: '¡Error! No encontramos la clave, confirma tu información.',
      });
      response.route('professor', {});
    }
  }

  async getGroup(code) {
    const id = code.slice(0, -4);
    const teachersAccessKey = code.slice(-4);

    const group = await Database.table('groups')
      .where({
        teachersAccessKey,
        id: id,
      })
      .first();
    return group;
  }

  async show({ request, response, params, view, session }) {
    const id = params.code.slice(0, -4);
    const teachersAccessKey = params.code;

    const students = await Database.table('students').where('group_id', id);
    const group = await this.getGroup(teachersAccessKey);

    if (students && group) {
      return view.render('professor-index', { students });
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
