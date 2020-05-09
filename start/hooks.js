const { hooks } = require('@adonisjs/ignitor');

async function isCode(data, field, message, args, get) {
  const value = get(data, field);
  if (!(/^\d+[A-Za-z\d.\$\/]{4}$/.test(value))) {
    throw message;
  }
}

hooks.before.httpServer(() => {
  const Validator = use('Validator');
  Validator.extend('code', isCode);
});
