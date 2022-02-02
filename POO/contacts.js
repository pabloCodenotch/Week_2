let myLib = require("./person")

class  Contacts
{
    constructor()
    {
        this.contactos = [];
    }

    printPersons()
    {
        for(let i=0; i< this.contactos.length; i++)
        {
            this.contactos[i].printAll();
        }
    }

}

// let  persona = new Contacts()

// let persona1 = new myLib.Person("Jorge", 180, 80, 28)

// let persona2 = new myLib.Person("Richard", 177, 75, 30)

// let persona3 = new myLib.Person("Laura", 182, 65, 27)

// persona.contactos.push(persona1);

// persona.contactos.push(persona2);

// persona.contactos.push(persona3);

// persona.printPersons()

// Export

module.exports= {Contacts}