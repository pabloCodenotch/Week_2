import { Book } from "./book";
import { Library } from "./library";

let libro1:Book = new Book("Drácula", 287, "5897753 BC68796", "Bram Stoker", "Planeta")

let libro2:Book = new Book("Dioses Menores", 350, "9788497 592246", "Terry Pratchett", "DEBOLS!LLO")

let libro3:Book = new Book("Ladrón del Tiempo", 373, "9788497 592246", "Terry Pratchett", "DEBOLS!LLO")

let libros:Book[] = [libro1, libro2, libro3]

let biblio:Library = new Library("Calle Pergamino", "Eustaquio Habichuelo", libros)

console.log(biblio.toString())

console.log(biblio.getNumberOfBooks())

console.log(biblio.findByAuthor("Terry Pratchett"));