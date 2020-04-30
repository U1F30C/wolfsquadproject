'use strict'

const View = use('View')
class StudentController {
    index({request,response,params}){ }

    async store({request,response,params}){ 
       console.log("store")
       console.log(params)
       console.log(request.all())
        // response.redirect('/student-questionnaire/1') 
    }
}

module.exports = StudentController
