'use strict';

const Student = use('App/Models/Student');
const Database = use('Database');

class StudentController {
  async delete({ request, response, params }) {
    const id = request.input('id');
    await Database.table('answers').where('student_id', id).delete();
    await Database.table('students').where('id', id).delete();
    response.redirect(request.header('referer'));
  }
}

module.exports = StudentController;
