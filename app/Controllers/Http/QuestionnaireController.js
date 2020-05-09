'use strict';

const Question = use('App/Models/Question');
const Database = use('Database');
const Validator = use('Validator');
const Student = use('App/Models/Student');


class QuestionnaireController {
  async questionnaire({ request, response, params, view ,session}) {
    const page = params.page || 1;
    const questions = await Question.query().paginate(page, 10);
    const pagination = questions.toJSON();
    pagination.offset = (pagination.page - 1) * pagination.perPage;
    pagination.pages = Array(pagination.lastPage)
      .fill(null)
      .map((x, i) => i + 1);
    const data = {
      questions,
    };
    return view.render('questionnaire', { questions: pagination });
  }

  async access({ request, response, params, view ,session}) {
    const parameters = request.all();

    const rules = {
      student_code: 'required',
      name: 'required',
      gender: 'required',
      age: 'required',
      schedule: 'required',
    };

    const validate = await Validator.validate(parameters, rules);

    const { name, gender, age, schedule, student_code } = parameters;

    if (validate.fails()) {
      //Datos faltantes
      response.redirect('/student-warning')
    } else {
      const group = await Database.table('groups')
        .where('studentsAccessKey', student_code)
        .first();

      if (group) {
        const student = new Student();
        student.name = name;
        student.gender = gender;
        student.age = age;
        student.schedule = schedule;
        student.group_id = group.id;

        await student.save();
        //We storage the Id of the student in our current session
        const StudentId = student.id;
        session.put('StudentId',StudentId);
        response.redirect('/student-questionnaire/1');
      } else {
        //Clave no encontrada
        response.redirect('/student-error')
      }
    }
  }

  async SaveAnswers({ request, response, params, view ,session}) {
    const page = parseInt(request.input('page'));
    const answers = Object.entries(Object.values(request.only(['chBoxNo_']))[0]);
    session.put(page,answers);

    if(page==9){
      //End of the questionnaire
      let IdStudent = session.pull('StudentId');
      const Answer = use('App/Models/AnswerStudent');
      for (let pageIndex=1; pageIndex<10;pageIndex++){
          const pageAnswers = session.pull(pageIndex);
          const answersData=[];
          pageAnswers.forEach(element => {
              Answer.create({
                question_id: element[0],
                student_id: IdStudent,
                answer: element[1]
              });
            answersData.push(Answer);
          });
        Database.table('answer_students').insert(answersData);
        response.redirect('/contact-end-questionnaire');
      }
    }
    else{
      let nextPage = page+1;
      response.redirect('/student-questionnaire/'+nextPage);
    }
  }
}
module.exports = QuestionnaireController;
