"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(addres, manager, books) {
        this.books = books;
        this.addres = addres;
        this.manager = manager;
    }
    // SETTERS
    Library.prototype.setAddres = function (valor) {
        this.addres = valor;
    };
    Library.prototype.setManager = function (valor) {
        this.manager = valor;
    };
    // GETTERS
    Library.prototype.getAddres = function () {
        return this.addres;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    // METODOS
    Library.prototype.toString = function () {
        var resultado = "";
        for (var i = 0; i < this.books.length; i++) {
            resultado = resultado + "Book" + (i + 1) + ":\n" + this.books[i].toString() + "\n";
        }
        return resultado;
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        var resultado = [];
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].getAuthor() == author) {
                resultado.push(this.books[i]);
            }
        }
        return resultado;
    };
    return Library;
}());
exports.Library = Library;
// let libro1:Book = new Book("Drácula", 287, "5897753 BC68796", "Bram Stoker", "Planeta")
// let libro2:Book = new Book("Dioses Menores", 350, "9788497 592246", "Terry Pratchett", "DEBOLS!LLO")
// let libros:Book[] = [libro1, libro2]
// let biblio:Library = new Library("Calle Pergamino", "Eustaquio Habichuelo", libros)
// console.log(biblio.toString())
// console.log(biblio.getNumberOfBooks())
// console.log(biblio.findByAuthor("Bram Stoker"));
