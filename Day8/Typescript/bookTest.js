"use strict";
exports.__esModule = true;
var book_1 = require("./book");
// PROBANDO
var libro = new book_1.Book("Drácula", 287, "5897753 BC68796", "Bram Stoker", "Planeta");
var libro2 = new book_1.Book("Dioses Menores", 350, "9788497 592246", "Terry Pratchett", "DEBOLS!LLO");
console.log(libro.toString());
console.log("\n");
console.log(libro2.toString());
