import { Person } from "./person";
import { Contacts } from "./contacts";

let personas = new Contacts();

let persona = new Person("Pablo", 32, "Calle Falsa 123")
let persona2 = new Person("Maria", 30, "Calle Cuesta 25")

personas.people.push(persona);
personas.people.push(persona2);

personas.printCalendar()