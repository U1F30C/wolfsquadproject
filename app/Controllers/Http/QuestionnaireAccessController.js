'use strict'

const Database = use('Database')

const View = use('View')
const Validator = use('Validator')

class QuestionnaireAccessController {
    async index({request, response,params}){ 
        const student_code = request.all()["student_code"]  

        const rules = {
            student_code : 'required', 
        } 
        
        const validate = await Validator.validate(student_code, rules)
    
        if (validate.fails()) { 
           var error  = {
                msg : "No se ingreso la clave"
            } 
          response.status(400).send(error)
        }
        
        const ok = await Database
                    .table("groups")
                    .where('studentsAccessKey', student_code)
                    .first() 
        
        if (ok){
            response.redirect('/student-questionnaire/1')
        }else{
                var error  = {
                     msg : "No se encontro el registro"
                 } 
               response.status(400).send(error)             
        }
        
    }
 
}

module.exports = QuestionnaireAccessController
