export class Book
{
    private title: string
    private nPages: number
    private isbn: string
    private author: string
    private editorial: string

    constructor(title: string, nPages: number, isbn: string, author: string, editorial: string)
    {
        this.title = title
        this.nPages = nPages
        this.isbn = isbn
        this.author = author
        this.editorial = editorial
    }

    // SETTERS

    public setTitle(valor: string)
    {
        this.title = valor;
    }

    public setnPages(valor: number)
    {
        this.nPages = valor;
    }

    public setIsbn(valor: string)
    {
        this.isbn = valor;
    }

    public setAuthor(valor: string)
    {
        this.author = valor;
    }

    public setEditorial(valor: string)
    {
        this.editorial = valor;
    }

    //GETTERS

    public getTitle(): string
    {
        return this.title;
    }

    public getnPages(): number
    {
        return this.nPages;
    }

    public getIsbn(): string
    {
        return this.isbn;
    }

    public getAuthor(): string
    {
        return this.author;
    }

    public getEditorial(): string
    {
        return this.editorial;
    }


    // METODOS

    public toString(): string
    {
        return "Title - " + this.title + "\n" + 
        "Number of pages - " + this.nPages + "\n" +
        "ISBN - " + this.isbn + "\n" +
        "Author - " + this.author + "\n" + 
        "Editorial - " +this.editorial;
    }

}

// MAIN

// let libro: Book = new Book("Drácula", 287, "5897753 BC68796", "Bram Stoker", "Planeta")

// console.log(libro.toString())