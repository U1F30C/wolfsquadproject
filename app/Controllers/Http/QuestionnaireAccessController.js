'use strict'

const Database = use('Database')

const Validator = use('Validator')

const Student = use('App/Models/Student')


class QuestionnaireAccessController {
    async index({request, response,params}){ 
        const parameters = request.all() 

        console.log(parameters)
        const student_code = request.all()["student_code"]  

        const name = request.all()["name"]  
        const gender = request.all()["gender"]  
        const age = request.all()["age"]   
        const schedule = request.all()["schedule"]   

        const rules = {
            student_code : 'required', 
            name : 'required',
            gender : 'required', 
            age : 'required',
            schedule : 'required',
        } 
        
        const validate = await Validator.validate(parameters, rules)
        
        if (validate.fails()) { 
           var error  = {
                msg : "No se ingreso la dato"
            } 
          response.status(400).send(error)
        }else{
        
            const ok = await Database
                        .table("groups")
                        .where('studentsAccessKey', student_code)
                        .first() 
            
            if (ok){
                console.log(ok)
                const student = new Student()
                student.name = name
                student.gender = gender
                student.age = age
                student.schedule = schedule
                student.group_id = ok.id
                
                student.save()

                //response.redirect('/student_store',true) 
                response.redirect('/student-questionnaire/1') 
            }else{
                    var error  = {
                        msg : "No se encontro el dato"
                    } 
                response.status(400).send(error)             
            }
        }
    }
 
}

module.exports = QuestionnaireAccessController
