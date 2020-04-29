'use strict'

const Question = use('App/Models/Question')

const View = use('View')
class QuestionController {
    async index({request, response,params}){  
        const page = params.page || 1; 
        const questions = await Question.query().paginate(page,10);
        const pagination = questions.toJSON()
        pagination.offset = (pagination.page - 1) * pagination.perPage
        pagination.pages = Array(pagination.lastPage).fill(null).map( (x,i) => i + 1 )
        const data = { 
             questions 
        }  
        return View.render('questionnaire',{questions : pagination}) 
    }
}
module.exports = QuestionController
