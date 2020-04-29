'use strict'

const School = use('App/Models/School')
const Group = use('App/Models/Group')
const Hash = use('Hash')

class GroupController {
    async addManual({ view }){
        return view.render('school-manual-form');
    }

    async addAutomatic({ view }){
        return view.render('school-automatic-form')
    }

    async saveManual({ request, response }){
        const group = new Group()
        const school = new School()

        let name_school = request.input('school_name');

        school.name = name_school

        await school.save();

        group.school_id = school.id;

        let grade = request.input('grado');
        let grupo = request.input('grupo');
        let hashStudent = name_school + grupo + grade + school.id
        let hashTeacher = grupo + name_school + grade + school.id

        let studentsKey = await Hash.make(hashStudent)
        let teacherskey = await Hash.make(hashTeacher)

        let finStudentKey = studentsKey.length
        let finTeacherKey = teacherskey.length
        
        
        group.studentsAccessKey = studentsKey.slice(finStudentKey - 4, finStudentKey)
        group.teachersAccessKey = teacherskey.slice(finTeacherKey - 4, finTeacherKey)
        group.name = grade + "-" + grupo

        await group.save();

        group.studentsAccessKey = gorup.id + group.studentsAccessKey;
        group.teachersAccessKey = group.id + group.teachersAccessKey;

        await group.save();

        return response.redirect('/schools');
    }

    async saveAutomatic({ request, response }){
        const school = new School();

        let name_school = request.input('school_name');
        school.name = name_school;

        await school.save();

        let hashStudent;
        let hashTeacher;
        let studentsKey;
        let teacherskey;
        let finStudentKey;
        let finTeacherKey;

        let grades = request.input('grado');
        let grupos = request.input('grupo');

        let grados = parseInt(grades);
        let groups;
        
        switch(grupos){
            case 'A':
                groups = 1; break;
            case 'B':
                groups = 2; break;
            case 'C':
                groups = 3; break;
            case 'D':
                groups = 4; break;
            case 'E':
                groups = 5; break;
        }

        for(let grade = 1; grade <= grados; grade++){
            for(let grupo = 1; grupo <= groups; grupo++){
                const group = new Group();
                let grupoLetra;
                
                switch(grupo){
                    case 1:
                        grupoLetra = 'A'; break;
                    case 2:
                        grupoLetra = 'B'; break;
                    case 3:
                        grupoLetra = 'C'; break;
                    case 4:
                        grupoLetra = 'D'; break;
                    case 5:
                        grupoLetra = 'E'; break;
                }

                hashStudent = name_school + grupoLetra + grade + school.id
                hashTeacher = grupoLetra + name_school + grade + school.id
                studentsKey = await Hash.make(hashStudent)
                teacherskey = await Hash.make(hashTeacher)

                finStudentKey = studentsKey.length
                finTeacherKey = teacherskey.length

                group.studentsAccessKey = studentsKey.slice(finStudentKey - 4, finStudentKey)
                group.teachersAccessKey = teacherskey.slice(finTeacherKey - 4, finTeacherKey)
                group.name = grade + "-" + grupoLetra
                group.school_id = school.id

                await group.save();

                group.studentsAccessKey = group.id + group.studentsAccessKey;
                group.teachersAccessKey = group.id + group.teachersAccessKey;

                await group.save();
            }
        }
        return response.redirect('/schools')
    }
}

module.exports = GroupController
