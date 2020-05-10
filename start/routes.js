'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.on('/').render('welcome').as('welcome');
Route.post('/login', 'UserController.login').as('login');
Route.post('/logout', 'UserController.logout').as('logout');
Route.on('/informacion').render('about').as('about');
Route.on('/contacto').render('contact').as('contact');

/*
|--------------------------------------------------------------------------
| Admin
|--------------------------------------------------------------------------
*/
Route.on('/login').render('log-in').as('loginForm').middleware(['guest']);

Route.post('/getPassword','UserController.forgotPassword').as('recoverPassword');
Route.on('/recuperar-contrasena')
  .render('recover-password')
  .as('passwordRecovery')
  .middleware(['guest']);

Route.on('/cambiar-contrasena')
  .render('new-password')
  .as('passwordChange')
  .middleware(['auth']);

Route.on('/escuelas')
  .render('create-schools-form')
  .as('schoolsManagement')
  .middleware(['auth']);

Route.on('/generar-grupos')
  .render('school-automatic-form')
  .as('automaticForm')
  .middleware(['auth']);

Route.on('/generar-grupo')
  .render('school-manual-form')
  .as('manualForm')
  .middleware(['auth']);

//POST
Route.post('/generar-clave', 'GroupController.saveManual').as('generateKey');
Route.post('/generar-claves', 'GroupController.saveAutomatic').as(
  'generateKeys'
);

Route.get('/claves/:id', 'GroupController.showKeys').as('accessKeys');

Route.on('/statistics')
  .render('school-info')
  .as('statistics')
  .middleware(['auth']);

Route.on('/statistics-classroom')
  .render('classroom-info')
  .as('classRoomAnswers')
  .middleware(['auth']);

/*
|--------------------------------------------------------------------------
| Teacher
|--------------------------------------------------------------------------
*/
Route.on('/profesor').render('professor').as('professor');
Route.on('/professor-list').render('professor-list').as('groupAnswersList');
Route.post('/lista-respuestas', 'TeacherController.list').as('teacherAccess');

/*
|--------------------------------------------------------------------------
| Student
|--------------------------------------------------------------------------
*/
Route.on('/estudiante').render('student').as('student');
Route.post('/encuesta', 'QuestionnaireController.access').as(
  'questionnaireAccess'
);

Route.get(
  '/cuestionario/:page',
  'QuestionnaireController.questionnaire'
).as('questionnaire');
Route.post(
  '/terminar',
  'QuestionnaireController.saveAnswers'
).as('finish');
Route.on('/terminado').render('contact').as('done');
