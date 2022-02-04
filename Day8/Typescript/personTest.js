"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var Pablo = new person_1.Person("Pablo", 32, "Calle Falsa");
Pablo.printName();
console.log(Pablo.yearOfBirth(2022));
Pablo.setAdress("Calle Falsa 123");
console.log(Pablo.getAdress());
