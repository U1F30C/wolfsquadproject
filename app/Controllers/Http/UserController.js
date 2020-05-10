'use strict';

const Database = use('Database');
const Mail = use('Mail');
const Env = use('Env');

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

  async forgotPassword({ request, response }) {
    const email = request.input('email');
    console.log(email);
    const user = await Database.table('users')
      .where('email', email)
      .first();

    if (user) {
      await Mail.send('emailForgotPassword', user, (message) => {
        message
          .to(user.email)
          .from(Env.get('MAIL_USERNAME'), 'CIJ')
          .subject('Recuperar contraseña');
      });
      response.route('login');
      return;
    } else {
      response.route('passwordRecovery');
      return;
    }
  }
}

module.exports = UserController;
