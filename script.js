const myLibrary = [];

function getBookInfo () {

  var author = document.getElementById("author").value;
  var title = document.getElementById("title").value;
  var pages = document.getElementById("pages").value;
  var read = document.querySelector('input[name="read"]:checked').value;

  console.log(title, author, pages, read);

  const book1 = new Book(title, author, pages, read);

  dialog.close();
}

function Book() {
    // the constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info  = function () {
        return this.title + ' by ' + this.author + ', ' + this.pages 
               + ', ' + this.read;
    };
}

function addBookToLibrary () {
    // do stuff here
}


const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("#close-btn");
const submitButton = document.querySelector("#submit-btn");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// Submit button stores values entered in form
submitButton.addEventListener('click', getBookInfo, false);

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
