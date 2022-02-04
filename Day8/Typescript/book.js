"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    // SETTERS
    Book.prototype.setTitle = function (valor) {
        this.title = valor;
    };
    Book.prototype.setnPages = function (valor) {
        this.nPages = valor;
    };
    Book.prototype.setIsbn = function (valor) {
        this.isbn = valor;
    };
    Book.prototype.setAuthor = function (valor) {
        this.author = valor;
    };
    Book.prototype.setEditorial = function (valor) {
        this.editorial = valor;
    };
    //GETTERS
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getnPages = function () {
        return this.nPages;
    };
    Book.prototype.getIsbn = function () {
        return this.isbn;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    // METODOS
    Book.prototype.toString = function () {
        return "Title - " + this.title + "\n" +
            "Number of pages - " + this.nPages + "\n" +
            "ISBN - " + this.isbn + "\n" +
            "Author - " + this.author + "\n" +
            "Editorial - " + this.editorial;
    };
    return Book;
}());
exports.Book = Book;
// MAIN
// let libro: Book = new Book("Drácula", 287, "5897753 BC68796", "Bram Stoker", "Planeta")
// console.log(libro.toString())
