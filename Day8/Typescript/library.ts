import { Book } from "./book"

export class Library
{
    private books: Book[]
    private addres: string
    private manager: string
    
    constructor(addres: string, manager: string, books:Book[])
    {
        this.books = books;
        this.addres = addres
        this.manager = manager
    }

    // SETTERS

    public setAddres(valor: string)
    {
        this.addres = valor;
    }

    public setManager(valor: string)
    {
        this.manager = valor;
    }


    // GETTERS

    public getAddres(): string
    {
        return this.addres;
    }

    public getManager(): string
    {
        return this.manager;
    }

    // METODOS

    public toString():string
    {
        let resultado: string =""

        for(let i=0; i<this.books.length; i++)
        {
                                            
            resultado = resultado + "Book"+ (i+1) + ":\n" + this.books[i].toString() + "\n";

        }

        return resultado
        
    }

    public getNumberOfBooks():number
    {
        return this.books.length 
    }

    public findByAuthor(author:string):Book[]
    {
        let resultado:Book[] = []

        for(let i=0; i<this.books.length; i++)
        {
            
            if(this.books[i].getAuthor() == author )
            {
                resultado.push(this.books[i])           
            }
        }  
        
        return resultado
    }

}

// let libro1:Book = new Book("Drácula", 287, "5897753 BC68796", "Bram Stoker", "Planeta")

// let libro2:Book = new Book("Dioses Menores", 350, "9788497 592246", "Terry Pratchett", "DEBOLS!LLO")

// let libros:Book[] = [libro1, libro2]

// let biblio:Library = new Library("Calle Pergamino", "Eustaquio Habichuelo", libros)

// console.log(biblio.toString())

// console.log(biblio.getNumberOfBooks())

// console.log(biblio.findByAuthor("Bram Stoker"));