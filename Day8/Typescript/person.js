"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, adress) {
        this.name = name;
        this.age = age;
        this.adress = adress;
    }
    // METODOS PUBLICOS
    Person.prototype.printName = function () {
        console.log(this.name);
    };
    Person.prototype.yearOfBirth = function (currentYear) {
        var resultado = currentYear - this.age;
        return resultado;
    };
    Person.prototype.setAdress = function (Calle) {
        this.adress = Calle;
    };
    Person.prototype.getAdress = function () {
        return this.adress;
    };
    return Person;
}());
exports.Person = Person;
// let Pablo = new Person("Pablo", 32, "Calle Falsa")
// Pablo.printName()
// console.log(Pablo.yearOfBirth(2022))
// Pablo.setAdress("Calle Falsa 123")
// console.log(Pablo.getAdress())
