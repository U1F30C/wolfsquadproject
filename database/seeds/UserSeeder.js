"use strict";

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Database = use("Database");

class UserSeeder {
  async run() {
    const usersArray = await Factory.model("App/Models/User").createMany(2);
    usersArray.forEach(user => Database.table("users").insert(user));
    Database.table("users").insert({
      email: "admin1@wsp.com",
      username: "admin1",
      password: "admin1"
    });
  }
}

module.exports = UserSeeder;
