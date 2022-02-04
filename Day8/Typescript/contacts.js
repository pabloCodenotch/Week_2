"use strict";
exports.__esModule = true;
exports.Contacts = void 0;
var Contacts = /** @class */ (function () {
    function Contacts() {
        this.people = [];
    }
    // METODOS
    Contacts.prototype.printCalendar = function () {
        console.log(this.people);
    };
    return Contacts;
}());
exports.Contacts = Contacts;
// let personas = new Contacts();
// let persona = new Person("Pablo", 32, "Calle Falsa 123")
// let persona2 = new Person("Maria", 30, "Calle Cuesta 25")
// personas.people.push(persona);
// personas.people.push(persona2);
// personas.printCalendar()
