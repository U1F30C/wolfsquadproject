'use strict';

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
}

module.exports = UserController;
