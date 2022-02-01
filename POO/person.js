class Person
{
    constructor (nombre,altura,peso,edad)
    {
        this.altura = altura;
        this.peso = peso;
        this.pelo
        this.nombre = nombre;
        this.nacionalidad = "Apátrida";
        this.edad = edad;
        this.colorPelo
        this.estadoCivil = "Solterx"
        if(this.estadoCivil == "Solterx")
            {this.conyuge = false}
        this.descendencia = false
        if(this.descendencia == false)
            {this.numDescendientes = 0}
        this.hobbies = ["Leer", "Chupar picaportes", "Posesión de fetos", "Solucionar el hambre en el mundo y callárselo."]
    }

    IMC()
    {
        let resultado = (this.peso/this.altura**2)*10000;
        return resultado;
    }

    yearOfBirth(x)
    {
        let anyoActual = 2022;
        let año = anyoActual - x;
        return año;
    }


    printAll()
    {
        for(let propiedad in this )
        {
            let access = propiedad + " - " + this[propiedad];
            console.log(access);
        }
    }

    printHobbies()
    {
        for(let i=0; i< this.hobbies.length; i++)
        {
            console.log(this.hobbies[i]);
        }
    }

}

// MAIN

// let cliente = new Person("Pablo", 158, 51, 31)

// // console.log("Prueba de objeto Person")

// // console.log(cliente)

// console.log("RETO 2-PRUEBA DE IMC")

// console.log(cliente.IMC())

// console.log("RETO 3-PRUEBA DE AÑO DE NACIMIENTO")

// console.log(cliente.yearOfBirth(1990))

// console.log("RETO 4-PRUEBA DE BUCLE FOR...IN")

// cliente.printAll()

// console.log("RETO 5-PRUEBA DE RETO FOR")

// cliente.printHobbies()


// MODULE EXPORT

module.exports= {Person}
