"use strict";
exports.__esModule = true;
var book_1 = require("./book");
var library_1 = require("./library");
var libro1 = new book_1.Book("Drácula", 287, "5897753 BC68796", "Bram Stoker", "Planeta");
var libro2 = new book_1.Book("Dioses Menores", 350, "9788497 592246", "Terry Pratchett", "DEBOLS!LLO");
var libro3 = new book_1.Book("Ladrón del Tiempo", 373, "9788497 592246", "Terry Pratchett", "DEBOLS!LLO");
var libros = [libro1, libro2, libro3];
var biblio = new library_1.Library("Calle Pergamino", "Eustaquio Habichuelo", libros);
console.log(biblio.toString());
console.log(biblio.getNumberOfBooks());
console.log(biblio.findByAuthor("Terry Pratchett"));
