'use strict';

const School = use('App/Model/School');

class SchoolController {
  async save({ request, response }) {
    school = new School();
    school.name = request.input('school_name');

    await school.save();

    return response.redirect('/clave');
  }
}

module.exports = SchoolController;
