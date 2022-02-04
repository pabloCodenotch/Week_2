export class Person
{
   public name: string;
   public age: number;
   private adress: string;
   
   constructor(name: string, age: number, adress: string)
   {
        this.name = name;
        this.age = age;
        this.adress = adress;
   }

   // METODOS PUBLICOS

   public printName():void
   {
        console.log(this.name)
   }

   public yearOfBirth(currentYear: number):number
   {
       let resultado = currentYear - this.age;
       return resultado;
   }

   public setAdress(Calle: string):void
   {
        this.adress = Calle ;
   }

   public getAdress():string
   {
       return this.adress;
   }

}

// let Pablo = new Person("Pablo", 32, "Calle Falsa")

// Pablo.printName()

// console.log(Pablo.yearOfBirth(2022))

// Pablo.setAdress("Calle Falsa 123")

// console.log(Pablo.getAdress())

 
