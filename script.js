const myLibrary = [];

function Book() {
    // the constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info()  = function () {
        return this.title + ' by ' + this.author + ', ' + this.pages 
               + ', ' + this.read;
    }
}

function addBookToLibrary () {
    // do stuff here
}