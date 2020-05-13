'use strict';

const Database = use('Database');

class SchoolController {
  async list({ view }) {
    const schools = await Database.table('schools');
    return view.render('create-schools-form', { schools });
  }
}

module.exports = SchoolController;
