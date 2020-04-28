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
        let grade = request.input('grado');
        let grupo = request.input('grupo');
        let hashStudent = name_school + grupo + grade
        let hashTeacher = grupo + name_school + grade
        
        school.name = name_school
        group.studentsAccessKey = await Hash.make(hashStudent, 5)
        group.teachersAccessKey = await Hash.make(hashTeacher, 5)
        group.name = grade + "-" + grupo

        await school.save()

        group.school_id = school.id

        await group.save()

        return response.redirect('/schools')
    }

    async saveAutomatic({ request, response }){
        const school = new School();

        let name_school = request.input('school_name');
        school.name = name_school;

        await school.save();

        let hashStudent;
        let hashTeacher;
        let grades = request.input('grado');
        let grupos = request.input('grupo');

        let grados = parseInt(grades);
        let groups;

        console.log("Grades: ", grades);
        console.log("Grupos: ", grupos);
        console.log("Grados Entero: ", grados);
        
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
        
        console.log("Grupos Numero: ", groups)
        
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

                hashStudent = name_school + grupoLetra + grade
                hashTeacher = grupoLetra + name_school + grade
                group.studentsAccessKey = await Hash.make(hashStudent, 5)
                group.teachersAccessKey = await Hash.make(hashTeacher, 5)
                group.name = grade + "-" + grupoLetra
                group.school_id = school.id

                console.log(group)
                await group.save();
            }
        }
        return response.redirect('/schools')
    }
}

module.exports = GroupController
