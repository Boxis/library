// const myLibrary = [];

// function Book() {
//     // the constructor
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.info()  = function () {
//         return this.title + ' by ' + this.author + ', ' + this.pages 
//                + ', ' + this.read;
//     }
// }

// function addBookToLibrary () {
//     // do stuff here
// }


const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
