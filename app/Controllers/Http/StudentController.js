'use strict';

const Student = use('App/Models/Student');

class StudentController {
  async delete({ request, response, params }) {
    const id = request.input('id');
    const student = await Student.find(id);

    if (student) {
      await student.delete();
      response.redirect(request.header('referer'));
    } else {
      var error = {
        msg: 'Registo no encontrado',
      };
      response.status(400).send(error);
    }
  }
}

module.exports = StudentController;
