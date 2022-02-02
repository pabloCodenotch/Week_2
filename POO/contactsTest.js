let myLib = require("./contacts")

let myLib2 = require("./person")

let  persona = new myLib.Contacts

let persona1 = new myLib2.Person("Jorge", 180, 80, 28)

let persona2 = new myLib2.Person("Richard", 177, 75, 30)

let persona3 = new myLib2.Person("Laura", 182, 65, 27)

persona.contactos.push(persona1);

persona.contactos.push(persona2);

persona.contactos.push(persona3);

persona.printPersons()

