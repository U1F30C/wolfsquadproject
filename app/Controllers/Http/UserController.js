'use strict';

const Database = use('Database');
const Mail = use('Mail');

class UserController {
  async login({ auth, request, response }) {
    const { email, password } = request.all();
    try {
      await auth.attempt(email, password);
      response.route('schoolsManagement');
    } catch {
      response.route('login');
    }
  }
  async logout({ auth, request, response }) {
    try {
      await auth.logout();
    } catch {}
    response.route('welcome');
  }

  async forgotPassword ({ request, response }) {
    const emailInput = request.input('inputEmail');

    console.log(emailInput);
    const user = await Database.table('users')
      .where('email', emailInput)
      .first();

    if(user){
      console.log('ok');
      await Mail.send('emailForgotPassword', user, (message) => {
        message
          .to(user.email)
          .from('tlaquepaque.cij@hotmail.com','CIJ')
          .subject('Forgot Password')
      });
      console.log('send');
    }
    else{
      console.log('something not working');
    }
    response.redirect('/login');
  }
}

module.exports = UserController;
