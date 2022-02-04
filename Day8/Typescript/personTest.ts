import { Person } from "./person";

let Pablo = new Person("Pablo", 32, "Calle Falsa")

Pablo.printName()

console.log(Pablo.yearOfBirth(2022))

Pablo.setAdress("Calle Falsa 123")

console.log(Pablo.getAdress())