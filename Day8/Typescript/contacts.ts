import { Person } from "./person";

export class Contacts
{
    public people: Person[]

    constructor()
    {
      this.people = []
    }

    // METODOS

    public printCalendar(): void
    {
        console.log(this.people);
    }




}

// let personas = new Contacts();

// let persona = new Person("Pablo", 32, "Calle Falsa 123")
// let persona2 = new Person("Maria", 30, "Calle Cuesta 25")

// personas.people.push(persona);
// personas.people.push(persona2);

// personas.printCalendar()