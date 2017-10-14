var mongoose = require("mongoose");
var NotOrganic = require("./models/not_organic_do");

function seedDB() {
  NotOrganic.create({name: "Meat"});
}

module.exports = seedDB;
