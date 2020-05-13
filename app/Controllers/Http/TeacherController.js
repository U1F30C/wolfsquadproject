'use strict';
const Database = use('Database');
const Validator = use('Validator');

class TeacherController { 

  async index({ request, response, auth,session }) {
    const teacher_code = request.input('teacher_code');

    const rules = {
      teacher_code: 'required|code',
    };

    const messages = {
      'teacher_code.required':
        '¡Error! Por favor llena toda la información para continuar.',
      'teacher_code.code': '¡Error! El código que ingresaste no es válido.',
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

    const group = await this.codeExist(teacher_code)

    if (group) {
      response.route('TeacherController.show', {
        id: group.id,
        code: teacher_code,
      });
    } else {
      var error = {
        msg: 'Registo no encontrado',
      };
      response.status(400).send(error);
    }
  }

  async codeExist(code){
    const id = code.slice(0, -4)
    const teacherCode = code.slice(-4)

    const group =await Database.table('groups')
      .where({
        teachersAccessKey: teacherCode,
        id: id,
      })
      .first();  
    return group
  }

  async show({ request, response, params, view, session }) {
    const id = params.id;
    const teacher_code = params.code
    
    const students = await Database.table('students').where('group_id', id);
    const group = await this.codeExist(teacher_code)

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
