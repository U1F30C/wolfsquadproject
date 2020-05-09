'use strict';
const School = use('App/Models/School');
const Group = use('App/Models/Group');
const Database = use('Database');
const bcrypt = require('bcrypt')
const cartesian = require('fast-cartesian');

class GroupController {
  async saveManual({ request, response }) {
    const school = new School();
    const schoolName = request.input('school_name');
    school.school_name = schoolName;
    await school.save();
    const schoolId = school.id;

    let grade = request.input('grado');
    let groupLetter = request.input('grupo');
    let group = await this.createGroup(
      grade,
      groupLetter,
      schoolId,
      schoolName
    );
    await Database.table('groups').insert(group);

    response.route('accessKeys', { id: `${school.id}` });
  }

  async saveAutomatic({ request, response }) {
    const school = new School();
    const schoolName = request.input('school_name');
    school.school_name = schoolName;
    await school.save();
    const schoolId = school.id;

    const gradesQuantity = parseInt(request.input('grado'));
    const groupsQuantity = request.input('grupo').charCodeAt(0) - 64;

    const groups = await Promise.all(
      cartesian([
        [...Array(gradesQuantity)].map((_e, index) => index + 1),
        [...Array(groupsQuantity)].map((_e, index) =>
          String.fromCharCode(index + 1 + 64)
        ),
      ]).map(async (gradeGroupCombination) => {
        let [grade, groupLetter] = gradeGroupCombination;
        return this.createGroup(grade, groupLetter, schoolId, schoolName);
      })
    );
    await Database.table('groups').insert(groups);

    response.route('accessKeys', { id: `${school.id}` });
  }

  async createGroup(grade, groupLetter, schoolId, schoolName) {
    return {
      school_id: schoolId,
      studentsAccessKey: bcrypt
        .hashSync(schoolName + groupLetter + grade + schoolId, 2)
        .slice(-4),
      teachersAccessKey: bcrypt
        .hashSync(groupLetter + schoolName + grade + schoolId, 2)
        .slice(-4),
      name: grade + '-' + groupLetter,
    };
  }

  async showKeys({ view, params }) {
    let school = (await Database.table('schools').where('id', params.id))[0];

    let groups = await Database.table('groups').where('school_id', params.id);
    console.log(school);

    return view.render('codes-table', { groups, school });
  }
}

module.exports = GroupController;
