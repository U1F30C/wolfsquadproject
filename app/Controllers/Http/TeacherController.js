'use strict'
const Database = use('Database')

const View = use('View')
const Validator = use('Validator')

class TeacherController {
    async index({request, response,params}){ 
        const teacher_code = request.all()["teacher_code"]  

        const rules = {
            teacher_code : 'required', 
        } 
        
        const validate = await Validator.validate(teacher_code, rules)
    
        if (validate.fails()) { 
           var error  = {
                msg : "No se ingreso la clave"
            } 
          response.status(400).send(error)
        }
        
        const ok = await Database
                    .table("groups")
                    .where('teachersAccessKey', teacher_code)
                    .first() 
        
        if (ok){
            return View.render('professor-index') 
        }else{
                var error  = {
                     msg : "No se encontro el registro"
                 } 
               response.status(400).send(error)             
        }
        
    }
}

module.exports = TeacherController
