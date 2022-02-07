// IMPORTANDO PERSON

let myLib = require("./person")


// COMPROBANDO LA CLASE

let cliente = new myLib.Person("Gabriela", 165, 49, 28)

// console.log("Prueba de objeto Person")

// console.log(cliente)


console.log("PRUEBA DE IMC")

console.log(cliente.IMC())

console.log("PRUEBA DE AÑO DE NACIMIENTO")

console.log(cliente.calcularEdad(2022))

console.log("PRUEBA DE BUCLE FOR...IN")

cliente.printAll()

console.log("PRUEBA DE RETO FOR")

cliente.printHobbies()