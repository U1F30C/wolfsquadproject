'use strict';
const School = use('App/Models/School');
const Group = use('App/Models/Group');
const Hash = use('Hash');

class GroupController {
  async saveManual({ request, response }) {
    const school = new School();
    const schoolName = request.input('school_name');
    school.name = schoolName;
    await school.save();
    const schoolId = school.id;

    let grade = request.input('grado');
    let group = request.input('grupo');
    await this.createGroup(grade, group, schoolId, schoolName);

    return response.redirect('/schools');
  }

  async saveAutomatic({ request, response }) {
    const school = new School();
    const schoolName = request.input('school_name');
    school.name = schoolName;
    await school.save();
    const schoolId = school.id;

    let gradesQuantity = parseInt(request.input('grado'));
    let groupsQuantity = request.input('grupo').charCodeAt(0) - 64;

    for (let grade = 1; grade <= gradesQuantity; grade++) {
      for (let group = 1; group <= groupsQuantity; group++) {
        let groupLetter = String.fromCharCode(group + 64);
        await this.createGroup(grade, groupLetter, schoolId, schoolName);
      }
    }
    return response.redirect('/schools');
  }

  async createGroup(grade, groupLetter, schoolId, schoolName) {
    const group = new Group();
    group.school_id = schoolId;

    let studentHashInfo = schoolName + groupLetter + grade + schoolId;
    let teacherHashInfo = groupLetter + schoolName + grade + schoolId;
    let studentsKey = await Hash.make(studentHashInfo);
    let teacherskey = await Hash.make(teacherHashInfo);

    let finStudentKey = studentsKey.length;
    let finTeacherKey = teacherskey.length;

    group.studentsAccessKey = studentsKey.slice(
      finStudentKey - 4,
      finStudentKey
    );
    group.teachersAccessKey = teacherskey.slice(
      finTeacherKey - 4,
      finTeacherKey
    );
    group.name = grade + '-' + groupLetter;

    await group.save();

    group.studentsAccessKey = group.id + group.studentsAccessKey;
    group.teachersAccessKey = group.id + group.teachersAccessKey;

    await group.save();
  }
}

module.exports = GroupController;
